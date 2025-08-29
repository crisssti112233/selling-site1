<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Magazin de Afiliere – Best Deals</title>
  <meta name="description" content="Magazin de afiliere: compară oferte, descoperă cele mai bune prețuri și economisește timp & bani." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    :root{--bg:#0b0d10;--card:#12161a;--muted:#8a96a3;--text:#eaf0f6;--brand:#00c2ff;--brand-2:#66ff66;--danger:#ff6161}
    *{box-sizing:border-box}
    html,body{margin:0;padding:0;background:var(--bg);color:var(--text);font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif}
    a{color:inherit;text-decoration:none}
    header{position:sticky;top:0;z-index:50;backdrop-filter:blur(8px);background:linear-gradient(180deg,rgba(11,13,16,.9),rgba(11,13,16,.6));border-bottom:1px solid #1b2127}
    .container{max-width:1100px;margin:0 auto;padding:16px}
    .nav{display:flex;gap:16px;align-items:center;justify-content:space-between}
    .brand{display:flex;gap:10px;align-items:center;font-weight:700}
    .brand .logo{width:32px;height:32px;border-radius:10px;background:linear-gradient(135deg,var(--brand),var(--brand-2));display:grid;place-items:center;color:#001016;font-weight:800}
    .tools{display:flex;gap:10px;flex-wrap:wrap}
    .input{background:#0f1317;border:1px solid #1b2127;border-radius:12px;padding:10px 12px;color:var(--text)}
    .btn{background:linear-gradient(135deg,var(--brand),#4cf);border:0;color:#001016;font-weight:700;padding:10px 14px;border-radius:12px;cursor:pointer}
    .btn.secondary{background:#192028;color:var(--text);border:1px solid #283241}
    .hero{padding:32px 0;border-bottom:1px solid #1b2127}
    .hero h1{font-size:clamp(24px,4vw,40px);margin:0 0 8px}
    .muted{color:var(--muted)}
    .grid{display:grid;grid-template-columns:repeat(12,1fr);gap:16px}
    .filters{grid-column:span 12;background:var(--card);border:1px solid #1b2127;border-radius:16px;padding:12px;display:flex;gap:10px;flex-wrap:wrap;align-items:center}
    .chip{padding:8px 12px;border-radius:999px;border:1px solid #283241;background:#141a20;cursor:pointer}
    .chip.active{border-color:var(--brand);box-shadow:0 0 0 2px rgba(0,194,255,.2) inset}
    .catalog{grid-column:span 12;display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}
    .card{background:var(--card);border:1px solid #1b2127;border-radius:16px;overflow:hidden;display:flex;flex-direction:column}
    .thumb{aspect-ratio:4/3;background:#0f1317;display:grid;place-items:center}
    .thumb img{max-width:100%;max-height:100%;object-fit:cover}
    .card-body{padding:12px;display:grid;gap:8px}
    .title{font-weight:700;line-height:1.2}
    .price{display:flex;align-items:center;gap:8px}
    .price .now{font-weight:800;color:var(--brand-2)}
    .price .was{color:#a66;text-decoration:line-through}
    .tags{display:flex;gap:6px;flex-wrap:wrap}
    .tag{font-size:12px;color:var(--muted);padding:4px 8px;border:1px dashed #2a3442;border-radius:999px}
    .actions{display:flex;gap:8px}
    .btn.buy{flex:1}
    .btn.link{background:#142029;color:var(--text);border:1px solid #283241}
    .wish{margin-left:auto;background:#1a222b;border:1px solid #2b3646;border-radius:12px;padding:8px 10px;cursor:pointer}
    .wish.active{border-color:#f77;background:#2b1b1b;color:#ffd0d0}
    footer{border-top:1px solid #1b2127;margin-top:40px}
    .cols{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px}
    .card.simple{padding:16px}
    .badge{font-size:12px;background:linear-gradient(135deg,var(--brand),#4cf);color:#001016;border-radius:999px;padding:4px 8px;font-weight:800}
    .notice{background:#10151a;border:1px solid #223042;border-radius:14px;padding:10px}
    .cookie{position:fixed;inset:auto 16px 16px 16px;background:#0f151b;border:1px solid #223042;border-radius:14px;padding:12px;display:none;z-index:60}
    .cookie.show{display:flex;gap:12px;flex-wrap:wrap;align-items:center;justify-content:space-between}
    .sr{position:absolute;left:-9999px}
  </style>
</head>
<body>
  <header>
    <div class="container nav">
      <div class="brand"><div class="logo">⟡</div> BestDeals <span class="badge">Afiliere</span></div>
      <div class="tools">
        <input id="q" class="input" placeholder="Caută produse... (ex. căști, smartwatch)" />
        <select id="sort" class="input" aria-label="Sortează">
          <option value="relevant">Sortează: Relevant</option>
          <option value="price-asc">Preț: Crescător</option>
          <option value="price-desc">Preț: Descrescător</option>
          <option value="rating-desc">Rating: Mare → Mic</option>
        </select>
        <button id="subscribeBtn" class="btn secondary">Abonează-te</button>
      </div>
    </div>
  </header>

  <main class="container">
    <section class="hero">
      <h1>Găsește <span style="background:linear-gradient(135deg,var(--brand),var(--brand-2));-webkit-background-clip:text;background-clip:text;color:transparent">cele mai bune oferte</span> într-un singur loc</h1>
      <p class="muted">Comparații de preț, recomandări curate și linkuri de afiliere către magazine de încredere. Economisești timp & bani.</p>
    </section>

    <section class="grid" aria-label="Filtre și catalog">
      <div class="filters" role="toolbar" aria-label="Filtre">
        <span class="muted">Categorii:</span>
        <button class="chip active" data-cat="toate">Toate</button>
        <button class="chip" data-cat="electronice">Electronice</button>
        <button class="chip" data-cat="gadgeturi">Gadgeturi</button>
        <button class="chip" data-cat="fashion">Fashion</button>
        <button class="chip" data-cat="casa">Casă</button>
        <span class="muted" style="margin-left:auto">⭐ Favorite: <span id="favCount">0</span></span>
      </div>

      <div id="catalog" class="catalog" aria-live="polite"></div>
    </section>

    <section style="margin-top:24px" class="cols">
      <div class="card simple">
        <h3>De ce noi?</h3>
        <p>Adunăm oferte din mai multe magazine, comparăm prețuri și îți recomandăm variantele cu cel mai bun raport calitate/preț.</p>
        <ul class="muted">
          <li>✔ Linkuri de afiliere transparente (disclaimer inclus)</li>
          <li>✔ Ghiduri & review-uri utile</li>
          <li>✔ Fără costuri pentru tine</li>
        </ul>
      </div>
      <div class="card simple">
        <h3>Abonare la oferte</h3>
        <p>Primești cele mai bune reduceri direct pe email.</p>
        <form id="newsletter" onsubmit="event.preventDefault(); handleSubscribe();">
          <label class="sr" for="email">Email</label>
          <input id="email" class="input" type="email" placeholder="email@exemplu.com" required>
          <button class="btn" type="submit">Mă abonez</button>
          <p id="subMsg" class="muted" style="margin-top:8px"></p>
        </form>
      </div>
      <div class="card simple notice">
        <h3>Disclaimer afiliere</h3>
        <p class="muted">Anumite linkuri sunt linkuri de afiliere. Dacă cumperi prin ele, noi putem primi un comision. Pentru tine, prețul rămâne același.</p>
      </div>
    </section>
  </main>

  <footer class="container" style="padding:24px 16px 80px">
    <div class="cols">
      <div>
        <h4>Despre</h4>
        <p class="muted">BestDeals este un magazin de afiliere: te ajutăm să găsești rapid cele mai bune prețuri. Nu vindem direct produse.</p>
      </div>
      <div>
        <h4>Legal</h4>
        <ul class="muted" style="list-style:none;padding:0;margin:0;display:grid;gap:6px">
          <li><a href="#" onclick="alert('Politica de confidențialitate – adaugă propriul text.');return false;">Politica de confidențialitate</a></li>
          <li><a href="#" onclick="alert('Politica cookies – adaugă propriul text.');return false;">Politica cookies</a></li>
          <li><a href="#" onclick="alert('Termeni & condiții – adaugă propriul text.');return false;">Termeni & condiții</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul class="muted" style="list-style:none;padding:0;margin:0;display:grid;gap:6px">
          <li>Email: <a href="mailto:hello@bestdeals.ro">hello@bestdeals.ro</a></li>
          <li>Instagram: <a href="#">@bestdeals</a></li>
          <li>Facebook: <a href="#">/bestdeals</a></li>
        </ul>
      </div>
    </div>
  </footer>

  <div id="cookie" class="cookie" role="dialog" aria-live="polite">
    <div>
      <strong>Cookie-uri</strong>
      <p class="muted" style="margin:4px 0 0">Folosim cookie-uri pentru a îmbunătăți experiența. <a href="#" onclick="alert('Politica cookies – adaugă propriul text.');return false;">Află mai mult</a>.</p>
    </div>
    <div style="display:flex;gap:8px">
      <button class="btn secondary" onclick="rejectCookies()">Respinge</button>
      <button class="btn" onclick="acceptCookies()">Acceptă</button>
    </div>
  </div>

  <template id="card-template">
    <article class="card">
      <div class="thumb"><img alt="" loading="lazy"></div>
      <div class="card-body">
        <div class="tags"></div>
        <h3 class="title"></h3>
        <div class="price"></div>
        <div class="actions">
          <a class="btn buy" target="_blank" rel="nofollow noopener">Cumpără acum</a>
          <button class="btn link" title="Vezi detalii" data-details>Detalii</button>
          <button class="wish" title="Adaugă la favorite" data-wish>♡</button>
        </div>
      </div>
    </article>
  </template>

  <script>
    // ====== DATE DEMO PRODUSE (poți înlocui cu CSV/JSON dinamic mai târziu) ======
    const PRODUCTS = [
      {id:"p1", title:"Căști wireless ANC X200", img:"https://images.unsplash.com/photo-1518441902113-c1d3b5d99cef?q=80&w=800&auto=format&fit=crop", priceNow:249.99, priceWas:399.99, rating:4.7, tags:["electronice","gadgeturi"], aff:"https://exemplu-magazin.com/casti-x200?aff=IDUL_TAU"},
      {id:"p2", title:"Smartwatch Fit+", img:"https://images.unsplash.com/photo-1518443881257-9a191cdd6e2b?q=80&w=800&auto=format&fit=crop", priceNow:329.00, priceWas:389.00, rating:4.5, tags:["gadgeturi","fashion"], aff:"https://exemplu-magazin.com/smartwatch-fit?aff=IDUL_TAU"},
      {id:"p3", title:"Aspirator robot R3", img:"https://images.unsplash.com/photo-1584645763573-0cf4b5f64b1a?q=80&w=800&auto=format&fit=crop", priceNow:1199.00, priceWas:1599.00, rating:4.6, tags:["casa","electronice"], aff:"https://exemplu-magazin.com/robot-r3?aff=IDUL_TAU"},
      {id:"p4", title:"Rucsac urban impermeabil", img:"https://images.unsplash.com/photo-1516726817505-f5ed825624d8?q=80&w=800&auto=format&fit=crop", priceNow:149.00, priceWas:199.00, rating:4.3, tags:["fashion","gadgeturi"], aff:"https://exemplu-magazin.com/rucsac-urban?aff=IDUL_TAU"},
      {id:"p5", title:"Televizor 4K 55'' UltraVision", img:"https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=800&auto=format&fit=crop", priceNow:2199.00, priceWas:2799.00, rating:4.8, tags:["electronice"], aff:"https://exemplu-magazin.com/tv-4k-55?aff=IDUL_TAU"},
      {id:"p6", title:"Espressor automat BaristaHome", img:"https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=800&auto=format&fit=crop", priceNow:899.00, priceWas:1199.00, rating:4.4, tags:["casa"], aff:"https://exemplu-magazin.com/espressor?aff=IDUL_TAU"}
    ];

    // ====== UTILITARE ======
    const $ = sel => document.querySelector(sel);
    const $$ = sel => Array.from(document.querySelectorAll(sel));
    const state = { cat: 'toate', q: '', sort: 'relevant', fav: new Set(JSON.parse(localStorage.getItem('fav')||'[]')) };

    function saveFav(){ localStorage.setItem('fav', JSON.stringify([...state.fav])); $('#favCount').textContent = state.fav.size; }

    function priceFmt(n){ return new Intl.NumberFormat('ro-RO',{style:'currency',currency:'RON'}).format(n); }

    function render(){
      const root = $('#catalog');
      root.innerHTML='';
      let list = PRODUCTS.filter(p=> state.cat==='toate' || p.tags.includes(state.cat));
      if(state.q){
        const q = state.q.toLowerCase();
        list = list.filter(p => p.title.toLowerCase().includes(q));
      }
      switch(state.sort){
        case 'price-asc': list.sort((a,b)=>a.priceNow-b.priceNow); break;
        case 'price-desc': list.sort((a,b)=>b.priceNow-a.priceNow); break;
        case 'rating-desc': list.sort((a,b)=>b.rating-a.rating); break;
        default: list.sort((a,b)=> b.rating - a.rating); // relevant ~ rating desc
      }
      const tpl = document.getElementById('card-template');
      list.forEach(p=>{
        const node = tpl.content.cloneNode(true);
        node.querySelector('.thumb img').src = p.img;
        node.querySelector('.thumb img').alt = p.title;
        node.querySelector('.title').textContent = p.title;
        const price = node.querySelector('.price');
        price.innerHTML = `<span class="now">${priceFmt(p.priceNow)}</span> <span class="was">${priceFmt(p.priceWas)}</span> <span class="muted">• ⭐ ${p.rating}</span>`;
        const tags = node.querySelector('.tags');
        p.tags.forEach(t=>{ const s = document.createElement('span'); s.className='tag'; s.textContent = t; tags.appendChild(s); });
        const buy = node.querySelector('.buy');
        buy.href = p.aff; // link de afiliere
        buy.addEventListener('click',()=>{
          // aici poți trimite evenimente către analytics
        });
        const details = node.querySelector('[data-details]');
        details.addEventListener('click',()=>{
          alert(`${p.title}\n\n• Preț: ${priceFmt(p.priceNow)}\n• Rating: ${p.rating}\n\nDescriere: Adaugă o descriere scurtă a produsului.\n\nNotă: Vei fi redirecționat către magazinul partener pentru achiziție.`);
        });
        const wish = node.querySelector('[data-wish]');
        const favOn = state.fav.has(p.id);
        if(favOn) wish.classList.add('active');
        wish.textContent = favOn? '❤' : '♡';
        wish.addEventListener('click',()=>{
          if(state.fav.has(p.id)) state.fav.delete(p.id); else state.fav.add(p.id);
          saveFav(); render();
        });
        root.appendChild(node);
      });
      if(!list.length){
        root.innerHTML = `<div class="card simple" style="grid-column:1/-1"><strong>Niciun rezultat</strong><p class="muted">Încearcă altă căutare sau categorie.</p></div>`
      }
    }

    // ====== EVENIMENTE UI ======
    $$('#\n      .chip\n    ').forEach(btn=>{
      btn.addEventListener('click',()=>{
        $$('.chip').forEach(c=>c.classList.remove('active'));
        btn.classList.add('active');
        state.cat = btn.dataset.cat; render();
      });
    });
    $('#q').addEventListener('input', e=>{ state.q = e.target.value; render(); });
    $('#sort').addEventListener('change', e=>{ state.sort = e.target.value; render(); });

    // ====== NEWSLETTER (demo) ======
    function handleSubscribe(){
      const email = $('#email').value.trim();
      if(!email) return;
      localStorage.setItem('newsletter_email', email);
      $('#subMsg').textContent = 'Mulțumim! Verifică inbox-ul pentru confirmare.';
      setTimeout(()=>{ $('#subMsg').textContent=''; $('#email').value=''; }, 4000);
    }
    window.handleSubscribe = handleSubscribe;
    document.getElementById('subscribeBtn').addEventListener('click',()=>{
      document.getElementById('email').focus();
      document.getElementById('email').scrollIntoView({behavior:'smooth', block:'center'});
    });

    // ====== COOKIE BANNER ======
    const cookieBox = document.getElementById('cookie');
    function acceptCookies(){ localStorage.setItem('cookie_ok','1'); cookieBox.classList.remove('show'); }
    function rejectCookies(){ localStorage.setItem('cookie_ok','0'); cookieBox.classList.remove('show'); }
    window.acceptCookies = acceptCookies; window.rejectCookies = rejectCookies;
    if(!localStorage.getItem('cookie_ok')){ setTimeout(()=>cookieBox.classList.add('show'), 800); }

    // ====== INIT ======
    saveFav();
    render();
  </script>
</body>
</html>
