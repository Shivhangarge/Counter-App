import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white text-center py-3 mt-auto">
      © {new Date().getFullYear()} Task Dashboard. All rights reserved.
    </footer>
  );
};

export default Footer;
