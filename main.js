// true shows the "still in development" bar at the top of the page; false hides it
const SHOW_DEV_NOTICE = true;
document.querySelector('.notice').hidden = !SHOW_DEV_NOTICE;

const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .15 });
document.querySelectorAll('.pop').forEach(el => io.observe(el));

// marquee loops at -50%, so each track needs a second copy of its cards
document.querySelectorAll('.track').forEach(t => t.innerHTML += t.innerHTML);

// live Discord online count; the pill stays hidden if Discord can't be reached
const discord = 'https://discord.com/api';
fetch(discord + '/guilds/1267239953541365811/widget.json').then(r => r.json()).then(d => {
  const el = document.querySelector('.online');
  if (!el || !d.presence_count) return;
  el.querySelector('b').textContent = d.presence_count.toLocaleString(document.documentElement.lang);
  el.querySelector('.avs').replaceChildren(...(d.members || []).slice(0, 5).map(m => Object.assign(new Image(), { src: m.avatar_url, alt: '' })));
  el.hidden = false;
}).catch(() => {});


// galleries: buttons swap the screenshot; they cycle on their own until someone picks one
const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
document.querySelectorAll('.gal').forEach(g => {
  const img = g.querySelector('img'), bs = [...g.querySelectorAll('.thumbs button')];
  const show = b => { bs.forEach(x => x.setAttribute('aria-pressed', x === b)); img.src = b.dataset.src; img.alt = b.dataset.alt; };
  bs.forEach(b => b.addEventListener('click', () => { clearInterval(g.timer); show(b); }));
  if (!still) g.timer = setInterval(() => show(bs[(bs.findIndex(b => b.getAttribute('aria-pressed') === 'true') + 1) % bs.length]), 4500);
});

// hero: the right side rotates skins -> real screens -> gameplay; a dot jumps there and keeps rotating from it
const hero = document.querySelector('.hf');
if (hero) {
  const dots = [...hero.querySelectorAll('.hf-dots button')];
  const go = i => { hero.dataset.scene = i; dots.forEach((d, k) => d.setAttribute('aria-pressed', i === k)); };
  let timer;
  const auto = () => { clearInterval(timer); if (!still) timer = setInterval(() => go((+hero.dataset.scene + 1) % dots.length), 5000); };
  dots.forEach((d, i) => d.addEventListener('click', () => { go(i); auto(); }));
  auto();
  // the screenshot stack reshuffles every few seconds
  const fan = [...hero.querySelectorAll('.hc-s')];
  if (!still) setInterval(() => fan.forEach(s => { const i = +s.className.match(/p(\d)/)[1]; s.classList.replace('p' + i, 'p' + (i + 1) % 3); }), 3500);
}
