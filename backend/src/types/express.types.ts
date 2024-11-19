import { NextFunction, Request, Response } from "express";

declare module "express" {
  interface Request {
    user?: string;
  }
  interface Response {
    user?: string;
  }
}
