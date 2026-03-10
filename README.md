# NeuroBlog - Frontend

A modern, responsive blog application built with React and Vite. NeuroBlog allows users to read, create, manage, and comment on blog posts with an intuitive admin dashboard.

## 🌟 Features

- **Blog Display**: Browse and read blog posts with rich formatting
- **Admin Dashboard**: Manage blog posts, view comments, and moderate content
- **Rich Text Editor**: Create and edit blog posts with a powerful rich text editor (Quill)
- **Comments System**: Readers can comment on blog posts
- **Responsive Design**: Fully responsive UI with Tailwind CSS
- **User Authentication**: Secure login for admin access
- **Newsletter**: Subscribe to newsletter updates
- **Fast Development**: Hot Module Replacement (HMR) with Vite
- **Code Quality**: ESLint configuration for code consistency

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **State Management & Routing**: React Router DOM
- **Rich Text Editing**: Quill
- **Date Handling**: Moment.js
- **Animation**: Motion
- **Linting**: ESLint

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or higher)
- npm or yarn package manager
- Git

## 🚀 Getting Started

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Yasindu-Navo/NeuroBlog-FE.git
cd NeuroBlog-FE
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Building for Production

Build the application for production:

```bash
npm run build
```

The optimized build files will be generated in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Code Quality

Run ESLint to check code quality:

```bash
npm run lint
```

## 📁 Project Structure

```
NeuroBlog-FE/
├── src/
│   ├── components/
│   │   ├── admin/              # Admin-specific components
│   │   │   ├── BlogTableItem.jsx
│   │   │   ├── CommentTableItem.jsx
│   │   │   ├── Login.jsx
│   │   │   └── SideBar.jsx
│   │   ├── BlogCard.jsx        # Blog post card component
│   │   ├── BlogList.jsx        # Blog listing component
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Loading.jsx
│   │   ├── NavBar.jsx
│   │   └── NewsLetter.jsx
│   ├── pages/
│   │   ├── admin/              # Admin dashboard pages
│   │   │   ├── AddBlog.jsx
│   │   │   ├── Comments.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Layout.jsx
│   │   │   └── ListBlog.jsx
│   │   ├── BlogPage.jsx        # Individual blog post page
│   │   └── HomePage.jsx
│   ├── assets/                 # Static assets and utilities
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/                     # Static files
├── vite.config.js             # Vite configuration
├── eslint.config.js           # ESLint configuration
├── package.json
├── index.html
└── README.md
```

## 🔗 Backend Repository

This frontend application works in conjunction with a Node.js/Express backend.

📌 **Backend Repository**: [NeuroBlog-BE](https://github.com/Yasindu-Navo/NeuroBlog-BE.git)

To set up the backend, clone and follow the instructions in the backend repository linked above.

## 🔐 Environment Configuration

Create a `.env` file in the root directory to configure the backend API URL (if needed):

```env
VITE_API_URL=http://localhost:5000
```

Adjust the port based on your backend configuration.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please ensure your code follows the ESLint configuration and maintains code quality.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Yasindu Navo**

- GitHub: [@Yasindu-Navo](https://github.com/Yasindu-Navo)

## 📞 Support

If you encounter any issues or have questions, please open an issue on the GitHub repository.

---

**Happy Blogging! 🚀**
