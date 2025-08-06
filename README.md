# Apris Portfolio Website

A modern, responsive portfolio website built with Vue.js and Tailwind CSS. Features dark/light mode and retro/clean theme switching.

## Features

- 🎨 **Theme Switching**: Toggle between Clean and Retro themes
- 🌙 **Dark/Light Mode**: Switch between dark and light color schemes
- 📱 **Responsive Design**: Optimized for all device sizes
- ⚡ **Fast Performance**: Built with Vue 3 and Vite
- 🎯 **Three Main Sections**: Home, Blog, and Projects
- 🔍 **Project Filtering**: Filter projects by category
- 📝 **Blog Management**: Display and manage blog posts
- 🎭 **Smooth Animations**: Beautiful transitions and hover effects

## Tech Stack

- **Frontend**: Vue 3 with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Pinia
- **Routing**: Vue Router
- **Icons**: Heroicons
- **Build Tool**: Vite

## Project Structure

```
apris-web/
├── src/
│   ├── components/
│   │   ├── Navigation.vue
│   │   └── ThemeToggle.vue
│   ├── views/
│   │   ├── HomeView.vue
│   │   ├── BlogView.vue
│   │   └── ProjectsView.vue
│   ├── stores/
│   │   └── theme.ts
│   ├── router/
│   │   └── index.ts
│   ├── App.vue
│   ├── main.ts
│   └── style.css
├── public/
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd apris-web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Theme System

The website features a sophisticated theme system with two main themes:

### Clean Theme
- Modern, minimalist design
- Professional color palette
- Inter font family
- Subtle animations

### Retro Theme
- Vintage-inspired design
- Warm, nostalgic colors
- Courier New font family
- Glowing effects and bold styling

### Dark/Light Mode
Each theme supports both dark and light modes, automatically adjusting colors and contrast for optimal readability.

## Customization

### Adding New Projects
Edit the `projects` array in `src/views/ProjectsView.vue`:

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project',
    description: 'Project description',
    image: 'path/to/image.jpg',
    year: '2024',
    category: 'Web Development',
    technologies: ['Vue.js', 'TypeScript'],
    github: 'https://github.com/your-repo',
    live: 'https://your-project.com'
  }
]
```

### Adding New Blog Posts
Edit the `blogPosts` array in `src/views/BlogView.vue`:

```typescript
const blogPosts = [
  {
    id: 1,
    title: 'Your Blog Post',
    excerpt: 'Post excerpt...',
    image: 'path/to/image.jpg',
    date: '2024-01-15',
    readTime: 5,
    tags: ['Vue.js', 'Development']
  }
]
```

### Modifying Themes
Edit the color schemes in `tailwind.config.js`:

```javascript
colors: {
  'clean': {
    // Clean theme colors
  },
  'retro': {
    // Retro theme colors
  }
}
```

## Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment to any static hosting service.

### Recommended Hosting
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

- **Name**: Apriliyanto
- **Email**: your.email@example.com
- **Website**: https://your-portfolio.com 