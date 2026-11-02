"use strict";
(() => {
  const $ = (s, p = document) => p.querySelector(s),
    $$ = (s, p = document) => [...p.querySelectorAll(s)],
    STORE = "lt-store-v2";
  const FALLBACK_RATES = { GBP: 1, EUR: 1.17, USD: 1.29, RON: 5.86 },
    LOCALES = { GBP: "en-GB", EUR: "de-DE", USD: "en-US", RON: "ro-RO" };
  const LANGS = ["en", "ro", "es", "it", "fr", "de"];
  const TEXT = {
    en: {
      home: "Home",
      products: "Products",
      about: "About",
      contact: "Contact",
      shop: "Shop products",
      details: "View details",
      add: "Add to cart",
      search: "Search products, brands or categories",
      featured: "Popular technology",
      category: "Shop by category",
      upgrade: "Find your next upgrade",
      all: "View all products",
      subscribe: "Subscribe",
      email: "Email address",
      cartEmpty: "Your cart is empty",
      delivery: "Delivery",
      subtotal: "Subtotal",
      total: "Total",
      free: "FREE",
      order: "Order confirmed",
      country: "Choose country",
      card: "Card",
      paypal: "PayPal",
      place: "Place order",
      returnCart: "Return to cart",
      first: "First name",
      last: "Last name",
      phone: "Phone",
      city: "City",
      postcode: "Postcode",
      address: "Address",
      payment: "Payment method",
      contactDetails: "Contact details",
      deliveryAddress: "Delivery address",
      nameCard: "Name on card",
      cardNumber: "Card number",
      expiry: "Expiry",
      cvv: "CVV",
      currency: "Currency",
      language: "Language",
      select: "Select",
      remove: "Remove",
      warranty: "Warranty",
      memory: "Memory",
      storage: "Storage",
      colour: "Colour",
      specs: "Specifications",
      related: "Related products",
      messageSent: "Message sent successfully",
      thanks: "Thanks for subscribing",
      added: "Added to cart",
      wish: "Wishlist updated",
      compare: "Comparison updated",
      limit: "Comparison is limited to four products",
    },
    ro: {
      home: "Acasă",
      products: "Produse",
      about: "Despre noi",
      contact: "Contact",
      shop: "Cumpără produse",
      details: "Vezi detalii",
      add: "Adaugă în coș",
      search: "Caută produse, mărci sau categorii",
      featured: "Tehnologie populară",
      category: "Cumpără după categorie",
      upgrade: "Găsește următorul upgrade",
      all: "Vezi toate produsele",
      subscribe: "Abonează-te",
      email: "Adresa de e-mail",
      cartEmpty: "Coșul este gol",
      delivery: "Livrare",
      subtotal: "Subtotal",
      total: "Total",
      free: "GRATUIT",
      order: "Comandă confirmată",
      country: "Alege țara",
      card: "Card",
      paypal: "PayPal",
      place: "Plasează comanda",
      returnCart: "Înapoi la coș",
      first: "Prenume",
      last: "Nume",
      phone: "Telefon",
      city: "Oraș",
      postcode: "Cod poștal",
      address: "Adresă",
      payment: "Metodă de plată",
      contactDetails: "Date de contact",
      deliveryAddress: "Adresa de livrare",
      nameCard: "Numele de pe card",
      cardNumber: "Numărul cardului",
      expiry: "Expirare",
      cvv: "CVV",
      currency: "Monedă",
      language: "Limbă",
      select: "Selectează",
      remove: "Elimină",
      warranty: "Garanție",
      memory: "Memorie",
      storage: "Stocare",
      colour: "Culoare",
      specs: "Specificații",
      related: "Produse similare",
      messageSent: "Mesaj trimis cu succes",
      thanks: "Mulțumim pentru abonare",
      added: "Produs adăugat în coș",
      wish: "Lista de favorite a fost actualizată",
      compare: "Comparația a fost actualizată",
      limit: "Poți compara maximum patru produse",
    },
    es: {
      home: "Inicio",
      products: "Productos",
      about: "Nosotros",
      contact: "Contacto",
      shop: "Comprar productos",
      details: "Ver detalles",
      add: "Añadir al carrito",
      search: "Buscar productos, marcas o categorías",
      featured: "Tecnología popular",
      category: "Comprar por categoría",
      upgrade: "Encuentra tu próxima mejora",
      all: "Ver todos los productos",
      subscribe: "Suscribirse",
      email: "Correo electrónico",
      cartEmpty: "El carrito está vacío",
      delivery: "Entrega",
      subtotal: "Subtotal",
      total: "Total",
      free: "GRATIS",
      order: "Pedido confirmado",
      country: "Selecciona un país",
      card: "Tarjeta",
      paypal: "PayPal",
      place: "Realizar pedido",
      returnCart: "Volver al carrito",
      first: "Nombre",
      last: "Apellidos",
      phone: "Teléfono",
      city: "Ciudad",
      postcode: "Código postal",
      address: "Dirección",
      payment: "Método de pago",
      contactDetails: "Datos de contacto",
      deliveryAddress: "Dirección de entrega",
      nameCard: "Nombre en la tarjeta",
      cardNumber: "Número de tarjeta",
      expiry: "Caducidad",
      cvv: "CVV",
      currency: "Moneda",
      language: "Idioma",
      select: "Seleccionar",
      remove: "Eliminar",
      warranty: "Garantía",
      memory: "Memoria",
      storage: "Almacenamiento",
      colour: "Color",
      specs: "Especificaciones",
      related: "Productos relacionados",
      messageSent: "Mensaje enviado",
      thanks: "Gracias por suscribirte",
      added: "Producto añadido al carrito",
      wish: "Lista actualizada",
      compare: "Comparación actualizada",
      limit: "Máximo cuatro productos",
    },
    it: {
      home: "Home",
      products: "Prodotti",
      about: "Chi siamo",
      contact: "Contatti",
      shop: "Acquista prodotti",
      details: "Vedi dettagli",
      add: "Aggiungi al carrello",
      search: "Cerca prodotti, marchi o categorie",
      featured: "Tecnologia popolare",
      category: "Acquista per categoria",
      upgrade: "Trova il tuo prossimo aggiornamento",
      all: "Vedi tutti i prodotti",
      subscribe: "Iscriviti",
      email: "Indirizzo e-mail",
      cartEmpty: "Il carrello è vuoto",
      delivery: "Consegna",
      subtotal: "Subtotale",
      total: "Totale",
      free: "GRATUITA",
      order: "Ordine confermato",
      country: "Scegli il paese",
      card: "Carta",
      paypal: "PayPal",
      place: "Effettua ordine",
      returnCart: "Torna al carrello",
      first: "Nome",
      last: "Cognome",
      phone: "Telefono",
      city: "Città",
      postcode: "CAP",
      address: "Indirizzo",
      payment: "Metodo di pagamento",
      contactDetails: "Dati di contatto",
      deliveryAddress: "Indirizzo di consegna",
      nameCard: "Nome sulla carta",
      cardNumber: "Numero carta",
      expiry: "Scadenza",
      cvv: "CVV",
      currency: "Valuta",
      language: "Lingua",
      select: "Seleziona",
      remove: "Rimuovi",
      warranty: "Garanzia",
      memory: "Memoria",
      storage: "Archiviazione",
      colour: "Colore",
      specs: "Specifiche",
      related: "Prodotti correlati",
      messageSent: "Messaggio inviato",
      thanks: "Grazie per l'iscrizione",
      added: "Prodotto aggiunto al carrello",
      wish: "Lista aggiornata",
      compare: "Confronto aggiornato",
      limit: "Massimo quattro prodotti",
    },
    fr: {
      home: "Accueil",
      products: "Produits",
      about: "À propos",
      contact: "Contact",
      shop: "Acheter",
      details: "Voir les détails",
      add: "Ajouter au panier",
      search: "Rechercher des produits, marques ou catégories",
      featured: "Technologie populaire",
      category: "Acheter par catégorie",
      upgrade: "Trouvez votre prochaine amélioration",
      all: "Voir tous les produits",
      subscribe: "S'abonner",
      email: "Adresse e-mail",
      cartEmpty: "Votre panier est vide",
      delivery: "Livraison",
      subtotal: "Sous-total",
      total: "Total",
      free: "GRATUITE",
      order: "Commande confirmée",
      country: "Choisir le pays",
      card: "Carte",
      paypal: "PayPal",
      place: "Passer la commande",
      returnCart: "Retour au panier",
      first: "Prénom",
      last: "Nom",
      phone: "Téléphone",
      city: "Ville",
      postcode: "Code postal",
      address: "Adresse",
      payment: "Mode de paiement",
      contactDetails: "Coordonnées",
      deliveryAddress: "Adresse de livraison",
      nameCard: "Nom sur la carte",
      cardNumber: "Numéro de carte",
      expiry: "Expiration",
      cvv: "CVV",
      currency: "Devise",
      language: "Langue",
      select: "Sélectionner",
      remove: "Supprimer",
      warranty: "Garantie",
      memory: "Mémoire",
      storage: "Stockage",
      colour: "Couleur",
      specs: "Caractéristiques",
      related: "Produits associés",
      messageSent: "Message envoyé",
      thanks: "Merci pour votre inscription",
      added: "Produit ajouté au panier",
      wish: "Liste mise à jour",
      compare: "Comparaison mise à jour",
      limit: "Maximum quatre produits",
    },
    de: {
      home: "Startseite",
      products: "Produkte",
      about: "Über uns",
      contact: "Kontakt",
      shop: "Produkte kaufen",
      details: "Details ansehen",
      add: "In den Warenkorb",
      search: "Produkte, Marken oder Kategorien suchen",
      featured: "Beliebte Technik",
      category: "Nach Kategorie einkaufen",
      upgrade: "Finden Sie Ihr nächstes Upgrade",
      all: "Alle Produkte ansehen",
      subscribe: "Abonnieren",
      email: "E-Mail-Adresse",
      cartEmpty: "Ihr Warenkorb ist leer",
      delivery: "Lieferung",
      subtotal: "Zwischensumme",
      total: "Gesamt",
      free: "KOSTENLOS",
      order: "Bestellung bestätigt",
      country: "Land auswählen",
      card: "Karte",
      paypal: "PayPal",
      place: "Bestellung aufgeben",
      returnCart: "Zurück zum Warenkorb",
      first: "Vorname",
      last: "Nachname",
      phone: "Telefon",
      city: "Stadt",
      postcode: "Postleitzahl",
      address: "Adresse",
      payment: "Zahlungsmethode",
      contactDetails: "Kontaktdaten",
      deliveryAddress: "Lieferadresse",
      nameCard: "Name auf der Karte",
      cardNumber: "Kartennummer",
      expiry: "Ablaufdatum",
      cvv: "CVV",
      currency: "Währung",
      language: "Sprache",
      select: "Auswählen",
      remove: "Entfernen",
      warranty: "Garantie",
      memory: "Arbeitsspeicher",
      storage: "Speicher",
      colour: "Farbe",
      specs: "Technische Daten",
      related: "Ähnliche Produkte",
      messageSent: "Nachricht gesendet",
      thanks: "Danke für die Anmeldung",
      added: "Produkt zum Warenkorb hinzugefügt",
      wish: "Wunschliste aktualisiert",
      compare: "Vergleich aktualisiert",
      limit: "Maximal vier Produkte",
    },
  };
  const PHRASES = {
    Home: "home",
    Products: "products",
    About: "about",
    "About us": "about",
    Contact: "contact",
    "Shop products": "shop",
    "View details": "details",
    "Add to cart": "add",
    "Popular technology": "featured",
    "SHOP BY CATEGORY": "category",
    "Find your next upgrade": "upgrade",
    "View all products →": "all",
    Subscribe: "subscribe",
    "Email address": "email",
    "Your cart is empty": "cartEmpty",
    Delivery: "delivery",
    Subtotal: "subtotal",
    Total: "total",
    "Order confirmed": "order",
    "Choose country": "country",
    Card: "card",
    PayPal: "paypal",
    "Place order": "place",
    "← Return to cart": "returnCart",
    "First name": "first",
    "Last name": "last",
    Phone: "phone",
    City: "city",
    Postcode: "postcode",
    Address: "address",
    "Payment method": "payment",
    "Contact details": "contactDetails",
    "Delivery address": "deliveryAddress",
    "Name on card": "nameCard",
    "Card number": "cardNumber",
    Expiry: "expiry",
    CVV: "cvv",
    Remove: "remove",
    Specifications: "specs",
    "Related products": "related",
  };
  let state = {
    cart: [],
    wishlist: [],
    compare: [],
    currency: "GBP",
    language: "en",
    theme: "light",
    filters: {
      q: "",
      category: "All",
      stock: "all",
      min: null,
      max: null,
      sort: "featured",
    },
    selected: { options: {}, qty: 1 },
    rates: { ...FALLBACK_RATES },
  };
  try {
    state = {
      ...state,
      ...JSON.parse(localStorage.getItem(STORE) || "{}"),
      rates: {
        ...FALLBACK_RATES,
        ...(JSON.parse(localStorage.getItem(STORE) || "{}").rates || {}),
      },
    };
  } catch {}
  const save = () => localStorage.setItem(STORE, JSON.stringify(state)),
    tr = (k) => (TEXT[state.language] || TEXT.en)[k] || k,
    product = (id) => PRODUCTS.find((p) => p.id === Number(id));
  const translateText = (text) =>
    (SITE_TRANSLATIONS[state.language] || SITE_TRANSLATIONS.en)?.[text] || text;
  const optionGroups = (p) => p.options || {},
    firstSelection = (p) =>
      Object.fromEntries(
        Object.entries(optionGroups(p)).map(([k, v]) => [k, v[0]?.value]),
      );
  function selectedOption(p, key, value = state.selected.options[key]) {
    return (optionGroups(p)[key] || []).find((x) => x.value === value) || null;
  }
  function variant(p, selection = state.selected.options) {
    let price = p.price,
      image = p.images[0];
    for (const [k, v] of Object.entries(selection || {})) {
      const o = selectedOption(p, k, v);
      if (o) {
        price += Number(o.priceDelta || 0);
        if (Number.isInteger(o.imageIndex) && p.images[o.imageIndex])
          image = p.images[o.imageIndex];
        if (o.image) image = o.image;
      }
    }
    return { price, image };
  }
  const money = (n) =>
    new Intl.NumberFormat(LOCALES[state.currency] || "en-GB", {
      style: "currency",
      currency: state.currency,
    }).format(n * (state.rates[state.currency] || 1));
  const itemPrice = (i) => Number(i.price ?? product(i.id)?.price ?? 0),
    subtotal = () => state.cart.reduce((n, i) => n + itemPrice(i) * i.qty, 0),
    delivery = () => {
      const s = subtotal();
      return s === 0 || s >= 50 ? 0 : 4.99;
    },
    cartCount = () => state.cart.reduce((n, i) => n + i.qty, 0);
  function toast(m) {
    const e = $("[data-toast]");
    if (!e) return;
    e.textContent = m;
    e.classList.add("show");
    clearTimeout(e._t);
    e._t = setTimeout(() => e.classList.remove("show"), 2500);
  }
  function counters() {
    $$("[data-cart-count]").forEach((e) => (e.textContent = cartCount()));
    $$("[data-wishlist-count]").forEach(
      (e) => (e.textContent = state.wishlist.length),
    );
    $$("[data-compare-count]").forEach(
      (e) => (e.textContent = state.compare.length),
    );
  }
  function card(p) {
    const v = variant(p, firstSelection(p)),
      wish = state.wishlist.includes(p.id),
      cmp = state.compare.includes(p.id);
    return `<article class="product-card"><div class="product-media">${p.badge ? `<span class="badge">${translateText(p.badge)}</span>` : ""}<div class="card-actions"><button class="${wish ? "active" : ""}" data-action="wish" data-id="${p.id}" aria-label="${translateText("Wishlist")}">♡</button><button class="${cmp ? "active" : ""}" data-action="compare-item" data-id="${p.id}" aria-label="${translateText("Compare")}">⇄</button></div><a href="product-details.html?id=${p.id}"><img src="${v.image}" alt="${p.name}" loading="lazy"></a></div><div class="product-body"><span class="product-brand">${p.brand}</span><h3 class="product-title">${p.name}</h3><div class="rating">★★★★★ ${p.rating} (${p.reviews})</div><div class="price"><strong>${money(v.price)}</strong>${p.oldPrice ? `<span class="old-price">${money(p.oldPrice)}</span>` : ""}</div><p class="stock">${p.stock > 0 ? `${p.stock} ${translateText("In stock").toLowerCase()}` : translateText("Out of stock")}</p><div class="product-buttons"><button class="btn primary" data-action="add" data-id="${p.id}">${tr("add")}</button><a class="btn ghost" href="product-details.html?id=${p.id}">${tr("details")}</a></div></div></article>`;
  }
  function renderHome() {
    const c = $("[data-category-grid]");
    if (c) {
      const icons = {
        Smartphones: "📱",
        Laptops: "💻",
        Tablets: "▣",
        Gaming: "🎮",
        Monitors: "🖥️",
        Components: "⚙️",
      };
      c.innerHTML = [...new Set(PRODUCTS.map((p) => p.category))]
        .map(
          (x) =>
            `<a class="category-card" href="products.html?category=${encodeURIComponent(x)}"><span class="category-icon">${icons[x] || "⌁"}</span><b>${translateText(x)}</b></a>`,
        )
        .join("");
    }
    const f = $("[data-featured]");
    if (f)
      f.innerHTML = PRODUCTS.filter((p) => p.featured)
        .slice(0, 8)
        .map(card)
        .join("");
  }
  function filtered() {
    let a = PRODUCTS.filter((p) => {
      const q = (p.name + p.brand + p.category + p.description).toLowerCase();
      return (
        (!state.filters.q || q.includes(state.filters.q)) &&
        (state.filters.category === "All" ||
          p.category === state.filters.category) &&
        (state.filters.stock === "all" ||
          (state.filters.stock === "in" ? p.stock > 0 : p.stock === 0)) &&
        (state.filters.min == null || p.price >= state.filters.min) &&
        (state.filters.max == null || p.price <= state.filters.max)
      );
    });
    const s = state.filters.sort;
    if (s === "price-low") a.sort((x, y) => x.price - y.price);
    else if (s === "price-high") a.sort((x, y) => y.price - x.price);
    else if (s === "rating") a.sort((x, y) => y.rating - x.rating);
    else if (s === "name") a.sort((x, y) => x.name.localeCompare(y.name));
    else a.sort((x, y) => Number(y.featured) - Number(x.featured));
    return a;
  }
  function renderProducts() {
    const box = $("[data-products]");
    if (box) {
      const a = filtered();
      box.innerHTML = a.length
        ? a.map(card).join("")
        : `<div class="empty-state"><h2>No products found</h2></div>`;
      $("[data-results]") && ($("[data-results]").textContent = a.length);
    }
  }
  function selectionSummary(i) {
    return Object.entries(i.options || {})
      .map(([k, v]) => `${k}: ${v}`)
      .join(" · ");
  }
  function add(id, qty = 1, selection = null) {
    const p = product(id);
    if (!p) return;
    const options = selection || firstSelection(p),
      v = variant(p, options),
      key = JSON.stringify(options),
      x = state.cart.find(
        (i) => i.id === p.id && JSON.stringify(i.options || {}) === key,
      );
    if (x) x.qty = Math.min(p.stock, x.qty + qty);
    else
      state.cart.push({
        id: p.id,
        qty: Math.min(qty, p.stock),
        options,
        price: v.price,
        image: v.image,
      });
    save();
    counters();
    renderCart();
    toast(tr("added"));
  }
  function toggleList(key, id, max = 99) {
    const a = state[key],
      i = a.indexOf(id);
    if (i < 0) {
      if (a.length >= max) return toast(tr("limit"));
      a.push(id);
    } else a.splice(i, 1);
    save();
    counters();
    renderProducts();
    renderHome();
    toast(tr(key === "wishlist" ? "wish" : "compare"));
  }
  function renderCart() {
    const box = $("[data-cart-items]");
    if (box)
      box.innerHTML = state.cart.length
        ? state.cart
            .map((i, index) => {
              const p = product(i.id);
              return `<article class="cart-item"><img src="${i.image || p.images[0]}" alt="${p.name}"><div><b>${p.name}</b><p>${selectionSummary(i)}</p><span>${money(itemPrice(i))}</span></div><div class="qty"><button data-action="qty" data-index="${index}" data-delta="-1">−</button><b>${i.qty}</b><button data-action="qty" data-index="${index}" data-delta="1">+</button></div><strong>${money(itemPrice(i) * i.qty)}</strong><button class="link-btn" data-action="remove" data-index="${index}">${tr("remove")}</button></article>`;
            })
            .join("")
        : `<div class="empty-state"><h2>${tr("cartEmpty")}</h2><a class="btn primary" href="products.html">${tr("shop")}</a></div>`;
    summary();
    const ci = $("[data-checkout-items]");
    if (ci)
      ci.innerHTML = state.cart.length
        ? state.cart
            .map((i) => {
              const p = product(i.id);
              return `<div class="checkout-item"><img src="${i.image || p.images[0]}" alt="${p.name}"><div><b>${p.name}</b><small>${selectionSummary(i)}<br>${i.qty} × ${money(itemPrice(i))}</small></div><strong>${money(i.qty * itemPrice(i))}</strong></div>`;
            })
            .join("")
        : `<p>${tr("cartEmpty")}</p>`;
  }
  function summary() {
    $$("[data-subtotal]").forEach((e) => (e.textContent = money(subtotal())));
    $$("[data-delivery]").forEach(
      (e) => (e.textContent = delivery() ? money(delivery()) : tr("free")),
    );
    $$("[data-total]").forEach(
      (e) => (e.textContent = money(subtotal() + delivery())),
    );
  }
  function optionMarkup(p, key, items) {
    return `<div class="option-group"><b>${tr(key.toLowerCase()) || translateText(key)}</b><div class="option-list">${items.map((o, i) => `<button class="${i ? "" : "active"}" data-action="option" data-key="${key}" data-value="${o.value}">${translateText(o.value)}${o.priceDelta ? ` (+${money(o.priceDelta)})` : ""}</button>`).join("")}</div></div>`;
  }
  function selectedGallery(p) {
    return p.colourGalleries?.[state.selected.options.Colour] || p.images;
  }
  function galleryMarkup(p) {
    return selectedGallery(p)
      .map(
        (src, index) =>
          `<button class="${index ? "" : "active"}" data-action="image" data-src="${src}"><img src="${src}" alt="${p.name} ${index + 1}"></button>`,
      )
      .join("");
  }
  function updateDetailVariant() {
    const p = product(state.selected.id);
    if (!p) return;
    const v = variant(p, state.selected.options),
      images = selectedGallery(p);
    $("[data-detail-price]") &&
      ($("[data-detail-price]").textContent = money(v.price));
    $("[data-main-image]") &&
      ($("[data-main-image]").src = images[0] || v.image);
    $(".thumbnails") && ($(".thumbnails").innerHTML = galleryMarkup(p));
  }
  function details() {
    const box = $("[data-product-details]");
    if (!box) return;
    const p = product(new URLSearchParams(location.search).get("id"));
    if (!p) {
      box.innerHTML = `<div class="empty-state"><h1>${translateText("Product not found")}</h1></div>`;
      return;
    }
    state.selected = { id: p.id, options: firstSelection(p), qty: 1 };
    const v = variant(p, state.selected.options);
    box.innerHTML = `<div class="details-layout"><div><div class="gallery-main"><img data-main-image src="${v.image}" alt="${p.name}"></div><div class="thumbnails">${galleryMarkup(p)}</div></div><div class="details-info"><span class="product-brand">${p.brand}</span><h1>${p.name}</h1><div class="rating">★★★★★ ${p.rating} (${p.reviews} ${translateText("reviews")})</div><div class="details-price"><span data-detail-price>${money(v.price)}</span> <span class="old-price">${money(p.oldPrice)}</span></div><p>${translateText(p.description)}</p><p class="stock">${p.stock} ${translateText("In stock").toLowerCase()}</p>${Object.entries(
      optionGroups(p),
    )
      .map(([k, a]) => optionMarkup(p, k, a))
      .join(
        "",
      )}<div class="quantity-row"><input data-detail-qty type="number" min="1" max="${p.stock}" value="1"><button class="btn primary" data-action="add-detail" data-id="${p.id}">${tr("add")}</button></div></div><section class="specs"><h2>${tr("specs")}</h2><dl>${Object.entries(
      p.specifications,
    )
      .map(
        ([k, v]) =>
          `<div><dt>${translateText(k)}</dt><dd>${translateText(v)}</dd></div>`,
      )
      .join("")}</dl></section></div>`;
    const rel = $("[data-related]");
    if (rel)
      rel.innerHTML = PRODUCTS.filter(
        (x) => x.category === p.category && x.id !== p.id,
      )
        .slice(0, 4)
        .map(card)
        .join("");
  }
  function drawer(kind) {
    const d = $("[data-drawer]"),
      title = $("[data-drawer-title]"),
      body = $("[data-drawer-content]");
    if (!d) return;
    const list = state[kind].map(product).filter(Boolean);
    title.textContent = kind === "wishlist" ? "Wishlist" : "Compare products";
    body.innerHTML = list.length
      ? list
          .map(
            (p) =>
              `<div class="drawer-card"><img src="${p.images[0]}" alt="${p.name}"><div><b>${p.name}</b><p>${money(p.price)}</p></div><button data-action="${kind === "wishlist" ? "wish" : "compare-item"}" data-id="${p.id}">×</button></div>`,
          )
          .join("")
      : `<div class="empty-state"><p>No products selected.</p></div>`;
    d.classList.add("open");
  }
  function validate(form) {
    let ok = true;
    $$("[required]", form).forEach((f) => {
      const valid = f.type === "checkbox" ? f.checked : f.checkValidity();
      f.classList.toggle("invalid", !valid);
      if (!valid) ok = false;
    });
    return ok;
  }
  function submitOrder(form) {
    if (!state.cart.length) return toast(tr("cartEmpty"));
    if (!validate(form)) return;
    const ref = `LT-${Date.now().toString().slice(-7)}`;
    localStorage.setItem(
      "lt-last-order",
      JSON.stringify({
        ref,
        date: new Date().toISOString(),
        customer: Object.fromEntries(new FormData(form)),
        items: state.cart,
        total: subtotal() + delivery(),
      }),
    );
    state.cart = [];
    save();
    counters();
    renderCart();
    $("[data-order-ref]").textContent = ref;
    $("[data-order-success]").classList.add("show");
    $("[data-checkout-layout]").style.display = "none";
    toast(tr("order"));
  }
  function chatReply(m) {
    m = m.toLowerCase();
    if (/delivery|shipping|livrare/.test(m))
      return state.language === "ro"
        ? "Livrarea standard durează 3–5 zile lucrătoare."
        : "Standard UK delivery takes 3–5 working days.";
    if (/return|refund|retur/.test(m))
      return state.language === "ro"
        ? "Produsele eligibile pot fi returnate în 30 de zile."
        : "Eligible products may be returned within 30 days.";
    if (/warranty|garantie|garanție/.test(m))
      return state.language === "ro"
        ? "Fiecare produs are informații clare despre garanție."
        : "Every product includes clear warranty information.";
    if (/payment|paypal|card/.test(m))
      return state.language === "ro"
        ? "Acest proiect educațional nu procesează plăți reale."
        : "This educational website does not process real payments.";
    return state.language === "ro"
      ? "Te pot ajuta cu livrarea, retururile, garanția și plata."
      : "I can help with delivery, returns, warranty and payment questions.";
  }
  function populateCountries() {
    const codes =
      `AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TF TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI VN VU WF WS YE YT ZA ZM ZW`.split(
        " ",
      );
    const names = new Intl.DisplayNames([state.language], { type: "region" });
    $$("[data-country-select]").forEach((sel) => {
      const current = sel.value;
      sel.innerHTML =
        `<option value="">${tr("country")}</option>` +
        codes
          .map((c) => `<option value="${c}">${names.of(c) || c}</option>`)
          .join("");
      sel.value = current;
    });
  }
  function translatePage() {
    document.documentElement.lang = state.language;
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
    );
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((n) => {
      const parent = n.parentElement;
      if (!parent || ["SCRIPT", "STYLE"].includes(parent.tagName)) return;
      const raw = n.nodeValue,
        txt = raw.trim();
      if (!txt) return;
      if (!n._en) n._en = txt;
      n.nodeValue = raw.replace(txt, translateText(n._en));
    });
    $$("[placeholder],[aria-label],[title]").forEach((element) => {
      for (const attribute of ["placeholder", "aria-label", "title"]) {
        if (!element.hasAttribute(attribute)) continue;
        const key = `en${attribute.replace("-", "")}`;
        if (!element.dataset[key])
          element.dataset[key] = element.getAttribute(attribute);
        element.setAttribute(attribute, translateText(element.dataset[key]));
      }
    });
    document.documentElement.dataset.englishTitle ||= document.title;
    document.title = translateText(
      document.documentElement.dataset.englishTitle,
    );
    populateCountries();
    renderHome();
    renderProducts();
    details();
    renderCart();
  }
  async function updateRates() {
    try {
      const r = await fetch("https://api.frankfurter.app/latest?from=GBP");
      if (!r.ok) return;
      const d = await r.json();
      state.rates = {
        ...state.rates,
        EUR: d.rates.EUR || state.rates.EUR,
        USD: d.rates.USD || state.rates.USD,
        RON: d.rates.RON || state.rates.RON,
      };
      save();
      renderHome();
      renderProducts();
      details();
      renderCart();
    } catch {}
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-action]");
    if (!b) return;
    const a = b.dataset.action,
      id = Number(b.dataset.id);
    if (a === "add") add(id);
    if (a === "add-detail")
      add(id, Number($("[data-detail-qty]").value) || 1, {
        ...state.selected.options,
      });
    if (a === "wish") toggleList("wishlist", id);
    if (a === "compare-item") toggleList("compare", id, 4);
    if (a === "wishlist") drawer("wishlist");
    if (a === "compare") drawer("compare");
    if (a === "drawer-close") $("[data-drawer]").classList.remove("open");
    if (a === "remove") {
      state.cart.splice(Number(b.dataset.index), 1);
      save();
      counters();
      renderCart();
    }
    if (a === "qty") {
      const i = Number(b.dataset.index),
        x = state.cart[i],
        p = product(x.id);
      x.qty = Math.max(0, Math.min(p.stock, x.qty + Number(b.dataset.delta)));
      if (!x.qty) state.cart.splice(i, 1);
      save();
      counters();
      renderCart();
    }
    if (a === "clear-cart") {
      state.cart = [];
      save();
      counters();
      renderCart();
    }
    if (a === "option") {
      $$(`[data-key="${b.dataset.key}"]`).forEach((x) =>
        x.classList.remove("active"),
      );
      b.classList.add("active");
      state.selected.options[b.dataset.key] = b.dataset.value;
      updateDetailVariant();
    }
    if (a === "image") {
      $("[data-main-image]").src = b.dataset.src;
      $$(".thumbnails button").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
    }
    if (a === "theme") {
      state.theme = state.theme === "dark" ? "light" : "dark";
      document.body.classList.toggle("dark", state.theme === "dark");
      save();
    }
    if (a === "menu") $(".main-nav").classList.toggle("open");
    if (a === "search") {
      $(".search-panel").classList.add("open");
      setTimeout(() => $("[data-global-search]")?.focus(), 0);
    }
    if (a === "close-search") $(".search-panel").classList.remove("open");
    if (a === "chat") $(".chat").classList.add("open");
    if (a === "chat-close") $(".chat").classList.remove("open");
    if (a === "top") scrollTo({ top: 0, behavior: "smooth" });
    if (a === "reset-filters") {
      state.filters = {
        q: "",
        category: "All",
        stock: "all",
        min: null,
        max: null,
        sort: "featured",
      };
      $$("[data-product-search],[data-min-price],[data-max-price]").forEach(
        (x) => (x.value = ""),
      );
      $("[data-category-filter]").value = "All";
      $("[data-stock-filter]").value = "all";
      renderProducts();
    }
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Enter" || !e.target.matches("[data-global-search]")) return;
    e.preventDefault();
    const query = e.target.value.trim();
    if (query) location.href = `products.html?q=${encodeURIComponent(query)}`;
  });
  document.addEventListener("input", (e) => {
    if (e.target.matches("[data-product-search]")) {
      state.filters.q = e.target.value.toLowerCase();
      renderProducts();
    }
    if (e.target.matches("[data-min-price]")) {
      state.filters.min = e.target.value ? Number(e.target.value) : null;
      renderProducts();
    }
    if (e.target.matches("[data-max-price]")) {
      state.filters.max = e.target.value ? Number(e.target.value) : null;
      renderProducts();
    }
  });
  document.addEventListener("change", (e) => {
    if (e.target.matches("[data-category-filter]")) {
      state.filters.category = e.target.value;
      renderProducts();
    }
    if (e.target.matches("[data-stock-filter]")) {
      state.filters.stock = e.target.value;
      renderProducts();
    }
    if (e.target.matches("[data-sort]")) {
      state.filters.sort = e.target.value;
      renderProducts();
    }
    if (e.target.matches("[data-currency]")) {
      state.currency = e.target.value;
      save();
      renderHome();
      renderProducts();
      details();
      renderCart();
    }
    if (e.target.matches("[data-language]")) {
      state.language = LANGS.includes(e.target.value) ? e.target.value : "en";
      save();
      translatePage();
    }
    if (e.target.name === "payment") {
      const card = e.target.value === "card";
      $("[data-card-fields]").classList.toggle("hidden", !card);
      $("[data-paypal-note]").classList.toggle("show", !card);
      $$("[data-card-fields] input").forEach((x) => (x.required = card));
    }
  });
  document.addEventListener("submit", (e) => {
    if (e.target.matches("[data-checkout-form]")) {
      e.preventDefault();
      submitOrder(e.target);
    }
    if (e.target.matches("[data-contact-form]")) {
      e.preventDefault();
      if (validate(e.target)) {
        e.target.reset();
        toast(tr("messageSent"));
      }
    }
    if (e.target.matches("[data-newsletter]")) {
      e.preventDefault();
      if (validate(e.target)) {
        e.target.reset();
        toast(tr("thanks"));
      }
    }
    if (e.target.matches("[data-chat-form]")) {
      e.preventDefault();
      const input = $("input", e.target),
        box = $("[data-chat-messages]");
      box.insertAdjacentHTML(
        "beforeend",
        `<div class="message user">${input.value}</div>`,
      );
      const reply = chatReply(input.value);
      input.value = "";
      setTimeout(
        () =>
          box.insertAdjacentHTML(
            "beforeend",
            `<div class="message">${reply}</div>`,
          ),
        400,
      );
    }
  });
  window.addEventListener("scroll", () =>
    $(".back-top")?.classList.toggle("show", scrollY > 500),
  );
  function init() {
    document.body.classList.toggle("dark", state.theme === "dark");
    $$("[data-language]").forEach((x) => (x.value = state.language));
    $$("[data-currency]").forEach((x) => (x.value = state.currency));
    const params = new URLSearchParams(location.search),
      category = params.get("category"),
      query = params.get("q");
    if (category) state.filters.category = category;
    if (query) {
      state.filters.q = query.toLowerCase();
      $("[data-product-search]") && ($("[data-product-search]").value = query);
    }
    translatePage();
    renderHome();
    renderProducts();
    details();
    renderCart();
    counters();
    const chat = $("[data-chat-messages]");
    if (chat && !chat.children.length)
      chat.innerHTML = `<div class="message">${translateText("Hello! Ask me about delivery, returns, warranty or payment.")}</div>`;
    $$(".main-nav a").forEach((a) => {
      if (a.getAttribute("href") === location.pathname.split("/").pop())
        a.classList.add("active");
    });
    updateRates();
  }
  init();
})();
