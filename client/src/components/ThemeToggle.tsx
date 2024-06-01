import { Moon, Sun } from "lucide-react";
import { useTheme } from "./themes/theme-provider";
import { Button } from "./ui/button";
import { AnimatePresence, motion } from "framer-motion";

export default function ThemeToggle() {
  const { setTheme } = useTheme();
  const currentTheme =
    localStorage.getItem("vite-ui-theme") !== null
      ? localStorage.getItem("vite-ui-theme")
      : "light";
  return (
    <>
      <Button className="p-3 rounded-full" variant="ghost">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.5 }}>
          <AnimatePresence mode="wait">
            {currentTheme == "light" ? (
              <motion.div
                key="sun"
                initial={{ opacity: 1 }}
                animate={{ rotate: [0, -60, 0] }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                onClick={() => setTheme("dark")}
              >
                <Sun className="h-5 w-5" />
              </motion.div>
            ) : (
              <motion.div
                key="mppn"
                initial={{ opacity: 1 }}
                animate={{ rotate: [0, 60, 0] }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                onClick={() => setTheme("light")}
              >
                <Moon
                  className="h-5 w-5"
                  onClick={() => {
                    setTheme("light");
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Button>
    </>
  );
}
