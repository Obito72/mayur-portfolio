import { motion } from "framer-motion";

function FadeIn({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
      }}
    >
      {children}
    </motion.div>
  );
}

export default FadeIn;