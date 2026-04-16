module.exports = async (req, res) => {
  const { service } = req.body || {};

  res.status(200).json({
    message: `Searching for clients for: ${service}`
  });
};
