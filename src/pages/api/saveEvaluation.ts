// src/pages/api/saveEvaluation.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const data = req.body;
        console.log("data aagaya: ", data)
        
        // Define the path to the JSON file
        const filePath = path.join(process.cwd(), 'data', 'evaluasi-tutor.json');

        // Read the existing data from the file
        fs.readFile(filePath, 'utf8', (err, fileData) => {
            if (err) {
                console.error('Error reading file:', err);
                return res.status(500).json({ message: 'Failed to read data' });
            }

            // Parse the existing data into JSON
            let existingData = JSON.parse(fileData);
            existingData.tutors.push(data);

            // Write the updated data back to the file
            fs.writeFile(filePath, JSON.stringify(existingData, null, 2), 'utf8', (writeErr) => {
                if (writeErr) {
                    console.error('Error writing file:', writeErr);
                    return res.status(500).json({ message: 'Failed to write data' });
                }
                res.status(200).json({ message: 'Data saved successfully' });
            });
        });
    } else {
        // Only allow POST method
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}