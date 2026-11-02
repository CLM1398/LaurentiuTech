"use strict";
const PRODUCTS = [
  {
    id: 1,
    brand: "Apple",
    name: "iPhone 17 Pro Max",
    category: "Smartphones",
    price: 1199,
    oldPrice: 1299,
    rating: 4.9,
    reviews: 184,
    stock: 20,
    featured: true,
    bestseller: true,
    newArrival: true,
    badge: "Latest",
    sku: "LT-APL-17PM",
    warranty: "24 months",
    delivery: "Fast UK delivery",
    images: [],
    description:
      "Apple flagship smartphone with a 6.9-inch Super Retina XDR display, A19 Pro performance and a professional 48 MP camera system.",
    options: {
      Colour: [
        {
          value: "Silver",
          priceDelta: 0,
          imageIndex: 0,
        },
        {
          value: "Deep Blue",
          priceDelta: 0,
          imageIndex: 1,
        },
        {
          value: "Cosmic Orange",
          priceDelta: 0,
          imageIndex: 2,
        },
      ],
      Storage: [
        {
          value: "256 GB",
          priceDelta: 0,
        },
        {
          value: "512 GB",
          priceDelta: 200,
        },
        {
          value: "1 TB",
          priceDelta: 400,
        },
        {
          value: "2 TB",
          priceDelta: 600,
        },
      ],
    },
    specifications: {
      Display: "6.9-inch Super Retina XDR",
      Processor: "Apple A19 Pro",
      Camera: "48 MP Pro Fusion system",
      Connectivity: "5G, Wi‑Fi and eSIM",
    },
  },
  {
    id: 2,
    brand: "Samsung",
    name: "Galaxy S26 Ultra",
    category: "Smartphones",
    price: 1279,
    oldPrice: 1399,
    rating: 4.9,
    reviews: 152,
    stock: 22,
    featured: true,
    bestseller: true,
    newArrival: true,
    badge: "New",
    sku: "LT-SAM-S26U",
    warranty: "24 months",
    delivery: "Fast UK delivery",
    images: [],
    description:
      "Samsung flagship smartphone with Galaxy AI, an integrated S Pen and a high-resolution professional camera system.",
    options: {
      Colour: [
        {
          value: "Cobalt Violet",
          priceDelta: 0,
          imageIndex: 0,
        },
        {
          value: "Sky Blue",
          priceDelta: 0,
          imageIndex: 1,
        },
        {
          value: "Black",
          priceDelta: 0,
          imageIndex: 2,
        },
        {
          value: "White",
          priceDelta: 0,
          imageIndex: 0,
        },
        {
          value: "Silver Shadow",
          priceDelta: 0,
          imageIndex: 1,
        },
        {
          value: "Pink Gold",
          priceDelta: 0,
          imageIndex: 2,
        },
      ],
      Storage: [
        {
          value: "256 GB",
          priceDelta: 0,
        },
        {
          value: "512 GB",
          priceDelta: 170,
        },
        {
          value: "1 TB",
          priceDelta: 420,
        },
      ],
      Memory: [
        {
          value: "12 GB",
          priceDelta: 0,
        },
        {
          value: "16 GB",
          priceDelta: 120,
        },
      ],
    },
    specifications: {
      Display: "6.9-inch Dynamic AMOLED",
      Processor: "Snapdragon 8 Elite Gen 5 for Galaxy",
      Camera: "200 MP multi-camera system",
      Included: "S Pen",
    },
  },
  {
    id: 3,
    brand: "Google",
    name: "Pixel 10 Pro XL",
    category: "Smartphones",
    price: 1099,
    oldPrice: 1199,
    rating: 4.8,
    reviews: 118,
    stock: 16,
    featured: true,
    bestseller: false,
    newArrival: true,
    badge: "AI Camera",
    sku: "LT-GOO-P10XL",
    warranty: "24 months",
    delivery: "Fast UK delivery",
    images: [],
    description:
      "Google premium smartphone combining Tensor-powered AI, an advanced camera system and a bright Super Actua display.",
    options: {
      Colour: [
        {
          value: "Obsidian",
          priceDelta: 0,
          imageIndex: 0,
        },
        {
          value: "Porcelain",
          priceDelta: 0,
          imageIndex: 1,
        },
        {
          value: "Moonstone",
          priceDelta: 0,
          imageIndex: 2,
        },
        {
          value: "Jade",
          priceDelta: 0,
          imageIndex: 0,
        },
      ],
      Storage: [
        {
          value: "256 GB",
          priceDelta: 0,
        },
        {
          value: "512 GB",
          priceDelta: 180,
        },
        {
          value: "1 TB",
          priceDelta: 380,
        },
      ],
      Memory: [
        {
          value: "16 GB",
          priceDelta: 0,
        },
      ],
    },
    specifications: {
      Display: "6.8-inch Super Actua LTPO OLED",
      Processor: "Google Tensor",
      Battery: "24+ hour battery life",
      Charging: "Pixelsnap Qi2 wireless charging",
    },
  },
  {
    id: 4,
    brand: "Apple",
    name: "MacBook Pro 16 M5 Pro",
    category: "Laptops",
    price: 2699,
    oldPrice: 2899,
    rating: 4.9,
    reviews: 96,
    stock: 10,
    featured: true,
    bestseller: true,
    newArrival: true,
    badge: "M5 Pro",
    sku: "LT-APL-MBP16",
    warranty: "24 months",
    delivery: "Fast UK delivery",
    images: [],
    description:
      "Professional 16-inch laptop with M5 Pro performance, a Liquid Retina XDR display and all-day battery life.",
    options: {
      Colour: [
        {
          value: "Space Black",
          priceDelta: 0,
          imageIndex: 0,
        },
        {
          value: "Silver",
          priceDelta: 0,
          imageIndex: 1,
        },
      ],
      Storage: [
        {
          value: "1 TB",
          priceDelta: 0,
        },
        {
          value: "2 TB",
          priceDelta: 400,
        },
        {
          value: "4 TB",
          priceDelta: 900,
        },
      ],
      Memory: [
        {
          value: "24 GB",
          priceDelta: 0,
        },
        {
          value: "48 GB",
          priceDelta: 500,
        },
        {
          value: "64 GB",
          priceDelta: 850,
        },
      ],
    },
    specifications: {
      Display: "16-inch Liquid Retina XDR",
      Processor: "Apple M5 Pro",
      Ports: "Thunderbolt 5, HDMI, SDXC and MagSafe",
      "Operating system": "macOS",
    },
  },
  {
    id: 5,
    brand: "ASUS",
    name: "ROG Strix SCAR 18",
    category: "Laptops",
    price: 3299,
    oldPrice: 3599,
    rating: 4.8,
    reviews: 77,
    stock: 8,
    featured: true,
    bestseller: false,
    newArrival: true,
    badge: "Gaming",
    sku: "LT-ASU-SCAR18",
    warranty: "24 months",
    delivery: "Fast UK delivery",
    images: [],
    description:
      "Premium 18-inch gaming laptop engineered for high-refresh competitive gaming and demanding creative workloads.",
    options: {
      Colour: [
        {
          value: "Eclipse Grey",
          priceDelta: 0,
          imageIndex: 0,
        },
      ],
      Storage: [
        {
          value: "1 TB",
          priceDelta: 0,
        },
        {
          value: "2 TB",
          priceDelta: 250,
        },
        {
          value: "4 TB",
          priceDelta: 620,
        },
      ],
      Memory: [
        {
          value: "32 GB",
          priceDelta: 0,
        },
        {
          value: "64 GB",
          priceDelta: 350,
        },
        {
          value: "96 GB",
          priceDelta: 700,
        },
      ],
    },
    specifications: {
      Display: "18-inch Mini LED 240 Hz",
      Processor: "Intel Core Ultra 9",
      Graphics: "NVIDIA GeForce RTX 5090 Laptop GPU",
      "Operating system": "Windows 11",
    },
  },
  {
    id: 6,
    brand: "Dell",
    name: "Dell Premium 16",
    category: "Laptops",
    price: 1999,
    oldPrice: 2199,
    rating: 4.7,
    reviews: 62,
    stock: 12,
    featured: false,
    bestseller: false,
    newArrival: true,
    badge: "Premium",
    sku: "LT-DEL-P16",
    warranty: "24 months",
    delivery: "Fast UK delivery",
    images: [],
    description:
      "A refined premium laptop with a spacious display, modern Intel performance and a minimalist aluminium design.",
    options: {
      Colour: [
        {
          value: "Graphite",
          priceDelta: 0,
          imageIndex: 0,
        },
        {
          value: "Platinum",
          priceDelta: 0,
          imageIndex: 1,
        },
      ],
      Storage: [
        {
          value: "512 GB",
          priceDelta: 0,
        },
        {
          value: "1 TB",
          priceDelta: 160,
        },
        {
          value: "2 TB",
          priceDelta: 390,
        },
      ],
      Memory: [
        {
          value: "16 GB",
          priceDelta: 0,
        },
        {
          value: "32 GB",
          priceDelta: 220,
        },
        {
          value: "64 GB",
          priceDelta: 480,
        },
      ],
    },
    specifications: {
      Display: "16.3-inch high-resolution display",
      Processor: "Intel Core Ultra",
      Graphics: "NVIDIA RTX graphics option",
      "Operating system": "Windows 11",
    },
  },
  {
    id: 7,
    brand: "Apple",
    name: "iPad Pro 13 M5",
    category: "Tablets",
    price: 1299,
    oldPrice: 1399,
    rating: 4.9,
    reviews: 89,
    stock: 15,
    featured: true,
    bestseller: true,
    newArrival: true,
    badge: "M5",
    sku: "LT-APL-IPADM5",
    warranty: "24 months",
    delivery: "Fast UK delivery",
    images: [],
    description:
      "Ultra-thin professional tablet with M5 performance and an exceptional Ultra Retina XDR display.",
    options: {
      Colour: [
        {
          value: "Space Black",
          priceDelta: 0,
          imageIndex: 0,
        },
        {
          value: "Silver",
          priceDelta: 0,
          imageIndex: 1,
        },
      ],
      Storage: [
        {
          value: "256 GB",
          priceDelta: 0,
        },
        {
          value: "512 GB",
          priceDelta: 200,
        },
        {
          value: "1 TB",
          priceDelta: 500,
        },
        {
          value: "2 TB",
          priceDelta: 900,
        },
      ],
      Memory: [
        {
          value: "12 GB",
          priceDelta: 0,
        },
        {
          value: "16 GB",
          priceDelta: 250,
        },
      ],
    },
    specifications: {
      Display: "13-inch Ultra Retina XDR",
      Processor: "Apple M5",
      Connectivity: "Wi‑Fi 7 option",
      "Operating system": "iPadOS",
    },
  },
  {
    id: 8,
    brand: "Samsung",
    name: "Galaxy Tab S11 Ultra",
    category: "Tablets",
    price: 1199,
    oldPrice: 1299,
    rating: 4.8,
    reviews: 71,
    stock: 13,
    featured: false,
    bestseller: false,
    newArrival: true,
    badge: "New",
    sku: "LT-SAM-TABS11U",
    warranty: "24 months",
    delivery: "Fast UK delivery",
    images: [],
    description:
      "Large-screen Android tablet with AMOLED visuals, S Pen support and powerful multitasking features.",
    options: {
      Colour: [
        {
          value: "Graphite",
          priceDelta: 0,
          imageIndex: 0,
        },
        {
          value: "Silver",
          priceDelta: 0,
          imageIndex: 1,
        },
      ],
      Storage: [
        {
          value: "256 GB",
          priceDelta: 0,
        },
        {
          value: "512 GB",
          priceDelta: 180,
        },
        {
          value: "1 TB",
          priceDelta: 390,
        },
      ],
      Memory: [
        {
          value: "12 GB",
          priceDelta: 0,
        },
        {
          value: "16 GB",
          priceDelta: 170,
        },
      ],
    },
    specifications: {
      Display: "14.6-inch Dynamic AMOLED",
      Processor: "Flagship mobile platform",
      Included: "S Pen",
      "Operating system": "Android",
    },
  },
  {
    id: 9,
    brand: "Microsoft",
    name: "Surface Pro 13 Copilot+ PC",
    category: "Tablets",
    price: 1299,
    oldPrice: 1399,
    rating: 4.7,
    reviews: 66,
    stock: 11,
    featured: false,
    bestseller: false,
    newArrival: false,
    badge: "Copilot+ PC",
    sku: "LT-MIC-SP13",
    warranty: "24 months",
    delivery: "Fast UK delivery",
    images: [],
    description:
      "Flexible two-in-one Copilot+ PC combining tablet portability with a full Windows productivity experience.",
    options: {
      Colour: [
        {
          value: "Platinum",
          priceDelta: 0,
          imageIndex: 0,
        },
        {
          value: "Black",
          priceDelta: 0,
          imageIndex: 1,
        },
        {
          value: "Sapphire",
          priceDelta: 0,
          imageIndex: 2,
        },
      ],
      Storage: [
        {
          value: "256 GB",
          priceDelta: 0,
        },
        {
          value: "512 GB",
          priceDelta: 180,
        },
        {
          value: "1 TB",
          priceDelta: 420,
        },
      ],
      Memory: [
        {
          value: "16 GB",
          priceDelta: 0,
        },
        {
          value: "32 GB",
          priceDelta: 300,
        },
      ],
    },
    specifications: {
      Display: "13-inch PixelSense touchscreen",
      Processor: "Snapdragon X series",
      Design: "Detachable keyboard support",
      "Operating system": "Windows 11",
    },
  },
  {
    id: 10,
    brand: "Sony",
    name: "PlayStation 5 Pro",
    category: "Gaming",
    price: 699,
    oldPrice: 749,
    rating: 4.9,
    reviews: 224,
    stock: 24,
    featured: true,
    bestseller: true,
    newArrival: false,
    badge: "Best Seller",
    sku: "LT-SON-PS5P",
    warranty: "24 months",
    delivery: "Fast UK delivery",
    images: [],
    description:
      "High-performance PlayStation console designed for enhanced 4K gaming, advanced ray tracing and fast SSD loading.",
    options: {
      Colour: [
        {
          value: "White",
          priceDelta: 0,
          imageIndex: 0,
        },
      ],
      Storage: [
        {
          value: "2 TB",
          priceDelta: 0,
        },
      ],
    },
    specifications: {
      Storage: "2 TB SSD",
      Graphics: "Enhanced ray tracing",
      Resolution: "4K gaming support",
      Controller: "DualSense compatible",
    },
  },
  {
    id: 11,
    brand: "Microsoft",
    name: "Xbox Series X 2TB Galaxy Black",
    category: "Gaming",
    price: 599,
    oldPrice: 649,
    rating: 4.8,
    reviews: 198,
    stock: 19,
    featured: true,
    bestseller: true,
    newArrival: false,
    badge: "2 TB",
    sku: "LT-MIC-XSX2",
    warranty: "24 months",
    delivery: "Fast UK delivery",
    images: [],
    description:
      "Powerful Xbox console with 2 TB storage, fast loading and access to an extensive modern gaming ecosystem.",
    options: {
      Colour: [
        {
          value: "Galaxy Black",
          priceDelta: 0,
          imageIndex: 0,
        },
      ],
      Storage: [
        {
          value: "2 TB",
          priceDelta: 0,
        },
      ],
    },
    specifications: {
      Storage: "2 TB SSD",
      Resolution: "4K gaming",
      "Frame rate": "Up to 120 FPS",
      Services: "Game Pass compatible",
    },
  },
  {
    id: 12,
    brand: "Nintendo",
    name: "Nintendo Switch 2",
    category: "Gaming",
    price: 429,
    oldPrice: 479,
    rating: 4.8,
    reviews: 176,
    stock: 30,
    featured: true,
    bestseller: true,
    newArrival: true,
    badge: "New",
    sku: "LT-NIN-SW2",
    warranty: "24 months",
    delivery: "Fast UK delivery",
    images: [],
    description:
      "Next-generation hybrid Nintendo console for portable and television gaming with upgraded performance and display.",
    options: {
      Colour: [
        {
          value: "Black",
          priceDelta: 0,
          imageIndex: 0,
        },
        {
          value: "Neon Red & Blue",
          priceDelta: 0,
          imageIndex: 1,
        },
      ],
      Storage: [
        {
          value: "256 GB",
          priceDelta: 0,
        },
        {
          value: "512 GB bundle",
          priceDelta: 120,
        },
      ],
    },
    specifications: {
      Type: "Hybrid gaming console",
      Display: "High-resolution portable display",
      Modes: "Handheld, tabletop and TV",
      Connectivity: "Modern wireless connectivity",
    },
  },
  {
    id: 13,
    brand: "Samsung",
    name: "Odyssey OLED G9",
    category: "Monitors",
    price: 1399,
    oldPrice: 1599,
    rating: 4.8,
    reviews: 88,
    stock: 9,
    featured: true,
    bestseller: false,
    newArrival: false,
    badge: "OLED",
    sku: "LT-SAM-G9",
    warranty: "36 months",
    delivery: "Fast UK delivery",
    images: [],
    description:
      "Immersive 49-inch super-ultrawide OLED gaming monitor with a fast refresh rate and exceptional contrast.",
    options: {
      Colour: [
        {
          value: "Black",
          priceDelta: 0,
          imageIndex: 0,
        },
      ],
    },
    specifications: {
      Size: "49 inches",
      Resolution: "5120 × 1440",
      "Refresh rate": "240 Hz",
      Panel: "OLED",
    },
  },
  {
    id: 14,
    brand: "LG",
    name: "UltraGear OLED 45GX950A",
    category: "Monitors",
    price: 1699,
    oldPrice: 1899,
    rating: 4.8,
    reviews: 55,
    stock: 7,
    featured: false,
    bestseller: false,
    newArrival: true,
    badge: "5K2K OLED",
    sku: "LT-LG-45GX",
    warranty: "36 months",
    delivery: "Fast UK delivery",
    images: [],
    description:
      "Large curved OLED gaming monitor combining high resolution, deep contrast and responsive gaming performance.",
    options: {
      Colour: [
        {
          value: "Black",
          priceDelta: 0,
          imageIndex: 0,
        },
      ],
    },
    specifications: {
      Size: "45 inches",
      Resolution: "5K2K ultrawide",
      Panel: "OLED",
      Use: "Premium gaming and creative work",
    },
  },
  {
    id: 15,
    brand: "ASUS",
    name: "ROG Swift OLED PG32UCDP",
    category: "Monitors",
    price: 1299,
    oldPrice: 1399,
    rating: 4.9,
    reviews: 61,
    stock: 8,
    featured: false,
    bestseller: false,
    newArrival: false,
    badge: "ROG OLED",
    sku: "LT-ASU-PG32",
    warranty: "36 months",
    delivery: "Fast UK delivery",
    images: [],
    description:
      "32-inch ROG OLED monitor with dual-mode gaming performance and professional-grade image quality.",
    options: {
      Colour: [
        {
          value: "Black",
          priceDelta: 0,
          imageIndex: 0,
        },
      ],
    },
    specifications: {
      Size: "32 inches",
      Resolution: "4K",
      "Refresh rate": "High-refresh dual mode",
      Panel: "OLED",
    },
  },
  {
    id: 16,
    brand: "NVIDIA",
    name: "GeForce RTX 5090",
    category: "Components",
    price: 1999,
    oldPrice: 2199,
    rating: 4.9,
    reviews: 132,
    stock: 6,
    featured: true,
    bestseller: true,
    newArrival: true,
    badge: "Flagship GPU",
    sku: "LT-NV-5090",
    warranty: "36 months",
    delivery: "Fast UK delivery",
    images: [],
    description:
      "Flagship graphics platform for high-resolution gaming, content creation, AI acceleration and advanced ray tracing.",
    options: {
      Colour: [
        {
          value: "Founders Edition",
          priceDelta: 0,
          imageIndex: 0,
        },
      ],
      Memory: [
        {
          value: "32 GB GDDR7",
          priceDelta: 0,
        },
      ],
    },
    specifications: {
      Memory: "32 GB GDDR7",
      Interface: "PCI Express",
      Technology: "Ray tracing and AI acceleration",
      Use: "4K gaming and professional creation",
    },
  },
  {
    id: 17,
    brand: "AMD",
    name: "Ryzen 9 9950X3D",
    category: "Components",
    price: 699,
    oldPrice: 749,
    rating: 4.9,
    reviews: 119,
    stock: 14,
    featured: true,
    bestseller: true,
    newArrival: false,
    badge: "3D V-Cache",
    sku: "LT-AMD-9950X3D",
    warranty: "36 months",
    delivery: "Fast UK delivery",
    images: [],
    description:
      "High-end desktop processor combining strong gaming performance with serious multi-core productivity.",
    options: {
      Colour: [
        {
          value: "Retail Box",
          priceDelta: 0,
          imageIndex: 0,
        },
      ],
    },
    specifications: {
      Cores: "16",
      Threads: "32",
      Socket: "AM5",
      Technology: "3D V-Cache",
    },
  },
  {
    id: 18,
    brand: "Samsung",
    name: "9100 PRO NVMe SSD",
    category: "Components",
    price: 219,
    oldPrice: 249,
    rating: 4.8,
    reviews: 102,
    stock: 35,
    featured: false,
    bestseller: true,
    newArrival: true,
    badge: "PCIe 5.0",
    sku: "LT-SAM-9100P",
    warranty: "60 months",
    delivery: "Fast UK delivery",
    images: [],
    description:
      "Fast PCIe 5.0 NVMe storage designed for modern gaming systems, workstations and demanding file workflows.",
    options: {
      Colour: [
        {
          value: "Black",
          priceDelta: 0,
          imageIndex: 0,
        },
      ],
      Storage: [
        {
          value: "1 TB",
          priceDelta: 0,
        },
        {
          value: "2 TB",
          priceDelta: 140,
        },
        {
          value: "4 TB",
          priceDelta: 390,
        },
        {
          value: "8 TB",
          priceDelta: 890,
        },
      ],
    },
    specifications: {
      Interface: "PCIe 5.0 NVMe",
      "Form factor": "M.2 2280",
      Use: "Gaming and workstation storage",
      Warranty: "Up to 5 years",
    },
  },
];

