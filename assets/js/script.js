/* assets/js/script.js — Laur Tourism */

// NAV
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

// MODAL
/* ── MODAL ── */
function openModal(title,type,loc,hrs,fee,img,contact,coords,noMap){
  document.getElementById('modal-title').textContent=title;
  document.getElementById('modal-type').textContent=type;
  document.getElementById('modal-loc').textContent=loc;
  var pi=document.getElementById('modal-photo-img');pi.src=img;pi.alt=title;
  var cr=document.getElementById('modal-contact-row');
  if(contact){document.getElementById('modal-contact').textContent=contact;cr.style.display='block';}else{cr.style.display='none';}
  var hr=document.getElementById('modal-hrs-row');
  if(hrs){document.getElementById('modal-hrs').textContent=hrs;hr.classList.add('visible');}else{hr.classList.remove('visible');}
  var fr=document.getElementById('modal-fee-row');
  if(fee){document.getElementById('modal-fee').textContent=fee;fr.classList.add('visible');}else{fr.classList.remove('visible');}
  var box=document.querySelector('.modal-box');
  var mapEmbed=document.querySelector('.modal-map-embed');
  var mapLink=document.getElementById('modal-map-link');
  if(noMap){
    if(mapEmbed)mapEmbed.style.display='none';
    if(mapLink)mapLink.style.display='none';
    if(box)box.classList.add('modal-nomap');
  }else{
    if(mapEmbed)mapEmbed.style.display='';
    if(mapLink)mapLink.style.display='';
    if(box)box.classList.remove('modal-nomap');
    var ll=coords||'15.557711,121.226314';
    document.getElementById('modal-map-iframe').src='https://maps.google.com/maps?q='+ll+'&z=16&t=m&output=embed&iwloc=near';
    document.getElementById('modal-map-link').href='https://www.google.com/maps?q='+ll;
  }
  document.getElementById('modal').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModalBtn(){document.getElementById('modal').classList.remove('open');document.body.style.overflow='';}
function closeModal(e){if(e.target.id==='modal')closeModalBtn();}

// FILTERS
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

function filterShops(btn, cat) {
  document.querySelectorAll('.pill').forEach(function(p){p.classList.remove('on');});
  btn.classList.add('on');
  var grid = document.getElementById('shop-grid');
  if (!grid) return;
  grid.querySelectorAll('.shop-card').forEach(function(card) {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
  var moreWrap = document.getElementById('shop-more-wrap');
  if (moreWrap) {
    var hasHidden = grid.querySelectorAll('.shop-hidden').length > 0;
    moreWrap.style.display = hasHidden ? '' : 'none';
  }
}

// PAGINATION
/* ── PAGINATION ── */
var currentPage = 1, pgTotal = 3, perPage = 8;
function goPage(n){
  currentPage = n;
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
function changePage(d){ var np = currentPage + d; if(np >= 1 && np <= pgTotal) goPage(np); }

// HERO SLIDESHOW
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

// CHAT
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

// SHOW MORE
/* ── SHOW MORE ── */
function showMore(section) {
  document.querySelectorAll('.' + section + '-hidden').forEach(function(el) {
    el.style.display = '';
    el.classList.remove(section + '-hidden');
    el.classList.add('anim-block','anim-fade');
    observer.observe(el);
  });
  var w = document.getElementById(section + '-more-wrap');
  if (w) w.style.display = 'none';
}

// GALLERY LIGHTBOX
/* ── GALLERY LIGHTBOX ── */
var allImgs = Array.from(document.querySelectorAll('#galleryGrid .gimg'));
var visible = allImgs.slice();
var lbIdx = 0;

function attachClicks(){
  visible.forEach(function(el,i){ el.onclick = function(){ openLb(i); }; });
}
if(allImgs.length) attachClicks();

function filterGallery(btn, cat){
  document.querySelectorAll('.pill').forEach(function(p){ p.classList.remove('on'); });
  btn.classList.add('on');
  visible = [];
  allImgs.forEach(function(el){
    var show = cat==='all' || el.dataset.cat===cat;
    el.style.display = show ? '' : 'none';
    if(show) visible.push(el);
  });
  attachClicks();
}

function buildThumbs(){
  var strip = document.getElementById('lbThumbs');
  if(!strip) return;
  strip.innerHTML = '';
  visible.forEach(function(el,i){
    var bg = el.querySelector('.gimg-inner').style.backgroundImage;
    var t = document.createElement('div');
    t.className = 'lb-thumb' + (i===lbIdx?' on':'');
    t.style.backgroundImage = bg;
    t.onclick = function(){ lbIdx=i; updateLb(); };
    strip.appendChild(t);
  });
}

function openLb(idx){
  lbIdx = idx;
  buildThumbs();
  updateLb();
  document.getElementById('lb').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLb(){
  document.getElementById('lb').classList.remove('open');
  document.body.style.overflow = '';
}
function updateLb(){
  var el = visible[lbIdx];
  var bg = el.querySelector('.gimg-inner').style.backgroundImage;
  document.getElementById('lbPhoto').style.backgroundImage = bg;
  document.getElementById('lbCaption').textContent = el.dataset.caption || '';
  document.getElementById('lbCount').textContent = (lbIdx+1) + ' / ' + visible.length;
  document.getElementById('lbBadge').textContent = el.dataset.catLabel || '';
  document.getElementById('lbTitle').textContent = el.dataset.caption || '';
  document.getElementById('lbDesc').textContent = el.dataset.desc || '';
  var txt = document.getElementById('lbImgText');
  if(txt){ txt.style.animation='none'; void txt.offsetWidth; txt.style.animation=''; }
  var thumbs = document.querySelectorAll('.lb-thumb');
  thumbs.forEach(function(t,i){ t.classList.toggle('on', i===lbIdx); });
  if(thumbs[lbIdx]) thumbs[lbIdx].scrollIntoView({block:'nearest',inline:'center'});
}
function lbNav(dir){
  lbIdx = (lbIdx+dir+visible.length)%visible.length;
  document.getElementById('lbPhoto').style.animation='none';
  setTimeout(function(){
    document.getElementById('lbPhoto').style.animation='';
    updateLb();
  },10);
  updateLb();
}

// ANIMATIONS
/* ── ANIMATIONS ── */
var observer = new IntersectionObserver(function(entries){
  entries.forEach(function(e){
    if(e.isIntersecting){
      e.target.classList.add('in-view');
      if(e.target.classList.contains('eyebrow'))e.target.classList.add('line-visible');
      observer.unobserve(e.target);
    }
  });
},{threshold:0.14});
document.querySelectorAll('.anim-block').forEach(function(el){observer.observe(el);});

// DATA-DRIVEN CONTENT
/* ── POPULATE ATTRACTIONS ── */
function populateAttractions() {
  const grid = document.getElementById('attr-grid');
  if (!grid) {
    console.error('attr-grid not found');
    return;
  }
  if (typeof attractions === 'undefined') {
    console.error('attractions array not defined. Check if data.js loaded properly.');
    return;
  }

  // Clear existing content
  grid.innerHTML = '';

  // Create visible cards (first 4: natural attractions)
  const visibleAttractions = attractions.slice(0, 4);
  visibleAttractions.forEach((attr, index) => {
    const card = createAttractionCard(attr, index + 1);
    grid.appendChild(card);
    observer.observe(card); // ← FIX: observe after appending so animation triggers
  });

  // Create hidden cards (remaining attractions)
  const hiddenAttractions = attractions.slice(4);
  hiddenAttractions.forEach((attr, index) => {
    const card = createAttractionCard(attr, index + 5);
    card.classList.add('attr-hidden');
    card.style.display = 'none';
    grid.appendChild(card);
    observer.observe(card); // ← FIX: observe after appending so animation triggers on showMore
  });
}

function createAttractionCard(attr, delayNum) {
  const article = document.createElement('article');
  article.className = `card anim-block anim-fade delay-${delayNum}`;
  article.setAttribute('data-cat', attr.category);

  const categoryLabel = attr.category === 'natural' ? 'Natural' : 'Man-made';

  article.onclick = () => openModal(
    attr.title,
    attr.type,
    attr.location + ', Laur, Nueva Ecija',
    '', // hours
    '', // fee
    attr.modalImage,
    attr.contact,
    attr.coordinates
  );

  article.innerHTML = `
    <div class="card-img" style="background-image:url('${attr.image}')"></div>
    <div class="card-overlay">
      <div class="card-title">${attr.title}</div>
      <div class="card-desc">${attr.description}</div>
      <div class="card-pills">
        <span class="cpill green">${categoryLabel}</span>
        <span class="cpill">${attr.location}</span>
      </div>
    </div>
  `;

  return article;
}

/* ── POPULATE STAYS ── */
function populateStays() {
  const grid = document.getElementById('stay-grid');
  if (!grid) {
    console.error('stay-grid not found');
    return;
  }
  if (typeof stays === 'undefined') {
    console.error('stays array not defined. Check if data.js loaded properly.');
    return;
  }

  // Clear existing content
  grid.innerHTML = '';

  // Create visible cards (first 4 stays)
  const visibleStays = stays.slice(0, 4);
  visibleStays.forEach((stay, index) => {
    const card = createStayCard(stay, index + 1);
    grid.appendChild(card);
    observer.observe(card); // ← FIX: observe after appending so animation triggers
  });

  // Create hidden cards (remaining stays)
  const hiddenStays = stays.slice(4);
  hiddenStays.forEach((stay, index) => {
    const card = createStayCard(stay, index + 5);
    card.classList.add('stay-hidden');
    card.style.display = 'none';
    grid.appendChild(card);
    observer.observe(card); // ← FIX: observe after appending so animation triggers on showMore
  });
}

function createStayCard(stay, delayNum) {
  const article = document.createElement('article');
  article.className = `card anim-block anim-fade delay-${delayNum}`;

  const categoryLabel = stay.category === 'resort' ? 'Resort' :
                       stay.category === 'camp' ? 'Camp' :
                       stay.category === 'farm-resort' ? 'Farm Resort' : 'Stay';

  article.onclick = () => openModal(
    stay.title,
    stay.type,
    stay.location + ', Laur, Nueva Ecija',
    '', // hours
    '', // fee
    stay.modalImage,
    stay.contact,
    stay.coordinates
  );

  article.innerHTML = `
    <div class="card-img" style="background-image:url('${stay.image}')"></div>
    <div class="card-overlay">
      <div class="card-title">${stay.title}</div>
      <div class="card-desc">${stay.description}</div>
      <div class="card-pills">
        <span class="cpill green">${categoryLabel}</span>
        <span class="cpill">${stay.location}</span>
      </div>
    </div>
  `;

  return article;
}

// DOM READY
/* ── DOM READY ── */
document.addEventListener('DOMContentLoaded', function(){
  var mc = document.querySelector('.modal-close');
  if(mc) mc.addEventListener('click', closeModalBtn);

  // Populate data-driven content
  populateAttractions();
  populateStays();

  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      closeModalBtn();
      var cp = document.getElementById('chatPopup');
      if(cp) cp.classList.remove('open');
      var mm = document.getElementById('mobileMenu');
      if(mm){ mm.classList.remove('open'); document.body.style.overflow = ''; }
      closeLb();
    }
  });

  // Lightbox events
  var lb = document.getElementById('lb');
  if(lb) lb.addEventListener('click', function(e){ if(e.target===this) closeLb(); });
  document.addEventListener('keydown', function(e){
    if(!lb || !lb.classList.contains('open')) return;
    if(e.key==='ArrowLeft') lbNav(-1);
    if(e.key==='ArrowRight') lbNav(1);
    if(e.key==='Escape') closeLb();
  });

  updateStats();
});

// DYNAMIC STATS
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