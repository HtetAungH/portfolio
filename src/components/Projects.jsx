// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Box, Typography, Container, Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import petrol from "../assets/petrol.png";
import slayer from "../assets/slayer.png";
import headphone from "../assets/headphone.png";

const projects = [
  {
    title: "Petrol Station System",
    description:
      "Full-stack operation management with inventory, sales tracking, and reporting analytics.",
    tags: ["React.js", "Vite", "Tailwind", "Motion"],
    image: petrol,
    githubLink: "https://github.com/HtetAungH/pertrol_system",
    liveLink: "https://pertrol-system.vercel.app/",
  },
  {
    title: "Headphone Store",
    description:
      "Modern e-commerce landing page featuring immersive product displays and clean UI.",
    tags: ["React.js", "Tailwind", "Design"],
    image: headphone,
    githubLink: "https://github.com/HtetAungH/headphone",
    liveLink: "https://headphone-wine.vercel.app/",
  },
  {
    title: "Demon Slayer Portfolio",
    description:
      "My personal portfolio showcasing technical skills and creative design implementation.",
    tags: ["React.js", "Framer Motion", "3D"],
    image: slayer,
    githubLink: "https://github.com/HtetAungH/demon_slayer",
    liveLink: "https://demon-slayer-wheat.vercel.app/",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Projects = () => {
  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 8, md: 11 },
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient orb — matches Hero / WorkExperience style */}
      <motion.div
        animate={{ scale: [1, 1.14, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(129,140,248,0.11) 0%, transparent 70%)",
          bottom: "-10%",
          left: "-5%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.25, 0.5, 0.25] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(96,165,250,0.10) 0%, transparent 70%)",
          top: "5%",
          right: "-5%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: "center", mb: 7 }}>
            {/* Badge reuses .projects-section-badge from index.css */}
            <span className="projects-section-badge">✦ Work</span>

            <Typography
              variant="h2"
              align="center"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(135deg, #818cf8 0%, #60a5fa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: { xs: "2rem", md: "3rem" },
                letterSpacing: "3px",
                fontFamily: "'Outfit', 'Inter', sans-serif",
                mb: 2,
              }}
            >
              PROJECTS
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "rgba(255,255,255,0.55)",
                fontSize: { xs: "0.97rem", md: "1.05rem" },
                maxWidth: "520px",
                margin: "0 auto",
                lineHeight: 1.8,
              }}
            >
              A selection of things I&apos;ve built — from full-stack apps to
              creative frontend experiences.
            </Typography>
          </Box>
        </motion.div>

        {/* Project cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <Grid container spacing={{ xs: 3, md: 4 }}>
            {projects.map((project, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <motion.div variants={cardVariants} style={{ height: "100%" }}>
                  {/* Uses .project-card CSS class from index.css */}
                  <div className="project-card">
                    {/* Image */}
                    <Box
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        height: 220,
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="project-img"
                      />
                      {/* Bottom gradient overlay */}
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, rgba(10,10,15,0.7) 0%, transparent 50%)",
                          pointerEvents: "none",
                        }}
                      />
                    </Box>

                    {/* Content */}
                    <Box
                      sx={{
                        p: { xs: "20px 20px 24px", md: "22px 24px 28px" },
                        display: "flex",
                        flexDirection: "column",
                        flexGrow: 1,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          color: "#f1f5f9",
                          fontWeight: 700,
                          fontSize: { xs: "1.05rem", md: "1.15rem" },
                          fontFamily: "'Outfit', 'Inter', sans-serif",
                          mb: 1,
                          letterSpacing: "0.01em",
                        }}
                      >
                        {project.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255,255,255,0.6)",
                          lineHeight: 1.8,
                          fontSize: "0.9rem",
                          mb: 2.5,
                          flexGrow: 1,
                        }}
                      >
                        {project.description}
                      </Typography>

                      {/* Tags — uses .project-tag class from index.css */}
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "8px",
                          mb: 3,
                        }}
                      >
                        {project.tags.map((tag, i) => (
                          <span key={i} className="project-tag">
                            {tag}
                          </span>
                        ))}
                      </Box>

                      {/* Buttons — uses .project-btn class from index.css */}
                      <Box sx={{ display: "flex", gap: "10px" }}>
                        <a
                          className="project-btn primary"
                          href={project.githubLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <GitHubIcon sx={{ fontSize: 15 }} />
                          Code
                        </a>
                        <a
                          className="project-btn"
                          href={project.liveLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <LaunchIcon sx={{ fontSize: 15 }} />
                          Live Demo
                        </a>
                      </Box>
                    </Box>
                  </div>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Animated divider — matches Experience.jsx */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            width: "100px",
            height: "3px",
            background: "linear-gradient(135deg, #818cf8 0%, #60a5fa 100%)",
            margin: "56px auto 0",
            borderRadius: "3px",
          }}
        />
      </Container>
    </Box>
  );
};

export default Projects;
