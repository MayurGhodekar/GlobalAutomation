# My Global Auto App Blueprint

## Overview

This document outlines the architecture and implementation of the My Global Auto application, a modern web application built with Angular. It leverages standalone components, signals for state management, and modern CSS for a visually appealing and interactive user experience.

## Style, Design, and Features

### Core Technologies

*   **Angular v20+**: The application is built on the latest version of Angular, taking advantage of its newest features.
*   **Standalone Components**: Every component, directive, and pipe is standalone, promoting a modular and streamlined architecture.
*   **Signals**: Signals are used for reactive state management, ensuring efficient change detection and a predictable data flow.
*   **New Control Flow**: The new `@` syntax for control flow (`@if`, `@for`, `@switch`) is used for more intuitive and readable templates.
*   **Modern CSS**: The application uses modern, browser-native CSS for styling, with a focus on a clean, visually balanced layout and mobile responsiveness.
*   **Firebase**: Firebase is used for backend services, including authentication and Firestore.

### Implemented Features

*   **Admin Section**: A secure admin section with login and dashboard functionality.
    *   **Authentication**: Firebase Authentication is used to secure the admin panel. Only users with an "admin" role can access the dashboard.
    *   **Routing**: The admin section has its own routing module with a login page and a protected dashboard page.
    *   **Auth Guard**: An authentication guard (`authGuard`) protects the dashboard route, redirecting unauthenticated users to the login page.
    *   **Message Management**:
        *   **Display Messages**: The admin dashboard displays contact messages from Firestore.
        *   **Delete Messages**: Admins can delete messages from the dashboard.
        *   **Confirmation on Delete**: A confirmation dialog is shown before deleting a message to prevent accidental deletions.

## Future Enhancements

*   **Mark as Read/Unread**: Implement a feature to mark messages as read or unread to help with organization.
*   **Direct Reply**: Add a "Reply" button that opens the user's default email client with the sender's email address pre-filled.
