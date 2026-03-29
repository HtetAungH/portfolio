import { Box, Container, Typography, Link, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const FooterSection = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(26, 26, 26, 0.6)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  marginTop: theme.spacing(5),
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "400px",
    height: "1px",
    background: "linear-gradient(135deg, #64b5f6 0%, #90caf9 100%)",
  },
}));

const SocialIcon = styled(motion.a)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "45px",
  height: "45px",
  borderRadius: "50%",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  color: "#fff",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(142, 107, 255, 0.3)",
    borderColor: "#64b5f6",
    transform: "translateY(-3px)",
    boxShadow: "0 5px 15px rgba(139, 107, 255, 0.3)",
  },
});

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterSection>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={3}
        >
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Stack direction="row" spacing={2}>
              <SocialIcon
                href="https://github.com/HtetAungH"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <GitHubIcon />
              </SocialIcon>
              <SocialIcon
                href="https://www.linkedin.com/in/htet-aung-hlaing-front-enddeveloper/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <LinkedInIcon />
              </SocialIcon>
              <SocialIcon
                href="mailto:hlainghtetaung76@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <EmailIcon />
              </SocialIcon>
            </Stack>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.6)",
                textAlign: "center",
                fontSize: "0.9rem",
                letterSpacing: "0.5px",
              }}
            >
              © {currentYear}{" "}
              <Link
                href="#"
                sx={{
                  background:
                    "linear-gradient(135deg, #64b5f6 0%, #90caf9 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                Htet Aung Hlaing
              </Link>
              . All Rights Reserved.
            </Typography>
          </motion.div>
        </Stack>
      </Container>
    </FooterSection>
  );
};

export default Footer;
