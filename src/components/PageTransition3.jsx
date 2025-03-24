import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: "100vh", // Começa fora da tela (embaixo)
  },
  in: {
    opacity: 1,
    y: 0, // Move para o centro
    transition: { duration: 0.6, ease: "easeOut" }
  },
  out: {
    opacity: 0,
    y: "-100vh", // Sai para cima
    transition: { duration: 0.6, ease: "easeInOut" }
  }
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      style={{ position: "absolute", width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
