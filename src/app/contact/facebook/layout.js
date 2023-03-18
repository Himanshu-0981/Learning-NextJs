export const metadata = {
    title: 'facebook',
    description: 'facebook',
  }
   
  export default function RootLayout({ children }) {
   return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }
  