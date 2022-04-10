const STRIPE_PUBLIC_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY;
const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const config = {
  dev: {
    API: {
      baseURL: "https://nant.azurewebsites.net/api/v1/",
    },
    STRIPE: {
      PUBLIC_KEY: STRIPE_PUBLIC_KEY,
    },
    GOOGLE: {
      GOOGLE_API_KEY
    }
  },

  uat: {
    API: {
      baseURL: "https://nant.azurewebsites.net/api/v1/",
    },
    STRIPE: {
      PUBLIC_KEY: STRIPE_PUBLIC_KEY,
    },
    GOOGLE: {
      GOOGLE_API_KEY
    }
  },

  prod: {},

  default: {
    API: {
      baseURL: "https://nant.azurewebsites.net/api/v1/",
    },
    STRIPE: {
      PUBLIC_KEY: STRIPE_PUBLIC_KEY,
    },
    GOOGLE: {
      GOOGLE_API_KEY
    }
  },
};

const react_script_env = process.env.REACT_APP_ENV;

function getEnvironment() {
  var env;
  switch (react_script_env) {
    case "LOCAL":
      env = "default";
      break;
    case "DEV":
      env = "dev";
      break;
    case "PROD":
      env = "prod";
      break;
    case "UAT":
      env = "uat";
      break;
    default:
      env = "default";
  }
  return env;
}

const env = getEnvironment();
export default config[env];
