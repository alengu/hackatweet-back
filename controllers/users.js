const { userSignup, userSignin } = require("../repository/users");

const signup = async (req, res, next) => {
  try {
    const newUser = await userSignup(
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.password
    );
    res.json(newUser);
  } catch (exception) {
    console.log(exception);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const signin = async (req, res, next) => {
  try {
    const currentUser = await userSignin(req.body.email, req.body.password);
    res.json(currentUser);
  } catch (exception) {
    console.log(exception);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { signup, signin };
