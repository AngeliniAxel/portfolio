export const environment = {
  production: true,
  emailServiceId: process.env['NG_APP_EMAIL_SERVICE_ID'] || '',
  emailTemplateId: process.env['NG_APP_EMAIL_TEMPLATE_ID'] || '',
  emailPublicKey: process.env['NG_APP_EMAIL_PUBLIC_KEY'] || '',
};
