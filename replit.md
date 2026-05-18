# Overview

This is a personal portfolio website for Keszi Bálint - Vágó, built as a modern React single-page application. The project uses Vite as the build tool and development server, with a focus on performance and modern web development practices. The portfolio is designed to showcase personal work, skills, and professional information in an interactive and visually appealing format.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Framework
The application is built using React 19.1.1 with functional components and modern React patterns. The choice of React provides a component-based architecture that enables reusable UI elements and efficient state management for an interactive portfolio experience.

## Build System and Development Environment
Vite serves as the build tool and development server, chosen for its fast hot module replacement and optimized build performance. The configuration includes React plugin support and is set up to run on host 0.0.0.0:5000 with allowed hosts for deployment flexibility.

## Styling Architecture
The project uses Tailwind CSS 4.1.13 via CDN for utility-first styling, enabling rapid UI development and consistent design patterns. PostCSS and Autoprefixer are configured for CSS processing and browser compatibility. This approach provides flexibility for creating responsive layouts and modern visual effects without writing custom CSS.

## Routing and Navigation
React Router DOM 7.8.2 handles client-side routing, enabling a single-page application experience with multiple portfolio sections or pages. This allows for smooth navigation between different portfolio content areas without full page reloads.

## Animation and Interactions
Framer Motion 12.23.12 is integrated for advanced animations and interactive elements, providing smooth transitions and engaging user interactions that enhance the portfolio's visual appeal and user experience.

## Icon System
Lucide React provides a comprehensive icon library for consistent iconography throughout the portfolio interface, supporting various UI elements and visual indicators.

## Code Quality and Standards
ESLint is configured with React-specific plugins (react-hooks and react-refresh) to enforce code quality, catch common React patterns issues, and maintain consistent coding standards. The configuration supports modern JavaScript (ES2020+) and JSX syntax.

# External Dependencies

## Core Framework Dependencies
- React and React DOM for the user interface framework
- React Router DOM for client-side routing

## Development and Build Tools
- Vite as the primary build tool and development server
- ESLint with React plugins for code quality enforcement
- TypeScript type definitions for React development

## Styling and UI Libraries
- Tailwind CSS loaded via CDN for utility-first styling
- PostCSS and Autoprefixer for CSS processing
- Framer Motion for animations and interactive elements
- Lucide React for iconography

## Browser Compatibility
The application targets modern browsers with ES2020+ support, with PostCSS Autoprefixer ensuring CSS compatibility across different browser versions.