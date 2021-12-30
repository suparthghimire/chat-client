import Footer from "./page/Footer";
export default function Layout({ children }) {
  return (
    <>
      <div className="h-100">{children}</div>
      <Footer />
    </>
  );
}
