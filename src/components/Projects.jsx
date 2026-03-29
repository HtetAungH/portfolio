import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  Stack,
} from "@mui/material";
// eslint-disable-next-line no-unused-vars
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Box
      id="projects"
      ref={sectionRef}
      sx={{
        py: 15,
        backgroundColor: "background.default",
        position: "relative",
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 4,
              fontWeight: 600,
              fontSize: { xs: "2rem", md: "3rem" },
              background: "linear-gradient(135deg, #64b5f6 0%, #90caf9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Featured Projects
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <Grid container spacing={4}>
            {projects.map((project, index) => (
              <Grid size={{ xs: 12, md: 4 }} key={index}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      background: "rgba(255, 255, 255, 0.05)",
                      backdropFilter: "blur(10px)",
                      borderRadius: 3,
                      overflow: "hidden",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                        "& .project-image": {
                          transform: "scale(1.1)",
                        },
                      },
                    }}
                  >
                    <Box sx={{ position: "relative", overflow: "hidden" }}>
                      <CardMedia
                        component="img"
                        height="250"
                        image={project.image}
                        alt={project.title}
                        className="project-image"
                        sx={{
                          transition: "transform 0.6s ease",
                        }}
                      />
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="h3"
                        sx={{
                          color: "#fff",
                          fontWeight: 600,
                          mb: 2,
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "rgba(255, 255, 255, 0.7)",
                          mb: 2,
                          lineHeight: 1.6,
                        }}
                      >
                        {project.description}
                      </Typography>
                      <Stack
                        direction="row"
                        spacing={1}
                        flexWrap="wrap"
                        sx={{ mb: 3, gap: 1 }}
                      >
                        {project.tags.map((tech, techIndex) => (
                          <Chip
                            key={techIndex}
                            label={tech}
                            size="small"
                            sx={{
                              background:
                                "linear-gradient(135deg, rgba(107, 156, 255, 0.2) 0%, rgba(112, 85, 247, 0.2) 100%)",
                              color: "#fff",
                              border: "1px solid rgba(255,255,255,0.1)",
                            }}
                          />
                        ))}
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <Button
                          size="small"
                          startIcon={<GitHubIcon />}
                          href={project.githubLink}
                          target="_blank"
                          sx={{
                            color: "#fff",
                            "&:hover": {
                              color: "#64b5f6",
                            },
                          }}
                        >
                          Code
                        </Button>
                        <Button
                          size="small"
                          startIcon={<LaunchIcon />}
                          href={project.liveLink}
                          target="_blank"
                          sx={{
                            color: "#fff",
                            "&:hover": {
                              color: "#64b5f6",
                            },
                          }}
                        >
                          Live Demo
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Projects;
