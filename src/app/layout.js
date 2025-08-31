import { Geist, Geist_Mono , Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins  = Poppins({
weight:["400", "600", "700"],
subsets:['latin']
})

export const metadata = {
 title: {
   default: "learning Next.js",
   template: "%s | learning Next.js",
 },
 keywords: ['Next.js', 'React.js', "Javascript", 'Learning Next.js', 'PlayGraph'],
 description: "Trying to Learn Next.js as best we can"
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" data-theme="light">
      <body
        className={` ${poppins} antialiased`}
      >
        <Navbar />
        <main className="h-screen mt-12">
          {children}
        </main>
        <footer>Awesome Footer content</footer>
      </body>
    </html>
  );
}
