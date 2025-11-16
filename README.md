<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Game Plug</title>
<style>
  :root {
    --red: #ff0000;
    --black: #000;
    --dark: #111;
    --light-red: #ff4d4d;
  }

  body {
    margin: 0;
    background: black;
    color: var(--red);
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    overflow-x: hidden;
    position: relative;
    min-height: 100vh;
  }

  body::before, body::after {
    content: "";
    position: fixed;
    top: 0; left: 0;
    width: 200%; height: 200%;
    pointer-events: none;
    background: transparent;
    z-index: 0;
  }

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

  body::after {
    background:
      radial-gradient(3px 3px at 10% 10%, white, transparent),
      radial-gradient(2.5px 2.5px at 30% 90%, white, transparent),
      radial-gradient(3px 3px at 50% 50%, white, transparent),
      radial-gradient(2.7px 2.7px at 75% 70%, white, transparent),
      radial-gradient(3px 3px at 85% 30%, white, transparent);
    animation: twinkle 8s infinite alternate ease-in-out;
  }

  @keyframes twinkle { 0% {opacity:0.7;} 100% {opacity:1;} }

  header { padding: 40px 20px; border-bottom: 2px solid var(--red); z-index:2; position:relative;}
  header h1 { margin:0; font-size:3rem; font-weight:900; }
  header p { color:var(--light-red); margin-top:10px; }

  .grid {
    width: 90%; max-width:900px; margin:40px auto;
    display:grid; gap:25px; grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
    z-index:2; position:relative;
  }

  .card {
    padding:25px; background:var(--dark); border:2px solid var(--red);
    border-radius:10px; cursor:pointer; transition:0.25s;
    text-decoration:none; color:var(--red);
  }
  .card:hover { background:var(--red); color:var(--black); transform:scale(1.05); }

  .proxy-box {
    width:90%; max-width:500px; margin:50px auto; padding:25px;
    background:var(--dark); border:2px solid var(--red); border-radius:10px;
    z-index:2; position:relative;
  }

  .proxy-box input, .proxy-box select {
    width:80%; padding:12px; margin-top:10px; background:#000;
    border:1px solid var(--red); color:var(--red);
  }

  .proxy-box button {
    width:60%; padding:12px 0; margin-top:20px;
    background:var(--red); border:none; color:var(--black); cursor:pointer; font-weight:bold;
  }

  .loading-text { margin-top:15px; color:var(--light-red); display:none; }
  .error-text { margin-top:15px; color:#ff4747; display:none; }

  footer { margin-top:60px; padding:20px; border-top:2px solid var(--red); z-index:2; position:relative; }
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
  <button onclick="launchProxy()">Launch</button>

  <p class="loading-text" id="loading">Loading…</p>
  <p class="error-text" id="error"></p>
  <p style="margin-top:10px;color:var(--light-red);font-size:0.9rem;">
    Real proxy powered by backend server.
  </p>
</div>

<div class="grid">
  <a class="card" href="#"> <h2>Game 1</h2> <p>Play</p> </a>
  <a class="card" href="#"> <h2>Game 2</h2> <p>Play</p> </a>
  <a class="card" href="#"> <h2>Game 3</h2> <p>Play</p> </a>
  <a class="card" href="#"> <h2>More Coming Soon</h2> <p>Stay Tuned</p> </a>
</div>

<footer> <p>© 2025 Game Plug</p> </footer>

<script>
async function launchProxy() {
  const urlInput = document.getElementById("proxy-url");
  const loading = document.getElementById("loading");
  const error = document.getElementById("error");
  const url = urlInput.value;

  if (!url) {
    error.textContent = "Please enter a URL.";
    error.style.display = "block";
    return;
  }

  loading.style.display = "block";
  error.style.display = "none";

  try {
    const response = await fetch(`/proxy?url=${encodeURIComponent(url)}`);
    if (!response.ok) throw new Error("Proxy fetch failed");
    const html = await response.text();
    document.open();
    document.write(html);
    document.close();
  } catch (err) {
    loading.style.display = "none";
    error.textContent = "Proxy failed: " + err.message;
    error.style.display = "block";
  }
}
</script>

</body>
</html>
