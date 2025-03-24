import { type Metadata } from 'next'
import {
  ClerkProvider
} from '@clerk/nextjs'
import './global.css'
import React from "react"
import {Inter,Space_Grotesk} from 'next/font/google'


const inter=Inter({
  subsets:['latin'],
  weight:['100','200','300','400','500','600','700','800','900'],
  variable:'--font-inter'
})

const spaceGrotesk=Space_Grotesk({
  subsets:['latin'],
  weight:['300','400','500','600','700'],
  variable:'--font-spaceGrotesk'
})


export const metadata: Metadata = {
  title: 'Anstion',
  description: 'Anstion is a dynamic Q&A platform where users can sign in, ask questions on any topic, and receive answers from knowledgeable individuals.',

 

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider

    appearance={{
      elements:{
        formButtonPrimary:'primary-gradient',
        footerActionLink:'primary-text-gradient hover:text-primary-500'

      }
    }}
    
    >
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}