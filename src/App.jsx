import "../src/css/all.min.css";
import "../src/css/bootstrap.min.css";
import "../src/css/spacing.css";
import "../src/css/animate.css";
import "../src/css/style.css";
import "../src/css/responsive.css";

import "../src/js/bootstrap.bundle.min.js";

import WOW from "wow.js";

import NavbarTop from "./components/NavbarTop";
import ListProduct from "./components/ListProduct";
import ContactUs from "./components/ContactUs";

function App() {
  new WOW().init();

  return (
    <>
      {/* TOPBAR START */}
      <NavbarTop />
      {/* TOPBAR END */}

      <ListProduct />

      <ContactUs />
    </>
  );
}

export default App;
