import { booleanFn_void } from "../../types/types";
import LoginForm from "./LoginForm";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export function LoginCard({ showLoginCard }: booleanFn_void) {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.2,
        ease: "easeInOut",
      }}
    >
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Login</CardTitle>
          <CardDescription>
            Enter your email and password to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm showLoginCard={showLoginCard} />
        </CardContent>
      </Card>
    </motion.div>
  );
}
