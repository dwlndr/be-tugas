// Data dummy (in-memory)
const TRIPS = [
  {
    id: 1,
    title: "6D/4N Fun Tassie Vacation + Sydney",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
    image:
      "https://res.cloudinary.com/dmegegwqb/image/upload/v1638670749/trip-default-dewetour/sydney_p4d1w2.jpg",
    price: 1200,
    duration: "6D/4N",
    location: "Sydney, Australia",
  },
];

// Get all trips
exports.getTrips = async (req, res) => {
  try {
    res.status(200).send({
      status: "success",
      data: TRIPS,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

// Get trip by ID
exports.getTripById = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const trip = TRIPS.find((t) => t.id === id);

    if (!trip) {
      return res.status(404).send({
        status: "failed",
        message: "Trip not found",
      });
    }

    res.status(200).send({
      status: "success",
      data: trip,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

// Add a new trip
exports.addTrip = async (req, res) => {
  try {
    const newTrip = {
      id: Date.now(),
      ...req.body,
    };
    TRIPS.push(newTrip);

    res.status(201).send({
      status: "success",
      data: newTrip,
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

// Update a trip
exports.updateTrip = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = TRIPS.findIndex((t) => t.id === id);

    if (index === -1) {
      return res.status(404).send({
        status: "failed",
        message: "Trip not found",
      });
    }

    TRIPS[index] = { ...TRIPS[index], ...req.body };

    res.status(200).send({
      status: "success",
      data: TRIPS[index],
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};

// Delete a trip
exports.deleteTrip = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const index = TRIPS.findIndex((t) => t.id === id);

    if (index === -1) {
      return res.status(404).send({
        status: "failed",
        message: "Trip not found",
      });
    }

    TRIPS.splice(index, 1);
    res.status(204).send();
  } catch (error) {
    res.status(500).send({
      status: "failed",
      message: "Internal Server Error",
    });
  }
};
