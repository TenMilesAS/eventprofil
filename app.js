const defaultProducts = [
  { id: 1, name: 'Rana drikkeflaske', code: 'EVP-1001', category: 'Gaver', desc: 'Dobbelvegget drikkeflaske i rustfritt stål. Et solid hverdagsprodukt med stort trykkfelt og deilig, matt overflate.', material: 'Resirkulert rustfritt stål', size: '500 ml', branding: 'Lasergravering / trykk', minQty: '100 stk', delivery: '25 dager', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80', new: true, priceMode: 'matrix', priceRows: [{ qty: '100 stk', price: '49 kr' }, { qty: '250 stk', price: '42 kr' }, { qty: '500 stk', price: '36 kr' }] },
  { id: 2, name: 'Varde weekendbag', code: 'EVP-2048', category: 'Reise', desc: 'Romslig weekendbag i kraftig canvas med fine detaljer i PU. Klar for både jobbreise og helgeplaner.', material: 'Økologisk canvas', size: '48 × 28 × 25 cm', branding: 'Transfertrykk / brodering', minQty: '50 stk', delivery: '30 dager', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80', new: true, priceMode: 'matrix', priceRows: [{ qty: '50 stk', price: '249 kr' }, { qty: '100 stk', price: '219 kr' }, { qty: '250 stk', price: '189 kr' }] },
  { id: 3, name: 'Lunde cap', code: 'EVP-3093', category: 'Klær', desc: 'Klassisk seks-panels caps laget med resirkulert bomull. Justerbar lukking og tidløst uttrykk.', material: '100% resirkulert bomull', size: 'One size', branding: 'Brodering / trykk', minQty: '100 stk', delivery: '20 dager', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80', new: true, priceMode: 'matrix', priceRows: [{ qty: '100 stk', price: '69 kr' }, { qty: '250 stk', price: '59 kr' }, { qty: '500 stk', price: '52 kr' }] },
  { id: 4, name: 'Nordre skrivebok', code: 'EVP-4071', category: 'Events', desc: 'En elegant skrivebok med 80 linjerte ark og omslag i mykt, resirkulert papir. En fin følgesvenn på jobb.', material: 'FSC® papir', size: 'A5', branding: 'Preg / silketrykk', minQty: '100 stk', delivery: '18 dager', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', new: true, priceMode: 'matrix', priceRows: [{ qty: '100 stk', price: '39 kr' }, { qty: '250 stk', price: '34 kr' }, { qty: '500 stk', price: '29 kr' }] },
  { id: 5, name: 'Skog piknikpledd', code: 'EVP-5027', category: 'Events', desc: 'Mykt, sammenleggbart pledd med vannavstøtende bakside. For sommerdager, arrangementer og gode pauser.', material: 'Resirkulert polyester', size: '150 × 130 cm', branding: 'Brodering / merke', minQty: 'Avtales', delivery: 'Avtales', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80', new: false, priceMode: 'quote', priceRows: [] },
  { id: 6, name: 'Fjord powerbank', code: 'EVP-6052', category: 'Gaver', desc: 'Kompakt powerbank med 10 000 mAh kapasitet og rask USB-C-lading. Alltid et nyttig møtepunkt for merkevaren.', material: 'Resirkulert aluminium', size: '10 000 mAh', branding: 'Lasergravering / UV-trykk', minQty: 'Avtales', delivery: 'Avtales', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80', new: false, priceMode: 'quote', priceRows: [] },
  { id: 7, name: 'Nordlys hoodie', code: 'EVP-7146', category: 'Klær', desc: 'Behagelig unisex-hoodie i tykk, børstet kvalitet. Finnes i flere farger og størrelser.', material: '85% økologisk bomull', size: 'XS–3XL', branding: 'Trykk / brodering', minQty: 'Avtales', delivery: 'Avtales', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80', new: false, priceMode: 'quote', priceRows: [] },
  { id: 8, name: 'Varde paraply', code: 'EVP-8011', category: 'Events', desc: 'Vindsterk paraply med automatisk åpning, grep i tre og generøst trykkfelt.', material: 'Resirkulert PET', size: 'Ø 105 cm', branding: 'Silketrykk', minQty: 'Avtales', delivery: 'Avtales', image: 'https://images.unsplash.com/photo-1528174662264-da67f80a1d1f?auto=format&fit=crop&w=800&q=80', new: false, priceMode: 'quote', priceRows: [] }
];

const campaigns = [
  ['Reise', 'Bager, reiseartikler og praktiske produkter til folk på farten', 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1100&q=80'],
  ['Klær', 'Tekstil, caps, hoodie og profilbekledning for videre salg', 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=700&q=80'],
  ['Giveaways', 'Små produkter med høy synlighet og enkel distribusjon', 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=700&q=80'],
  ['Spesialproduksjoner', 'Produkter som prises og produseres etter kundens brief', 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=700&q=80']
];

const portalCategories = [
  'Reise',
  'Klær',
  'Events',
  'Kjøkken',
  'Spill',
  'Gaver',
  'Giveaways',
  'Giveaways / Pins',
  'Giveaways / Nøkkelringer',
  'Spesialproduksjoner'
];

let products = JSON.parse(localStorage.getItem('eventprofil-products') || 'null') || defaultProducts;
let currentAdminUser = null;
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];

function supabaseClient() {
  const cfg = window.EVENTPROFIL_SUPABASE;
  if (!cfg || !window.supabase) return null;
  if (!window.eventprofilSupabaseClient) {
    window.eventprofilSupabaseClient = window.supabase.createClient(cfg.url, cfg.publishableKey);
  }
  return window.eventprofilSupabaseClient;
}

function categories() {
  return [...new Set([...portalCategories, ...products.map(product => product.category).filter(Boolean)])];
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
}

function slugify(value = '') {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/æ/g, 'ae')
    .replace(/ø/g, 'o')
    .replace(/å/g, 'a')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || `produkt-${Date.now()}`;
}

function storageImageUrl(path) {
  const cfg = window.EVENTPROFIL_SUPABASE;
  if (!cfg || !path) return '';
  if (/^https?:\/\//i.test(path)) return path;
  return `${cfg.url}/storage/v1/object/public/${cfg.imagesBucket}/${path}`;
}

function mapRemoteProduct(product) {
  return {
    id: product.id,
    name: product.name || '',
    code: product.code || '',
    category: product.category || '',
    desc: product.description || '',
    material: product.material || '',
    size: product.size || '',
    branding: product.branding || '',
    minQty: product.min_qty || '',
    delivery: product.delivery || '',
    imagePath: product.image_path || '',
    image: product.image_path ? storageImageUrl(product.image_path) : defaultProducts[0].image,
    new: !!product.is_new,
    published: product.published !== false,
    priceMode: product.price_mode || ((product.price_rows || []).length ? 'matrix' : 'quote'),
    priceRows: Array.isArray(product.price_rows) ? product.price_rows : []
  };
}

function priceRowsToText(rows = []) {
  return rows.map(row => `${row.qty || ''} - ${row.price || ''}`).join('\n');
}

function priceModeValue(product = {}) {
  if (product.priceMode) return product.priceMode;
  return (product.priceRows || []).length ? 'matrix' : 'quote';
}

function deliveryDaysValue(product = {}) {
  const match = String(product.delivery || '').match(/\d+/);
  return match ? match[0] : '';
}

function parsePriceRows(text = '') {
  return text
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(Boolean)
    .map(line => {
      const parts = line.split(/\s+-\s+/);
      return { qty: parts[0] || '', price: parts.slice(1).join(' - ') || '' };
    })
    .filter(row => row.qty || row.price);
}

function productCard(product) {
  return `<a class="product-card" href="product.html?id=${product.id}">
    <div class="product-image"><img src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy"></div>
    <div class="product-category">${escapeHtml(product.category)}</div>
    <h3>${escapeHtml(product.name)}</h3>
    <div class="product-code">${escapeHtml(product.code)}</div>
  </a>`;
}

function render() {
  const cats = categories();
  $('#categoryNav').innerHTML = cats.map(cat => `<a href="#products" data-cat="${escapeHtml(cat)}">${escapeHtml(cat)}</a>`).join('');
  $('#productFilter').innerHTML = '<option value="all">Alle kategorier</option>' + cats.map(cat => `<option>${escapeHtml(cat)}</option>`).join('');
  $('#newProducts').innerHTML = products.filter(product => product.new).slice(0, 4).map(productCard).join('');
  renderProducts();
  $('#campaignGrid').innerHTML = campaigns.map(campaign => `<article class="campaign" style="background:url('${campaign[2]}') center/cover"><div><p>${campaign[1]}</p><h3>${campaign[0]}</h3></div></article>`).join('');
}

function renderProducts() {
  const value = $('#productFilter').value;
  const list = value === 'all' ? products : products.filter(product => product.category === value);
  $('#productGrid').innerHTML = list.map(productCard).join('');
}

function openModal(id) {
  $('#' + id).classList.add('open');
  $('#' + id).setAttribute('aria-hidden', 'false');
}

function closeModal(id) {
  $('#' + id).classList.remove('open');
  $('#' + id).setAttribute('aria-hidden', 'true');
}

function toast(message) {
  const element = document.createElement('div');
  element.className = 'toast';
  element.textContent = message;
  document.body.append(element);
  setTimeout(() => element.remove(), 3000);
}

function quickSearch(query = '') {
  const box = $('#quickSearchResults');
  if (!box) return;
  const clean = query.trim();
  if (!clean) {
    box.innerHTML = '';
    box.classList.remove('open');
    return;
  }
  const results = products
    .filter(product => (product.name + product.category + product.code + product.desc).toLowerCase().includes(clean.toLowerCase()))
    .slice(0, 6);
  box.innerHTML = results.length
    ? results.map(product => `<a class="quick-search-result" href="product.html?id=${product.id}"><img src="${product.image}" alt=""><div><b>${escapeHtml(product.name)}</b><span>${escapeHtml(product.category)} · ${escapeHtml(product.code)}</span></div></a>`).join('')
    : '<p>Ingen produkter funnet.</p>';
  box.classList.add('open');
}

function adminLogin() {
  const hasSupabase = !!supabaseClient();
  return `<div class="admin-login">
    <p class="eyebrow">EVENTPROFIL ADMIN</p>
    <h2>Logg inn</h2>
    <p>${hasSupabase ? 'Logg inn med Supabase-brukeren din for å redigere produkter.' : 'Supabase-biblioteket er ikke lastet. Demo-passord kan brukes lokalt.'}</p>
    ${hasSupabase ? '<input id="adminEmail" type="email" placeholder="E-post" autocomplete="username" value="post@merkevarebyggeren.no">' : ''}
    <input id="adminPassword" type="password" placeholder="Passord" autocomplete="${hasSupabase ? 'current-password' : 'off'}">
    <button id="loginButton">Logg inn</button>
  </div>`;
}

function adminDashboard() {
  return `<div class="admin-header">
    <div><p class="eyebrow">INNHOLDSADMINISTRASJON</p><h2>Produkter</h2></div>
    <div class="admin-actions"><button class="button button-dark" id="newProduct">+ Nytt produkt</button><button class="button" id="adminLogout" type="button">Logg ut</button></div>
  </div>
  <table class="admin-table">
    <thead><tr><th>Bilde</th><th>Produkt</th><th>Kategori</th><th>Status</th><th></th></tr></thead>
    <tbody>${products.map(product => `<tr><td><img src="${product.image}" alt=""></td><td><strong>${escapeHtml(product.name)}</strong><br><small>${escapeHtml(product.code)}</small></td><td>${escapeHtml(product.category)}</td><td>${product.published === false ? 'Skjult' : 'Publisert'}</td><td><button data-edit="${product.id}">Rediger</button></td></tr>`).join('')}</tbody>
  </table>
  <p class="admin-note">Endringer lagres i Supabase og vises på nettsiden uten at du trenger å oppdatere GitHub/Netlify manuelt.</p>`;
}

function productForm(product = { id: '', name: '', code: '', category: categories()[0] || '', desc: '', material: '', size: '', branding: '', minQty: '', image: '', new: false, published: true, priceRows: [], delivery: '', priceMode: 'quote' }) {
  const priceMode = priceModeValue(product);
  return `<div>
    <p class="eyebrow">${product.id ? 'REDIGER PRODUKT' : 'NYTT PRODUKT'}</p>
    <h2>${product.id ? escapeHtml(product.name) : 'Legg til produkt'}</h2>
    <form class="admin-form" id="productForm">
      <label>Produktnavn<input name="name" required value="${escapeHtml(product.name)}"></label>
      <label>Artikkelnummer<input name="code" required value="${escapeHtml(product.code)}"></label>
      <label>Kategori<input name="category" required value="${escapeHtml(product.category)}" list="categoryList"></label>
      <label>Bilde<input id="imageUpload" name="imageUpload" type="file" accept="image/jpeg,image/png,image/webp"></label>
      <datalist id="categoryList">${categories().map(cat => `<option value="${escapeHtml(cat)}">`).join('')}</datalist>
      <div class="upload-preview full"><img id="imagePreview" src="${product.image || ''}" alt="Forhåndsvisning"><div><strong>Produktbilde</strong><p id="uploadHelp">${product.image ? 'Velg en ny fil for å erstatte bildet.' : 'Velg et JPG-, PNG- eller WebP-bilde.'}</p></div></div>
      <label class="full">Beskrivelse<textarea name="desc" required>${escapeHtml(product.desc)}</textarea></label>
      <label>Materiale<input name="material" value="${escapeHtml(product.material)}"></label>
      <label>Størrelse / kapasitet<input name="size" value="${escapeHtml(product.size)}"></label>
      <label>Profilering<input name="branding" value="${escapeHtml(product.branding)}"></label>
      <label>Minimumsantall<input name="minQty" value="${escapeHtml(product.minQty || '')}" placeholder="100 stk / Avtales"></label>
      <label>Leveringstid, antall dager<input name="deliveryDays" type="number" min="0" step="1" value="${escapeHtml(deliveryDaysValue(product))}" placeholder="25"></label>
      <label>Vis som nyhet<select name="new"><option value="false" ${!product.new ? 'selected' : ''}>Nei</option><option value="true" ${product.new ? 'selected' : ''}>Ja</option></select></label>
      <label>Status<select name="published"><option value="true" ${product.published !== false ? 'selected' : ''}>Publisert</option><option value="false" ${product.published === false ? 'selected' : ''}>Skjult</option></select></label>
      <label>Prismodell<select name="priceMode" id="priceMode"><option value="matrix" ${priceMode === 'matrix' ? 'selected' : ''}>Prismatrise</option><option value="quote" ${priceMode === 'quote' ? 'selected' : ''}>Be om tilbud</option></select></label>
      <div class="full" id="priceMatrixFields" ${priceMode === 'quote' ? 'style="display:none"' : ''}>
        <label>Kvantum og pris<textarea name="quantityPrices" placeholder="100 stk - 49 kr&#10;250 stk - 42 kr&#10;500 stk - 36 kr">${escapeHtml(priceRowsToText(product.priceRows))}</textarea></label>
        <p class="admin-note">Skriv én linje per prisnivå. Eksempel: 100 stk - 49 kr</p>
      </div>
      <div class="full"><button>Lagre produkt</button>${product.id ? ` <button type="button" id="deleteProduct" style="background:#b7402b">Slett produkt</button>` : ''} <button type="button" id="cancelEdit" style="background:#fff;color:#17231f;border:1px solid #17231f">Avbryt</button></div>
    </form>
  </div>`;
}

async function loadAdminProducts() {
  const client = supabaseClient();
  const cfg = window.EVENTPROFIL_SUPABASE;
  if (!client || !cfg) return products;
  const { data, error } = await client.from(cfg.productsTable).select('*').order('updated_at', { ascending: false });
  if (error) throw error;
  products = data.length ? data.map(mapRemoteProduct) : products;
  render();
  return products;
}

async function showAdmin() {
  const client = supabaseClient();
  if (client) {
    const { data } = await client.auth.getUser();
    currentAdminUser = data.user || null;
  } else {
    currentAdminUser = sessionStorage.getItem('eventprofil-admin') ? { id: 'local-demo' } : null;
  }

  $('#adminContent').innerHTML = currentAdminUser ? adminDashboard() : adminLogin();
  if (!currentAdminUser) {
    $('#loginButton').onclick = loginAdmin;
    return;
  }

  if (client) {
    try {
      await loadAdminProducts();
      $('#adminContent').innerHTML = adminDashboard();
    } catch (error) {
      toast(error.message || 'Kunne ikke hente produkter fra Supabase');
    }
  }

  $$('#adminContent [data-edit]').forEach(button => button.onclick = () => editProduct(button.dataset.edit));
  $('#newProduct').onclick = () => editProduct();
  $('#adminLogout').onclick = logoutAdmin;
}

async function loginAdmin() {
  const client = supabaseClient();
  if (!client) {
    if ($('#adminPassword').value === 'eventprofil') {
      sessionStorage.setItem('eventprofil-admin', 'yes');
      showAdmin();
    } else {
      toast('Feil passord');
    }
    return;
  }

  const email = $('#adminEmail').value.trim();
  const password = $('#adminPassword').value;
  const { error } = await client.auth.signInWithPassword({ email, password });
  if (error) {
    toast('Innlogging feilet: ' + error.message);
    return;
  }
  toast('Innlogget');
  showAdmin();
}

async function logoutAdmin() {
  const client = supabaseClient();
  if (client) await client.auth.signOut();
  sessionStorage.removeItem('eventprofil-admin');
  currentAdminUser = null;
  showAdmin();
}

async function uploadProductImage(file, existing = {}) {
  const client = supabaseClient();
  const cfg = window.EVENTPROFIL_SUPABASE;
  if (!client || !cfg) {
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  const ext = (file.name.split('.').pop() || 'jpg').toLowerCase().replace(/[^a-z0-9]/g, '') || 'jpg';
  const base = slugify(existing.name || file.name.replace(/\.[^.]+$/, ''));
  const path = `${base}/${Date.now()}.${ext}`;
  const { error } = await client.storage.from(cfg.imagesBucket).upload(path, file, {
    cacheControl: '3600',
    upsert: false,
    contentType: file.type || undefined
  });
  if (error) throw error;
  return path;
}

function productRowFromForm(form, existing, imagePath) {
  const data = Object.fromEntries(new FormData(form));
  const priceMode = data.priceMode || 'quote';
  return {
    name: data.name.trim(),
    slug: slugify(`${data.name}-${data.code}`),
    code: data.code.trim(),
    category: data.category.trim(),
    description: data.desc.trim(),
    material: data.material.trim(),
    size: data.size.trim(),
    branding: data.branding.trim(),
    min_qty: data.minQty.trim(),
    delivery: data.deliveryDays ? `${data.deliveryDays} dager` : '',
    image_path: imagePath || existing?.imagePath || '',
    is_new: data.new === 'true',
    published: data.published === 'true',
    price_mode: priceMode,
    price_rows: priceMode === 'matrix' ? parsePriceRows(data.quantityPrices) : []
  };
}

function localProductFromForm(form, existing, imageValue) {
  const row = productRowFromForm(form, existing, imageValue);
  return {
    id: existing?.id || Date.now(),
    name: row.name,
    code: row.code,
    category: row.category,
    desc: row.description,
    material: row.material,
    size: row.size,
    branding: row.branding,
    minQty: row.min_qty,
    delivery: row.delivery,
    image: imageValue || existing?.image || '',
    imagePath: imageValue || existing?.imagePath || '',
    new: row.is_new,
    published: row.published,
    priceMode: row.price_mode,
    priceRows: row.price_rows
  };
}

async function saveProduct(form, existing, selectedImageFile) {
  const client = supabaseClient();
  let imageValue = existing?.imagePath || existing?.image || '';
  if (selectedImageFile) imageValue = await uploadProductImage(selectedImageFile, existing);
  if (!imageValue) throw new Error('Last opp et produktbilde før du lagrer');

  if (!client) {
    const data = localProductFromForm(form, existing, imageValue);
    if (existing) products = products.map(product => String(product.id) === String(existing.id) ? data : product);
    else products.unshift(data);
    localStorage.setItem('eventprofil-products', JSON.stringify(products));
    return data;
  }

  const cfg = window.EVENTPROFIL_SUPABASE;
  const row = productRowFromForm(form, existing, imageValue);
  const query = existing
    ? client.from(cfg.productsTable).update(row).eq('id', existing.id).select('*').single()
    : client.from(cfg.productsTable).insert(row).select('*').single();
  const { data, error } = await query;
  if (error) throw error;
  const saved = mapRemoteProduct(data);
  if (existing) products = products.map(product => String(product.id) === String(existing.id) ? saved : product);
  else products.unshift(saved);
  render();
  return saved;
}

function editProduct(id) {
  const existing = id ? products.find(product => String(product.id) === String(id)) : undefined;
  let selectedImageFile = null;
  $('#adminContent').innerHTML = productForm(existing);
  $('#cancelEdit').onclick = showAdmin;
  const form = $('#productForm');
  const priceMode = $('#priceMode');
  const priceMatrixFields = $('#priceMatrixFields');
  if (priceMode && priceMatrixFields) {
    priceMode.onchange = () => {
      priceMatrixFields.style.display = priceMode.value === 'quote' ? 'none' : '';
    };
  }

  $('#imageUpload').onchange = event => {
    const file = event.target.files[0];
    if (!file) return;
    selectedImageFile = file;
    $('#imagePreview').src = URL.createObjectURL(file);
    $('#uploadHelp').textContent = `${file.name} er klart til å lagres.`;
  };

  form.onsubmit = async event => {
    event.preventDefault();
    const submitButton = form.querySelector('button');
    submitButton.disabled = true;
    submitButton.textContent = 'Lagrer...';
    try {
      await saveProduct(form, existing, selectedImageFile);
      await showAdmin();
      toast('Produktet er lagret');
    } catch (error) {
      toast(error.message || 'Kunne ikke lagre produktet');
      submitButton.disabled = false;
      submitButton.textContent = 'Lagre produkt';
    }
  };

  if (existing) {
    $('#deleteProduct').onclick = async () => {
      if (!confirm(`Slette ${existing.name}?`)) return;
      const client = supabaseClient();
      try {
        if (client) {
          const cfg = window.EVENTPROFIL_SUPABASE;
          const { error } = await client.from(cfg.productsTable).delete().eq('id', existing.id);
          if (error) throw error;
        }
        products = products.filter(product => String(product.id) !== String(existing.id));
        localStorage.setItem('eventprofil-products', JSON.stringify(products));
        render();
        showAdmin();
        toast('Produktet er slettet');
      } catch (error) {
        toast(error.message || 'Kunne ikke slette produktet');
      }
    };
  }
}

async function loadSupabaseProducts() {
  const client = supabaseClient();
  const cfg = window.EVENTPROFIL_SUPABASE;
  if (!client || !cfg) return;
  try {
    const { data, error } = await client.from(cfg.productsTable).select('*').eq('published', true).order('updated_at', { ascending: false });
    if (error) throw error;
    if (!data.length) return;
    products = data.map(mapRemoteProduct);
    render();
  } catch (error) {
    console.warn('Kunne ikke hente produkter fra Supabase.', error);
  }
}

$('#productFilter').onchange = renderProducts;
if ($('#menuButton')) $('#menuButton').onclick = () => $('#mainNav').classList.toggle('open');
if ($('#quickSearch')) $('#quickSearch').oninput = event => quickSearch(event.target.value);
if ($('#quickSearchButton')) $('#quickSearchButton').onclick = () => {
  const query = $('#quickSearch').value.trim();
  quickSearch(query);
  if (query) document.querySelector('#quickSearchResults a')?.click();
};
$('#adminOpen').onclick = () => { showAdmin(); openModal('adminModal'); };
$$('[data-close]').forEach(button => button.onclick = () => closeModal(button.dataset.close));
$$('.modal').forEach(modal => modal.addEventListener('click', event => { if (event.target === modal) closeModal(modal.id); }));
document.addEventListener('keydown', event => { if (event.key === 'Escape') $$('.modal.open').forEach(modal => closeModal(modal.id)); });
document.addEventListener('click', event => {
  if (event.target.matches('[data-cat]')) {
    $('#productFilter').value = event.target.dataset.cat;
    renderProducts();
  }
});

render();
loadSupabaseProducts();
if (location.hash === '#admin') {
  showAdmin();
  openModal('adminModal');
}
