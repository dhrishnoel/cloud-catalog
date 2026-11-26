

const express = require('express');
const path = require('path');

const app = express();

// Serve files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

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

app.get('/api/services', (req, res) => {
    res.json(services);
});

app.get('/api/status', (req, res) => {
    res.json({
        status: "Operational",
        developer: "Dhrisya Boban",
        environment: "Cloud PaaS"
    });
});

const PORT = process.env.PORT || 8080;

// Start server locally
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

// Export for Vercel
module.exports = app;
