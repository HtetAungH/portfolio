import { Box, Typography, Button, Stack, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, useScroll, useTransform } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";
import Avatar from "../assets/Avatar.png";
import CV from "../assets/cvform/HtetAungHlaing.pdf";

// Gradient Circle Background with Animation
const GradientCircle = styled(motion.div)({
  width: "200px",
  height: "200px",
  borderRadius: "50%",
  background: "linear-gradient(135deg, #64b5f6 0%, #90caf9 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto 30px",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: -10,
    left: -10,
    right: -10,
    bottom: -10,
    borderRadius: "50%",
    background: "linear-gradient(135deg, #64b5f6 0%, #90caf9 100%)",
    opacity: 0.3,
    zIndex: -1,
    filter: "blur(10px)",
  },
});

const GradientText = styled(motion.span)({
  background: "linear-gradient(135deg, #64b5f6 0%, #90caf9 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
});

const FloatingElement = styled(motion.div)({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  pointerEvents: "none",
});

const GlassCard = styled(motion.div)({
  backgroundColor: "rgba(30, 30, 30, 0.4)",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  borderRadius: "20px",
  padding: "40px",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
});

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <Box
      id="home"
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: 8,
        position: "relative",
        overflow: "hidden",
        backgroundColor: "transparent",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: "center" }}>
            {/* Avatar with Gradient Circle */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.2,
              }}
            >
              <GradientCircle
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(147, 169, 251, 0.37)",
                    "0 0 0 20px rgba(141, 174, 246, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <motion.img
                  src={Avatar}
                  alt="Profile"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                />
              </GradientCircle>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: "1.5rem", md: "2.5rem", lg: "3rem" },
                  mb: 3,
                  lineHeight: 1.2,
                  color: "#fff",
                  fontWeight: 700,
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
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1rem", md: "1.25rem" },
                  color: "rgba(255, 255, 255, 0.8)",
                  mb: 5,
                  maxWidth: "800px",
                  margin: "0 auto 40px",
                  lineHeight: 1.8,
                }}
              >
                I am a dedicated frontend developer with a strong focus on
                building modern, efficient, and scalable web applications using{" "}
                <GradientText>React</GradientText>. With a deep understanding of
                the ecosystem and tools like <GradientText>Vite</GradientText>,
                I enjoy turning complex problems into beautiful and intuitive
                user interfaces.
              </Typography>
            </motion.div>

            {/* CTA Buttons */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    background:
                      "linear-gradient(135deg, #64b5f6 0%, #90caf9 100%)",
                    color: "#fff",
                    px: 5,
                    py: 1.5,
                    fontSize: "1.1rem",
                    borderRadius: "50px",
                    boxShadow: "0 4px 15px rgba(107, 193, 255, 0.3)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 0 0 0 rgba(147, 169, 251, 0.37)",
                    },
                  }}
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Get In Touch
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  endIcon={<DownloadIcon />}
                  component="a"
                  href={CV}
                  download="Htetaunghlaing.pdf"
                  sx={{
                    color: "#fff",
                    borderColor: "rgba(255,255,255,0.3)",
                    px: 5,
                    py: 1.5,
                    fontSize: "1.1rem",
                    borderRadius: "50px",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    "&:hover": {
                      borderColor: "#64b5f6",
                      color: "#64b5f6",
                      backgroundColor: "rgba(107, 174, 255, 0.1)",
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
