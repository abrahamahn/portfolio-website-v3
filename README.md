# Abraham Ahn - Portfolio Website

A modern, responsive portfolio website showcasing the work and expertise of Abraham Ahn, a Software Engineer and Music Producer. This single-page application features smooth animations, interactive components, and a clean, professional design.

## 🌟 Live Demo

Visit the live portfolio at: [abrahamahn.com](https://abrahamahn.com)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Deployment](#deployment)
- [Customization](#customization)
- [Performance](#performance)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 🎨 User Interface
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Interactive Cursor**: Custom animated cursor for enhanced user experience
- **Dark Theme**: Modern dark color scheme with carefully chosen typography
- **Section Navigation**: Smooth scrolling between different portfolio sections

### 📱 Sections
- **About**: Personal introduction, education, and professional experience
- **Projects**: Showcase of development projects with live demos and source code
- **Research**: Academic research papers and technical publications
- **Blog**: Technical articles and tutorials published on Medium
- **Contact**: Interactive contact form with EmailJS integration

### 🔧 Technical Features
- **TypeScript**: Full type safety throughout the application
- **Redux State Management**: Centralized state for section navigation
- **Google Analytics**: Integrated tracking for visitor insights
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **Performance Optimized**: Code splitting and lazy loading
- **Mobile-First**: Responsive design with mobile-specific optimizations

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React

### State Management
- **Redux Toolkit** - Predictable state container
- **React Redux** - Official React bindings for Redux

### Additional Libraries
- **React Hook Form** - Performant forms with easy validation
- **React Icons** - Popular icon library
- **React Intersection Observer** - Viewport intersection detection
- **React Responsive** - Media query components for React
- **EmailJS** - Client-side email sending

### Development Tools
- **ESLint** - Code linting and formatting
- **TypeScript Compiler** - Type checking
- **Concurrently** - Run multiple commands simultaneously
- **Vite Preview** - Production build preview

## 📁 Project Structure

```
portfolio-v3/
├── src/
│   ├── client/                 # Frontend application
│   │   ├── components/         # React components
│   │   │   ├── navigation/     # Header, menu, social media
│   │   │   ├── section/        # Main content sections
│   │   │   ├── skeleton/       # Loading components
│   │   │   └── icons/          # Custom icon components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── redux/              # State management
│   │   ├── styles/             # Global styles
│   │   ├── utils/              # Utility functions
│   │   ├── public/             # Static assets
│   │   ├── App.tsx             # Main application component
│   │   ├── main.tsx            # Application entry point
│   │   └── index.html          # HTML template
│   ├── server/                 # Data and configuration
│   │   └── data/               # Portfolio content data
│   └── shared/                 # Shared types and utilities
├── dist/                       # Production build output
├── tools/                      # Build and deployment tools
├── package.json                # Dependencies and scripts
├── vite.config.ts             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 16 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/abrahamahn/portfolio-v3.git
   cd portfolio-v3
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 💻 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run dev:check` - Run dev server with type checking and linting
- `npm run host` - Start dev server accessible on network

### Development Workflow

1. **Type Checking**: The project uses TypeScript for type safety
2. **Linting**: ESLint ensures code quality and consistency
3. **Hot Reload**: Vite provides instant feedback during development
4. **Component Structure**: Components are organized by feature and responsibility

### Code Style

- **TypeScript**: Strict type checking enabled
- **ESLint**: Configured with React and TypeScript rules
- **Functional Components**: Using React hooks instead of class components
- **CSS-in-JS**: Tailwind CSS for styling with utility classes

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Deployment Options

- **Vercel**: Recommended for React applications
- **Netlify**: Great for static site deployment
- **GitHub Pages**: Free hosting for open source projects
- **AWS S3**: Scalable cloud hosting

### Environment Variables

Create a `.env` file for environment-specific configuration:

```env
VITE_GOOGLE_ANALYTICS_ID=your_ga_id
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🎨 Customization

### Personal Information

Update your personal information in `src/server/data/index.tsx`:

- **HeaderData**: Name, title, profile image, and social links
- **AboutData**: Personal description and background
- **EducationData**: Educational background
- **ExperienceData**: Professional experience
- **ProjectData**: Portfolio projects
- **BlogData**: Blog posts and articles
- **ResearchData**: Research papers and publications

### Styling

- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Typography**: Update font families in `src/client/index.html`
- **Animations**: Customize animations in component files using Framer Motion
- **Layout**: Adjust responsive breakpoints and spacing

### Adding New Sections

1. Create a new component in `src/client/components/section/`
2. Add the section to the sections array in `App.tsx`
3. Update the navigation menu in `src/client/components/navigation/Menu.tsx`
4. Add corresponding data types in `src/shared/types/`

## ⚡ Performance

### Optimization Features

- **Code Splitting**: Automatic code splitting with Vite
- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Optimized images and proper formats
- **Bundle Analysis**: Use `npm run build` to analyze bundle size
- **Caching**: Proper cache headers for static assets

### Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Standards

- Follow TypeScript best practices
- Maintain consistent code formatting
- Write meaningful commit messages
- Add comments for complex logic
- Ensure responsive design compatibility

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Abraham Ahn**
- Website: [abrahamahn.com](https://abrahamahn.com)
- LinkedIn: [linkedin.com/in/abrahamahn](https://linkedin.com/in/abrahamahn)
- GitHub: [github.com/abrahamahn](https://github.com/abrahamahn)
- Email: [contact@abrahamahn.com](mailto:contact@abrahamahn.com)

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Vite Team** for the lightning-fast build tool
- **Tailwind CSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Open Source Community** for the incredible tools and libraries

---

⭐ If you found this project helpful, please consider giving it a star on GitHub!
