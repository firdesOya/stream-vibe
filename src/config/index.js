export const navbarLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Movies & Shows", path: "/movies-shows" },
  { id: 3, name: "Support", path: "/support" },
  { id: 4, name: "Subscribe", path: "/subscribe" },
];

export const homeData = {
  title: "Home",
  submenus: [
    {
      title: "Categories",
      route: "/categories",
    },
    {
      title: "Devices",
      route: "/devices",
    },
    {
      title: "Pricing",
      route: "/pricing",
    },
    {
      title: "FAQ",
      route: "/faq",
    },
  ],
};

export const moviesData = {
  title: "Movies",
  submenus: [
    {
      title: "Genres",
      route: "/movies/genres",
    },
    {
      title: "Trending",
      route: "/movies/trending",
    },
    {
      title: "New Release",
      route: "/movies/new-release",
    },
    {
      title: "Popular",
      route: "/movies/popular",
    },
  ],
};

export const showsData = {
  title: "Shows",
  submenus: [
    {
      title: "Genres",
      route: "/shows/genres",
    },
    {
      title: "Trending",
      route: "/shows/trending",
    },
    {
      title: "New Release",
      route: "/shows/new-release",
    },
    {
      title: "Popular",
      route: "/shows/popular",
    },
  ],
};

export const supportData = {
  title: "Support",
  submenus: [
    {
      title: "Contact Us",
      route: "/support/contact-us",
    },
  ],
};

export const subData = {
  title: "Subscription",
  submenus: [
    {
      title: "Plans",
      route: "/subscription/plans",
    },
    {
      title: "Features",
      route: "/subscription/features",
    },
  ],
};

export const provideDevices = [
  {
    imgSrc: "/images/phoneIcon.svg",
    title: "Smartphones",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    imgSrc: "/images/tabletIcon.svg",
    title: "Tablet",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    imgSrc: "/images/smartTvIcon.svg",
    title: "Smart TV",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    imgSrc: "/images/laptopIcon.svg",
    title: "Laptops",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    imgSrc: "/images/gameIcon.svg",
    title: "Gaming Consoles",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
  {
    imgSrc: "/images/vrIcon.svg",
    title: "VR Headsets",
    description:
      "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
  },
];

export const questionsData = [
  {
    id: 1,
    question: "What is StreamVibe?",
    answer:
      "StreamVibe is a streaming service that allows you to watch movies and shows on demand.",
  },
  {
    id: 2,
    question: "How much does StreamVibe cost?",
    answer:
      "StreamVibe offers multiple subscription plans starting from $9.99 per month. Discounts are available for annual plans.",
  },
  {
    id: 3,
    question: "What content is available on StreamVibe?",
    answer:
      "StreamVibe provides a wide range of content including movies, TV series, documentaries, and exclusive originals.",
  },
  {
    id: 4,
    question: "How can I watch StreamVibe?",
    answer:
      "You can stream content on StreamVibe via web browsers, mobile apps (iOS/Android), smart TVs, and streaming devices like Roku or Apple TV.",
  },
  {
    id: 5,
    question: "How do I sign up for StreamVibe?",
    answer:
      "Visit streamvibe.com, click on 'Sign Up', enter your email and create a password. Choose your plan and start streaming instantly.",
  },
  {
    id: 6,
    question: "What is the StreamVibe free trial?",
    answer:
      "New users can try StreamVibe free for 7 days. During the trial, you get full access to all features without any charges.",
  },
  {
    id: 7,
    question: "How do I contact StreamVibe customer support?",
    answer:
      "You can reach out to support via the Help Center, live chat on the website, or by emailing support@streamvibe.com.",
  },
  {
    id: 8,
    question: "What are the StreamVibe payment methods?",
    answer:
      "StreamVibe accepts major credit cards, PayPal, and some local payment options depending on your region.",
  },
];


export const plans = [
  {
    title: "Basic Plan",
    price: "9.99",
    period: "/month",
    description: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
  },
  {
    title: "Standard Plan",
    price: "12.99",
    period: "/month",
    description: "Access to a wider selection of movies and shows, including most new releases and exclusive content.",
  },
  {
    title: "Premium Plan",
    price: "14.99",
    period: "/month",
    description: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing.",
  },
];