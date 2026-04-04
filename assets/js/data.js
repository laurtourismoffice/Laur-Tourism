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
    coordinates: "15.609612781590693,121.244807335357"
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
    coordinates: "15.557595762302656,121.22593021945178"
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
    coordinates: "15.608927955272971,121.23989334228568"
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
    coordinates: "15.582662333386175,121.2238891404082"
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
    coordinates: "15.568110583807051,121.1451354521103"
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
    coordinates: "15.465950561135436,121.12669309946334"
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
    coordinates: "15.583332117802039,121.22522119622953"
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
    coordinates: "15.588244444444445,121.225480555555563"
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
    coordinates: "15.600186111111110,121.164588888888900"
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
    coordinates: "15.580772222222222,121.223161111111111"
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
    coordinates: "15.527483333333334,121.155716666666677"
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
    coordinates: "15.540274999999999,121.153619444444445"
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
    coordinates: "15.582662333386175,121.2238891404082"
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
    coordinates: "15.568110583807051,121.1451354521103"
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
    coordinates: "15.465950561135436,121.12669309946334"
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
    coordinates: "15.583332117802039,121.22522119622953"
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
    coordinates: "15.588244444444445,121.225480555555563"
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
    coordinates: "15.600186111111110,121.164588888888900"
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
    coordinates: "15.580772222222222,121.223161111111111"
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
    coordinates: "15.527483333333334,121.155716666666677"
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
    coordinates: "15.540274999999999,121.153619444444445"
  }
];

var LAUR_DATA = {
  barangays:     17,
  attractions:   attractions.length,   // total cards in #attr-grid (attractions.html)
  stays:          stays.length,   // total cards in #stay-grid (visit.html)
  distanceHours: '1.5hr'
};