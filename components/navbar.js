import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className={`navbar-links ${showMenu ? 'active' : ''}`}>
          <a href="https://itongdesign.ca/index.php/projects/" className="navbar-link" target="_blank">Work</a>
          <a href="https://itongdesign.ca/index.php/about/" className="navbar-link" target="_blank">About</a>
          <a href="https://itongdesign.ca/wp-content/uploads/2023/03/Ivan_Tong_Resume.pdf" className="navbar-link" target="_blank">Resume</a>
        </div>
        <div className="navbar-menu" onClick={handleMenuToggle}>
          <div className={`navbar-burger ${showMenu ? 'active' : ''}`}></div>
          <div className={`navbar-burger ${showMenu ? 'active' : ''}`}></div>
          <div className={`navbar-burger ${showMenu ? 'active' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

