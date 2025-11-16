import jwt from "jsonwebtoken";

export const generatToken = (userId, res) => {
  // create user token
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    httpOnly: true, // prevent XSS attacks: cross-sit scripting
    maxAge: 7 * 24 * 60 * 60 * 1000,
    sameSite: "strict", // CSRF attacks
    secure: process.env.NODE_ENV === "development" ? false : true,
  });
};
