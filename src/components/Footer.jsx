import React from "react";

function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer>
      <p>All Right Reserved. {year}</p> <a href="https://github.com/ankitkaushikx">Ankitkaushikx</a>
    </footer>
  );
}

export default Footer;
