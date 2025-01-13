# Espacio Amapola

Welcome to **Espacio Amapola**, a personalized web platform offering guidance, resources, and support for individuals and families through different stages of maternity and parenting. This project was developed using Astro.js, Tailwind CSS, and a modern front-end development approach.

---

## Table of Contents

- [Espacio Amapola](#espacio-amapola)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Setup and Installation](#setup-and-installation)
  - [Usage](#usage)
  - [Project Structure](#project-structure)
  - [License](#license)

---

## Overview

**Espacio Amapola** is designed to offer:

- A professional online presence for a doula and lactation consultant.
- Intuitive user interface for showcasing services, encounters, and personal history.
- Responsive and SEO-optimized web pages to ensure accessibility on all devices.

---

## Features

- **Dynamic Home Page**: Highlighting key services and values.
- **About Section**: Sharing the professional journey and expertise.
- **Encounter Modules**: Detailed descriptions of available services with interactive cards and animations.
- **Fully Responsive Design**: Optimized for desktop, tablet, and mobile.
- **Interactive Animations**: Smooth transitions and hover effects for enhanced user engagement.
- **SEO Best Practices**: Proper meta tags, accessibility, and semantic HTML.

---

## Technologies Used

- **[Astro.js](https://astro.build/)**: For building fast and efficient static sites.
- **[Tailwind CSS](https://tailwindcss.com/)**: For a highly customizable and responsive design.
- **[JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)**: Interactive elements and custom animations.

---

## Setup and Installation

Follow these steps to set up the project locally:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/ssannnn/espacio-amapola.git
   cd espacio-amapola
   ```

2. **Install Dependencies:**
   Ensure you have Node.js installed, then run:
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```

4. **Build for Production:**
   To generate the production build:
   ```bash
   npm run build
   ```

5. **Preview the Build:**
   Test the build locally:
   ```bash
   npm run preview
   ```

---

## Usage

Once the development server is running, open your browser and navigate to:

```
http://localhost:3000
```

Explore the site, make edits, and watch live changes.

---

## Project Structure

Below is the directory structure of the project:

```
/
├── public/                   # Static assets (images, icons, etc.)
├── src/
│   ├── components/           # Reusable components (Header, Footer, etc.)
│   ├── layouts/              # Layout templates (BaseLayout, etc.)
│   ├── pages/                # Individual pages (Home, About, Encounters, etc.)
│   ├── styles/               # Global and component-specific styles
│   └── assets/               # Project-specific images and SVGs
├── astro.config.mjs          # Astro configuration
├── tailwind.config.cjs       # Tailwind CSS configuration
├── package.json              # Node.js dependencies and scripts
└── README.md                 # Project documentation
```

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).