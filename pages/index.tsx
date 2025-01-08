import { withAuthenticator } from "@aws-amplify/ui-react";
import { useState } from "react";

function Home() {
  const [instagramUrl, setInstagramUrl] = useState("");
  const [downloadMessage, setDownloadMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ instagramUrl }),
      });

      const result = await response.json();
      if (response.ok) {
        setDownloadMessage(`Image downloaded successfully!`);
      } else {
        setDownloadMessage(`Error: ${result.error}`);
      }
    } catch (error) {
      setDownloadMessage("Error downloading image.");
    }
  };

  return (
    <div>
      <h1>Instagram Image Downloader</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={instagramUrl}
          onChange={(e) => setInstagramUrl(e.target.value)}
          placeholder="Enter Instagram Post URL"
        />
        <button type="submit">Download Image</button>
      </form>
      <p>{downloadMessage}</p>
    </div>
  );
}

export default withAuthenticator(Home);
