# ByteSpace

**ByteSpace** is a modern online course platform landing page and authentication system built with **Next.js 16**. Users can browse courses, explore learning paths, and sign up or log in to the platform.

**🌐 Live Demo:** [https://byte-space-new-mijanur-rahman.vercel.app/](https://byte-space-new-mijanur-rahman.vercel.app/)

---

## 🚀 Tech Stack

| Technology       | Version   | Purpose                                   |
| ---------------- | --------- | ----------------------------------------- |
| **Next.js**      | `16.3.7`  | React framework (App Router)              |
| **React**        | `19.2.8`  | UI Library                                |
| **TypeScript**   | `^5`      | Type-safe JavaScript                      |
| **Tailwind CSS** | `^4`      | Utility-first CSS framework               |
| **Swiper**       | `^14.3.0` | Slider/Carousel component (Testimonials)  |
| **ESLint**       | `^9`      | Code linting                              |
| **PostCSS**      | —         | CSS processing (Tailwind plugin)          |

**Fonts:**
- **Poppins** (Google Fonts) — Used for all headings
- **Satoshi** (Fontshare) — Used for body text and labels

---

## 📁 Project Structure

```
byte-space-new/
├── app/                          # Next.js App Router
│   ├── globals.css               # Global styles, design tokens, custom utilities
│   ├── layout.tsx                # Root layout (Navbar + Footer wrapper)
│   ├── page.tsx                  # Home page
│   ├── login/
│   │   └── page.tsx              # Login page
│   └── register/
│       └── page.tsx              # Registration page
│
├── components/
│   ├── home/                     # Home page sections
│   │   ├── Hero.tsx              # Hero section (search bar, floating cards)
│   │   ├── Companies.tsx         # Trusted companies logo strip
│   │   ├── DiscoverCourses.tsx   # Course discovery grid
│   │   ├── DiscoverCourseCard.tsx# Individual course card
│   │   ├── LearningPaths.tsx     # Learning paths section
│   │   ├── LearningPathCard.tsx  # Individual learning path card
│   │   ├── PromoSection.tsx      # Promotional/features section
│   │   ├── CTASection.tsx        # Call to action section
│   │   ├── TestimonialsSection.tsx# Testimonials slider (Swiper)
│   │   ├── CountUp.tsx           # Animated number counter
│   │   ├── CourseCard.tsx        # Hero floating course card
│   │   ├── ProgressCard.tsx      # Hero floating progress card
│   │   ├── StudentsCard.tsx      # Hero floating students card
│   │   └── RevenueCard.tsx       # Revenue stats card
│   │
│   ├── layout/                   # Layout components
│   │   ├── Navbar.tsx            # Navigation bar
│   │   ├── Footer.tsx            # Footer
│   │   ├── FooterSearchBar.tsx   # Reusable search bar component
│   │   ├── LayoutWrapper.tsx     # Layout wrapper (hides Navbar/Footer on auth pages)
│   │   └── AuthContainer.tsx     # Authentication pages layout container
│   │
│   ├── ui/                       # Reusable UI components
│   │   └── Input.tsx             # Custom input component
│   │
│   └── icons/                    # SVG icon components
│       ├── LogoIcon.tsx          # ByteSpace logo (white)
│       ├── LogoIconBlack.tsx     # ByteSpace logo (black)
│       ├── LogoMarkIcon.tsx      # Logo mark only
│       ├── CompanyOneLogo.tsx    # Partner company logos
│       ├── CompanyTwoLogo.tsx
│       ├── CompanyThreeLogo.tsx
│       ├── CompanyFourLogo.tsx
│       ├── CompanyFiveLogo.tsx
│       ├── BusinessIcon.tsx      # Category icons
│       ├── CartIcon.tsx
│       ├── DesignIcon.tsx
│       ├── DevelopmentIcon.tsx
│       ├── ITIcon.tsx
│       ├── MarketingIcon.tsx
│       └── PhotographyIcon.tsx
│
├── public/
│   └── images/
│       ├── hero/                 # Hero section images
│       ├── CTA/                  # CTA section images
│       └── register/             # Registration page images
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── eslint.config.mjs
```

## 🛠️ Getting Started

### Prerequisites
- **Node.js** — `v18.18.0` or higher (recommended: `v24+`)
- **npm** — Comes bundled with Node.js

### Step 1: Clone the Repository

```bash
git clone https://github.com/mijanConnect/byte-space-new.git
cd byte-space-new
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Run the Development Server

```bash
npm run dev
```

Once the server is running, open your browser and go to: **[http://localhost:3002](http://localhost:3002)**

> **Note:** This project runs on port `3002` (not the default `3000`).

### Step 4: Production Build (Optional)

```bash
npm run build
npm run start
```

---

## 📜 Available Scripts

| Command          | Description                                  |
| ---------------- | -------------------------------------------- |
| `npm run dev`    | Starts the development server (port 3002)    |
| `npm run build`  | Creates a production build                   |
| `npm run start`  | Serves the production build                  |
| `npm run lint`   | Runs ESLint to check for code issues         |

---

## 🌐 Pages / Routes

| Route       | Description                  |
| ----------- | ---------------------------- |
| `/`         | Home page (Landing page)     |
| `/login`    | User login page              |
| `/register` | User registration page       |


## 🧑‍💻 Development Notes

- This project uses the **Next.js App Router** (`app/` directory)
- The `@/` path alias is configured to refer to the root directory
- All icon components are built with inline SVGs (`components/icons/`)
- The **LayoutWrapper** component hides Navbar and Footer on authentication pages
- **Swiper.js** is used for the Testimonials section slider
- Tailwind CSS v4 is used with the `@theme inline` syntax for design tokens
