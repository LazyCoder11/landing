import { motion } from "framer-motion";
import Link from "next/link";

export const AnimatedLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={`relative inline-block overflow-hidden ${className}`}
    >
      <motion.div
        initial={{ y: 0 }}
        whileHover={{ y: "-100%" }}
        transition={{ duration: 0.4, ease: "circInOut" }}
        className="flex flex-col h-fit"
      >
        <span className="">{children}</span>
        <span className="overflow-hidden ">
          <motion.span
            initial={{ y: "100%" }}
            whileHover={{ y: "100%" }}
            transition={{ duration: 0.4, ease: "circInOut" }}
            className="absolute bottom-0 w-full"
          >
            {children}
          </motion.span>
        </span>
      </motion.div>
    </Link>
  );
};
