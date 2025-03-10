const User = require('../models/User');

exports.getUserDetails = async (req, res) => {
  try {
    const { uniqueid } = req.params;
    if (!uniqueid) {
      return res.status(400).json({ success: false, error: "Missing uniqueid in URL" });
    }

    const user = await User.findOne({ uniqueid });

    res.render('detail', { user });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};
