// assets/js/data.js — Laur Tourism shared data
// Update these numbers whenever you add/remove cards in attractions.html or visit.html

const attractions = [
  // Natural Attractions
  {
    title: "Seminublan Falls",
    category: "natural",
    location: "Brgy. San Fernando",
    description: "A stunning natural waterfall in the heart of Brgy. San Fernando.",
    image: "../assets/images/NATURAL/SIMINUBLAN.webp",
    modalImage: "../assets/images/NATURAL/SIMINUBLAN.webp",
    type: "Natural Attraction",
    contact: "",
    coordinates: "15.595597,121.215297",
    fbLink: "https://www.facebook.com/share/r/1HwmxC7zQ6/"
  },
  {
    title: "Bato Ferry",
    category: "natural",
    location: "San Felipe",
    description: "A scenic river crossing in San Felipe — a unique and memorable local experience.",
    image: "../assets/images/NATURAL/BATO.webp",
    modalImage: "../assets/images/NATURAL/BATO.webp",
    type: "Natural Attraction",
    contact: "",
    coordinates: "15.553500,121.228886",
    fbLink: "https://www.facebook.com/share/r/1CLKMXAqni/"
  },
  {
    title: "Hidden Falls",
    category: "natural",
    location: "Brgy. San Fernando",
    description: "A hidden waterfall waiting deep within Brgy. San Fernando.",
    image: "../assets/images/NATURAL/HIDDEN.webp",
    modalImage: "../assets/images/NATURAL/HIDDEN.webp",
    type: "Natural Attraction",
    contact: "",
    coordinates: "15.595597,121.215297",
    fbLink: "https://www.facebook.com/share/v/18ANsuY9rB/"
  },
  // Man-made Attractions
  {
    title: "Casa Celestine",
    category: "manmade",
    location: "Brgy. Siclong",
    description: "A beautiful private resort in Brgy. Siclong — perfect for relaxation and events.",
    image: "../assets/images/STAY/CASA.webp",
    modalImage: "../assets/images/STAY/CASA.webp",
    type: "Private Resort",
    contact: "09317275295",
    coordinates: "15.570000,121.230000",
    fbLink: "https://www.facebook.com/profile.php?id=61560499366014"
  },
  {
    title: "Green House Private Pool",
    category: "manmade",
    location: "Brgy. San Josep",
    description: "Private pool resort in Brgy. San Josep — ideal for group outings and celebrations.",
    image: "../assets/images/STAY/FOUR.webp",
    modalImage: "../assets/images/STAY/FOUR.webp",
    type: "Private Pool Resort",
    contact: "09126147056",
    coordinates: "15.564997,121.240000",
    fbLink: "https://www.facebook.com/greenhouseprivatepool"
  },
  {
    title: "Sunsetpeak Nature Camp",
    category: "manmade",
    location: "Brgy. Nauzon",
    description: "Experience nature camping with stunning sunset views in Brgy. Nauzon.",
    image: "../assets/images/STAY/SUNSET.webp",
    modalImage: "../assets/images/STAY/SUNSET.webp",
    type: "Nature Camp",
    contact: "",
    coordinates: "15.580000,121.219997",
    fbLink: "https://www.facebook.com/SunsetPeakNatureCamp"
  },
  {
    title: "Sierran Resort",
    category: "manmade",
    location: "Brgy. Siclong",
    description: "A relaxing resort in Brgy. Siclong with beautiful mountain surroundings.",
    image: "../assets/images/STAY/SIERRAN.webp",
    modalImage: "../assets/images/STAY/SIERRAN.webp",
    type: "Resort",
    contact: "09484172382",
    coordinates: "15.574997,121.230000",
    fbLink: "https://www.facebook.com/sierranminiresort"
  },
  {
    title: "Mountain View Resort",
    category: "manmade",
    location: "Brgy. Siclong",
    description: "Enjoy stunning mountain views and resort facilities in Brgy. Siclong.",
    image: "../assets/images/STAY/MVR.webp",
    modalImage: "../assets/images/STAY/MVR.webp",
    type: "Resort",
    contact: "09386293261",
    coordinates: "15.573000,121.231997",
    fbLink: "https://www.facebook.com/profile.php?id=100094369557902"
  },
  {
    title: "Camila Farm Resort",
    category: "manmade",
    location: "Brgy. Betania",
    description: "Farm resort experience in Brgy. Betania — offering nature, rest, and fresh air.",
    image: "../assets/images/STAY/CAMILLA.webp",
    modalImage: "../assets/images/STAY/CAMILLA.webp",
    type: "Farm Resort",
    contact: "09176388948",
    coordinates: "15.560000,121.250000",
    fbLink: "https://www.facebook.com/camilafarmresort"
  },
  {
    title: "Four Queens & Private Resort",
    category: "manmade",
    location: "Brgy. Siclong",
    description: "Private resort in Brgy. Siclong — ideal for family gatherings and special occasions.",
    image: "../assets/images/STAY/FOUR.webp",
    modalImage: "../assets/images/STAY/FOUR.webp",
    type: "Private Resort",
    contact: "09199996710",
    coordinates: "15.571997,121.231000",
    fbLink: "https://www.facebook.com/profile.php?id=100086448053905"
  },
  {
    title: "Lelo's Mountain Resort",
    category: "manmade",
    location: "Brgy. San Isidro",
    description: "A beautiful mountain resort in Brgy. San Isidro with stunning natural surroundings.",
    image: "../assets/images/STAY/LELO.webp",
    modalImage: "../assets/images/STAY/LELO.webp",
    type: "Mountain Resort",
    contact: "09171446213",
    coordinates: "15.550000,121.209997",
    fbLink: "https://www.facebook.com/lelosmountainresort"
  },
  {
    title: "Clareng's Farm Resort",
    category: "manmade",
    location: "Brgy. Sagana",
    description: "A beautiful farm resort in Brgy. Sagana — offering a true farm-to-table experience.",
    image: "../assets/images/STAY/CLARENG.webp",
    modalImage: "../assets/images/STAY/CLARENG.webp",
    type: "Farm Resort",
    contact: "09105493608",
    coordinates: "15.570000,121.260000",
    fbLink: "https://www.facebook.com/profile.php?id=61559128866365"
  }
];

