export type Place = {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  heroImage: string;
  images: string[];
  location: string;
};

// 1. Glob all images in ../assets/Places (eager so we get paths/modules immediately).
//    eager: true returns { path: { default: "asset_url" } } or just "asset_url" depending on config.
//    Vite default for assets: returns the string URL.
const placesAssets = import.meta.glob<{ default: string } | string>(
  "../assets/Places/**/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
  }
);

// Helper to get image URL by folder and filename
function getAssetUrl(folderName: string, fileName: string): string {
  // Construct the key that matches the glob pattern
  const key = `../assets/Places/${folderName}/${fileName}`;
  const asset = placesAssets[key];
  if (!asset) {
    console.warn(`Image not found: ${key}`);
    return ""; // or a placeholder
  }
  // If imported as a module with default export (common in some setups), use .default
  // However, usually specific asset types in Vite just return the path string.
  // We'll cast to any to be safe or check type.
  if (typeof asset === "string") {
    return asset;
  }
  return asset.default;
}

export const places: Place[] = [
  {
    id: "kakum-national-park",
    title: "Kakum National Park",
    description: "Walk above the rainforest canopy.",
    fullDescription:
      "Kakum National Park covers 375 square kilometers of protected rainforest. The most popular attraction is the Canopy Walkway, which is suspended 30 meters above the ground, offering a unique perspective of the wildlife and flora.",
    location: "Central Region",
    heroImage: getAssetUrl("kakum_national_park", "hero.jpg"),
    images: [
      getAssetUrl("kakum_national_park", "g1.jpg"),
      getAssetUrl("kakum_national_park", "g2.jpg"),
      getAssetUrl("kakum_national_park", "g3.jpg"),
      getAssetUrl("kakum_national_park", "g4.jpg"),
      getAssetUrl("kakum_national_park", "g5.jpg"),
    ],
  },
  {
    id: "cape-coast-castle",
    title: "Cape Coast Castle",
    description: "A poignant symbol of history.",
    fullDescription:
      "Cape Coast Castle is one of about forty 'slave castles', or large commercial forts, built on the Gold Coast of West Africa (now Ghana) by European traders. It was originally built by the Swedes for trade in timber and gold, but later used in the trans-Atlantic slave trade.",
    location: "Cape Coast",
    heroImage: getAssetUrl("cape_coast_castle", "hero.jpg"),
    images: [
      getAssetUrl("cape_coast_castle", "g1.jpg"),
      getAssetUrl("cape_coast_castle", "g2.jpg"),
      getAssetUrl("cape_coast_castle", "g3.jpg"),
      getAssetUrl("cape_coast_castle", "g4.jpg"),
      getAssetUrl("cape_coast_castle", "g5.jpg"),
    ],
  },
  {
    id: "mole-national-park",
    title: "Mole National Park",
    description: "Home to Ghana's elephants.",
    fullDescription:
      "Mole National Park is Ghana's largest wildlife refuge. The park is home to over 90 mammal species, including elephants, buffalo, paved, and warthogs. It is located in the Savannah region of Ghana on savanna and riparian ecosystems.",
    location: "Savannah Region",
    heroImage: getAssetUrl("mole_national_park", "hero.jpg"),
    images: [
      getAssetUrl("mole_national_park", "g1.jpg"),
      getAssetUrl("mole_national_park", "g2.jpg"),
      getAssetUrl("mole_national_park", "g3.jpg"),
      getAssetUrl("mole_national_park", "g4.jpg"),
      getAssetUrl("mole_national_park", "g5.jpg"),
    ],
  },
  {
    id: "elmina-castle",
    title: "Elmina Castle",
    description:
      "The oldest European building in existence south of the Sahara.",
    fullDescription:
      "St. George's d'Elmina Castle was erected by the Portuguese in 1482 as São Jorge da Mina Castle. It is a UNESCO World Heritage Site and a major tourist attraction.",
    location: "Elmina",
    heroImage: getAssetUrl("elmina_castle", "hero.jpg"),
    images: [
      getAssetUrl("elmina_castle", "g1.jpg"),
      getAssetUrl("elmina_castle", "g2.jpg"),
      getAssetUrl("elmina_castle", "g3.jpg"),
      getAssetUrl("elmina_castle", "g4.jpg"),
      getAssetUrl("elmina_castle", "g5.jpg"),
    ],
  },
  {
    id: "lake-bosomtwe",
    title: "Lake Bosomtwe",
    description: "Ghana's only natural lake.",
    fullDescription:
      "Lake Bosomtwe is a meteorite impact crater lake and the only natural lake in Ghana. It is situated within an ancient impact crater that is about 10.5 kilometres in diameter.",
    location: "Ashanti Region",
    heroImage: getAssetUrl("lake_bosomtwe", "hero.jpg"),
    images: [
      getAssetUrl("lake_bosomtwe", "g1.jpg"),
      getAssetUrl("lake_bosomtwe", "g2.jpg"),
      getAssetUrl("lake_bosomtwe", "g3.jpg"),
      getAssetUrl("lake_bosomtwe", "g4.jpg"),
      getAssetUrl("lake_bosomtwe", "g5.jpg"),
    ],
  },
  {
    id: "wli-waterfalls",
    title: "Wli Waterfalls",
    description: "The highest waterfall in West Africa.",
    fullDescription:
      "Wli Waterfalls is the highest waterfall in Ghana and the tallest in West Africa. It has a lower and an upper fall.",
    location: "Volta Region",
    heroImage: getAssetUrl("wli_waterfalls", "hero.jpg"),
    images: [
      getAssetUrl("wli_waterfalls", "g1.jpg"),
      getAssetUrl("wli_waterfalls", "g2.jpg"),
      getAssetUrl("wli_waterfalls", "g3.jpg"),
      getAssetUrl("wli_waterfalls", "g4.jpg"),
      getAssetUrl("wli_waterfalls", "g5.jpg"),
    ],
  },
];
