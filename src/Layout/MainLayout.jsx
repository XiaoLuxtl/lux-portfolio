/* eslint-disable react/prop-types */
import { Navbar } from "../ui/Navbar";
import { Footer } from "../ui/Footer";

export function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
