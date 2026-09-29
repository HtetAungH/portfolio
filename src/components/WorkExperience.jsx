import { Box, Container, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import weday from "../assets/weday.png";

const GlassCard = styled(motion.div)({
  padding: "32px",
  borderRadius: "20px",
  background: "rgba(255,255,255,0.04)",
  backdropFilter: "blur(20px)",
  WebkitBackdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.09)",
  boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
  marginBottom: "24px",
  transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    inset: 0,
    borderRadius: "20px",
    padding: "1px",
    background:
      "linear-gradient(135deg, rgba(129,140,248,0.3) 0%, rgba(96,165,250,0.1) 100%)",
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    opacity: 0,
    transition: "opacity 0.35s ease",
  },
  "&:hover": {
    background: "rgba(255,255,255,0.07)",
    boxShadow:
      "0 16px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.10)",
    transform: "translateX(6px)",
    "&::before": { opacity: 1 },
  },
});

const WorkExperience = () => {
  const experiences = [
    {
      company: "MyDay Thu Kywal Co;Ltd",
      logo: weday,
      title: "Junior Web Developer at MyDay Thu Kywal",
      period: "Nov 2019 - Present",
      description:
        "Developed responsive UI components using React and Tailwind CSS. Optimized website performance and integrated POSTMAN APIs.",
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient orb */}
      <motion.div
        animate={{ scale: [1, 1.12, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: 450,
          height: 450,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(129,140,248,0.10) 0%, transparent 70%)",
          top: "-10%",
          right: "-5%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: 6,
              fontWeight: 700,
              background: "linear-gradient(135deg, #818cf8 0%, #60a5fa 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: { xs: "2rem", md: "3rem" },
              letterSpacing: "3px",
              fontFamily: "'Outfit', 'Inter', sans-serif",
            }}
          >
            EXPERIENCE
          </Typography>
        </motion.div>

        {/* Experience Timeline */}
        <Box sx={{ maxWidth: "900px", margin: "0 auto" }}>
          {experiences.map((exp, index) => (
            <GlassCard
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Grid container spacing={3} alignItems="flex-start">
                {/* Logo */}
                <Grid size={{ xs: 12, sm: 1 }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "flex-start", sm: "center" },
                      mb: { xs: 2, sm: 0 },
                    }}
                  >
                    <Box
                      sx={{
                        width: 54,
                        height: 54,
                        borderRadius: "14px",
                        background: "rgba(255,255,255,0.08)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        overflow: "hidden",
                      }}
                    >
                      <Box
                        component="img"
                        src={exp.logo}
                        alt={exp.company}
                        sx={{ width: 40, height: 40, objectFit: "contain" }}
                      />
                    </Box>
                  </Box>
                </Grid>

                {/* Content */}
                <Grid size={{ xs: 12, sm: 11 }}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "row" },
                      justifyContent: "space-between",
                      alignItems: { xs: "flex-start", sm: "center" },
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        color: "#f1f5f9",
                        mb: { xs: 1, sm: 0 },
                        fontFamily: "'Outfit', 'Inter', sans-serif",
                        fontSize: { xs: "1.1rem", md: "1.3rem" },
                      }}
                    >
                      {exp.title}
                    </Typography>
                    <Box
                      sx={{
                        background: "rgba(129,140,248,0.12)",
                        border: "1px solid rgba(129,140,248,0.25)",
                        borderRadius: "50px",
                        px: 2,
                        py: 0.5,
                        backdropFilter: "blur(8px)",
                        flexShrink: 0,
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#818cf8",
                          fontWeight: 600,
                          fontSize: "0.82rem",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {exp.period}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.85,
                      fontSize: "0.97rem",
                    }}
                  >
                    {exp.description}
                  </Typography>
                </Grid>
              </Grid>
            </GlassCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WorkExperience;
