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
];

export function getAttractionById(id: string): AttractionData | undefined {
  return MOCK_ATTRACTIONS.find((a) => a.id === id);
}
