import jwt from "jsonwebtoken";

const generateToken = (userId: string) => {
  const payload = {
    user: userId,
    expiresIn: 60 * 60 * 6,
  };

  return jwt.sign(payload, process.env.DATABASE_URL!);
};

export default generateToken;
