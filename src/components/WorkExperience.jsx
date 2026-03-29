import { Box, Container, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import weday from "../assets/weday.png";

const ExperienceCard = styled(motion.div)(({ theme }) => ({
  padding: "30px",
  borderRadius: "12px",
  backgroundColor: theme.palette.mode === "dark" ? "#1e1e1e" : "#ffffff",
  marginBottom: "24px",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateX(8px)",
    backgroundColor: theme.palette.mode === "dark" ? "#252525" : "#f9f9f9",
  },
}));

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
        py: 5,
        backgroundColor: "background.default",
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        {/* Section Title */}
        <Typography
          variant="h5"
          align="center"
          sx={{
            mb: 3,
            fontWeight: 600,
            background: "linear-gradient(135deg, #64b5f6 0%, #90caf9 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: { xs: "2rem", md: "3rem" },
            letterSpacing: "3px",
          }}
        >
          EXPERIENCE
        </Typography>

        {/* Experience Timeline */}
        <Box sx={{ maxWidth: "900px", margin: "0 auto" }}>
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
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
                      component="img"
                      src={exp.logo}
                      alt={exp.company}
                      sx={{
                        width: 50,
                        height: 50,
                        objectFit: "contain",
                      }}
                    />
                  </Box>
                </Grid>

                {/* Content */}
                <Grid size={{ xs: 12, sm: 11 }}>
                  {/* Title and Date Row */}
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
                        color: "white",
                        mb: { xs: 1, sm: 0 },
                      }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255, 255, 255, 0.6)",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.period}
                    </Typography>
                  </Box>

                  {/* Description */}
                  <Typography
                    variant="body1"
                    sx={{
                      color: "rgba(255, 255, 255, 0.7)",
                      lineHeight: 1.8,
                      fontSize: "0.95rem",
                    }}
                  >
                    {exp.description}
                  </Typography>
                </Grid>
              </Grid>
            </ExperienceCard>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WorkExperience;
