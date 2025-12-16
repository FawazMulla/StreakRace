# 🏎️ StreakRace - Formula 1 Racing Website

> **Elite Formula-1 Racing Organization • Championship Winners • Speed Innovators**

A high-performance, single-page racing website built with React that delivers a cinematic motorsport experience. Features racing-themed animations, interactive elements, and a clean design focused on speed and performance.

## ✨ Features

### 🏁 **Core Experience**
- **Racing Loader**: 3-second F1 car animation on every page refresh
- **Cinematic Hero**: Full-screen background with racing typography
- **Animated Navbar**: Fixed navigation with racing car emoji and pulse effects
- **Interactive Sections**: Smooth scroll animations and hover effects
- **Location Map**: Embedded Google Maps pointing to Ghatkopar, Mumbai

### 🎨 **Visual Design**
- **Racing Theme**: Black, red (#E30118), and yellow (#FDD900) color scheme
- **Motorsport Typography**: Orbitron font for racing aesthetics
- **Emoji Icons**: Clean design without image dependencies
- **Responsive Layout**: Mobile-first design that works on all devices
- **Performance Optimized**: Smooth 60fps animations

## 🚀 Tech Stack

- **React 19**: Modern functional components with hooks
- **Framer Motion**: Smooth animations and scroll-triggered effects
- **CSS3**: Custom styling with racing theme
- **Google Maps**: Embedded location map
- **PWA Ready**: Installable as mobile app

## 📁 Project Structure

```
streak-race-website/
├── public/
│   ├── images/
│   │   └── hero/              # Hero background image folder
│   ├── favicon.svg            # Racing car favicon
│   └── index.html
├── src/
│   ├── components/
│   │   ├── LoadingScreen/     # Racing loader animation
│   │   └── Navbar/            # Fixed navigation with favicon
│   ├── pages/
│   │   └── HomePage/          # Main landing page
│   ├── styles/
│   │   └── globals.css        # Global racing theme styles
│   └── App.js                 # Main app component
└── README.md
```

## 🎯 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd streak-race-website

# Install dependencies
npm install

# Start development server
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## 🖼️ Adding Images (Optional)

The site works perfectly without images, but you can add a hero background:

1. **Add hero image**: Place your image at `public/images/hero/team-hero.jpg`
2. **Recommended size**: 1920x1080px (landscape)
3. **Supported formats**: .jpg, .png, .webp

The site automatically falls back to a placeholder if no image is found.

## 🎨 Design System

### Color Palette
```css
--racing-black: #000000     /* Primary background */
--racing-red: #E30118       /* CTAs and highlights */
--racing-yellow: #FDD900    /* Accents and effects */
--racing-silver: #C0BFBF    /* Secondary text */
--racing-white: #FFFFFF     /* Primary text */
```

### Typography
- **Primary Font**: Orbitron (racing/tech aesthetic)
- **Fallback**: Arial, sans-serif
- **Weights**: 400 (normal), 700 (bold), 900 (black)

### Responsive Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1199px  
- **Desktop**: 1200px+

## 📱 Sections Overview

### 1. **Hero Section**
- Full-screen background image support
- Animated title and subtitle
- Two call-to-action buttons
- Racing-themed typography

### 2. **About Section**
- Organization description
- Racing heritage and innovation focus

### 3. **Statistics**
- 4 key metrics with animated counters
- Championships, victories, podiums, years

### 4. **Elite Drivers**
- 3 driver profiles with emoji icons
- Names, roles, and racing numbers
- Hover animations

### 5. **Recent Victories**
- 3 major achievements
- Trophy emojis and descriptions
- Card-based layout

### 6. **Innovation Lab**
- Technology showcase
- Rotating gear animation
- Feature list with racing tech

### 7. **Location**
- Interactive Google Maps
- Ghatkopar, Mumbai address
- Contact information and hours

### 8. **Join Section**
- Recruitment call-to-action
- Apply and contact buttons

## 🛠️ Available Scripts

```bash
# Development
npm start          # Start dev server (localhost:3000)

# Production
npm run build      # Build for production
npm run serve      # Serve production build locally

# Testing (if tests are added)
npm test           # Run tests in watch mode
npm run test:run   # Run tests once
```

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Netlify**: Drag & drop the `build` folder
- **Vercel**: Connect GitHub repository
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use Firebase CLI

## 📍 Location Details

**StreakRace Racing HQ**
- 📍 Ghatkopar East, Mumbai, Maharashtra 400077, India
- 📞 +91 98765 43210
- ✉️ info@streakrace.com  
- 🕒 Mon-Sat: 9:00 AM - 6:00 PM

## 🎭 Customization

### Change Colors
Edit `src/styles/globals.css` and update CSS variables:
```css
:root {
  --racing-red: #YOUR_COLOR;
  --racing-yellow: #YOUR_COLOR;
}
```

### Update Content
Edit `src/pages/HomePage/HomePage.js` to modify:
- Driver names and roles
- Achievement titles
- Company information
- Contact details

### Modify Location
Update the Google Maps embed URL in HomePage.js with your coordinates.

## 🚀 Performance Features

- **Lightweight**: No heavy image dependencies
- **Fast Loading**: Optimized animations and code
- **Mobile Optimized**: Touch-friendly interactions
- **SEO Ready**: Proper meta tags and structure
- **PWA Support**: Installable on mobile devices

## 🎯 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

---

**Built with ❤️ for the racing community**

*Ready to race? Start your engines with `npm start`!* 🏁
