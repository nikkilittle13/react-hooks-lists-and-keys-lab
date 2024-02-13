import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkMap = links.map((link, index) => {
    return <a key={index} href={`#${link}`}>{link}</a>
  })

  return <nav>
  {linkMap}
    </nav>;
}


export default NavBar;
