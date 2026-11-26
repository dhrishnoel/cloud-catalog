# Enterprise Cloud Service Catalog

A Node.js and Express application providing a cloud service catalog and system status APIs.

## Features
- Landing page displaying student details.
- `/api/services` returns cloud service information.
- `/api/status` provides system health metadata.
- Local and cloud-compatible port configuration.

## Port Configuration: Local vs Cloud (100 words)

During local development, the application uses port 8080 as its default port when no environment variable is provided. This allows developers to access the application through http://localhost:8080 and test its routes conveniently. The code uses `process.env.PORT || 8080`, which checks whether a PORT environment variable exists before selecting the fallback value. In production, Vercel manages the deployment environment and provides the necessary platform configuration. Applications should not assume a fixed port when deployed. By reading the environment variable, the application can adapt to its runtime environment, supporting local development and cloud deployment without requiring separate port configurations.

## Technologies
- Node.js
- Express
- HTML and CSS
- Vercel
- GitHub
