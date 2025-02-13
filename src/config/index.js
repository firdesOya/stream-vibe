export const navbarLinks = [
  { id: 1, name: "Home", path: "/" },
  { id: 2, name: "Movies & Shows", path: "/movies" },
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
