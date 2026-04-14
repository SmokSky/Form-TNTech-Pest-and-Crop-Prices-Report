/**
 * Sao chép thành assets/config.js và điền giá trị.
 * Không commit config.js nếu repo public.
 *
 * Google Sign-In: Google Cloud Console → APIs & Services → Credentials
 * → OAuth 2.0 Client ID (Web application)
 * → Authorized JavaScript origins: http://localhost:8080, https://YOUR_USER.github.io
 */
window.PEST_REPORT_CONFIG = {
  WEB_APP_URL: 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec',
  SUBMIT_TOKEN: 'your-secret-token-matching-script-properties',
  GOOGLE_CLIENT_ID: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
  WP_BASE_URL: 'https://web.tinnongtntech.com'
};
