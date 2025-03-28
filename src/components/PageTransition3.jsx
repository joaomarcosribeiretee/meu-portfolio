import { useEffect } from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
  out: {
    opacity: 0,
    y: -40,
    transition: { duration: 0.6, ease: "easeInOut" }
  }
};

const PageTransition = ({ children }) => {
  useEffect(() => {
    // 🔒 Bloqueia scroll do body durante a animação
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const timeout = setTimeout(() => {
      document.body.style.overflow = originalOverflow || "auto"; // 🔓 Restaura
    }, 700); // um pouco mais que a duração da animação

    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = originalOverflow || "auto";
    };
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh", // garante que não haja quebra
        overflowX: "hidden", // evita scroll lateral
        overflowY: "hidden",   // deixa o scroll vertical visível e estável
      }}
      
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
