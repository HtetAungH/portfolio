import {
  AppBar,
  Toolbar,
  Button,
  Box,
  Container,
  IconButton,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Logo = styled(motion.div)({
  fontFamily: "cursive",
  fontSize: "1.8rem",
  fontWeight: 700,
  background: "linear-gradient(135deg, #64b5f6 0%, #90caf9 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  cursor: "pointer",
});

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        // Glassmorphism Background
        backgroundColor: scrolled
          ? "rgba(26, 26, 26, 0.6)"
          : "rgba(26, 26, 26, 0.4)",
        // Blur Effect
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)", // Safari support
        // Subtle Border for Glass Edge
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        // Soft Shadow for Depth
        boxShadow: scrolled
          ? "0 4px 30px rgba(0, 0, 0, 0.5)"
          : "0 4px 30px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        zIndex: 1200,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: "space-between", py: 1, px: 0 }}>
          <Logo
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => scrollToSection("#home")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Htet Aung Hlaing
          </Logo>

          {/* Desktop Menu */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <Button
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    color: "#fff",
                    fontSize: "1rem",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      width: 0,
                      height: "2px",
                      background:
                        "linear-gradient(135deg, #64b5f6 0%, #90caf9 100%)",
                      transition: "all 0.3s ease",
                      transform: "translateX(-50%)",
                    },
                    "&:hover": {
                      color: "#64b5f6",
                      "&::after": {
                        width: "80%",
                      },
                    },
                  }}
                >
                  {item.name}
                </Button>
              </motion.div>
            ))}
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "#fff" }}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              // Glass effect for mobile menu too
              backgroundColor: "rgba(26, 26, 26, 0.8)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderRadius: "8px",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              padding: "1rem",
              marginTop: "1rem",
            }}
          >
            {navItems.map((item) => (
              <Button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                sx={{
                  color: "#fff",
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  py: 1,
                  "&:hover": {
                    color: "#64b5f6",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  },
                }}
              >
                {item.name}
              </Button>
            ))}
          </motion.div>
        )}
      </Container>
    </AppBar>
  );
};

export default Navbar;
