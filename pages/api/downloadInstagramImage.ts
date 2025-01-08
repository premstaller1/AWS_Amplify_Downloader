// /pages/api/downloadInstagramImage.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';  // Used to execute shell commands

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'Instagram URL is required' });
    }

    try {
      // Call your Python script using exec
      exec(`python3 /path/to/your/python_script.py ${url}`, (error, stdout, stderr) => {
        if (error) {
          return res.status(500).json({ error: `Error executing Python script: ${error.message}` });
        }

        if (stderr) {
          return res.status(500).json({ error: `Python script error: ${stderr}` });
        }

        // Return the success response with the output of your Python script
        return res.status(200).json({ message: 'Image downloaded successfully', data: stdout });
      });
    } catch (error) {
      return res.status(500).json({ error: `Internal server error: ${error.message}` });
    }
  } else {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
}
