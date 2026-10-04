import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import EmailIcon from "@mui/icons-material/Email";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import avatarImg from "../assets/Avatar.png";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Work", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href, name) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveItem(name);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Floating Pill Navbar — Dark Glass */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: scrolled ? "12px" : "20px",
          left: 0,
          right: 0,
          margin: "0 auto",
          zIndex: 1300,
          transition: "top 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
          display: "flex",
          alignItems: "center",
          /* ── Dark glass core ── */
          backgroundColor: scrolled
            ? "rgba(10, 10, 22, 0.85)"
            : "rgba(15, 15, 30, 0.60)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderRadius: "100px",
          padding: "6px 8px",
          boxShadow: scrolled
            ? "0 8px 40px rgba(0,0,0,0.55), 0 2px 8px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.06)"
            : "0 4px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.04)",
          border: "1px solid rgba(255, 255, 255, 0.09)",
          width: "fit-content",
          whiteSpace: "nowrap",
        }}
      >
        {/* Avatar */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("#home", "Home")}
          style={{
            cursor: "pointer",
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            overflow: "hidden",
            flexShrink: 0,
            border: "2px solid rgba(129, 140, 248, 0.45)",
            marginRight: "4px",
            boxShadow: "0 0 14px rgba(129,140,248,0.28)",
          }}
        >
          <img
            src={avatarImg}
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </motion.div>

        {/* Nav Links — Desktop */}
        <div className="navbar-links">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.07 }}
              onClick={() => scrollToSection(item.href, item.name)}
              className={`navbar-link-btn${activeItem === item.name ? " active" : ""}`}
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        {/* Let's Talk CTA — Desktop */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => scrollToSection("#contact", "Contact")}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="navbar-cta-btn"
        >
          <EmailIcon style={{ fontSize: "1rem" }} />
          Let&apos;s talk
        </motion.button>

        {/* Mobile Hamburger */}
        <motion.button
          whileTap={{ scale: 0.92 }}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="navbar-hamburger"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon fontSize="small" /> : <MenuIcon fontSize="small" />}
        </motion.button>
      </motion.nav>

      {/* Mobile Dropdown — Dark Glass */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="navbar-mobile-dropdown"
          >
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href, item.name)}
                className={`navbar-mobile-link${activeItem === item.name ? " active" : ""}`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("#contact", "Contact")}
              className="navbar-mobile-cta"
            >
              <EmailIcon style={{ fontSize: "1rem" }} />
              Let&apos;s talk
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
