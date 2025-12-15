# StreakRace Website

A high-performance Formula-1 racing website built with React that delivers a cinematic, aggressive, and premium motorsport experience.

## Features

- **Immersive Loading Experience**: Racing-themed loading sequence with Formula-1 car animation
- **Responsive Navigation**: Scroll-adaptive navigation with racing aesthetics
- **Cinematic Hero Section**: Full-viewport hero with high-resolution F1 imagery
- **Interactive Driver Cards**: Hover-reveal statistics with smooth animations
- **Dynamic Race Highlights**: Motion-based reveals with parallax effects
- **Technical Car Showcase**: Close-up car imagery with technical aesthetics
- **Partners Section**: Horizontal scrolling partner logos with hover effects
- **Performance Optimized**: Lazy loading, smooth animations, and accessibility compliance

## Tech Stack

- **React 19+**: Modern React with functional components and hooks
- **Framer Motion**: Smooth animations and scroll-triggered effects
- **React Router**: Single-page application navigation
- **CSS Modules**: Component-scoped styling
- **Fast-check**: Property-based testing
- **Jest & React Testing Library**: Unit and integration testing

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── LoadingScreen/
│   ├── Navigation/
│   ├── HeroSection/
│   ├── DriverCard/
│   ├── RaceHighlights/
│   ├── TechnologySection/
│   └── PartnersSection/
├── pages/              # Route-based page components
├── styles/             # Global styles and theme
├── assets/             # Images, videos, and icons
├── utils/              # Utility functions and constants
├── hooks/              # Custom React hooks
├── context/            # React context providers
└── tests/              # Test utilities and configurations
```

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run test:run`
Runs tests once without watch mode

### `npm run test:coverage`
Runs tests with coverage report

### `npm run build`
Builds the app for production

## Design System

### Color Palette
- **Primary Black**: #000000 (backgrounds)
- **Racing Red**: #E30118 (CTAs, highlights)
- **Performance Yellow**: #FDD900 (accents, motion streaks)
- **Neutral Silver**: #C0BFBF (metadata, borders)
- **Pure White**: #FFFFFF (primary text)

### Responsive Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1199px
- **Desktop**: 1200px+

## Development Guidelines

1. **Component Structure**: Each component should have its own directory with JS, CSS, and test files
2. **Styling**: Use CSS Modules for component-scoped styles
3. **Testing**: Write both unit tests and property-based tests for new functionality
4. **Performance**: Implement lazy loading and optimize animations for 60fps
5. **Accessibility**: Ensure WCAG 2.1 AA compliance for all interactive elements

## Getting Started

1. Install dependencies: `npm install`
2. Start development server: `npm start`
3. Run tests: `npm test`
4. Build for production: `npm run build`

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
