import React from 'react'
import { cookies } from "next/headers";
import { genSalt, hash, compare } from "bcryptjs";
import { prisma } from "@/db";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

export const COOKIE_EXPIRATION_TIME = 1000 * 60 * 60 * 24 * 5; // 5 DAYS


const authenticateUser = async (data: FormData) => {
    "use server";
    const email = data.get("email")?.valueOf();
    const password = data.get("password")?.valueOf();

    if (typeof email !== "string" || typeof password !== "string")
        throw new Error("values provided are not valid");

    const user = await prisma.user.findFirst({
        where: { email },
    });

    if (!user && password.length > 6) {
        const saltRounds = 10;
        const salt = await genSalt(saltRounds);
        const hashedPassword = await hash(password, salt);
        await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        });
        cookies().set({
            name: "jwt",
            value: jwt.sign(email, process.env.JWT_SECRET!),
            expires: new Date(Date.now() + COOKIE_EXPIRATION_TIME),
            path: "/",
            httpOnly: process.env.NODE_ENV === "production",
        });

        return redirect("/profile");
    }

    if (user && password.length > 6) {
        const passwordMatch = await compare(password, user.password);
        if (passwordMatch) {
            cookies().set({
                name: "jwt",
                value: jwt.sign(email, process.env.JWT_SECRET!),
                expires: new Date(Date.now() + COOKIE_EXPIRATION_TIME),
                path: "/",
                httpOnly: process.env.NODE_ENV === "production",
            });
            return redirect("/dashboard");
        }

        // throw new Error("password not match, did you forgot it?");
    }

    // throw new Error("email or password is invalid");
};

const Auth = () => {


    return (
        <form action={authenticateUser} className='max-w-md mx-auto mt-8'>
            <div className='grid'>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className='border-slate-500 border-2 py-1 px-2 rounded-md mt-2' />
            </div>
            <div className='grid mt-3'>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" className='border-slate-500 border-2 py-1 px-2 rounded-md mt-2' />
            </div>
            <button className='bg-slate-500 text-slate-50 w-full rounded-md py-2 mt-3'>continue</button>
        </form>
    )
}

export default Auth
