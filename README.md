# 🎮 Dark Lobby // Premier Gaming News & Intelligence Portal

> High-octane gaming news, verified industry leaks, zero-day patch notes, and hardware benchmarks. Built with **Astro 5**, **Tailwind CSS**, and **Decap CMS** for ultra-fast static performance and effortless content publishing.

---

## 🌟 Key Highlights & Features

- **⚡ Blazing Fast Architecture**: Built on Astro's modern Content Layer for static generation, zero JS bloat, and sub-second page loads.
- **🎨 Sleek Cyberpunk Aesthetics**: Deep dark slate canvas (`#090d16`), card surfaces (`#111726`), with electric neon green (`#00ff66`) and neon cyan (`#00f0ff`) accents.
- **🔤 Clean & Highly Legible Typography**: Modern **Plus Jakarta Sans** and **Inter** font pairing for effortless article reading, with **Orbitron** reserved exclusively for the brand logo.
- **🕒 Relative Publication Age**: Accurately displays time elapsed since release (e.g., *"Just now"*, *"2 hours ago"*, *"5 hours ago"*, *"Yesterday"*, *"3 days ago"*) alongside exact calendar dates.
- **🎠 4-Second Auto-Cycling Hero Slideshow**:
  - Automatically cycles through the top 5 latest dispatches every 4 seconds.
  - Interactive neon progress indicators showing real-time cycle status.
  - **Pause on Hover** for uninterrupted reading.
  - Manual Previous/Next buttons, touch swipe support for mobile, and keyboard arrow navigation.
  - Compact, well-proportioned layout designed not to monopolize screen height.
- **🔐 Built-in Decap CMS Admin Portal (`/admin`)**:
  - Web-based content management without touching code.
  - Create, edit, and delete gaming dispatches with a rich markdown editor.
  - Manage navigation tabs and category filters dynamically.
  - Configure sponsor banners and monetization settings.
  - Zero redirect loops with native Astro route integration.
- **💰 Monetization & Google AdSense Ready**:
  - Global Google AdSense integration (Auto Ads & Publisher verification).
  - Multiple ad placements: Header banner, In-feed sponsor card, Mid-article ad, Footer banner, and collapsible Sticky Bottom sponsor dock.
- **📱 Fully Responsive**: Flawless mobile-first experience with cyber drawer navigation and touch controls.
- **🛡️ Production Ready for Netlify**: Pre-configured `netlify.toml` with caching headers, security rules, and Decap CMS Git Gateway support.

---

## 📂 Project Structure

```text
Darklobby/
├── public/
│   ├── admin/
│   │   └── config.yml           # Decap CMS collections & field definitions
│   ├── images/
│   │   └── uploads/             # User uploaded media & thumbnails
│   ├── favicon.svg              # Cyber gaming favicon
│   └── robots.txt               # SEO crawler directives
├── src/
│   ├── components/
│   │   ├── AdBanner.astro       # High-tech sponsor banners & script ad units
│   │   ├── Footer.astro         # Site footer with brand socials & legal links
│   │   ├── HeroSlideshow.astro  # 4s auto-cycling hero carousel with progress bars
│   │   ├── Navbar.astro         # Top navigation bar & mobile menu drawer
│   │   ├── NewsCard.astro       # News dispatch card with relative time ago
│   │   ├── SponsoredCard.astro  # In-feed sponsored deal card
│   │   └── StickyBottomAd.astro # Non-intrusive collapsible floating sponsor dock
│   ├── content/
│   │   ├── config.ts            # Type-safe Zod schema for news & settings
│   │   ├── news/                # Markdown gaming news articles (.md)
│   │   └── settings/
│   │       ├── ads.json         # Ad slot toggles, banners, and AdSense config
│   │       └── navigation.json  # Navigation tabs and category filter settings
│   ├── layouts/
│   │   └── BaseLayout.astro     # Master layout, SEO meta tags & head scripts
│   ├── pages/
│   │   ├── 404.astro            # Cyberpunk "Signal Lost" 404 page
│   │   ├── admin/
│   │   │   └── index.astro      # Native Decap CMS portal entry point
│   │   ├── index.astro          # Homepage with Hero Slideshow & filter grid
│   │   └── news/
│   │       └── [...slug].astro  # Dynamic article reader with progress bar
│   ├── styles/
│   │   └── global.css           # Tailwind base styles, cyber gradients & fonts
│   └── utils/
│       └── date.ts              # Relative time calculation utility
├── astro.config.mjs             # Astro project configuration
├── netlify.toml                 # Netlify build, redirects, and headers
├── package.json                 # Project dependencies and npm scripts
├── tailwind.config.mjs          # Tailwind theme tokens and cyberpunk colors
└── tsconfig.json                # TypeScript configuration
```

