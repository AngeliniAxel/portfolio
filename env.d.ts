/// <reference types="@ngx-env/core" />

interface ImportMetaEnv {
  readonly NG_APP_EMAIL_SERVICE_ID: string;
  readonly NG_APP_EMAIL_TEMPLATE_ID: string;
  readonly NG_APP_EMAIL_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
