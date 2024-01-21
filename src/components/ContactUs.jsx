const ContactUs = () => {
  return (
    <section className="fp__breadcrumb mt_95 mb_95">
      <div className="fp__breadcrumb_overlay">
        <div className="container">
          <div className="fp__breadcrumb_text">
            <h1>
              Ada yang ingin anda tanyakan? <br /> silakan hubungi kami
            </h1>
          </div>
          <div className="text-center mt-4">
            <a
              href="https://wa.me/6289644439032?text=Hallo%20suka%20frozen%20saya%20ingin%20memesan%20.%20.%20.%20."
              target="_blank"
              rel="noreferrer"
              className="btn btn btn-light"
            >
              <i className="fab fa-whatsapp me-1"></i> +62 897 1234 567
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
