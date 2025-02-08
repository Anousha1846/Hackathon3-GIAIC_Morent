# MORENT - Car Rentals

## 🚗 About MORENT
MORENT is an advanced car rental platform designed to provide users with a seamless experience for renting vehicles. The website offers a user-friendly interface, efficient booking system, and a powerful admin dashboard for order management. Built using **Next.js 14, TypeScript, Sanity CMS**, and **Tailwind CSS**, it ensures high performance, responsiveness, and an interactive user experience.

## ✨ Features
- **Car Rental Booking System** – Rent cars quickly with an intuitive UI.
- **Admin Dashboard** – Manage orders, analytics, and user interactions.
- **User Authentication** – Secure login and sign-in using Oauth.
- **Dynamic Pages** – Fetch and display data dynamically from Sanity CMS.
- **Optimized UI/UX** – Modern, minimal, and professional design.
- **Mobile Responsive** – Fully adaptable across all screen sizes.

## 📁 Project Structure
The project follows a well-organized folder structure for better scalability and maintainability.

```
src/
│── app/
│   ├── adminCarRent/
│   │   ├── api/
│   │   ├── categories/
│   │   ├── detailCarRent/[id]/
│   │   ├── FAQs/
│   │   ├── lisence/
│   │   ├── payment/
│   │   ├── studio/
│   │   ├── userprofile/
│   │   ├── wishlist/
│   │
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│
│── components/
│   ├── custom/
│   │   ├── Reusable/
│   │   │   ├── BillingInfo.tsx
│   │   │   ├── CategoriesMain.tsx
│   │   │   ├── CategoriesSidebar.tsx
│   │   │   ├── ClientProvider.tsx
│   │   │   ├── CommentSection.tsx
│   │   │   ├── DashboardLayout.tsx
│   │   │   ├── DetailHero.tsx
│   │   │   ├── FloatingButton.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── HeroCardsSkeleton.tsx
│   │   │   ├── Lisence.tsx
│   │   │   ├── Location.tsx
│   │   │   ├── PopularCars.tsx
│   │   │   ├── RecommendedCars.tsx
│   │   │   ├── RentalDetails.tsx
│   │   │   ├── RentalSummary.tsx
│   │   │   ├── Reviews.tsx
│   │   │   ├── SidebarAdmin.tsx
│   │   │   ├── TopCarRental.tsx
│   │
│   ├── layouts/
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── SearchBar.tsx
│
│── contexts/
│── lib/
│── sanity/
│── middleware.ts
│── .env.local
│── .eslintrc.json
│── .gitignore
```

## 🛠️ Tech Stack
- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Backend**: Sanity CMS, API Routes
- **Authentication**:  OAuth
- **State Management**: React Context API
- **Data Fetching**: Server-Side Rendering (SSR), Static Site Generation (SSG), Client Side Rendering (CSR)

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Anousha1846/Hackathon3-GIAIC_Morent.git

```

### 2️⃣ Install Dependencies
```sh
yarn install  # or npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env.local` file and configure your API keys, Sanity credentials, and authentication settings.

### 4️⃣ Run the Development Server
```sh
yarn dev  # or npm run dev
```
The app will be available at `http://localhost:3000`.

### 5️⃣ Build for Production
```sh
yarn build  # or npm run build
yarn start  # or npm run start
```

## 🎯 Contribution Guidelines
We welcome contributions! If you find any bugs or want to enhance features, feel free to fork the repo, create a branch, and submit a PR.

---
✨ **Developed with passion by [Anousha Asadullah]** ✨

