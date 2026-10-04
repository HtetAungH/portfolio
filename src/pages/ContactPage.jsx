import Contact from "../components/Contact";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.3, ease: "easeIn" } },
};

const ContactPage = () => (
  <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit"
    style={{ paddingTop: "80px" }}>
    <Contact />
  </motion.div>
);

export default ContactPage;
