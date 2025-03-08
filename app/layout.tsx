import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";


import "styles/globals.css";

export const metadata: Metadata = {
  title: "Automação Inteligente - Potencialize seu Negócio",
  description: "Soluções de automação para otimizar processos e maximizar produtividade.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
<head>
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
  <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
</head>

      <body className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="flex flex-col items-center justify-center min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
