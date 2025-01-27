"use client";

import { useState } from "react";
import { Amplify, API } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Button } from "@/components/ui/button";

Amplify.configure(outputs);

export default function Page() {
  const [url, setUrl] = useState("");
  const [imageUrls, setImageUrls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await API.post("instagramimagedownloader", "/InstaLoader", {
        body: { url },
      });

      setImageUrls(response.image_urls);
    } catch (error) {
      console.error("Error downloading images:", error);
      setError("Failed to download images.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-center max-w-2xl mx-auto px-4">
      <h1 className="mb-6 text-4xl font-bold">Welcome to Our Website</h1>
      <p className="mb-8 text-lg text-gray-600">
        This is a sample page using Next.js, Tailwind CSS, and shadcn/ui
        components. Our content is now beautifully centered for better focus and
        readability.
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Instagram Post URL"
          className="border border-gray-300 p-2 mb-4 w-full max-w-md mx-auto"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button type="submit" size="lg" variant="default" disabled={isLoading}>
          {isLoading ? "Downloading..." : "Download Instagram Image"}
        </Button>
      </form>
      {error && <div className="text-red-500 mt-4">{error}</div>}
      {imageUrls.length > 0 && (
        <div className="mt-4">
          {imageUrls.map((imageUrl, index) => (
            <div key={index}>
              <img src={imageUrl} alt={`Instagram image ${index + 1}`} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}