"use client";

import { Button } from "@/components/ui/button";
import { AlertTriangleIcon } from "lucide-react";
import Link from "next/link";

const ErrorPage = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="bg-rose-100 p-4 rounded-full shadow-md">
            <AlertTriangleIcon className="size-10 text-rose-600" />
          </div>
        </div>

        {/* Heading */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">
            Something went wrong
          </h2>
          <p className="text-sm text-gray-600 mt-2">{error.message}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <Button onClick={reset} className="font-medium px-6">
            Try again
          </Button>
          <Button asChild variant="ghost" className="font-medium px-6">
            <Link href="/">Go back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
