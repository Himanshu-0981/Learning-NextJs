export const metadata = {
    title: 'About page',
    description: 'about page',
  }
   
  export default function RootLayout({ children }) {
   return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }
  