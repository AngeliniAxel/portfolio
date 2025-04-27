export const environment = {
  production: true,
  emailServiceId: (window as any)['EMAIL_SERVICE_ID'] || '',
  emailTemplateId: (window as any)['EMAIL_TEMPLATE_ID'] || '',
  emailPublicKey: (window as any)['EMAIL_PUBLIC_KEY'] || '',
};
