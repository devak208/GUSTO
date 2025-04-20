# GUSTO GCEE 2025

## Project Overview

This repository contains the codebase for the GUSTO GCEE 2025 website, a Next.js-based application for the GCEE (Government College of Engineering, Erode) event. The project is built with modern web technologies to provide an interactive and responsive user experience.

## Technology Stack

- **Framework**: Next.js 15.2.2
- **Language**: TypeScript
- **UI**: React 19.0.0
- **Styling**: TailwindCSS
- **Animation**: Framer Motion, Motion
- **3D Elements**: Three.js, React Three Fiber
- **Icons**: Heroicons, Tabler Icons, Lucide React, React Icons
- **Particles**: tsParticles
- **Theme Support**: next-themes

## Project Structure

```
gusto-gcee-2025/
├── .git                     # Git repository
├── .next                    # Next.js build output
├── node_modules            # Dependencies
├── public                  # Static assets
├── src/                    # Source code
│   ├── app/                # Next.js app router pages
│   │   ├── BusRoutes/      # Bus routes page
│   │   ├── committee/      # Committee page
│   │   ├── events/         # Events page
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Homepage
│   ├── components/         # React components
│   │   ├── BusRoutes/      # Bus routes components
│   │   ├── committee/      # Committee components
│   │   ├── Events/         # Event-related components
│   │   ├── Home/           # Homepage components
│   │   └── UI/             # Reusable UI components
│   ├── data/               # Static data and constants
│   ├── lib/                # Utility functions and shared logic
│   └── styles/             # Global styles
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore file
├── components.json         # Component metadata
├── eslint.config.mjs       # ESLint configuration module
├── next-env.d.ts           # Next.js TypeScript declarations
├── next.config.js          # Next.js configuration
├── package-lock.json       # Dependency lock file
├── package.json            # Project metadata and dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # TailwindCSS configuration
└── tsconfig.json           # TypeScript configuration
```

## Features

The website includes several key sections:

1. **Homepage**: Main landing page with information about GUSTO GCEE 2025
2. **Events**: Details about various technical and non-technical events
3. **Committee**: Information about organizing committees
4. **Bus Routes**: Transportation information for participants

## Navigation Components

The project implements a sophisticated section navigation system that enables smooth scrolling between different sections across pages. This includes:

- **ScrollToSection**: Generic component for navigating to any section on any page
- **ScrollToContact**: Specialized component for contact section navigation
- **ScrollToEvent**: Component for navigating to specific event sections
- **ScrollToTimeline**: Component for timeline section navigation
- **ContactButton**: Pre-styled button component built on top of ScrollToContact

### Navigation Methods

1. **SessionStorage approach** (default): Stores target section ID in sessionStorage and scrolls after navigation
2. **Hash navigation approach**: Uses URL hash fragments for navigation

## UI Features

- **Responsive Design**: Optimized for various screen sizes
- **Dark/Light Mode**: Theme support via next-themes
- **Animations**: Interactive elements using Framer Motion
- **Particle Effects**: Background particle animations with tsParticles
- **3D Elements**: Interactive 3D components with Three.js

## Getting Started

1. **Clone the repository**:

   ```
   git clone [repository-url]
   cd gusto-gcee-2025
   ```

2. **Install dependencies**:

   ```
   npm install
   ```

3. **Run development server**:

   ```
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build for Production

```
npm run build
npm run start
```

## Development Commands

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## Browser Support

The website is optimized for modern browsers with support for the latest JavaScript features and CSS properties.

## Contributing

Please follow the established code style and component structure when contributing to this project. Ensure all components are properly typed and documented.
