# selling-site1
<!DOCTYPE HTML>
<html lang="ro">
<head>
  <meta charset="utf-8" />
  <title>Dimension by HTML5 UP</title>
  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
  <link rel="stylesheet" href="style.css" />
</head>
<body class="is-preload">

  <!-- Wrapper -->
  <div id="wrapper">

    <!-- Header -->
    <header id="header">
      <div class="logo">
        <span class="icon fa-gem"></span>
      </div>
      <div class="content">
        <div class="inner">
          <h1>Selling Site</h1>
          <p>O temă HTML5 UP adaptată pentru GitHub Pages</p>
        </div>
      </div>
      <nav>
        <ul>
          <li><a href="#intro">Intro</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>

    <!-- Main -->
    <div id="main">

      <!-- Intro -->
      <article id="intro">
        <h2 class="major">Intro</h2>
        <span class="image main"><img src="images/pic01.jpg" alt="" /></span>
        <p>Aici poți scrie textul tău de prezentare...</p>
      </article>

      <!-- Work -->
      <article id="work">
        <h2 class="major">Work</h2>
        <span class="image main"><img src="images/pic02.jpg" alt="" /></span>
        <p>Aici poți pune descrierea produselor sau serviciilor tale.</p>
      </article>

      <!-- About -->
      <article id="about">
        <h2 class="major">About</h2>
        <span class="image main"><img src="images/pic03.jpg" alt="" /></span>
        <p>Scrie aici informații despre tine sau afacerea ta.</p>
      </article>

      <!-- Contact -->
      <article id="contact">
        <h2 class="major">Contact</h2>
        <form method="post" action="#">
          <div class="fields">
            <div class="field half">
              <label for="name">Nume</label>
              <input type="text" name="name" id="name" />
            </div>
            <div class="field half">
              <label for="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div class="field">
              <label for="message">Mesaj</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
          </div>
          <ul class="actions">
            <li><input type="submit" value="Trimite mesajul" class="primary" /></li>
            <li><input type="reset" value="Șterge" /></li>
          </ul>
        </form>
      </article>

    </div>

    <!-- Footer -->
    <footer id="footer">
      <p>&copy; 2025 Selling Site. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>

  </div>

  <!-- BG -->
  <div id="bg"></div>

  <!-- Scripts -->
  <script src="script.js"></script>

</body>
</html>
(function() {

  var $body = document.querySelector('body'),
      $wrapper = document.querySelector('#wrapper'),
      $articles = document.querySelectorAll('article');

  // Stop animations until load
  window.addEventListener('load', function() {
    setTimeout(function() {
      $body.classList.remove('is-preload');
    }, 100);
  });

  // Navigation
  window.addEventListener('hashchange', function(event) {
    var id = location.hash ? location.hash.substring(1) : null;

    if (!id || !document.getElementById(id)) {
      return;
    }

    // Hide all articles
    $articles.forEach(function(article) {
      article.style.display = 'none';
    });

    // Show the target article
    document.getElementById(id).style.display = 'block';
  });

})();
/* Dimension by HTML5 UP | html5up.net | @ajlkn
   Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/* Reset */

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

body {
  line-height: 1;
}

ol, ul {
  list-style: none;
}

blockquote, q {
  quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

/* Box sizing */

*, *:before, *:after {
  box-sizing: border-box;
}

/* Basic */

body {
  background: #1b1b1b;
  color: #fff;
  font-family: "Source Sans Pro", Helvetica, sans-serif;
  font-size: 16px;
  line-height: 1.65;
  -webkit-text-size-adjust: none;
  -ms-overflow-style: scrollbar;
}

a {
  color: #66ccff;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
/* Wrapper */

#wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  min-height: 100vh;
  width: 100%;
  padding: 4rem 2rem;
  z-index: 3;
}

#wrapper > * {
  margin: 2rem 0;
}

/* Header */

#header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

#header .logo {
  border-radius: 100%;
  border: solid 2px #fff;
  width: 6rem;
  height: 6rem;
  line-height: 6rem;
  margin-bottom: 1.5rem;
  font-size: 2.25rem;
  color: #fff;
}

#header .content {
  max-width: 600px;
}

#header .content .inner {
  display: inline-block;
  padding: 1rem 1.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 1rem;
}

