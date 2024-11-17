import { NextFunction, Request, Response } from "express";

const validateAuth = (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  switch (request.path) {
    case "/register": {
      const { first_name, last_name, email, password, confirm_password } =
        request.body;

      if (
        ![first_name, last_name, email, password, confirm_password].every(
          Boolean
        )
      ) {
        response
          .status(401)
          .json({ field: "", message: "Missing Credentials" });
        return;
      } else if (!validateEmail(email)) {
        response.status(401).json({ field: "", message: "Invalid Email" });
        return;
      } else if (password.length < 8 || password.length > 20) {
        response.status(401).json({
          field: "",
          message: "Password must be at least 8 and less than 20 characters.",
        });
        return;
      }
    }
    case "/login": {
      const { email, password } = request.body;

      if (![email, password].every(Boolean)) {
        response
          .status(401)
          .json({ field: "", message: "Missing Credentials" });
        return;
      } else if (!validateEmail(email)) {
        response.status(401).json({ field: "", message: "Invalid Email" });
        return;
      }
    }
  }
};

export default validateAuth;
