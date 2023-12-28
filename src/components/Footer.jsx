import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer_container">
          <div className="container_item">
            <h3 style={{ color: "white" }}>About</h3>
            <p>
              Elevate your style with [Shopping Service] – your go-to
              destination for curated fashion. We believe in the perfect blend
              of trendsetting designs, seamless shopping, and a touch of
              personal style.
            </p>
          </div>
          <div className="container_item">
            <h3 style={{ color: "white" }} id="footer_contact">
              Contact
            </h3>
            <p>⟟ : Georgia, Tbilisi</p>
            <p>
              ✆ :{" "}
              <a href="tel:+995557630631" style={{ color: "inherit" }}>
                +995-557-630-631
              </a>
            </p>
            <p>
              ✉ :{" "}
              <a
                href="mailto:bedianidze.muriko@gmail.com"
                style={{ color: "inherit" }}
              >
                bedianidze.muriko@gmail.com
              </a>
            </p>
          </div>
        </div>
        <p className="footer_copy">
          © 2023 Shopping|Center LP. The center design is a trademark of marr-io
          LP. Browse millions of high-quality brand clothes, electronics, and
          jevalery.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