#header h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: #fff;
}

#header p {
  font-size: 1.2rem;
  color: #aaa;
}

/* Nav */

#header nav {
  margin-top: 2rem;
}

#header nav ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

#header nav ul li a {
  display: block;
  padding: 0.6rem 1.2rem;
  border: solid 2px #fff;
  border-radius: 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: #fff;
  transition: all 0.3s ease;
}

#header nav ul li a:hover {
  background: #fff;
  color: #1b1b1b;
}
/* Main */

#main {
  position: relative;
  max-width: 900px;
  width: 100%;
  margin: 0 auto;
  z-index: 2;
}

/* Articles */

#main article {
  display: none;
  text-align: left;
  background: rgba(27, 27, 27, 0.95);
  padding: 2.5rem 2rem 2rem 2rem;
  border-radius: 1rem;
  margin-bottom: 2rem;
}

#main article.active {
  display: block;
}

#main article h2.major {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #fff;
}

#main article p {
  margin-bottom: 1.5rem;
  color: #ccc;
}

#main article .image.main {
  margin: 0 0 2rem 0;
}

#main article .image.main img {
  width: 100%;
  border-radius: 0.75rem;
  display: block;
}

/* Forms */

form {
  margin: 0;
}

form .fields {
  display: flex;
  flex-wrap: wrap;
  margin: -0.75rem 0 0 -0.75rem;
}

form .field {
  padding: 0.75rem 0 0 0.75rem;
  width: 100%;
}

form .field.half {
  width: 50%;
}

form label {
  display: block;
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: #fff;
}

form input[type="text"],
form textarea {
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: solid 1px #444;
  background: rgba(255, 255, 255, 0.05);
  color: #fff;
  font-size: 1rem;
}

form textarea {
  resize: none;
}

form .actions {
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
}

form .actions input[type="submit"],
form .actions input[type="reset"] {
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  background: #66ccff;
  color: #1b1b1b;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

form .actions input[type="submit"]:hover,
form .actions input[type="reset"]:hover {
  background: #fff;
}
/* Footer */

#footer {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  color: #777;
}

#footer a {
  color: #aaa;
}

#footer a:hover {
  color: #fff;
}

/* Background */

#bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("images/bg.jpg");
  background-size: cover;
  background-position: center;
  z-index: 1;
  filter: blur(2px) brightness(0.5);
}

/* Buttons */

.button,
input[type="submit"],
input[type="reset"],
input[type="button"] {
  display: inline-block;
  background: #66ccff;
  color: #1b1b1b;
  border: none;
  border-radius: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  transition: background 0.3s ease;
}

.button:hover,
input[type="submit"]:hover,
input[type="reset"]:hover,
input[type="button"]:hover {
  background: #fff;
}

/* Images */

.image {
  display: inline-block;
  border-radius: 0.5rem;
  overflow: hidden;
}

.image img {
  display: block;
  width: 100%;
}
/* Responsive */

/* Large desktops */
@media screen and (max-width: 1280px) {
  #header h1 {
    font-size: 2rem;
  }

  #main article h2.major {
    font-size: 1.75rem;
  }
}

/* Tablets */
@media screen and (max-width: 980px) {
  #wrapper {
    padding: 3rem 1.5rem;
  }

  #header .logo {
    width: 5rem;
    height: 5rem;
    line-height: 5rem;
    font-size: 1.75rem;
  }

  #header h1 {
    font-size: 1.75rem;
  }

  #main article {
    padding: 2rem 1.25rem;
  }
}

/* Smartphones */
@media screen and (max-width: 736px) {
  #wrapper {
    padding: 2rem 1rem;
  }

  #header .logo {
    width: 4rem;
    height: 4rem;
    line-height: 4rem;
    font-size: 1.5rem;
  }

  #header .content .inner {
    padding: 0.75rem 1rem;
  }

  #header h1 {
    font-size: 1.5rem;
  }

  #main article {
    padding: 1.5rem 1rem;
  }

  form .field.half {
    width: 100%;
  }
}

/* Smallest screens */
@media screen and (max-width: 480px) {
  #header nav ul {
    flex-direction: column;
    gap: 0.5rem;
  }

  #header nav ul li a {
    font-size: 0.85rem;
    padding: 0.5rem 1rem;
  }
}
