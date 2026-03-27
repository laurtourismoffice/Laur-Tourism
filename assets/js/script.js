/* assets/js/script.js — Laur Tourism */

/* ── DROPDOWN NAV ── */
document.querySelectorAll('.dropdown').forEach(function(dd){
  var menu = dd.querySelector('.dropdown-menu');
  var timer;
  dd.addEventListener('mouseenter', function(){
    clearTimeout(timer);
    document.querySelectorAll('.dropdown-menu').forEach(function(m){ m.style.display = 'none'; });
    menu.style.display = 'block';
  });
  dd.addEventListener('mouseleave', function(){
    timer = setTimeout(function(){ menu.style.display = 'none'; }, 150);
  });
  menu.addEventListener('mouseenter', function(){ clearTimeout(timer); });
  menu.addEventListener('mouseleave', function(){
    timer = setTimeout(function(){ menu.style.display = 'none'; }, 150);
  });
  dd.querySelector('a').addEventListener('click', function(e){
    var isOpen = menu.style.display === 'block';
    document.querySelectorAll('.dropdown-menu').forEach(function(m){ m.style.display = 'none'; });
    if(isOpen){ menu.style.display = 'none'; } else { e.preventDefault(); menu.style.display = 'block'; }
  });
});
document.addEventListener('click', function(e){
  if(!e.target.closest('.dropdown')){
    document.querySelectorAll('.dropdown-menu').forEach(function(m){ m.style.display = 'none'; });
  }
});

/* ── SCROLL: NAV SHADOW + LAZY LOAD ── */
window.addEventListener('scroll', function(){
  var nav = document.getElementById('navbar');
  if(nav){ nav.classList.toggle('scrolled', window.scrollY > 20); }
  lazyLoad();
});

function lazyLoad(){
  document.querySelectorAll('[data-src]').forEach(function(el){
    if(el.getBoundingClientRect().top < window.innerHeight + 300){
      if(el.tagName === 'IMG'){ el.src = el.getAttribute('data-src'); }
      else { el.style.backgroundImage = 'url(' + el.getAttribute('data-src') + ')'; }
      el.removeAttribute('data-src');
    }
  });
}
window.addEventListener('load', lazyLoad);

