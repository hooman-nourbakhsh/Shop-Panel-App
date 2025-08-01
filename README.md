# Next.js Shop

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![TanStack Query](https://img.shields.io/badge/TanStack_Query-FF4154?style=for-the-badge&logo=tanstack&logoColor=white)](https://tanstack.com/query/latest)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
[![React Hot Toast](https://img.shields.io/badge/React_Hot_Toast-FF4154?style=for-the-badge&logo=react-hot-toast&logoColor=white)](https://react-hot-toast.com/)
[![React Multi Date Picker](https://img.shields.io/badge/Date_Picker-007bff?style=for-the-badge&logo=react&logoColor=white)](https://shahabyazdi.github.io/react-multi-date-picker/)
[![React Select](https://img.shields.io/badge/React_Select-007bff?style=for-the-badge&logo=react-select&logoColor=white)](https://react-select.com/)
[![React Tag Input Component](https://img.shields.io/badge/Tag_Input-007bff?style=for-the-badge&logo=react&logoColor=white)](https://www.npmjs.com/package/react-tag-input-component)

<br>

A comprehensive e-commerce admin panel and user-facing shop built with Next.js. This project provides a robust solution for managing products, categories, users, payments, and discount coupons, alongside a user-friendly interface for browsing products, managing carts, and viewing order history.

---

## ✨ Key Features

-   **User Authentication**: Secure OTP-based login, profile completion, and session management.
-   **Route Protection**: Middleware-based access control for user and admin-specific routes.
-   **User Profile Management**: Users can view and update their personal information.
-   **Shopping Cart**: Add/remove products, manage quantities, and view cart summary.
-   **Payment Integration**: Initiate payments and view payment history.
-   **Product Listing & Details**: Browse products with filtering (by category) and sorting options (latest, earliest, popular). View detailed product information.
-   **Product Liking**: Users can like and unlike products.
-   **Admin Dashboard**:
    -   **User Management**: View, search, and manage user accounts.
    -   **Product Management**: Full CRUD (Create, Read, Update, Delete) operations for products.
    -   **Category Management**: Full CRUD operations for product categories.
    -   **Payment Management**: View and manage all user payments.
    -   **Coupon Management**: Full CRUD operations for discount coupons.
-   **Persian Localization**: Full Right-to-Left (RTL) support and Persian number/date formatting.
-   **Client-Side Data Management**: Robust handling of server state and mutations with **TanStack Query**.

---

## 🚀 Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **State Management**: [TanStack Query (React Query)](https://tanstack.com/query/latest) for server state.
-   **HTTP Client**: [Axios](https://axios-http.com/) with interceptors for token management.
-   **Notifications**: [React Hot Toast](https://react-hot-toast.com/)
-   **Form Components**:
    -   [React Select](https://react-select.com/) for dropdowns.
    -   [React Tag Input Component](https://www.npmjs.com/package/react-tag-input-component) for tag inputs.
    -   [React Multi Date Picker](https://react-multi-date-picker.github.io/) for date selection.
-   **Icons**: [React Icons](https://react-icons.github.io/react-icons/)

---

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

-   [Node.js](https://nodejs.org/en/) (v18 or later)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/hooman-nourbakhsh/Shop-Panel-App.git
    cd Shop-Panel-App
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Set up environment variables:**
    Create a `.env.development.local` file in the root of the project and add the necessary environment variables. You can use `.env.example` as a template.

    ```env
    NEXT_PUBLIC_API_URL=http://localhost:5000/api
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```

The application will be available at `http://localhost:3000`.

## 📄 License

This project is licensed under the Apache License 2.0.

You are free to use, modify, and distribute this software, but you must provide proper attribution to the original authors. For more details, see the [`Apache License`](./LICENSE) file.

---

## Made with 💖 by Hooman
