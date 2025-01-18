"use client";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Grid, Button, View, useTheme } from '@aws-amplify/ui-react';
import "./app.css"

Amplify.configure(outputs);

export default function App() {
  return (
    <div>
    </div>
  );
}