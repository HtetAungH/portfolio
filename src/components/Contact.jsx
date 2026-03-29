import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import SendIcon from "@mui/icons-material/Send";

// Styled Components
const ContactSection = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  paddingBottom: theme.spacing(5),
  backgroundColor: "transparent",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    background:
      "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
    pointerEvents: "none",
    width: "600px",
    height: "600px",
    filter: "blur(80px)",
  },
}));

const FormContainer = styled(motion.div)(({ theme }) => ({
  maxWidth: "700px",
  margin: "0 auto",
  padding: "40px",
  // Glass UI Background
  backgroundColor: "rgba(30, 30, 30, 0.5)",
  borderRadius: "20px",
  backdropFilter: "blur(16px)",
  WebkitBackdropFilter: "blur(16px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
  [theme.breakpoints.down("sm")]: {
    padding: "24px",
  },
}));

const GlowingTitle = styled(Typography)({
  mb: 8,
  fontWeight: 600,
  background: "linear-gradient(135deg, #64b5f6 0%, #90caf9 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontSize: { xs: "2rem", md: "3rem" },
  letterSpacing: "3px",
});

const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(30, 30, 30, 0.6)",
    borderRadius: "12px",
    marginBottom: "20px",
    transition: "all 0.3s ease",
    backdropFilter: "blur(8px)",
    WebkitBackdropFilter: "blur(8px)",
    "& fieldset": {
      borderColor: "rgba(255, 255, 255, 0.1)",
      transition: "all 0.3s ease",
    },
    "&:hover fieldset": {
      borderColor: "rgba(96, 165, 250, 0.5)",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#3b82f6",
      boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.2)",
    },
    "& input": {
      color: "#ffffff",
      padding: "16px 20px",
      fontSize: "1rem",
    },
    "& textarea": {
      color: "#ffffff",
      padding: "16px 20px",
      fontSize: "1rem",
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255, 255, 255, 0.5)",
    "&.Mui-focused": {
      color: "#3b82f6",
    },
  },
}));

const SendButton = styled(motion(Button))({
  background: "linear-gradient(135deg, #64b5f6 0%, #90caf9 100%)",
  color: "#ffffff",
  padding: "14px 32px",
  fontSize: "1rem",
  fontWeight: 600,
  borderRadius: "12px",
  textTransform: "none",
  marginTop: "10px",
  width: "100%",
  position: "relative",
  overflow: "hidden",
  transition: "all 0.3s ease",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background:
      "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
    transition: "left 0.5s ease",
  },
  "&:hover::before": {
    left: "100%",
  },
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 10px 30px rgba(107, 142, 255, 0.4)",
  },
  "&:active": {
    transform: "translateY(0)",
  },
});

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      // Note: You need to replace these placeholders with your actual EmailJS credentials
      await emailjs.sendForm(
        "service_m6njvis",
        "template_mpyjzz8",
        form.current,
        "y2oV8SPfxWDMQtMqs",
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      form.current.reset();
    } catch (error) {
      console.error("Email error:", error);
      setStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or email me directly.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <ContactSection id="contact">
      <Container maxWidth="lg">
        {/* Title and Description */}
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlowingTitle
              variant="h5"
              sx={{ fontSize: { xs: "2rem", md: "3rem" }, mb: 1 }}
            >
              Get In Touch
            </GlowingTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: "1.1rem",
                maxWidth: "600px",
                margin: "0 auto",
                lineHeight: 1.6,
              }}
            >
              Have a project in mind? Fill out the form below and let's build
              something future-proof together.
            </Typography>
          </motion.div>
        </Box>

        {/* Contact Form */}
        <FormContainer
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form ref={form} onSubmit={handleSubmit}>
            <StyledTextField
              fullWidth
              name="from_name"
              placeholder="Name"
              variant="outlined"
              required
            />
            <StyledTextField
              fullWidth
              name="from_email"
              placeholder="Email"
              type="email"
              variant="outlined"
              required
            />
            <StyledTextField
              fullWidth
              name="message"
              placeholder="Message"
              multiline
              rows={5}
              variant="outlined"
              required
            />

            <AnimatePresence>
              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  style={{
                    marginBottom: "20px",
                    padding: "12px",
                    borderRadius: "12px",
                    textAlign: "center",
                    fontSize: "0.9rem",
                    backgroundColor:
                      status.type === "success"
                        ? "rgba(100, 181, 246, 0.1)"
                        : "rgba(255, 82, 82, 0.1)",
                    color: status.type === "success" ? "#64b5f6" : "#ff5252",
                    border: `1px solid ${status.type === "success" ? "rgba(100, 181, 246, 0.3)" : "rgba(255, 82, 82, 0.3)"}`,
                  }}
                >
                  {status.message}
                </motion.div>
              )}
            </AnimatePresence>

            <SendButton
              type="submit"
              variant="contained"
              disabled={loading}
              endIcon={
                loading ? (
                  <CircularProgress size={20} color="inherit" />
                ) : (
                  <SendIcon />
                )
              }
              whileHover={{ scale: loading ? 1 : 1.02 }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
            >
              {loading ? "Sending..." : "Send Message"}
            </SendButton>
          </form>
        </FormContainer>
      </Container>
    </ContactSection>
  );
};

export default Contact;
