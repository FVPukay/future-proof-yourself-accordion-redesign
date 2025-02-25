import React, { useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;

    if (offset > 200) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  let x = ["navbar"];

  if (scrolled) {
    x.push("scrolled");
  }

  return (
    <header className={x.join(" ")}>
      <div className="logo">
        Logo
      </div>
      <nav className="navigation">
        <ul>
          <li><a href="#signin">Sign In</a></li>
        </ul>
      </nav>
    </header>
  )
};

export default Navbar;
