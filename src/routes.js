const express = require("express");
const {
  getTrips,
  getTripById,
  addTrip,
  updateTrip,
  deleteTrip,
} = require("./controller/trip");

const router = express.Router();

router.get("/trips", getTrips);
// lanjutkan untuk detail, add, dan delete
// Get single trip by ID (Detail Page)
router.get("/trips/:id", getTripById);

// Add a new trip (Add-Trip Page)
router.post("/trips", addTrip);

// Update a trip (Edit Page - optional)
router.put("/trips/:id", updateTrip);

// Delete a trip (optional)
router.delete("/trips/:id", deleteTrip);

module.exports = router;
