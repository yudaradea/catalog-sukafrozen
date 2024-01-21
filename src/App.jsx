import "../src/css/all.min.css";
import "../src/css/bootstrap.min.css";
import "../src/css/spacing.css";
import "../src/css/animate.css";
import "../src/css/style.css";
import "../src/css/responsive.css";

import "../src/js/jquery-3.6.0.min.js";
import "../src/js/bootstrap.bundle.min.js";
import "../src/js/isotope.pkgd.min.js";
import "../src/js/jquery.nice-select.min.js";
import "../src/js/slick.min.js";
import "../src/js/simplyCountdown.js";
import "../src/js/jquery.countup.min.js";
import "../src/js/venobox.min.js";
import "../src/js/sticky_sidebar.js";
import WOW from "wow.js";
import "../src/js/main.js";

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
