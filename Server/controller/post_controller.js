const { default: axios } = require("axios");
const PostSchema = require("../model/post_model");
const UserSchema = require("../model/user_model");
const Parser = require("rss-parser");
const parser = new Parser();
const natural = require("natural");
const cheerio = require("cheerio");

exports.createPost = async (req, res) => {
  try {
    const { title, content, contentSnippet, thumbnail, categories } = req.body;

    const user = await UserSchema.findById(req.user);

    let post = PostSchema({
      uid: user._id,
      title: title,
      content: content,
      contentSnippet: contentSnippet,
      thumbnail: thumbnail,
      categories: categories,
      view: 0,
      isoDate: Date(),
      src: "EW",
      creator: user.name,
    });

    post = await post.save();

    res.status(200).json({ message: "Post created Successfully", post: post });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.rssFeedPost = async (req, res) => {
  // const data = await parser.parseURL("https://techcrunch.com/feed");
  // const newsApi = await parser.parseURL("https://indianstartupnews.com/rss");
  // console.log(newsApi)
  var newsList = [
    // "https://techcrunch.com/feed",
    "https://inc42.com/feed",
    "https://indianstartupnews.com/rss",
  ];
  const filterData = [];
  for (var k = 0; k < newsList.length; k++) {
    const newsApi = await parser.parseURL(newsList[k]);
    const posts = await PostSchema.find();
    const headline1 = posts.map((x) => x.title);
    const headline2 = newsApi.items.map((x) => x.title);

    if (headline1.length != 0) {
      for (var i = 0; i < headline2.length; i++) {
        for (var j = 0; j < headline1.length; j++) {
          const h1 = headline1[j];
          const h2 = headline2[i];
          if (h1 == h2) {
            break;
          } else {
            if (j == headline1.length - 1) {
              k == 0
                ? filterData.push({ ...newsApi.items[i], src: "INC42" })
                : filterData.push({
                    ...newsApi.items[i],
                    src: "IndianStartupNews",
                  });
            }
          }
        }
      }
    } else {
      for (const item of newsApi.items) {
        const newItem =
          k == 0
            ? { ...item, src: "INC42" }
            : { ...item, src: "IndianStartupNews" };

        filterData.push(newItem);
      }
    }
  }
  const user = await UserSchema.findById(req.user);

  filterData.forEach(async (x) => {
    const description =
      x.src == "INC42"
        ? await x["content:encoded"].replace(/\\(?!n)/g, "")
        : await x.content.replace(/\\(?!n)/g, "");

    const desc = await description.replace(/<a\b[^>]*>(.*?)<\/a>/gi, "");

    const contentSnippet =
      x.src == "INC42"
        ? await x["content:encodedSnippet"].replace(/\\(?!n)/g, "")
        : await x.contentSnippet.replace(/\\(?!n)/g, "");

    const $ = cheerio.load(description);
    const thumbnail = $("img:first").attr("src");

    if (thumbnail) {
      // Check if an image tag was found
      let post = PostSchema({
        uid: user._id,
        title: x.title,
        content: desc,
        contentSnippet: contentSnippet,
        thumbnail: thumbnail,
        categories: x.categories,
        view: 0,
        isoDate: x.isoDate,
        creator: user.name,
      });
      post = await post.save();
    } else {
      console.log("No image found for:", x.title);
    }
  });

  const msg =
    filterData.length == 0
      ? "No new Post is there today"
      : `${filterData.length} Posts added successfully`;

  res.status(200).json({
    length: filterData.length,
    message: msg,
    filterData,
  });
};

exports.updatePost = async (req, res) => {
  try {
    const postId = req.params.postId;
    // Assuming postId is a parameter in the route
    const { title, description, thumbnail, categories } = req.body;

    console.log(title);
    let post = await PostSchema.findById(postId);
    // console.log(post);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    post.title = title;
    post.description = description;
    post.thumbnail = thumbnail;
    post.categories = categories;

    post = await post.save();

    res.status(200).json({ message: "Post updated Successfully", post: post });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// exports.getCreatorPost = async (req, res) => {
//   try {
//     const post = await PostSchema.find({ uid: req.user });
//     res.status(200).json(post);
//   } catch (e) {
//     res.status(500).json({ error: e.message });
//   }
// };

exports.getCreatorPost = async (req, res) => {
  try {
    const { page = 1 } = req.query;
    const limit = 10;
    // Default to page 1 and 10 posts per page
    const posts = await PostSchema.find({ uid: req.user })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const totalPosts = await PostSchema.countDocuments({ uid: req.user });

    res.status(200).json({
      totalPosts,
      currentPage: page,
      totalPages: Math.ceil(totalPosts / limit),
      posts,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.searchPost = async (req, res) => {
  try {
    const { searchTerm } = req.query;

    const posts = await PostSchema.find({
      $or: [
        { title: new RegExp(searchTerm, "i") }, // Case-insensitive search in title
        { content: new RegExp(searchTerm, "i") }, // Case-insensitive search in content
        { categories: new RegExp(searchTerm, "i") }, // Case-insensitive search in categories
      ],
    }).exec();
    res.status(200).json(posts);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getMostViewPost = async (req, res) => {
  try {
    console.log("called");
    const post = await PostSchema.find().sort({ view: -1 }).limit(10);
    res.status(200).json(post);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getCreatorPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await PostSchema.findById(id);
    post.view = parseInt(post.view) + 1;
    await post.save();
    res.status(200).json(post);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getPostByCategories = async (req, res) => {
  try {
    const { category, numPost } = req.query;
    const post = await PostSchema.find({ categories: category })
      .sort({
        createdAt: -1,
      })
      .limit(numPost);
    res.status(200).json(post);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
exports.getMostViewPostByCategories = async (req, res) => {
  try {
    const { category, numPost } = req.query;
    const post = await PostSchema.find({ categories: category })
      .sort({
        view: -1,
      })
      .limit(numPost);
    res.status(200).json(post);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getAllUniqueCategories = async (req, res) => {
  try {
    const uniqueCategories = await PostSchema.distinct("categories");
    res.json(uniqueCategories);
  } catch (error) {
    res.status(500).json({ error: e.message });
  }
};

exports.rssPost = async (req, res) => {
  const newsApi = await parser.parseURL(
    "https://www.businesstoday.in/rssfeeds"
  );
  res.json(newsApi);
};
