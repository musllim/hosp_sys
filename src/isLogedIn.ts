import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { prisma } from "./db";

const isLogedIn = async () => {
  const token = cookies().get("jwt")?.value;
  if (!token) return false;

  const email = jwt.verify(token, process.env.JWT_SECRET!);
  if (typeof email !== "string") return false;

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) return false;
  return user;
};

export default isLogedIn;
