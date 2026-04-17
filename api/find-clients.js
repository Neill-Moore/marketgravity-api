module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { service } = req.body || {};

  res.status(200).json({
  results: [
    {
      name: "Luxury Wedding Planner Ltd",
      location: "London",
      reason: "Works with high-end weddings and may need photographers",
      contact: "info@luxweddings.com"
    },
    {
      name: "Elite Events Co",
      location: "Manchester",
      reason: "Organises premium events and weddings",
      contact: "contact@eliteevents.co.uk"
    }
  ]
});
