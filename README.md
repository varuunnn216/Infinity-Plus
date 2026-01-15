🏥 Infinity Plus Chemist & Druggist – Pharmacy Website

A modern, responsive pharmacy website built with Next.js (App Router) and Tailwind CSS for a local pharmacy in Vagator, Anjuna, Goa.
Customers can view services, submit medicine requests, upload prescriptions, read reviews, and find the store location easily.

🌟 Features
🏠 Home Page

Clean hero section with strong green branding

Trust highlights (genuine medicines, personal confirmation)

Auto-rotating customer reviews

Add-your-own review with star rating

Embedded Google Maps location

📝 Order Medicines

Enter medicine names or upload prescription image

Simple & mobile-friendly form

WhatsApp integration for instant order forwarding

Clear confirmation message (team calls customer personally)

ℹ️ About Page

Professional pharmacy introduction

Service explanation and value propositions

Green-themed sections matching brand identity

📞 Contact Page

Address, phone number, working hours

Clean layout with strong CTA

Easy access for customers

📱 Responsive Design

Fully responsive (mobile, tablet, desktop)

Optimized UI/UX using Tailwind CSS

🛠 Tech Stack

Framework: Next.js 14 (App Router)

Language: TypeScript

Styling: Tailwind CSS

State Management: React Hooks

Maps: Google Maps Embed

Integration: WhatsApp Deep Links

Deployment Ready: Vercel / Netlify

📂 Project Structure
infinity-plus-pharmacy/
│
├── app/
│   ├── page.tsx            # Home Page
│   ├── order/page.tsx      # Order Medicines Page
│   ├── about/page.tsx      # About Page
│   ├── contact/page.tsx    # Contact Page
│   ├── layout.tsx          # Root Layout (Navbar + Footer)
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   └── Footer.tsx
│
├── public/
│   └── images/
│       └── pharmacy1.jpg
│
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/infinity-plus-pharmacy.git
cd infinity-plus-pharmacy

2️⃣ Install Dependencies
npm install

3️⃣ Run Development Server
npm run dev


Open 👉 http://localhost:3000

🧪 Testing the Flow

Visit Home → scroll reviews & map

Go to Order Medicines

Enter name + phone

Add medicine names OR upload prescription

Submit → WhatsApp opens with formatted message

Check responsiveness on mobile

🔐 Important Notes

This project does not process payments

Orders are manually confirmed by phone

WhatsApp is used only for initial order forwarding

No sensitive data is stored

🌍 Deployment

Recommended platforms:

Vercel (Best for Next.js)

Netlify

Build command:

npm run build

📈 Future Enhancements

Backend API (store orders securely)

Admin dashboard for order management

SMS / Call confirmation automation

SEO optimization for local search

Google Reviews integration

👨‍💻 Author

Varun Singh
Full-Stack Developer | MERN | Next.js

Built with ❤️ for a local business using modern web technologies.
