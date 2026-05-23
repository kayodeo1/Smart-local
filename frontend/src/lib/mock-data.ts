export interface AIInsights {
  bestTime: string;
  dontMiss: string;
}

export interface EssentialInfo {
  entryFee: string;
  feeSubtext?: string;
  hours: string[];
  accessibility: string;
}

export interface AttractionData {
  id: string;
  name: string;
  image: string;
  matchScore?: number;
  rating: number;
  description: string;
  tags: string[];
  location: string;
  price: string;
  category: string;
  aiInsights?: AIInsights;
  essentialInfo?: EssentialInfo;
}

export const MOCK_ATTRACTIONS: AttractionData[] = [
  {
    id: "nike-art-gallery",
    name: "Nike Art Gallery",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDmjM_OCLztnhAesu2OYFoMphF9jI611PRIknh4GmmFyS8YFcuHsQDDopL8a5WJG62IuOvB-6BgGncHimhhvKAbbUXQF8GWY4rV1qr3Qvny-Jt4CduCof75fWxpAl81r5iDBdjtDx8aKwWFxxSyXGuU_LbYr8LHT8NfNajbdXvqROqImN6iualSw-h4cUkmZ-dgoyTwwBzyUWjHzSUPpc7P8OxrhP_dguMJVQAxOtQILJheQTONkhRpUIPxB4ryyTiAEIc6mhfYF9ZF",
    matchScore: 98,
    rating: 4.9,
    description:
      "A towering five-story cultural hub in Lekki, featuring thousands of traditional and contemporary Nigerian artworks. Perfect for art enthusiasts.",
    tags: ["Culture", "Indoor"],
    location: "Lekki Peninsula, Lagos",
    price: "Free Entry",
    category: "Art & Culture",
    aiInsights: {
      bestTime:
        "Arrive around 10:00 AM on weekdays to avoid crowds and have uninterrupted time with the curators. The morning light is perfect for viewing the textile exhibits.",
      dontMiss:
        "The Adire textile demonstration on the top floor. It offers incredible insight into traditional Yoruba fabric dyeing techniques.",
    },
    essentialInfo: {
      entryFee: "Free Entry",
      feeSubtext: "Guided tours available for ₦5,000",
      hours: ["Mon - Sat: 10:00 AM - 6:00 PM", "Sun: 1:00 PM - 6:00 PM"],
      accessibility:
        "Wheelchair accessible ground floor. Elevators currently under maintenance.",
    },
  },
  {
    id: "lekki-conservation",
    name: "Lekki Conservation Centre",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAlMguP8wE5i0hoqsL3avoj7FNCogs2i7xiPC-tntptBseknQ18bGqiqb1emUmYT9pCsjmLvZT_CIKzhrG1TQcQYSMsZQCuXv5mehjHm955zDdmrrjjIGnMVDAmLghh5pXtN3AnwGW6Ezbr11mYva5YURZ3DYMmc4pX1hkSiVcEBkIswzRHDAyoL2O8xynRzBe9WXaAPjrra0gOAcfL-xaYJ5IXxDjWG_UOb1tE6IKcRpSlkjEok4e9Zf9e1VY9bzjPmgN3rezb8DHe",
    matchScore: 92,
    rating: 4.7,
    description:
      "Experience nature in the heart of the city. Features Africa's longest canopy walkway and diverse wildlife in a protected sanctuary.",
    tags: ["Nature", "Active"],
    location: "Lekki-Epe Expressway, Lagos",
    price: "₦2,500",
    category: "Nature & Parks",
    aiInsights: {
      bestTime: "Early morning to spot monkeys and birds.",
      dontMiss: "The 401m long canopy walkway, the longest in Africa.",
    },
    essentialInfo: {
      entryFee: "₦2,500",
      feeSubtext: "Extra ₦1,000 for Canopy Walk",
      hours: ["Everyday: 8:30 AM - 5:00 PM"],
      accessibility:
        "Ground trails are accessible, but the canopy walk is not recommended for those with mobility issues.",
    },
  },
  {
    id: "tarkwa-bay",
    name: "Tarkwa Bay Beach",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDlENItZL9h1QQnFjsxpjNBpoMIhCYC5DdS04Qu5fxiSbw-8dIifjazfg7F5OqDusnVyOOr2u7w8EQHkCe-R1jWJ_vag70R6Z0D0Hrv4tS7HcWRM81MLknVO1em3hCs8wWD2FSziceq-jPfLYg6jQFdUyFqGrav-EvCTweVXLZ9423NyScZcg0c104BTgGPqgs5ZJeMPaPR6Xz0PMn-hOmlHoCx_obAkgzc3uDVpY4wtcHhhlkoXcgYASl_C0v5W6KFKid9f4llGh7k",
    rating: 4.5,
    description:
      "A sheltered beach accessible only by boat. Offers a calmer coastal experience compared to other Lagos beaches, ideal for relaxation.",
    tags: ["Relaxation", "Water"],
    location: "Lagos Harbour",
    price: "Boat Fare",
    category: "Beaches",
  },
  {
    id: "olumo-rock",
    name: "Olumo Rock",
    image:
      "https://images.unsplash.com/photo-1504541316369-51f315861945?w=800&q=80&fit=crop",
    matchScore: 95,
    rating: 4.6,
    description:
      "A massive granite monolith in the heart of Abeokuta. Climb to the top for breathtaking panoramic views of the city and surrounding landscape.",
    tags: ["Nature", "Active"],
    location: "Abeokuta, Ogun State",
    price: "₦1,000",
    category: "Nature & Parks",
  },
  {
    id: "kajuru-castle",
    name: "Kajuru Castle",
    image:
      "https://images.unsplash.com/photo-1773325724090-e46d4838ab6f?w=800&q=80&fit=crop",
    matchScore: 90,
    rating: 4.7,
    description:
      "A medieval-German-style castle built in 1989, nestled on a mountaintop in Kaduna State. Features turrets, an armory, and a dungeon.",
    tags: ["Culture", "Luxury"],
    location: "Kajuru, Kaduna State",
    price: "₦50,000/night",
    category: "Art & Culture",
  },
  {
    id: "gurara-falls",
    name: "Gurara Falls",
    image:
      "https://images.unsplash.com/photo-1620246403639-71409c17084b?w=800&q=80&fit=crop",
    matchScore: 88,
    rating: 4.4,
    description:
      "A stunning 30-meter waterfall on the Gurara River. A popular picnic spot with natural pools perfect for swimming during the rainy season.",
    tags: ["Nature", "Relaxation"],
    location: "Niger State",
    price: "₦500",
    category: "Nature & Parks",
  },
  {
    id: "freedom-park",
    name: "Freedom Park Lagos",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80&fit=crop",
    matchScore: 85,
    rating: 4.3,
    description:
      "A memorial and leisure park on Lagos Island, built on the site of a former colonial prison. Now a vibrant cultural hub with events and exhibitions.",
    tags: ["Culture", "History"],
    location: "Lagos Island, Lagos",
    price: "₦1,000",
    category: "Art & Culture",
  },
  {
    id: "obudu-mountain",
    name: "Obudu Mountain Resort",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80&fit=crop",
    matchScore: 93,
    rating: 4.8,
    description:
      "A serene mountain resort perched 1,576 metres above sea level. Enjoy cable car rides, breathtaking views, and cool climate year-round.",
    tags: ["Nature", "Luxury"],
    location: "Cross River State",
    price: "₦35,000/night",
    category: "Nature & Parks",
  },
  {
    id: "yankari-park",
    name: "Yankari National Park",
    image:
      "https://images.unsplash.com/photo-1758881534670-ef0b5b30bd2a?w=800&q=80&fit=crop",
    matchScore: 91,
    rating: 4.6,
    description:
      "Nigeria's most popular wildlife reserve. Home to elephants, baboons, hippos, and over 350 bird species. Features warm spring waterfalls.",
    tags: ["Nature", "Active"],
    location: "Bauchi State",
    price: "₦3,000",
    category: "Nature & Parks",
  },
  {
    id: "ikogosi-springs",
    name: "Ikogosi Warm Springs",
    image:
      "https://images.unsplash.com/photo-1758399800542-8fc59bc61e35?w=800&q=80&fit=crop",
    matchScore: 87,
    rating: 4.4,
    description:
      "A unique natural phenomenon where warm and cold springs meet at the same point. Surrounded by lush tropical forest with resort facilities.",
    tags: ["Nature", "Relaxation"],
    location: "Ekiti State",
    price: "₦2,000",
    category: "Nature & Parks",
  },
];

export function getAttractionById(id: string): AttractionData | undefined {
  return MOCK_ATTRACTIONS.find((a) => a.id === id);
}
