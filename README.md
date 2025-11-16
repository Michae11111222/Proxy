<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Game Plug</title>
<style>
  :root {
    --white: #fffff;
    --black: #000;
    --dark: #111;
  }

  /* ===== BACKGROUND STARS ===== */
  body {
    margin: 0;
    background: black;
    color: var(--red);
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    overflow-x: hidden;
    position: relative;
    height: 100vh;
  }

  /* Create stars using multiple layers */
  body::before,
  body::after {
    content: "";
    position: fixed;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    pointer-events: none;
    background: transparent;
    z-index: 0;
  }

  /* Small stars */
  body::before {
    background:
      radial-gradient(2px 2px at 20% 30%, white, transparent),
      radial-gradient(1.5px 1.5px at 50% 80%, white, transparent),
      radial-gradient(1.2px 1.2px at 70% 40%, white, transparent),
      radial-gradient(1.5px 1.5px at 80% 90%, white, transparent),
      radial-gradient(1.8px 1.8px at 90% 20%, white, transparent),
      radial-gradient(1px 1px at 40% 60%, white, transparent),
      radial-gradient(1.3px 1.3px at 60% 10%, white, transparent);
    animation: twinkle 5s infinite alternate ease-in-out;
  }

  /* Medium stars */
  body::after {
    background:
      radial-gradient(3px 3px at 10% 10%, white, transparent),
      radial-gradient(2.5px 2.5px at 30% 90%, white, transparent),
      radial-gradient(3px 3px at 50% 50%, white, transparent),
      radial-gradient(2.7px 2.7px at 75% 70%, white, transparent),
      radial-gradient(3px 3px at 85% 30%, white, transparent);
    animation: twinkle 8s infinite alternate ease-in-out;
  }

  @keyframes twinkle {
    0% {opacity: 0.7;}
    100% {opacity: 1;}
  }

  /* ===== HEADER ===== */
  header {
    padding: 40px 20px;
    border-bottom: 2px solid var(--red);
    position: relative;
    z-index: 2;
  }
  header h1 {
    margin: 0;
    font-size: 3rem;
    font-weight: 900;
  }
  header p {
    color: var(--light-red);
    margin-top: 10px;
  }

  /* ===== GRID ===== */
  .grid {
    width: 90%;
    max-width: 900px;
    margin: 40px auto;
    display: grid;
    gap: 25px;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    position: relative;
    z-index: 2;
  }
  .card {
    padding: 25px;
    background: var(--dark);
    border: 2px solid var(--red);
    border-radius: 10px;
    cursor: pointer;
    transition: 0.25s;
    text-decoration: none;
    color: var(--red);
  }
  .card:hover {
    background: var(--red);
    color: var(--black);
    transform: scale(1.05);
  }

  /* ===== PROXY UI ===== */
  .proxy-box {
    width: 90%;
    max-width: 500px;
    margin: 50px auto;
    padding: 25px;
    background: var(--dark);
    border: 2px solid var(--red);
    border-radius: 10px;
    position: relative;
    z-index: 2;
  }

  .proxy-box input,
  .proxy-box select {
    width: 80%;
    padding: 12px;
    margin-top: 10px;
    background: #000;
    border: 1px solid var(--red);
    color: var(--red);
  }

  .proxy-box button {
    width: 60%;
    padding: 12px 0;
    margin-top: 20px;
    background: var(--red);
    border: none;
    color: var(--black);
    cursor: pointer;
    font-weight: bold;
  }

  
  /* ===== FOOTER ===== */
  footer {
    margin-top: 60px;
    padding: 20px;
    border-top: 2px solid var(--red);
    position: relative;
    z-index: 2;
  }
</style>
</head>
<body>

<header>
  <h1>GAME PLUG</h1>
  <p>Your plug for games, UI tools & more.</p>
</header>

<div class="proxy-box">
  <h2>Proxy UI</h2>

  <input id="proxy-url" type="text" placeholder="Enter website URL..." />

  <select id="proxy-mode">
    <option>Stealth Mode</option>
    <option>Basic Mode</option>
    <option>Fast Mode</option>
  </select>

  <button onclick="Proxy()">Launch</button>

  <p class="loading-text" id="loading">Loading…</p>


<footer>
  <p>© 2025 Game Plug</p>
</footer>

<script>
  function Proxy() {
    let url = document.getElementById("proxy-url").value;
    let loading = document.getElementById("loading");
    
    loading.style.display = "block";
    error.style.display = "none";

    setTimeout(() => {
      loading.style.display = "none";
      error.style.display = "block";
    }, 1500);
  }
</script>

</body>
</html>
