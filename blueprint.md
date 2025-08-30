# Global Automation Website Blueprint

## Overview

This document outlines the design, features, and implementation of the Global Automation company website. The site is a modern, single-page application (SPA) built with Angular, showcasing the company's products and services, and providing a seamless way for customers to get in touch.

## Style and Design

- **Theme:** Modern, professional, and industrial. The color palette is centered around a primary blue (`--ga-primary`), a secondary teal (`--ga-secondary`), and a dark gray for text.
- **Layout:** Responsive and mobile-first. The layout uses CSS Grid and Flexbox for a flexible and adaptive design.
- **Typography:** The `Roboto` font is used throughout the site, with a clear hierarchy for headings and body text.
- **Iconography:** Font Awesome icons are used to enhance visual communication and user experience.

## Features

- **Home Page:** A welcoming landing page with a hero section, a brief introduction to the company, and a call-to-action.
- **About Us:** An expanded page with a mission statement, vision, and more detailed company information. The layout has been improved for better readability and visual appeal.
- **Products:** A showcase of the company's product offerings, with images, descriptions, and model numbers.
- **Services:** An enhanced services page featuring service images, a 'Learn More' button, a call-to-action section that directs users to the contact page, and interactive hover effects on service cards.
- **Contact Us:** A user-friendly contact form with client-side validation and a map to the company's location.

## Implementation Details

- **Framework:** Angular v20+
- **State Management:** Angular Signals for reactive state management.
- **Components:** All components are standalone, promoting a modular and maintainable architecture.
- **Control Flow:** Uses the new `@` syntax for control flow in templates (`@if`, `@for`, `@switch`).
- **Styling:** Modern, native CSS with custom properties for theming.
- **Backend:** Firebase Firestore is used to store contact form submissions.
- **Image Optimization:** `NgOptimizedImage` is used for all static images.

## Current Plan

The application is now feature-complete. The next step is to hand it off to the user to add their Firebase credentials and deploy it.
