export default function Layout(props: { children: React.ReactNode }) {
  // const t = useTranslations('RootLayout');

  return (
    <>
        <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
      </>
  );
}

// import { auth } from '@clerk/nextjs/server';
// import { redirect } from 'next/navigation';

// export default function CenteredLayout(props: { children: React.ReactNode }) {
//   const { userId } = auth();

//   if (userId) {
//     redirect('/');
//   }

//   return (
//     <div className="flex min-h-screen items-center justify-center">
//       {props.children}
//     </div>
//   );
// }
