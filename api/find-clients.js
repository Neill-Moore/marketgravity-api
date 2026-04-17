module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const service =
    (req.query && req.query.service) ||
    "unknown service";

  res.status(200).json({
    results: [
      {
        name: "Luxury Wedding Planner Ltd",
        location: "London",
        reason: `Works with high-end weddings and may need ${service}`,
        contact: "info@luxweddings.com",
      },
      {
        name: "Elite Events Co",
        location: "Manchester",
        reason: `Organises premium events and could need ${service}`,
        contact: "contact@eliteevents.co.uk",
      },
    ],
  });
};
