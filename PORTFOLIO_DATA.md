# Portfolio Content Export

Everything from the current portfolio (React 17 + styled-components + framer-motion), extracted so it can be rebuilt on a new site.

---

## 1. Identity

| Field | Value |
|---|---|
| Full name | Indraganti Akshay |
| Display name | Akshay I |
| Logo / brand | **Aksin** |
| Role | Full Stack Developer |
| Tagline | Web Developer With Good Designing skills |
| Location | India |
| Email | akshayindraganti@gmail.com |
| Page title | Indraganti Akshay |

### Intro block (landing)
> Hello,
> I'm Akshay I
> Web Developer With Good Designing skills

### About
> As a Full Stack developer from India, I enjoy using popular frameworks such as React, Node, Express, and MongoDB to create websites. My interests in logic building and problem solving led me to pursue web development as a passion and specialize in JavaScript libraries and frameworks.

---

## 2. Social links

| Platform | URL |
|---|---|
| GitHub | https://github.com/AkshayIndraganti |
| LinkedIn | https://www.linkedin.com/in/akshayindraganti/ |
| Twitter / X | https://twitter.com/akshayindragant |
| Email | mailto:akshayindraganti@gmail.com |

---

## 3. Skills

### Designer
Short pitch: *I can create unique and minimalistic design.*

- **I like to Design:** Web Design, Mobile Design
- **Tools:** Figma, Canva

### FullStack Developer
Short pitch: *I am Full-stack developer, I can create websites using MERN Stack.*

- **Skills:** HTML, CSS, JavaScript, React, Node.js, MongoDB, Express, TypeScript
- **Tools:** VS Code, GitHub, Postman

### Consolidated tech stack
`HTML` · `CSS` · `JavaScript` · `TypeScript` · `React` · `Next.js` · `Node.js` · `Express` · `MongoDB` · `EJS` · `JSON`
Tooling: `VS Code` · `GitHub` · `Postman` · `Figma` · `Canva`
Deploy targets used: Vercel, Render, GitHub Pages, VS Code Marketplace

---

## 4. Projects

### 1. Wordle
- **Description:** You have six attempts to guess a five-letter word. Make sure each guess is a valid word and press enter to submit.
- **Tags:** Json, React
- **Demo:** https://wordle-aksin.vercel.app/
- **GitHub:** https://github.com/AkshayIndraganti/wordle

### 2. Jobify Website
- **Description:** Jobify is a modern job tracking website that allows you to track the status of jobs and store data in MongoDB.
- **Tags:** MongoDB, Express, React, Node
- **Demo:** https://jobify-alhb.onrender.com/
- **GitHub:** https://github.com/AkshayIndraganti/jobify

### 3. Bookstore Website
- **Description:** Bookstore website is built on top of nodejs, expressjs, and ejs. To learn CRUD operations on mongodb.
- **Tags:** Nodejs, Expressjs, Ejs, Mongodb
- **Demo:** https://bookstore-9rc0.onrender.com/
- **GitHub:** https://github.com/AkshayIndraganti/Bookstore

### 4. Next-js list app
- **Description:** Build a nextjs app that will fetch data from json placeholder and displays using ssr (server side rendering).
- **Tags:** Next-js
- **Demo:** https://next-js-project-ashy-five.vercel.app/
- **GitHub:** https://github.com/AkshayIndraganti/Next-js-Project

### 5. Dice Game
- **Description:** It is built on top of HTML, CSS, and Javascript. Simple and addictive. To win this game you should score 100 dice points.
- **Tags:** Html, Css, Javascript
- **Demo:** https://akshayindraganti.github.io/Pig-Game/
- **GitHub:** https://github.com/AkshayIndraganti/Pig-Game