/* ── MOBILE MENU ── */
function toggleMobile(){
  var m = document.getElementById('mobileMenu');
  var h = document.getElementById('ham');
  if(!m) return;
  var isOpen = m.classList.toggle('open');
  if(h) h.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

/* ── FILTER PILLS ── */
function filterCards(btn, group, cat){
  var gridId = group === 'attr' ? 'attr-grid' : 'shop-grid';
  var grid = document.getElementById(gridId);
  if(!grid) return;
  grid.querySelectorAll('[data-cat]').forEach(function(c){
    c.style.display = (cat === 'all' || c.getAttribute('data-cat') === cat) ? '' : 'none';
  });
  btn.closest('.pills').querySelectorAll('.pill').forEach(function(p){
    p.classList.remove('on'); p.setAttribute('aria-pressed', 'false');
  });
  btn.classList.add('on'); btn.setAttribute('aria-pressed', 'true');
}

function filterGallery(btn, cat){
  document.querySelectorAll('#galleryGrid [data-cat]').forEach(function(g){
    g.style.display = (cat === 'all' || g.getAttribute('data-cat') === cat) ? '' : 'none';
  });
  btn.closest('.pills').querySelectorAll('.pill').forEach(function(p){
    p.classList.remove('on'); p.setAttribute('aria-pressed', 'false');
  });
  btn.classList.add('on'); btn.setAttribute('aria-pressed', 'true');
}

/* ── PAGINATION ── */
var pgCur = 1, pgTotal = 3, perPage = 8;
function goPage(n){
  pgCur = n;
  document.querySelectorAll('.pg-btn').forEach(function(b){
    var t = b.textContent.trim();
    if(!isNaN(t)){
      b.classList.toggle('active', parseInt(t) === n);
      b.setAttribute('aria-current', parseInt(t) === n ? 'page' : 'false');
    }
  });
  var info = document.getElementById('pg-info');
  if(info) info.textContent = 'Page ' + n + ' of ' + pgTotal + ' \u2014 ' + perPage + ' photos per page';
}
function changePage(d){ var np = pgCur + d; if(np >= 1 && np <= pgTotal) goPage(np); }

/* ── HERO SLIDESHOW ── */
var cur = 0, tmr;
var slides = document.querySelectorAll('.slide');
var dots   = document.querySelectorAll('.dot');
if(slides.length){
  function go(n){
    slides[cur].classList.remove('active');
    dots[cur].classList.remove('on');
    cur = (n + slides.length) % slides.length;
    slides[cur].classList.add('active');
    dots[cur].classList.add('on');
    var sn = document.getElementById('sn');
    if(sn) sn.textContent = cur + 1;
    clearInterval(tmr);
    tmr = setInterval(function(){ go(cur + 1); }, 5500);
  }
  tmr = setInterval(function(){ go(cur + 1); }, 5500);
}

/* ── CHAT WIDGET ── */
function toggleChat(){
  var p = document.getElementById('chatPopup');
  var b = document.getElementById('chatBtn');
  if(!p) return;
  var isOpen = p.classList.toggle('open');
  if(b) b.setAttribute('aria-expanded', isOpen);
  var badge = document.querySelector('.chat-badge');
  if(badge) badge.style.display = 'none';
}
function selectQ(btn){
  var input = document.querySelector('.chat-input');
  if(input){ input.value = btn.textContent.trim(); input.focus(); }
}

/* ── MODAL (simple, used on visit/attractions pages) ── */
function openModal(name, type, loc, hrs, fee, tel, img){
  document.getElementById('modal-title').textContent  = name;
  document.getElementById('modal-type').textContent   = type;
  document.getElementById('modal-loc').textContent    = loc;
  document.getElementById('modal-hrs').textContent    = hrs;
  document.getElementById('modal-fee').innerHTML      = fee;
  document.getElementById('modal-tel').textContent    = tel;
  document.getElementById('modal-photo').style.backgroundImage = 'url(' + img + ')';
  var callBtn = document.getElementById('modal-call-btn');
  if(callBtn) callBtn.onclick = function(){ window.location.href = 'tel:' + tel.replace(/[^0-9]/g,''); };
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(e){
  if(e.target.id === 'modal'){ closeModalBtn(); }
}
function closeModalBtn(){
  var m = document.getElementById('modal');
  if(m){ m.classList.remove('open'); document.body.style.overflow = ''; }
}

/* ── DOM READY ── */
document.addEventListener('DOMContentLoaded', function(){
  var mc = document.querySelector('.modal-close');
  if(mc) mc.addEventListener('click', closeModalBtn);

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      closeModalBtn();
      var cp = document.getElementById('chatPopup');
      if(cp) cp.classList.remove('open');
      var mm = document.getElementById('mobileMenu');
      if(mm){ mm.classList.remove('open'); document.body.style.overflow = ''; }
    }
  });

  updateStats();
});

/* ── DYNAMIC STATS ── */
function updateStats(){
  var stats = document.querySelectorAll('.stat');
  if(!stats.length) return;

  var attrGrid = document.getElementById('attr-grid');
  var stayGrid = document.getElementById('stay-grid');
  var data = typeof LAUR_DATA !== 'undefined' ? LAUR_DATA : null;

  stats.forEach(function(stat){
    var label = stat.querySelector('.stat-l');
    var numEl = stat.querySelector('.stat-n');
    if(!label || !numEl) return;
    var labelText = label.textContent.trim().toLowerCase();

    if(labelText.includes('attraction')){
      var count = attrGrid
        ? attrGrid.querySelectorAll('.card').length
        : (data ? data.attractions : null);
      if(count) numEl.textContent = count + '+';
    }
    if(labelText.includes('resort') || labelText.includes('stay') || labelText.includes('accommodation')){
      var count = stayGrid
        ? stayGrid.querySelectorAll('.card').length
        : (data ? data.stays : null);
      if(count) numEl.textContent = count + '+';
    }
    if(labelText.includes('barangay') && data) numEl.textContent = data.barangays;
    if(labelText.includes('cabanatuan') && data) numEl.textContent = data.distanceHours;
  });
}