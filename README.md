# Modern Developer Portfolio

A high-performance, responsive personal portfolio built with **React**, **Vite**, and **Material UI**. This project showcases professional experience, technical skills, and featured web development projects with smooth animations powered by **Framer Motion**.

## 🚀 Features

- **Glassmorphism UI**: Modern design language using semi-transparent surfaces and background blurs.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop views.
- **Interactive Animations**: Scroll-linked animations and hover effects using Framer Motion.
- **Functional Contact Form**: Integrated with **EmailJS** for direct client communication.
- **Project Showcase**: Dynamic grid displaying featured work with live demo and source code links.
- **Smooth Navigation**: Single-page application (SPA) architecture with smooth-scroll anchors.

## 🛠️ Tech Stack

- **Frontend**: React.js, Vite
- **Styling**: Material UI (MUI), Emotion, CSS3
- **Animations**: Framer Motion
- **Email Service**: EmailJS
- **Icons**: MUI Icons, Custom SVG Icons

## 📂 Project Structure

### `src/components`

- **Hero.jsx**: The landing section featuring a profile avatar, introduction, and CV download.
- **Experience.jsx**: A technical skills grid showcasing proficiency in JavaScript, React, Node.js, etc.
- **Projects.jsx**: A curated list of featured projects (Petrol System, E-commerce, etc.) with preview cards.
- **WorkExperience.jsx**: A professional timeline detailing career history and roles.
- **Contact.jsx**: A "Get in touch" section with a validated form and EmailJS integration.
- **Navbar.jsx & Footer.jsx**: Persistent navigation and social connectivity links.

### `src/assets`

- **Images**: Project screenshots (`petrol.png`, `headphone.png`, `slayer.png`) and profile assets.
- **Documents**: Professional CV/Resume in PDF format.

## ⚙️ Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HtetAungH/portfolio.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create an EmailJS account and get your Service ID, Template ID, and Public Key.

4. Update `src/components/Contact.jsx` with your EmailJS credentials:

   ```javascript
   emailjs.sendForm(
     "YOUR_SERVICE_ID",
     "YOUR_TEMPLATE_ID",
     form.current,
     "YOUR_PUBLIC_KEY",
   );
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

## 📜 License

This project is open-source and available under the MIT License.

---

Developed with ❤️ by Htet Aung Hlaing
