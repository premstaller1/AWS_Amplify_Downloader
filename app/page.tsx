"use client";

import { useState } from "react";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Button } from "@/components/ui/button";

Amplify.configure(outputs);

export default function Page() {


  return (
    <div className="text-center max-w-2xl mx-auto px-4">
      <h1 className="mb-6 text-4xl font-bold">Welcome to Our Website</h1>
      <p className="mb-8 text-lg text-gray-600">
        This is a sample page using Next.js, Tailwind CSS, and shadcn/ui components.
        Our content is now beautifully centered for better focus and readability.
      </p>
      <input
        type="text"
        placeholder="Enter Instagram Post URL"
        className="border border-gray-300 p-2 mb-4 w-full max-w-md mx-auto"
      />
      <Button size="lg" variant="default">
        Download Instagram Image
      </Button>
      <p className="mt-4 text-lg"></p>
    </div>
  );
}
