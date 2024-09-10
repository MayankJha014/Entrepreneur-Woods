# Blog Application

This project is a feature-rich blog application built using the MERN stack (MongoDB, Express.js, ReactJS, Node.js) along with Redux for state management. The application not only supports creating, editing, and managing blog posts but also fetches and displays content from other websites using RSS feeds.

## Features

### Blog Functionality

- **Create, Read, Update, and Delete (CRUD) Operations:** Users can create new blog posts, read existing posts, update them, and delete them.
- **Admin Panel:** Provides a management interface for admins to approve or reject posts, manage users, and monitor the system.
- **User Roles:** Different roles for admin and regular users with specific permissions.
- **Comment System:** Users can comment on blog posts.
- **Tag and Category Management:** Classify posts into categories and tags for easy filtering and search.

### RSS Feed Integration

- **Fetch Posts from Other Websites:** Automatically fetch and display posts from other websites using their RSS feeds.
- **RSS Feed Parsing:** Regularly parse and update content from external RSS feeds to keep the blog updated with fresh content.
- **Custom Feed Processing:** Filter and process RSS feeds to remove unwanted HTML tags or elements, ensuring clean and consistent content display.

### User Interface

- **Responsive Design:** Optimized for both desktop and mobile devices for a seamless user experience.
- **Search Functionality:** Search for blog posts based on keywords, categories, or tags.
- **Pagination:** Efficiently handle large numbers of posts with pagination support.
- **Rich Text Editor:** Use a rich text editor for creating and editing posts, allowing for formatting and media inclusion.

## Tech Stack

### Frontend

- **ReactJS:** JavaScript library for building user interfaces.
- **Redux:** State management for handling global app states, such as user actions and blog post data.
- **React Router:** For managing navigation and routing in the application.

### Backend

- **Node.js:** JavaScript runtime for building server-side applications.
- **Express.js:** Web framework for creating RESTful APIs and handling server logic.

### Database

- **MongoDB:** NoSQL database for storing user information, blog posts, comments, and more.

### RSS Feed Handling

- **RSS Parser:** Node.js library for parsing and handling RSS feeds to fetch external posts.

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14.x or higher)
- **npm** (Node Package Manager)
- **MongoDB** (running locally or using a cloud service like MongoDB Atlas)

### Installation

1. **Clone the Repository**

   Open your terminal and run:

   ```bash
   git clone https://github.com/MayankJha014/Entrepreneur-Woods.git
   cd blog-app
   ```

2. **Install Dependencies**

   - **Server-Side Dependencies:**

     Navigate to the `server` directory and install the required Node.js packages:

     ```bash
     cd server
     npm install
     ```

   - **Client-Side Dependencies:**

     Navigate to the `client` directory and install the necessary React packages:

     ```bash
     cd client
     npm install
     ```

### Running the Application

1. **Start MongoDB**

   Ensure your MongoDB server is running. If using MongoDB Atlas, ensure the service is configured correctly.

2. **Run the Backend Server**

   Start the Node.js server by navigating to the `server` directory and running:

   ```bash
   cd server
   npm start
   ```

   The backend server will start on `http://localhost:5000`.

3. **Run the Frontend Server**

   Start the React development server by navigating to the `client` directory and running:

   ```bash
   cd client
   npm start
   ```

   The frontend will start on `http://localhost:3000`.

### Usage

- **Access the Blog Application:** Open a web browser and go to `http://localhost:3000`.
- **Create a Post:** Write and publish a new blog post.
- **View RSS Feeds:** Access posts fetched from external websites using the integrated RSS feed.

## Screenshots

Include screenshots of different parts of the application:

1. **Main Blog Feed:** Display posts, including those fetched from RSS feeds.
   ![Screenshot 2024-09-01 141921](https://github.com/user-attachments/assets/1c640b8b-1884-47de-8e47-e2c72dc7b285)
   ![Screenshot 2024-09-01 142146](https://github.com/user-attachments/assets/1a033046-ea76-4ab7-b60f-7ab54817d1a1)
   ![Screenshot 2024-09-01 142222](https://github.com/user-attachments/assets/51a07cf9-d30c-4347-85b0-d896baef4582)
   ![Screenshot 2024-09-01 142258](https://github.com/user-attachments/assets/70f1ee0a-70a4-448f-be14-719645558587)
   ![Screenshot 2024-09-01 142348](https://github.com/user-attachments/assets/c09e28ad-a0dd-489f-bd55-c32e75110935)
   ![Screenshot 2024-09-01 142505](https://github.com/user-attachments/assets/7074d538-2e6d-4120-8f4f-16d85384a988)
   ![Screenshot 2024-09-01 142532](https://github.com/user-attachments/assets/fae04fb8-2c99-4c95-8f66-81c773d6fa29)

2. **Admin Panel:** Demonstrate the capabilities of managing users and posts.
   ![Screenshot 2024-09-01 144329](https://github.com/user-attachments/assets/cd30a1c2-0543-4997-9bdf-affdbdef3677)
   ![Screenshot 2024-09-01 144348](https://github.com/user-attachments/assets/5e2b4207-d90e-4f3a-9650-6cb55199c700)
   ![Screenshot 2024-09-01 144413](https://github.com/user-attachments/assets/23039d3e-e6df-411e-bca7-531ad14c717d)
   ![Screenshot 2024-09-01 144439](https://github.com/user-attachments/assets/b15208a7-9ddc-468b-836c-a1bf818df986)

## License

This project is licensed under the MIT License. You are free to use, modify, and distribute this software as long as the original license is included.

## Acknowledgments

- **[ReactJS](https://reactjs.org/):** A JavaScript library for building user interfaces.
- **[Redux](https://redux.js.org/):** A predictable state container for JavaScript apps.
- **[Express.js](https://expressjs.com/):** Fast, unopinionated, minimalist web framework for Node.js.
- **[MongoDB](https://www.mongodb.com/):** A general-purpose, document-based, distributed database.
- **[RSS Parser](https://www.npmjs.com/package/rss-parser):** A fast RSS feed parser for Node.js.

## Conclusion

This blog application is a robust and scalable solution for creating and managing blog content, both user-generated and sourced from external websites via RSS feeds. It can serve as a solid foundation for personal blogs, content curation platforms, or as a base for more complex projects. Feel free to customize and expand upon the features as needed. Happy coding!
