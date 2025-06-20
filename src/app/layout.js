import Navbar from "./components/navbar/Navbar";
import "./globals.css";

export const metadata = {
  title: "YellowSkye",
  description: "Next.Js-based Web App Development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
