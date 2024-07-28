import { render } from '@testing-library/react';
// import { NextIntlClientProvider } from 'next-intl';

// import messages from '@/locales/en.json';

import Index from './page';

describe('Index Page', () => {
  it('renders without crashing', async () => {
    // Since your component might rely on asynchronous data from getTranslations, you may need to use async/await here.
    await render(<Index />);
  });
});

// describe('Index page', () => {
//   describe('Render method', () => {
//     it('should have div tag', () => {
//       render(
//         <NextIntlClientProvider locale="en" messages={messages}>
//           <Index />
//         </NextIntlClientProvider>,
//       );

//       const heading = screen.getByRole('heading', {
//         name: /Mentor/,
//       });

//       expect(heading).toBeInTheDocument();
//     });
//   });
// });
