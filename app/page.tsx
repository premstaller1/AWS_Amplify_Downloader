"use client";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Grid, Button, View, useTheme } from '@aws-amplify/ui-react';
import "./app.css"

Amplify.configure(outputs);

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage-content">
      <h1>Welcome to My Next.js App</h1>
      <p>This is the homepage!</p>
      </div>
    </div>
  );
}