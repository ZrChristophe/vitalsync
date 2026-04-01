const express = require("express");
const app = express();

// Route /health fusionnée des deux branches
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Feature endpoint + Update health merged",
    timestamp: new Date()
  });
});

// Route /api/activities inchangée
app.get("/api/activities", (req, res) => {
  res.json([]);
});

// Démarrage du serveur
app.listen(3000, () => console.log("VitalSync API on :3000"));