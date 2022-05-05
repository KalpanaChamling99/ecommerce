export const APP_NAME = "";
export const DEVELOPER_EMAIL = "";

export const messages = {
  networkError: "You are facing a network error. Please try again or refresh.",
  default: "Something went wrong.",
};

// Permission Error
export const permissionErrorMessage = {
  title: "Unauthorized Access",
  messages: [
    "You don't have permission to view this page. Please contact us on",
    "if you think this is an error, else you can close this tab.",
  ],
};

// Protected Routes Path
export const protectedRoutesValue = {
  UNAUTHORIZED_ACCESS: "/unauthorized-access",
};

export const ApiEndpoints = {
  SITE_SETTINGS   : 'site-settings',
  SERVICES        : 'pages',
  SUPPORTERS      : 'sponsors',
  PROJECTS        : 'projects',
  SLIDERS         : 'sliders',
  EVENTS          : 'events',
  DOCUMENTS       : 'documents',
  EVENTS_CATEGORY  : 'event-category',
  PUBLIC_PRODUCTS : 'public-products',
  LOGIN           : 'login',
  TEAMS           : 'teams',
  ORDER_PRODUCT   : 'order-post',
  ORDER_PUBLIC_PRODUCT : 'order-public-post',
  PAST_COMMITTEE  : "past-committee",
  ORDER_HISTORY   : "user-order-history",
  REGISTER        : "register",
  MEMBERSHIP      : "membership-type",
  UPDATE_PASSWORD : 'change-password',
  FORGOT_PASSWORD : 'forgot-password',
  PRIVATE_PRODUCTS   : 'private-product-list',
  PAST_COMMITTEE_CATEGORY  : 'past-committee-category',
};
