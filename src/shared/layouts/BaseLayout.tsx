'use client' // FIXME

import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../../../public/globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'
import { baseTheme } from '../ui'
import { ThemeProvider } from '@emotion/react'

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
