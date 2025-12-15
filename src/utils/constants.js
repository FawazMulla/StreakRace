// StreakRace Application Constants

export const ROUTES = {
  HOME: '/',
  TEAM: '/team',
  CARS: '/cars',
  RACES: '/races',
  DRIVERS: '/drivers',
  PARTNERS: '/partners',
  SHOP: '/shop'
};

export const NAVIGATION_ITEMS = [
  { label: 'Home', path: ROUTES.HOME },
  { label: 'Team', path: ROUTES.TEAM },
  { label: 'Cars', path: ROUTES.CARS },
  { label: 'Races', path: ROUTES.RACES },
  { label: 'Drivers', path: ROUTES.DRIVERS },
  { label: 'Partners', path: ROUTES.PARTNERS },
  { label: 'Shop', path: ROUTES.SHOP }
];

export const LOADING_DURATION = 3000; // 3 seconds
export const SCROLL_THRESHOLD = 100; // pixels

export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  }
};

export default {
  ROUTES,
  NAVIGATION_ITEMS,
  LOADING_DURATION,
  SCROLL_THRESHOLD,
  ANIMATION_VARIANTS
};