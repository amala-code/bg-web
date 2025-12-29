import './globals.css'

export const metadata = {
  title: 'TechLearn - Learn The Future. Become The Future.',
  description: 'Immerse yourself in cutting-edge tech education. Your journey to mastery starts here.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}