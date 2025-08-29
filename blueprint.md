# My Global Automation Application Blueprint

## Overview

This document outlines the design, features, and implementation of the My Global Automation application. It serves as a single source of truth for the project, providing a comprehensive overview of its current state and future development plans.

## Style, Design, and Features

The application is designed with a modern, clean, and professional aesthetic, emphasizing user-friendliness and a seamless user experience. The following style and design principles have been implemented:

*   **Color Palette:** The primary color scheme revolves around a professional blue, complemented by a clean white background and black text. This creates a trustworthy and corporate feel.
*   **Typography:** The application uses a clear and readable sans-serif font for all text, ensuring a consistent and accessible reading experience.
*   **Layout:** The layout is designed to be responsive and mobile-first, ensuring a seamless experience across all devices. The use of a grid system and consistent spacing creates a visually balanced and organized interface.
*   **Iconography:** The application uses modern and intuitive icons to enhance user understanding and navigation.
*   **Interactivity:** Interactive elements, such as buttons and links, provide clear visual feedback to the user.

## Implemented Features

*   **Header and Footer:** A consistent header and footer are present on all pages, providing clear navigation and branding.
*   **Home Page:** A welcoming home page that introduces the company and its services.
*   **About Us Page:** A page that provides more information about the company, its mission, and its values.
*   **Services Page:** A page that displays the company's services in a visually appealing card format.
*   **Products Page:** A page that showcases the products offered by the company.
*   **Contact Us Page:** A page that provides contact information and a form for users to get in touch.
*   **404 Page:** A custom 404 page that is displayed when a user navigates to a non-existent page.

## Current Plan

### Add Images to Service Cards

**Objective:** To enhance the visual appeal of the service cards by adding relevant images.

**Steps:**

1.  **Update `services` array:** In the `ServicesComponent`, add an `imageUrl` property to each service object in the `services` array.
2.  **Update `app.config.ts`:** Add `provideImgixLoader()` to the application providers to enable optimized image loading with `ngSrc`.
3.  **Update HTML template:** In the `services.html` template, add an `<img>` tag to each card to display the service image using `ngSrc`.
4.  **Style the images:** In the `services.css` file, add styles to the images to ensure they are displayed correctly within the cards.
