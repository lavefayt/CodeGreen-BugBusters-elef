import { NextFunction, Request, Response } from "express";

const validateAuth = (req: Request, res: Response, next: NextFunction) => {
  const validateEmail = (email: string) => {
    return email.match(
      "[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+(.[-a-zA-Z0-9~!$%^&amp;*_=+}{'?]+)*@[a-zA-Z0-9_][-a-zA-Z0-9_]*(.[-a-zA-Z0-9_]+)*.[cC][oO][mM](:[0-9]{1,5})?"
    );
  };

  switch (req.path) {
    case "/register": {
      const { first_name, last_name, email, password, confirm_password } =
        req.body;

      if (
        ![first_name, last_name, email, password, confirm_password].every(
          Boolean
        )
      ) {
        res.status(401).json({
          title: "Missing Credentials",
          message: "Please input all information needed.",
        });
        return;
      }

      if (!validateEmail(email)) {
        res.status(401).json({
          title: "Invalid Email",
          message: "Email is not available, please use a proper email account.",
        });
        return;
      }

      if (password.length < 8 || password.length > 20) {
        res.status(401).json({
          title: "Password Invalid",
          message: "Password must be at least 8 and less than 20 characters.",
        });
        return;
      }
    }

    case "/login": {
      const { email, password } = req.body;
      if (![email, password].every(Boolean)) {
        res.status(401).json({
          title: "Missing Credentials",
          message: "Please input all information needed.",
        });
        return;
      }
      if (!validateEmail(email)) {
        res.status(401).json({
          title: "Invalid Email",
          message: "Email is not available, please use a proper email account.",
        });
        return;
      }
    }
  }
  next();
};

export default validateAuth;
