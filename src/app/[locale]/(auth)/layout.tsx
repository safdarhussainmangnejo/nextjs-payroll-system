import "@/styles/global.css";
// import { useTranslations } from 'next-intl';

// import LocaleSwitcher from '@/components/LocaleSwitcher';
// import { BaseTemplate } from '@/templates/BaseTemplate';

export default function Layout(props: { children: React.ReactNode }) {
  // const t = useTranslations('RootLayout');

  return (
    <html>
      <body>
    <div>{props.children}</div>
    </body>
    </html>
    
  );
}

// import { enUS, frFR } from '@clerk/localizations';
// import { ClerkProvider } from '@clerk/nextjs';

// export default function AuthLayout(props: {
//   children: React.ReactNode;
//   params: { locale: string };
// }) {
//   let clerkLocale = enUS;
//   let signInUrl = '/sign-in';
//   let signUpUrl = '/sign-up';
//   let dashboardUrl = '/dashboard';

//   if (props.params.locale === 'fr') {
//     clerkLocale = frFR;
//   }

//   if (props.params.locale !== 'en') {
//     signInUrl = `/${props.params.locale}${signInUrl}`;
//     signUpUrl = `/${props.params.locale}${signUpUrl}`;
//     dashboardUrl = `/${props.params.locale}${dashboardUrl}`;
//   }

//   return (
//     <ClerkProvider
//       localization={clerkLocale}
//       signInUrl={signInUrl}
//       signUpUrl={signUpUrl}
//       signInFallbackRedirectUrl={dashboardUrl}
//       signUpFallbackRedirectUrl={dashboardUrl}
//     >
//       {props.children}
//     </ClerkProvider>
//   );
// }
