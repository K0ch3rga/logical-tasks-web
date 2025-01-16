import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../../../public/globals.css'
import { baseTheme } from '../ui'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { Roboto } from 'next/font/google'
import { ThemeProvider } from '@mui/material/styles'

const geistSans = localFont({
  src: '../../../public/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '99 900',
})
const geistMono = localFont({
  src: '../../../public/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '99 900',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body
        className={roboto.variable}
        style={{
          background:
            'linear-gradient(to right, var(--mui-palette-primary-light) 50%, transparent 50%)',
        }}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={baseTheme}>{children} </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
