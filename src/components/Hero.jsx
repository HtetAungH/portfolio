import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import DownloadIcon from "@mui/icons-material/Download";
import Avatar from "../assets/Avatar.png";
import CV from "../assets/cvform/HtetAungHlaing.pdf";

const GradientText = styled(motion.span)({
  background: "linear-gradient(135deg, #818cf8 0%, #60a5fa 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
});

const Hero = () => {
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 160]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: 10,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient orb 1 */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(129,140,248,0.15) 0%, transparent 70%)",
          top: "5%", left: "5%", pointerEvents: "none", zIndex: 0,
        }}
      />
      {/* Ambient orb 2 */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute", width: 400, height: 400,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 70%)",
          bottom: "10%", right: "8%", pointerEvents: "none", zIndex: 0,
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glass Hero Card */}
          <Box
            sx={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "32px",
              padding: { xs: "40px 24px", md: "60px 60px" },
              boxShadow: "0 8px 48px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)",
              textAlign: "center",
            }}
          >
            {/* Avatar */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 240, damping: 18, delay: 0.2 }}
            >
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(129,140,248,0.5)",
                    "0 0 0 22px rgba(129,140,248,0)",
                  ],
                }}
                transition={{ duration: 2.2, repeat: Infinity }}
                style={{
                  width: 180, height: 180,
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #818cf8 0%, #60a5fa 100%)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 32px",
                  padding: 4,
                  boxSizing: "border-box",
                }}
              >
                <motion.img
                  src={Avatar}
                  alt="Profile"
                  whileHover={{ scale: 1.04 }}
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover", borderRadius: "50%",
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "2rem", md: "3rem", lg: "3.5rem" },
                  mb: 2,
                  lineHeight: 1.15,
                  color: "#f1f5f9",
                  fontWeight: 800,
                  letterSpacing: "-0.02em",
                  fontFamily: "'Outfit', 'Inter', sans-serif",
                }}
              >
                I do code and
                <br />
                make content{" "}
                <GradientText
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  about it!
                </GradientText>
              </Typography>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.7 }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.15rem" },
                  color: "rgba(255,255,255,0.65)",
                  mb: 5,
                  maxWidth: "620px",
                  margin: "0 auto 44px",
                  lineHeight: 1.85,
                }}
              >
                I am a dedicated frontend developer with a strong focus on
                building modern, efficient, and scalable web applications using{" "}
                <GradientText>React</GradientText>. With a deep understanding of
                the ecosystem and tools like{" "}
                <GradientText>Vite</GradientText>, I enjoy turning complex
                problems into beautiful and intuitive user interfaces.
              </Typography>
            </motion.div>

            {/* CTA Buttons */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.75, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background: "linear-gradient(135deg, #818cf8 0%, #60a5fa 100%)",
                    color: "#fff",
                    px: 5, py: 1.6,
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    borderRadius: "50px",
                    boxShadow: "0 4px 24px rgba(129,140,248,0.35)",
                    fontFamily: "'Inter', sans-serif",
                    "&:hover": {
                      background: "linear-gradient(135deg, #6d73f5 0%, #4a9df7 100%)",
                      boxShadow: "0 8px 32px rgba(129,140,248,0.5)",
                    },
                  }}
                  onClick={() => navigate("/contact")}
                >
                  Get In Touch
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.85, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  endIcon={<DownloadIcon />}
                  component="a"
                  href={CV}
                  download="Htetaunghlaing.pdf"
                  sx={{
                    color: "rgba(255,255,255,0.85)",
                    borderColor: "rgba(255,255,255,0.18)",
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(8px)",
                    px: 5, py: 1.6,
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    borderRadius: "50px",
                    fontFamily: "'Inter', sans-serif",
                    "&:hover": {
                      borderColor: "#818cf8",
                      color: "#818cf8",
                      backgroundColor: "rgba(129,140,248,0.10)",
                    },
                  }}
                >
                  Download CV
                </Button>
              </motion.div>
            </Stack>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero;

