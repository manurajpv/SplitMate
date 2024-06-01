import React from "react";
import { loginIn } from "../api/api";
import routes from "../routes/routes.json";
import { loginForm } from "../types/types";
import { AxiosError } from "axios";

export const loginApi = async (
  formData: loginForm,
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>,
  setAlertMessage: React.Dispatch<React.SetStateAction<string>>,
) => {
  await loginIn(formData)
    .then((data) => {
      localStorage.setItem("profile", JSON.stringify(data));
      window.location.href = routes.DASHBOARD_URL;
      return data;
    })
    .catch((err: AxiosError) => {
      setShowAlert(true);
      err.response?.status === 400 || err.response?.status === 401
        ? setAlertMessage(err.response.data?.message)
        : setAlertMessage("Oops! Something went worng");
      return false;
    });
};
