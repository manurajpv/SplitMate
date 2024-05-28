import { useState } from "react";
import { loginFormData } from "../lib/validation";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { booleanFn_void } from "../types/types";

export default function SignupForm({showLoginCard}:booleanFn_void) {
  const [emailId, setEmailId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

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
        validateLoginFormData({ emailId: emailId, password: password ,firstName:firstName, lastName: lastName});
      }}
    >
      <div className="space-y-4">
        <div className="space-y-2">
          <div>
            <Label htmlFor="email">First Name</Label>
            <Input
              id="firstName"
              placeholder="First name"
              required
              type="text"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Last Name</Label>
          <Input
            id="lastName"
            placeholder="Last Name"
            required
            type="text"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </div>
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
          Sign Up
        </Button>
        <div className="text-sm space-y-2 text-center">
          <span>Already have an account?</span>
          <span className="px-2 cursor-pointer text-blue-400 font-bold" onClick={()=>{showLoginCard(true)}}>
            Login!
          </span>
        </div>
      </div>
    </form>
  );
}
