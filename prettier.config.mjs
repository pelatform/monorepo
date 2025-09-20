/** @type {import('prettier').Config & import("prettier-plugin-tailwindcss").PluginOptions & import("@ianvs/prettier-plugin-sort-imports").PluginConfig } */
const config = {
  printWidth: 80,
  tabWidth: 2,
  endOfLine: 'lf',
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  semi: true,
  bracketSameLine: false,
  jsxSingleQuote: false,
  arrowParens: 'always',
  importOrder: [
    '<BUILTIN_MODULES>',
    '^(react/(.*)$)|^(react$)',
    '^(next/(.*)$)|^(next$)',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(@pelatform/(.*)$)',
    '^(@repo/(.*)$)',
    '^types$',
    '^(@/)(actions|api|app|auth|components|config|db|email|hooks|i18n|lib|prisma|providers|schemas|server|supabase|types|ui|utils|zod)$',
    '^(@/)(actions|api|app|auth|components|config|db|email|hooks|i18n|lib|prisma|providers|schemas|server|supabase|types|ui|utils|zod)(/.*)$',
    '^(@/lib/)(actions|api|auth|config|db|email|hooks|middleware|providers|schemas|server|supabase|types|utils|zod)(/.*)$',
    '^[../]',
    '^[./]',
    '',
    '^(@/)styles(/.*)$',
  ],
  importOrderCaseSensitive: false,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  tailwindFunctions: ['cn', 'cva'],
  plugins: [
    'prettier-plugin-tailwindcss',
    '@ianvs/prettier-plugin-sort-imports',
  ],
};

export default config;
