"use client";

import Link from "next/link";

type ErrorProps = {
    error: Error;
    reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
    return <div className="flex justify-center flex-col max-w-md mx-auto mt-12">
        <h1>{error.message}</h1>
        <button
            type="button"
            onClick={() => reset()}
            className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring cursor-pointer"
        >
            Try Again
        </button>
    </div>
}
