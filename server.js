
const express = require('express');

const app = express();

// Serve static files from the public folder
app.use(express.static('public'));

// Cloud service catalog
const services = [
    {
        serviceId: 1,
        serviceName: "Amazon EC2",
        category: "IaaS",
        pricingModel: "Pay-as-you-go"
    },
    {
        serviceId: 2,
        serviceName: "AWS Lambda",
        category: "PaaS",
        pricingModel: "Pay-per-execution"
    },
    {
        serviceId: 3,
        serviceName: "Amazon S3",
        category: "IaaS",
        pricingModel: "Pay-per-storage"
    },
    {
        serviceId: 4,
        serviceName: "Google Cloud Run",
        category: "PaaS",
        pricingModel: "Pay-per-use"
    }
];

// API 1: Get cloud services
app.get('/api/services', (req, res) => {
    res.json(services);
});

// API 2: Get system status
app.get('/api/status', (req, res) => {
    res.json({
        status: "Operational",
        developer: "Dhrisya Boban",
        environment: "Cloud PaaS"
    });
});

// Port configuration
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