### 6. Guess The Number
- **Description:** Guessing the number and win the game. Pick a number between 1 to 20 and attempt to guess it in 3 attempts. If you guess the number, you win the game.
- **Tags:** Html, Css, Javascript
- **Demo:** https://akshayindraganti.github.io/Guess-The-Number/
- **GitHub:** https://github.com/AkshayIndraganti/Guess-The-Number

### 7. Login and Signup Page
- **Description:** Built a reusable login and signup page, which can be used in any project.
- **Tags:** Html, Css, Javascript
- **Demo:** https://akshayindraganti.github.io/Login-and-SignPage/
- **GitHub:** https://github.com/AkshayIndraganti/Login-and-SignPage

### 8. Aksin Dark Theme
- **Description:** Visual Studio Code theme. It is built to attract new developers with effective color and nice user experience in the code editor.
- **Tags:** Json, Visual Studio Code
- **Demo:** https://marketplace.visualstudio.com/items?itemName=Akshayindraganti.Indraganti-Akshay
- **GitHub:** https://github.com/AkshayIndraganti/Aksin-Theme

---

## 5. Site structure (current)

| Route | Page | Notes |
|---|---|---|
| `/` | Main / landing hub | Yin-yang center button reveals the Intro card |
| `/about` | About | Floating spaceman image, "ABOUT" big title |
| `/work` | Work | Horizontal scroll of project cards, rotating yin-yang |
| `/skills` | My Skills | Two panels: Designer + FullStack Developer |
| `*` | Error page | |

Nav labels used: `Say hi..` (mailto), `Work`, `About.`, `My Skills.`, `Click Here`.

---

## 6. Design system

**Light theme**
- body `#FCF6F4`
- text `#000000`

**Dark theme**
- body `#000000`
- text `#FCF6F4`

**Fonts**
- Primary: `Poppins, sans-serif`
- Headings/secondary: `Karla, sans-serif`
- Mono / body copy: `Ubuntu Mono, monospace` (italic in the About card)
- Logo: `Passions Conflict, cursive`

**Motifs:** yin-yang mark, spaceman/astronaut float animation, big outlined section titles, backdrop blur cards, hover invert (text ↔ background), particles background config, ambient sound toggle (SoundBar), power button.

---

## 7. Assets to carry over

- `src/assets/Images/profile-img.png` — profile cut-out used in the Intro card
- `src/assets/Images/spaceman.png` — floating astronaut on About
- `src/assets/audio/u-said-it-v13-1167.mp3` — SoundBar track
- SVG icons: github, twitter, facebook, youtube, link, anchor, power-off, yin-yang, laptop-code (Develope), palette (Design), error
- `src/config/particlesjs-config.json` + `particlesjs-config-light.json`

---

## 8. Ready-to-use JSON

```json
{
  "profile": {
    "name": "Indraganti Akshay",
    "shortName": "Akshay I",
    "brand": "Aksin",
    "role": "Full Stack Developer",
    "tagline": "Web Developer With Good Designing skills",
    "location": "India",
    "email": "akshayindraganti@gmail.com",
    "about": "As a Full Stack developer from India, I enjoy using popular frameworks such as React, Node, Express, and MongoDB to create websites. My interests in logic building and problem solving led me to pursue web development as a passion and specialize in JavaScript libraries and frameworks."
  },
  "socials": {
    "github": "https://github.com/AkshayIndraganti",
    "linkedin": "https://www.linkedin.com/in/akshayindraganti/",
    "twitter": "https://twitter.com/Aksin03"
  },
  "skills": {
    "design": {
      "pitch": "I can create unique and minimalistic design.",
      "areas": ["Web Design", "Mobile Design"],
      "tools": ["Figma", "Canva"]
    },
    "development": {
      "pitch": "I am Full-stack developer, I can create websites using MERN Stack.",
      "stack": ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "Express", "TypeScript"],
      "tools": ["VS Code", "GitHub", "Postman"]
    }
  }
}
```

Project list is available verbatim in `src/data/WorkData.js` (array `Work`) — copy it straight across.
