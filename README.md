# Random Jokes 😄

A tiny, fast web app that serves up fresh random jokes—perfect for demos, practice projects, or when your brain needs a giggle break.

✨ Features

Random joke on page load and on demand

“Copy joke” to clipboard

Light/Dark theme with local preference

Offline-friendly (optional PWA)

Keyboard shortcuts (e.g., R to refresh)

Pluggable joke sources (local JSON or external APIs)

🧱 Tech Stack (example)

Frontend: HTML + CSS + JS 

Backend (optional): Node.js 
Testing: Vitest/Jest (optional)

Tooling: ESLint + Prettier

Don’t use a backend? You can call public joke APIs directly from the browser (see below).

# 🚀 Quick Start
1) Clone & install
git clone https://github.com/your-username/random-jokes.git
cd random-jokes
npm install

2) Configure (optional)

Create .env for server config or API keys (only if needed):

# Server
PORT=5173

# Choose one:
# "local" | "official-joke-api" | "jokeapi"
JOKES_SOURCE=official-joke-api

3) Run
Frontend-only (Vite example)
npm run dev


App: http://localhost:5173

With Node/Express backend
npm run server


API: http://localhost:3000/api/joke

Static site (if served by Express): http://localhost:3000

# 🧩 Project Structure

random-jokes/
├─ public/               # static assets
├─ src/
│  ├─ data/jokes.json    # fallback/local jokes
│  ├─ api/               # API client helpers
│  ├─ lib/               # utilities
│  ├─ styles/            # CSS or Tailwind
│  ├─ main.js            # entry (Vite) or index.html for vanilla
│  └─ App.jsx            # React root (optional)
├─ server/
│  └─ index.js           # Express server (optional)
├─ tests/                # unit tests (optional)
├─ .env.example
├─ package.json
└─ README.md


**🔌 Joke Sources**

async function getJoke() {
  const res = await fetch('/src/data/jokes.json');
  const list = await res.json();
  return list[Math.floor(Math.random() * list.length)];
}

📜 License

**MIT © Your Name**

**🙏 Acknowledgements**

[Official Joke API] and [JokeAPI] for public endpoints

Everyone who still laughs at cache puns

📸 Screenshots

**Add screenshots or GIFs here:**
