import React from "react";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer>
      <p>All Right Reserved By Ankit Kaushik. {year}</p>
    </footer>
  );
}

export default Footer;
