const express = require("express");
const productRoutes = require("./routes/productRoutes");
const path = require("path");

const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "../public")));

// API routes
app.use("/api/products", productRoutes);

// Home route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