const stays = [
  {
    title: "Casa Celestine",
    category: "resort",
    location: "Brgy. Siclong",
    description: "A beautiful private resort in Brgy. Siclong — perfect for relaxation and events.",
    image: "../assets/images/STAY/CASA.webp",
    modalImage: "../assets/images/STAY/CASA.webp",
    type: "Private Resort",
    contact: "09317275295",
    coordinates: "15.570000,121.230000",
    fbLink: "https://www.facebook.com/profile.php?id=61560499366014"
  },
  {
    title: "Green House Private Pool",
    category: "resort",
    location: "Brgy. San Josep",
    description: "Private pool resort in Brgy. San Josep — ideal for group outings and celebrations.",
    image: "../assets/images/STAY/FOUR.webp",
    modalImage: "../assets/images/STAY/FOUR.webp",
    type: "Private Pool Resort",
    contact: "09126147056",
    coordinates: "15.564997,121.240000",
    fbLink: "https://www.facebook.com/greenhouseprivatepool"
  },
  {
    title: "Sunsetpeak Nature Camp",
    category: "camp",
    location: "Brgy. Nauzon",
    description: "Nature camping with stunning sunset views in Brgy. Nauzon.",
    image: "../assets/images/STAY/SUNSET.webp",
    modalImage: "../assets/images/STAY/SUNSET.webp",
    type: "Nature Camp",
    contact: "",
    coordinates: "15.580000,121.219997",
    fbLink: "https://www.facebook.com/SunsetPeakNatureCamp"
  },
  {
    title: "Sierran Resort",
    category: "resort",
    location: "Brgy. Siclong",
    description: "A relaxing resort in Brgy. Siclong with mountain views.",
    image: "../assets/images/STAY/SIERRAN.webp",
    modalImage: "../assets/images/STAY/SIERRAN.webp",
    type: "Resort",
    contact: "09484172382",
    coordinates: "15.574997,121.230000",
    fbLink: "https://www.facebook.com/sierranminiresort"
  },
  {
    title: "Mountain View Resort",
    category: "resort",
    location: "Brgy. Siclong",
    description: "Enjoy stunning mountain views and facilities in Brgy. Siclong.",
    image: "../assets/images/STAY/MVR.webp",
    modalImage: "../assets/images/STAY/MVR.webp",
    type: "Resort",
    contact: "09386293261",
    coordinates: "15.573000,121.231997",
    fbLink: "https://www.facebook.com/profile.php?id=100094369557902"
  },
  {
    title: "Camila Farm Resort",
    category: "farm-resort",
    location: "Brgy. Betania",
    description: "Farm resort in Brgy. Betania — nature, rest, and fresh air.",
    image: "../assets/images/STAY/CAMILLA.webp",
    modalImage: "../assets/images/STAY/CAMILLA.webp",
    type: "Farm Resort",
    contact: "09176388948",
    coordinates: "15.560000,121.250000",
    fbLink: "https://www.facebook.com/camilafarmresort"
  },
  {
    title: "Four Queens & Private Resort",
    category: "resort",
    location: "Brgy. Siclong",
    description: "Private resort in Brgy. Siclong — ideal for family gatherings and special occasions.",
    image: "../assets/images/STAY/FOUR.webp",
    modalImage: "../assets/images/STAY/FOUR.webp",
    type: "Private Resort",
    contact: "09199996710",
    coordinates: "15.571997,121.231000",
    fbLink: "https://www.facebook.com/profile.php?id=100086448053905"
  },
  {
    title: "Lelo's Mountain Resort",
    category: "resort",
    location: "Brgy. San Isidro",
    description: "Beautiful mountain resort in Brgy. San Isidro with stunning natural surroundings.",
    image: "../assets/images/STAY/LELO.webp",
    modalImage: "../assets/images/STAY/LELO.webp",
    type: "Mountain Resort",
    contact: "09171446213",
    coordinates: "15.550000,121.209997",
    fbLink: "https://www.facebook.com/lelosmountainresort"
  },
  {
    title: "Clareng's Farm Resort",
    category: "farm-resort",
    location: "Brgy. Sagana",
    description: "A beautiful farm resort in Brgy. Sagana — true farm-to-table experience.",
    image: "../assets/images/STAY/CLARENG.webp",
    modalImage: "../assets/images/STAY/CLARENG.webp",
    type: "Farm Resort",
    contact: "09105493608",
    coordinates: "15.570000,121.260000",
    fbLink: "https://www.facebook.com/profile.php?id=61559128866365"
  }
];

const dine = [
  {
    title: "Calle Dos Café",
    fbLink: "https://www.facebook.com/profile.php?id=61581674370181"
  },
  {
    title: "Mountain View Restaurant",
    fbLink: "https://www.facebook.com/share/p/1B899WxYeX/"
  },
  {
    title: "Geng-Geng Kambingan",
    fbLink: "https://www.facebook.com/share/v/1CA7S6AgXE/"
  },
  {
    title: "Tanbayan",
    fbLink: "https://www.facebook.com/tanbayancarinderiaph"
  },
  {
    title: "Riya's Foodies",
    fbLink: "https://www.facebook.com/RiyasFoodiesRiyaPinedaFB"
  },
  {
    title: "Café Noìr",
    fbLink: "https://www.facebook.com/profile.php?id=100064061771450"
  },
  {
    title: "ENJ Food Park",
    fbLink: "https://www.facebook.com/profile.php?id=61574163141839"
  }
];

var LAUR_DATA = {
  barangays:     17,
  attractions:   attractions.length,
  stays:          stays.length,
  distanceHours: '1.5hr'
};