const PRODUCT_MEDIA = {
  1: {
    Silver: "iphone-17-pro-max/silver",
    "Deep Blue": "iphone-17-pro-max/deepblue",
    "Cosmic Orange": "iphone-17-pro-max/cosmicorange",
  },
  2: {
    "Cobalt Violet": "galaxy-s26-ultra/cobalt-violet",
    "Sky Blue": "galaxy-s26-ultra/sky-blue",
    Black: "galaxy-s26-ultra/black",
    White: "galaxy-s26-ultra/white",
    "Silver Shadow": "galaxy-s26-ultra/silver-shadow",
    "Pink Gold": "galaxy-s26-ultra/pink-gold",
  },
  3: {
    Obsidian: "pixel-10-pro-xl/obsidian",
    Porcelain: "pixel-10-pro-xl/porcelain",
    Moonstone: "pixel-10-pro-xl/moonstone",
    Jade: "pixel-10-pro-xl/jade",
  },
  4: "macbook-pro-16-m5",
  5: "rog-strix-scar-18",
  6: "dell-premium-16",
  7: "ipad-pro-13-m5",
  8: "galaxy-tab-s11-ultra",
  9: "surface-pro-13",
  10: "playstation-5-pro",
  11: "xbox-series-x-2tb",
  12: "nintendo-switch-2",
  13: "odyssey-oled-g9",
  14: "ultragear-45gx950a",
  15: "rog-swift-pg32ucdp",
  16: "geforce-rtx-5090",
  17: "ryzen-9-9950x3d",
  18: "samsung-9100-pro",
};

const gallery = (folder) =>
  Array.from(
    { length: folder === "ryzen-9-9950x3d" ? 3 : 4 },
    (_, index) => index + 1,
  ).map((number) => `images/products-real/${folder}/0${number}.jpg`);

PRODUCTS.forEach((product) => {
  const media = PRODUCT_MEDIA[product.id];

  if (typeof media === "string") {
    product.images = gallery(media);
    return;
  }

  if (!media) return;

  product.colourGalleries = Object.fromEntries(
    Object.entries(media).map(([colour, folder]) => [colour, gallery(folder)]),
  );
  product.images = product.colourGalleries[product.options.Colour[0].value];
  product.options.Colour.forEach((option) => {
    option.image = product.colourGalleries[option.value][0];
  });
});
