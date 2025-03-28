import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 1, // Começa maior e diminui
  },
  in: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  out: {
    opacity: 0,
    scale: 0.8, // Sai reduzindo o tamanho
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
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh", // garante altura mínima

      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
