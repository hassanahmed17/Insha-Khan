import './globals.css';
import type { Metadata } from 'next';
import { Montserrat, Open_Sans } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const openSans = Open_Sans({ 
  subsets: ['latin'],
  variable: '--font-opensans',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.inshakhan.in'),
  title: {
    default: 'Insha Khan | Digital Entrepreneur and Business Coach',
    template: '%s | Insha Khan'
  },
  description: 'Greetings, I am Insha Khan, a digital entrepreneur and business coach. My expertise lies in guiding individuals on how to generate a consistent monthly income ranging from 15,000 to 20,000 rupees through the strategic utilization of various social media platforms such as Instagram, Facebook, WhatsApp, YouTube, and other diverse sources.',
  keywords: [
    'insha khan',
    'Digital Entrepreneur',
    'Business Coach in India',
    'Social Media Income Generation',
    'Safe Platform for Women in India',
    'Online Business Guidance',
    'Instagram Income Tips',
    'WhatsApp Business Ideas',
    'Facebook Income Strategies',
    'Women Empowerment in India',
    'Digital Business Growth'
  ],
  authors: [{ name: 'Insha Khan' }],
  creator: 'Insha Khan',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.inshakhan.in',
    title: 'Insha Khan | Digital Entrepreneur and Business Coach',
    description: 'Greetings, I am Insha Khan, a digital entrepreneur and business coach. My expertise lies in guiding individuals on how to generate a consistent monthly income ranging from 15,000 to 20,000 rupees through the strategic utilization of various social media platforms such as Instagram, Facebook, WhatsApp, YouTube, and other diverse sources.',
    siteName: 'Insha Khan',
    images: [
      {
        url: 'https://res.cloudinary.com/drdzmc9dr/image/upload/v1732621748/Screenshot_2023-05-25-00-13-04-373_com.instagram.android_2_nlmoda.jpg',
        width: 1200,
        height: 630,
        alt: 'Insha Khan - Digital Entrepreneur and Business Coach'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Insha Khan | Digital Entrepreneur and Business Coach',
    description: 'Greetings, I am Insha Khan, a digital entrepreneur and business coach. My expertise lies in guiding individuals on how to generate a consistent monthly income ranging from 15,000 to 20,000 rupees through the strategic utilization of various social media platforms such as Instagram, Facebook, WhatsApp, YouTube, and other diverse sources.',
    images: ['https://res.cloudinary.com/drdzmc9dr/image/upload/v1732621748/Screenshot_2023-05-25-00-13-04-373_com.instagram.android_2_nlmoda.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  icons: {
    icon: 'https://res.cloudinary.com/drdzmc9dr/image/upload/v1732621748/Screenshot_2023-05-25-00-13-04-373_com.instagram.android_2_nlmoda.jpg',
    shortcut: 'https://res.cloudinary.com/drdzmc9dr/image/upload/v1732621748/Screenshot_2023-05-25-00-13-04-373_com.instagram.android_2_nlmoda.jpg',
    apple: 'https://res.cloudinary.com/drdzmc9dr/image/upload/v1732621748/Screenshot_2023-05-25-00-13-04-373_com.instagram.android_2_nlmoda.jpg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: 'https://res.cloudinary.com/drdzmc9dr/image/upload/v1732621748/Screenshot_2023-05-25-00-13-04-373_com.instagram.android_2_nlmoda.jpg',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link 
          rel="icon" 
          type="image/jpeg" 
          href="https://res.cloudinary.com/drdzmc9dr/image/upload/v1732621748/Screenshot_2023-05-25-00-13-04-373_com.instagram.android_2_nlmoda.jpg"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Insha Khan",
              url: "https://www.inshakhan.in",
              jobTitle: "Digital Entrepreneur and Business Coach",
              description: "Professional business coach helping women generate consistent monthly income through social media platforms.",
              sameAs: [
                "https://www.linkedin.com/in/insha-khan-943155222",
                "https://instagram.com/inshakhan.09",
                "https://www.facebook.com/profile.php?id=61551705077024"
              ],
              image: "https://res.cloudinary.com/drdzmc9dr/image/upload/v1732621748/Screenshot_2023-05-25-00-13-04-373_com.instagram.android_2_nlmoda.jpg",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN"
              }
            })
          }}
        />
      </head>
      <body className={`${montserrat.variable} ${openSans.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}