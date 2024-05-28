import { useState } from "react";
import { loginFormData } from "../lib/validation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { booleanFn_void } from "../types/types";

export default function LoginForm({ showLoginCard }: booleanFn_void) {
  console.log(showLoginCard)
  const [emailId, setEmailId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const validateLoginFormData = (inputs: unknown) => {
    console.log(inputs);
    try {
      const isValidData = loginFormData.parse(inputs);
      return isValidData;
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      onSubmit={() => {
        validateLoginFormData({ emailId: emailId, password: password });
      }}
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            placeholder="john@example.com"
            required
            type="email"
            onChange={(e) => {
              setEmailId(e.target.value);
            }}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <Button className="w-full" type="submit">
          Login
        </Button>
        <div className="text-sm space-y-2 text-center">
          <span>Don't have an account?</span>
          <span className="px-2 cursor-pointer text-blue-400 font-bold"
            onClick={() => { showLoginCard(false) }}>
            Sign Up
          </span>
        </div>
      </div>
    </form>
  );
}
