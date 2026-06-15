# Roblox Script Generator (LocalPlayer)

A simple, responsive web app that lets you generate Roblox **LocalPlayer** Lua scripts using the free tier of OpenRouter's **GPT‑OSS‑120B** model.

## ✨ Features
- **Dark‑mode first** design with smooth CSS animations.
- Mobile‑first, fully responsive layout.
- Input your **OpenRouter API key** (free tier) and a natural‑language description of the script you need.
- Real‑time generation via the OpenRouter API.
- Syntax‑highlight‑ready output (plain `<pre>` block) with a **Copy to Clipboard** button.
- Status messages for loading, success, and error handling.

## 🛠️ Tech Stack
- **HTML5** – Semantic structure.
- **CSS3** – Custom properties, dark mode, animations.
- **Vanilla JavaScript** – Fetch API, DOM manipulation.
- **OpenRouter API** – `openai/gpt-oss-120b` model.

## 📦 Project Structure
```
/ (root)
├─ index.html      # Main page
├─ styles.css      # All styling (dark mode default)
├─ script.js       # Client‑side logic, API calls
└─ README.md       # Documentation (this file)
```

## 🚀 Getting Started

1. **Clone / download** the repository.

   ```bash
   git clone https://github.com/yourusername/roblox-script-generator.git
   cd roblox-script-generator
   ```

2. **Open** `index.html` in any modern browser (no server required).

3. **Obtain a free API key** from [OpenRouter](https://openrouter.ai).  
   *The free tier provides limited usage; see their docs for limits.*

4. **Use the app**  
   - Paste the API key.  
   - Describe the desired LocalPlayer behavior (e.g., “Teleport the player to (0,100,0) when they press T”).  
   - Click **Generate Script**.  
   - The generated Lua code appears below; click **Copy to Clipboard** to paste into Roblox Studio.

## 🔧 Customisation

- **Theme colours** – modify the CSS custom properties in `styles.css`.
- **Model/temperature** – edit the request payload in `script.js` if you want a different model or generation style.
- **Add a light‑mode toggle** – you can extend the CSS and JS to toggle `data-theme` attribute.

## 📜 License
This project is released under the MIT License. Feel free to fork, modify, and use it in your own projects.

--- 

*Happy scripting!*