---

## 🚀 Getting Started (Local Setup)

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed:
- **Node.js**: `v18.17.1` or `v20.x` / `v22.x` (LTS recommended)
- **NPM**: `v9.x` or higher

### 1. Clone or Open the Repository

Clone this repository or open the project folder in your terminal:

```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd Darklobby
```

### 2. Install Dependencies

Install all required packages:

```bash
npm install
```

### 3. Run the Development Server

Start the Astro local development server:

```bash
npm run dev
```

Open your browser and navigate to:
```text
http://localhost:4321/
```

---

## 🛠️ Using the Admin Portal Locally

Dark Lobby includes **Decap CMS** to edit articles directly through a web interface.

1. In a separate terminal tab, start the local CMS backend proxy:
   ```bash
   npm run cms
   ```
   *(This starts `decap-server` on `http://localhost:8081` to allow writing markdown files to your disk).*

2. Open the Admin Portal in your browser:
   ```text
   http://localhost:4321/admin/
   ```

3. You can now create, update, or delete news articles, categories, and ad settings. Changes are saved directly to `src/content/news/`.

---

## 🌐 Deploying to Netlify (Free Hosting & Live CMS)

Dark Lobby is pre-configured for **Netlify** with zero setup costs.

### Step 1: Push Code to GitHub
1. Commit and push your project to a GitHub repository:
   ```bash
   git add .
   git commit -m "Deploy Dark Lobby"
   git push origin main
   ```
   *(Alternatively, use **GitHub Desktop** to publish the repository).*

### Step 2: Import into Netlify
1. Go to [app.netlify.com](https://app.netlify.com/) and log in with your GitHub account.
2. Click **Add new site** ➡️ **Import an existing project**.
3. Select **Deploy with GitHub** and choose your repository.
4. Netlify will automatically detect the settings from `netlify.toml`:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **Deploy site**. Your website will be live in under a minute!

### Step 3: Enable Netlify Identity & Git Gateway (For Live Admin)
To publish news articles online without touching code:
1. In your Netlify site dashboard, navigate to **Site configuration** ➡️ **Identity**.
2. Click **Enable Identity**.
3. Scroll down to **Registration preferences** and select **Invite only** *(prevents unauthorized registrations)*.
4. Scroll to **Services** ➡️ **Git Gateway** and click **Enable Git Gateway**.
5. Go to the **Identity** tab at the top of your Netlify dashboard and click **Invite users**.
6. Enter your personal email address. You will receive an invitation link to set your password.
7. Visit `https://<your-site>.netlify.app/admin/`, log in with your credentials, and enjoy full CMS access!

---

## 💰 Monetization & Google AdSense Setup

All ad placements can be configured without touching source code via `src/content/settings/ads.json` or through the Admin Portal (`/admin` ➡️ **Ad Placement & Monetization**).

### Option A: Google Auto Ads
1. Open `src/content/settings/ads.json` (or use the CMS).
2. Under `adsense`:
   - Set `"enabled": true`
   - Set `"clientId": "ca-pub-XXXXXXXXXXXXXXXX"` (replace with your Google Publisher ID)
   - Set `"autoAds": true`
3. The AdSense verification script will automatically be injected into the `<head>` of all pages.

### Option B: Custom Ad Banners or Specific AdSense Ad Units
Each slot (`header`, `inFeed`, `inArticle`, `footer`) supports:
- **`custom_banner`**: Custom banner image, headline, affiliate link, and badge.
- **`script`**: Paste your Google AdSense `<ins class="adsbygoogle" ...>` snippet directly into the `script` field.

---

## 📜 Available NPM Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local development server on `http://localhost:4321/` |
| `npm run build` | Compiles production-ready static assets to `dist/` |
| `npm run preview` | Previews the compiled `dist/` build locally |
| `npm run cms` | Launches local Decap CMS proxy on `http://localhost:8081` |

---

## 🛠️ Built With

- **[Astro](https://astro.build/)** – Static site generator & web framework
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework
- **[Decap CMS](https://decapcms.org/)** – Open-source Git-based Content Management System
- **[Google Fonts](https://fonts.google.com/)** – Plus Jakarta Sans, Inter, Orbitron, JetBrains Mono
- **[Netlify](https://www.netlify.com/)** – Edge CDN hosting & Git Gateway authentication

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
