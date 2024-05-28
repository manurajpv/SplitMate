import { booleanFn_void } from "../types/types";
import SignupForm from "./SignupForm";
import { motion } from "framer-motion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function SignupCard({ showLoginCard }: booleanFn_void) {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.1,
        duration: 0.2,
        ease: "easeInOut",
      }}>
      <Card className="mx-auto max-w-sm">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
          <CardDescription>
            Enter your details to create an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <SignupForm showLoginCard={showLoginCard} />
        </CardContent>
      </Card>
    </motion.div>

  );
}
