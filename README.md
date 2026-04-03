(Post Management System – React CRUD Application)

Title: Post Management System (React CRUD Application)
Developed by: Haneesh Goud

Overview
This project is a Post Management System built using React. It supports creating, reading, updating, and deleting posts. All posts are stored using localStorage, so the application runs without a backend. The design follows the guidelines provided by Internsforge and includes routing, validations, localStorage persistence and a simple, clean UI.

Features

1. Create new posts with title, author, content, and tags.
2. View full details of any post.
3. Edit posts with pre-filled values.
4. Delete posts with a confirmation prompt.
5. Posts stored in localStorage with created and updated timestamps.
6. Navigation between pages using React Router.
7. Responsive layout and neatly designed post cards.
8. Basic form validation for required fields.

Tech Stack
React (Vite)
React Router
JavaScript
CSS
localStorage for data storage

Project Structure
src
components
Header.jsx
Layout.jsx
PostCard.jsx
pages
PostList.jsx
PostCreate.jsx
PostView.jsx
PostEdit.jsx
hooks
utils
App.jsx
main.jsx
routes.jsx
index.css

How to Run the Project

1. Install dependencies using the command: npm install
2. Start the development server using: npm run dev
3. Open the browser using the local URL shown in the terminal.

Data Storage Format
Each post is stored in localStorage in the following structure:
id
title
author
content
tags
createdAt
updatedAt

Screenshot Files
The following screenshots should be placed inside the screenshots folder:
home-page.png
create-post-page.png
create-post-filled.png
post-created-success.png
view-post-page.png
edit-post-page.png
post-updated.png
delete-confirmation.png

Notes
This project works entirely on the client side without a backend.
It has been developed according to Internsforge requirements and includes all core CRUD features, routing and a clean UI structure.

