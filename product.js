const productDefaults = [
  { id: 1, name: 'Rana drikkeflaske', code: 'EVP-1001', category: 'Gaver', desc: 'Dobbelvegget drikkeflaske i rustfritt stål. Et solid hverdagsprodukt med stort trykkfelt og deilig, matt overflate.', material: 'Resirkulert rustfritt stål', size: '500 ml', branding: 'Lasergravering / trykk', image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80', priceRows: [{ qty: '100 stk', price: '49 kr' }, { qty: '250 stk', price: '42 kr' }, { qty: '500 stk', price: '36 kr' }] },
  { id: 2, name: 'Varde weekendbag', code: 'EVP-2048', category: 'Reise', desc: 'Romslig weekendbag i kraftig canvas med fine detaljer i PU. Klar for både jobbreise og helgeplaner.', material: 'Økologisk canvas', size: '48 × 28 × 25 cm', branding: 'Transfertrykk / brodering', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80', priceRows: [{ qty: '50 stk', price: '249 kr' }, { qty: '100 stk', price: '219 kr' }, { qty: '250 stk', price: '189 kr' }] },
  { id: 3, name: 'Lunde cap', code: 'EVP-3093', category: 'Klær', desc: 'Klassisk seks-panels caps laget med resirkulert bomull. Justerbar lukking og tidløst uttrykk.', material: '100% resirkulert bomull', size: 'One size', branding: 'Brodering / trykk', image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=800&q=80', priceRows: [{ qty: '100 stk', price: '69 kr' }, { qty: '250 stk', price: '59 kr' }, { qty: '500 stk', price: '52 kr' }] },
  { id: 4, name: 'Nordre skrivebok', code: 'EVP-4071', category: 'Events', desc: 'En elegant skrivebok med 80 linjerte ark og omslag i mykt, resirkulert papir. En fin følgesvenn på jobb.', material: 'FSC® papir', size: 'A5', branding: 'Preg / silketrykk', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80', priceRows: [{ qty: '100 stk', price: '39 kr' }, { qty: '250 stk', price: '34 kr' }, { qty: '500 stk', price: '29 kr' }] },
  { id: 5, name: 'Skog piknikpledd', code: 'EVP-5027', category: 'Events', desc: 'Mykt, sammenleggbart pledd med vannavstøtende bakside. For sommerdager, arrangementer og gode pauser.', material: 'Resirkulert polyester', size: '150 × 130 cm', branding: 'Brodering / merke', image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80', priceRows: [] },
  { id: 6, name: 'Fjord powerbank', code: 'EVP-6052', category: 'Gaver', desc: 'Kompakt powerbank med 10 000 mAh kapasitet og rask USB-C-lading. Alltid et nyttig møtepunkt for merkevaren.', material: 'Resirkulert aluminium', size: '10 000 mAh', branding: 'Lasergravering / UV-trykk', image: 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?auto=format&fit=crop&w=800&q=80', priceRows: [] },
  { id: 7, name: 'Nordlys hoodie', code: 'EVP-7146', category: 'Klær', desc: 'Behagelig unisex-hoodie i tykk, børstet kvalitet. Finnes i flere farger og størrelser.', material: '85% økologisk bomull', size: 'XS–3XL', branding: 'Trykk / brodering', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80', priceRows: [] },
  { id: 8, name: 'Varde paraply', code: 'EVP-8011', category: 'Events', desc: 'Vindsterk paraply med automatisk åpning, grep i tre og generøst trykkfelt.', material: 'Resirkulert PET', size: 'Ø 105 cm', branding: 'Silketrykk', image: 'https://images.unsplash.com/photo-1528174662264-da67f80a1d1f?auto=format&fit=crop&w=800&q=80', priceRows: [] }
];

const target = document.querySelector('#productPage');
const id = new URLSearchParams(location.search).get('id');
const portalCategories = ['Reise', 'Klær', 'Events', 'Kjøkken', 'Spill', 'Gaver', 'Giveaways', 'Giveaways / Pins', 'Giveaways / Nøkkelringer', 'Spesialproduksjoner'];

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]));
}

function storageImageUrl(path) {
  const cfg = window.EVENTPROFIL_SUPABASE;
  if (!cfg || !path) return '';
  return `${cfg.url}/storage/v1/object/public/${cfg.imagesBucket}/${path}`;
}

function mapRemoteProduct(product) {
  return {
    id: product.id,
    name: product.name,
    code: product.code,
    category: product.category,
    desc: product.description,
    material: product.material,
    size: product.size,
    branding: product.branding,
    minQty: product.min_qty,
    delivery: product.delivery,
    image: product.image_path ? storageImageUrl(product.image_path) : productDefaults[0].image,
    new: product.is_new,
    priceMode: product.price_mode || ((product.price_rows || []).length ? 'matrix' : 'quote'),
    priceRows: product.price_rows || []
  };
}

async function loadProducts() {
  const localProducts = JSON.parse(localStorage.getItem('eventprofil-products') || 'null') || productDefaults;
  const cfg = window.EVENTPROFIL_SUPABASE;
  if (!cfg) return localProducts;

  try {
    const response = await fetch(`${cfg.url}/rest/v1/${cfg.productsTable}?published=eq.true&select=*`, {
      headers: { apikey: cfg.publishableKey, Authorization: `Bearer ${cfg.publishableKey}` }
    });
    if (!response.ok) return localProducts;
    const remote = await response.json();
    return remote.length ? remote.map(mapRemoteProduct) : localProducts;
  } catch {
    return localProducts;
  }
}

function priceTable(product) {
  const rows = product.priceRows || [];
  if (product.priceMode === 'quote' || !rows.length) {
    return `<section class="quote-panel">
      <h2>Kvantum og pris</h2>
      <p>Pris beregnes på forespørsel basert på antall, profilering, levering og eventuelle spesialtilpasninger.</p>
      <a class="button button-dark" href="mailto:hei@eventprofil.no?subject=Forespørsel%20${encodeURIComponent(product.name)}">Be om tilbud <span>→</span></a>
    </section>`;
  }

  return `<section class="quote-panel">
    <h2>Kvantum og pris</h2>
    <div class="price-table">
      ${rows.map(row => `<div><span>${escapeHtml(row.qty)}</span><strong>${escapeHtml(row.price)}</strong></div>`).join('')}
    </div>
    <a class="button button-dark" href="mailto:hei@eventprofil.no?subject=Forespørsel%20${encodeURIComponent(product.name)}">Be om tilbud <span>→</span></a>
  </section>`;
}

function productCardSearch(product) {
  return `<a class="quick-search-result" href="product.html?id=${product.id}"><img src="${product.image}" alt=""><div><b>${escapeHtml(product.name)}</b><span>${escapeHtml(product.category)} · ${escapeHtml(product.code)}</span></div></a>`;
}

function setupHeader(allProducts) {
  const categoryNav = document.querySelector('#categoryNav');
  if (categoryNav) {
    categoryNav.innerHTML = portalCategories.map(category => `<a href="index.html#products" data-cat="${escapeHtml(category)}">${escapeHtml(category)}</a>`).join('');
  }

  const searchInput = document.querySelector('#quickSearch');
  const searchButton = document.querySelector('#quickSearchButton');
  const searchResults = document.querySelector('#quickSearchResults');
  const runSearch = () => {
    if (!searchInput || !searchResults) return;
    const query = searchInput.value.trim().toLowerCase();
    if (!query) {
      searchResults.innerHTML = '';
      searchResults.classList.remove('open');
      return;
    }
    const results = allProducts
      .filter(product => (product.name + product.category + product.code + product.desc).toLowerCase().includes(query))
      .slice(0, 6);
    searchResults.innerHTML = results.length ? results.map(productCardSearch).join('') : '<p>Ingen produkter funnet.</p>';
    searchResults.classList.add('open');
  };

  if (searchInput) searchInput.oninput = runSearch;
  if (searchButton) searchButton.onclick = () => {
    runSearch();
    document.querySelector('#quickSearchResults a')?.click();
  };
}

function renderProduct(allProducts) {
  const product = allProducts.find(item => String(item.id) === id);
  if (!product) {
    target.innerHTML = '<div class="product-not-found"><p class="eyebrow">IKKE FUNNET</p><h1>Dette produktet finnes ikke.</h1><p>Produktet kan være fjernet fra sortimentet.</p><a class="button button-dark" href="index.html#products">Se produkter <span>→</span></a></div>';
    return;
  }

  const related = allProducts.filter(item => item.category === product.category && String(item.id) !== String(product.id)).slice(0, 3);
  document.title = `${product.name} | Eventprofil`;
  target.innerHTML = `<nav class="breadcrumbs" aria-label="Brødsmulesti">
    <a href="index.html">Hjem</a><span>/</span><a href="index.html#products">Produkter</a><span>/</span><a href="index.html#products">${escapeHtml(product.category)}</a><span>/</span><strong>${escapeHtml(product.name)}</strong>
  </nav>
  <div class="product-page-grid">
    <section class="product-gallery">
      ${product.new ? '<div class="product-badge">NYHET</div>' : ''}
      <img class="product-page-image" src="${product.image}" alt="${escapeHtml(product.name)}">
      <div class="gallery-caption">Produktbilde · Farger og profilering avtales ved forespørsel</div>
    </section>
    <section class="product-page-info">
      <p class="eyebrow">${escapeHtml(product.category)}</p>
      <h1>${escapeHtml(product.name)}</h1>
      <p class="detail-code">Artikkelnummer: ${escapeHtml(product.code)}</p>
      <p class="description">${escapeHtml(product.desc)}</p>
      <h2 class="details-title">Produktdetaljer</h2>
      <div class="specs">
        <div><span>Materiale</span><strong>${escapeHtml(product.material)}</strong></div>
        <div><span>Størrelse</span><strong>${escapeHtml(product.size)}</strong></div>
        <div><span>Profilering</span><strong>${escapeHtml(product.branding)}</strong></div>
      </div>
      <div class="order-facts">
        <div><span>Minimumsantall</span><strong>${escapeHtml(product.minQty || 'Avtales')}</strong></div>
        <div><span>Normal leveringstid</span><strong>${escapeHtml(product.delivery || 'Avtales')}</strong></div>
      </div>
      ${priceTable(product)}
    </section>
  </div>
  ${related.length ? `<section class="related-products"><div><p class="eyebrow">SE OGSÅ</p><h2>Relaterte produkter</h2></div><div class="related-grid">${related.map(item => `<a href="product.html?id=${item.id}"><img src="${item.image}" alt="${escapeHtml(item.name)}"><span>${escapeHtml(item.category)}</span><strong>${escapeHtml(item.name)}</strong></a>`).join('')}</div></section>` : ''}`;
}

loadProducts().then(products => {
  setupHeader(products);
  renderProduct(products);
});
