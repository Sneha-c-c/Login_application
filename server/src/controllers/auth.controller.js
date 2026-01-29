const SAMPLE_USERS = {
  email: "test@example.com",
  password: "Password@123",
};

export function login(req, res) {
  const { email, password } = req.body;

  const isMatch =
    email.toLowerCase() === SAMPLE_USERS.email.toLowerCase() &&
    password === SAMPLE_USERS.password;

  if (!isMatch) {
    return res.status(401).json({
      success: false,
      message: "Invalid email or password",
    });
  }

  return res.json({
    success: true,
    message: "Login successful",
    user: { email: SAMPLE_USERS.email },
  });
}
