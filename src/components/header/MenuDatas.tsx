const MenuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 3.1,
    title: "Services",
    topPath: "/services",
    newTab: false,
    submenu: [
      {
        id: 33.1,
        title: "Web",
        path: "/web",
        newTab: false,
        subItem: [
          {
            id: 3.1,
            title: "Web Development",
            path: "/web-development",
            newTab: false,
          },
          {
            id: 3.2,
            title: "Website Maintenance",
            path: "/web-maintenance",
            newTab: false,
          },
          {
            id: 3.3,
            title: "SEO Service",
            path: "/seo-service",
            newTab: false,
          },
          {
            id: 3.3,
            title: "Digital Marketing Services",
            path: "/digital-marketing",
            newTab: false,
          },
        ],
      },
      {
        id: 3.2,
        title: "Graphic",
        path: "/graphic-designs",
        newTab: false,
        subItem: [
          {
            id: 3.2,
            title: "Graphic Designs",
            path: "/graphic-designs",
            newTab: false,
          },
        ],
      },
      {
        id: 4.3,
        title: "Printing",
        path: "/printing-services",
        newTab: false,
        subItem: [
          {
            id: 5.3,
            title: "Printing Services",
            path: "/printing-services",
            newTab: false,
          },
        ],
      },
    ],
  },

  {
    id: 3.3,
    title: "Portfolio",
    path: "/portfolio",
    newTab: false,
  },
  {
    id: 3.3,
    title: "Pricing",
    path: "/pricing",
    newTab: false,
  },
  {
    id: 3.8,
    title: "About",
    path: "/about",
    newTab: false,
  },
  // {
  //   id: 3.99,
  //   title: "Contact",
  //   path: "/contact",
  //   newTab: false,
  // },
  // {
  //   id: 2,
  //   title: "About",
  //   path: "/rt-test/about",
  //   newTab: false,
  // },
  // {
  //   id: 3,
  //   title: "Services",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 3.1,
  //       title: "Web Development",
  //       path: "/rt-test/web-development",
  //       newTab: false,
  //     },
  //     {
  //       id: 3.2,
  //       title: "Graphic Designs",
  //       path: "/rt-test/graphic-designs",
  //       newTab: false,
  //     },
  //     {
  //       id: 3.3,
  //       title: "Printing Services",
  //       path: "/rt-test/printing-services",
  //       newTab: false,
  //     },
  //   ]
  // },
  // {
  //   id: 4,
  //   title: "Contact",
  //   path: "/contact",
  //   newTab: false,
  // },
];
export default MenuData;
