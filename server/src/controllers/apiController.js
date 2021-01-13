module.exports = {
  test: async (req, res) => {
    const { data } = req.body;
    res.status(200).json({
      ok: true,
      data: data ? data : null,
    });
  },
};
