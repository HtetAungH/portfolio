import { Box, Typography, Grid, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Icons from "./Icons";

const TechIconWrapper = styled(motion.div)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: 16,
  [theme.breakpoints.down("sm")]: {
    width: 70,
    height: 70,
  },
  // Glass UI Background
  backgroundColor: "rgba(45, 45, 45, 0.5)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "all 0.3s ease",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: 16,
    padding: "2px",
    background: "linear-gradient(135deg, #64b5f6 0%, #90caf9 100%)",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  "&:hover": {
    transform: "translateY(-8px)",
    backgroundColor: "rgba(45, 45, 45, 0.7)",
    boxShadow: "0 10px 30px rgba(107, 154, 255, 0.3)",
    "&::before": {
      opacity: 1,
    },
    "& svg": {
      color: "#ffffff",
    },
  },
}));

const Experience = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const technologies = [
    { name: "JavaScript", icon: <Icons.JavaScriptIcon /> },
    { name: "Node.js", icon: <Icons.NodeJsIcon /> },
    { name: "HTML5", icon: <Icons.Html5Icon /> },
    { name: "CSS3", icon: <Icons.Css3Icon /> },
    { name: "React", icon: <Icons.ReactIcon /> },
  ];

  return (
    <Box
      ref={sectionRef}
      id="experience"
      sx={{
        py: { xs: 8, md: 11 },
        backgroundColor: "transparent",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: 4,
              fontWeight: 600,
              letterSpacing: "2px",
              background: "linear-gradient(135deg, #64b5f6 0%, #90caf9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            EXPERIENCE WITH
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
          {technologies.map((tech, index) => (
            <Grid
              size={{ xs: 6, sm: 4, md: 2 }}
              key={index}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <TechIconWrapper
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  viewport={{ once: true }}
                >
                  <Box
                    sx={{
                      fontSize: 40,
                      color: "rgba(255, 255, 255, 0.8)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {tech.icon}
                  </Box>
                </TechIconWrapper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Animated Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          style={{
            width: "100px",
            height: "3px",
            background: "linear-gradient(135deg, #64b5f6 0%, #90caf9 100%)",
            margin: "50px auto 0",
            borderRadius: "3px",
          }}
        />
      </Container>
    </Box>
  );
};

export default Experience;
