"use client";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Toaster, toast } from "sonner";
import { loginFormData } from "../../lib/validation";
import { loginApi } from "../../services/auth";
import { booleanFn_void, loginForm } from "../../types/types";
import { z } from "zod";

export default function LoginForm({ showLoginCard }: booleanFn_void) {
  const [emailId, setEmailId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState(" ");
  const validateLoginFormData = async (
    e: React.FormEvent<HTMLFormElement>,
    inputs: loginForm,
  ) => {
    console.log(inputs);
    e.preventDefault();
    try {
      const validate_data = loginFormData.parse(inputs);
      loginApi(inputs, setShowAlert, setAlertMessage);
    } catch (erros) {
      if (erros instanceof z.ZodError) {
        console.log(erros?.issues);
        if (erros?.issues && erros?.issues[0]) {
          toast.error(erros?.issues[0].message);
        }
      }
    }
  };
  useEffect(() => {
    if (alertMessage !== " " && showAlert) {
      toast.error(alertMessage);
      setShowAlert(false);
    }
  }, [showAlert]);
  return (
    <>
      <form
        onSubmit={(e) => {
          validateLoginFormData(e, { emailId: emailId, password: password });
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
            <span
              className="px-2 cursor-pointer text-blue-400 font-bold"
              onClick={() => {
                showLoginCard(false);
              }}
            >
              Sign Up
            </span>
          </div>
        </div>
      </form>
      <Toaster position="top-right" />
    </>
  );
}
