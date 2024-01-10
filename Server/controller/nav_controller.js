const NavSchema = require("../model/navbar_model");

exports.addNavLogo = async (req, res) => {
  try {
    const { navLogo } = req.body;

    let navbar = NavSchema({
      navLogo: navLogo,
    });

    navbar = await navbar.save();

    res
      .status(200)
      .json({ message: "Logo Added Successfully", navbar: navbar });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.createNavComp = async (req, res) => {
  try {
    const { title, header, link, category } = req.body;
    let nav = await NavSchema.findById("64ef8a11812e575d11a12f1a");

    const navData = {
      title: title,
      header: header,
      link: link,
      category: category,
    };
    nav.navabar.push(navData);
    await nav.save();
    res.status(200).json(nav);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.deleteNavComp = async (req, res) => {
  try {
    const { id } = req.body;
    let nav = await NavSchema.findById("64ef8a11812e575d11a12f1a");

    const itemIndex = nav.navabar.findIndex(
      (item) => item._id.toString() === id
    );

    nav.navabar.splice(itemIndex, 1);
    await nav.save();
    res.status(200).json({ message: "Nav item deleted successfully" });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateNavbar = async (req, res) => {
  try {
    const { navLogo } = req.body;
    let navbar = await NavSchema.findById("64ef8a11812e575d11a12f1a");

    navbar.navLogo = navLogo;
    navbar = await navbar.save();
    res.status(200).json(navbar);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.addAdsLogo = async (req, res) => {
  try {
    const { adsLogo } = req.body;

    let navbar = NavSchema({
      adsLogo: adsLogo,
    });

    navbar = await navbar.save();

    res.status(200).json({ message: "Ads Added Successfully", navbar: navbar });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.updateAdsLogo = async (req, res) => {
  try {
    const { adsLogo } = req.body;
    let navbar = await NavSchema.findById("64ef8a11812e575d11a12f1a");

    navbar.adsLogo = adsLogo;
    navbar = await navbar.save();
    res.status(200).json(navbar);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

exports.getNavbar = async (req, res) => {
  try {
    let navbar = await NavSchema.findById("64ef8a11812e575d11a12f1a");

    res.status(200).json(navbar);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
