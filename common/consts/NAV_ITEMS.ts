import { NavItem } from "../types/NavItem";

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    children: [
      {
        label: "Info Site",
        subLabel: "Static website",
        href: "/services",
      },
      {
        label: "E-Commerce",
        subLabel: "E-Commerce site",
        href: "/e-commerce",
      },
      {
        label: "Functional",
        subLabel: "custom functional site",
        href: "/custom-site",
      },
    ],
  },
];
