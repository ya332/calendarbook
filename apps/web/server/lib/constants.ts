export const GOOGLE_API_CREDENTIALS = process.env.GOOGLE_API_CREDENTIALS || "{}";
export const GOOGLE_CLIENT_ID = JSON.parse(GOOGLE_API_CREDENTIALS)?.web["client_id"] || "";
export const GOOGLE_CLIENT_SECRET = JSON.parse(GOOGLE_API_CREDENTIALS)?.web["client_secret"] || "";
export const GOOGLE_LOGIN_ENABLED = process.env.GOOGLE_LOGIN_ENABLED === "true";
export const IS_GOOGLE_LOGIN_ENABLED = !!(GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET && GOOGLE_LOGIN_ENABLED);
export const IS_SAML_LOGIN_ENABLED = !!(process.env.SAML_DATABASE_URL && process.env.SAML_ADMINS);
