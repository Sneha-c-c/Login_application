export function validateLoginBody(req, res, next) {
  const { email, password } = req.body || {};

  const errors = [];

  if (!email || typeof email !== "string") errors.push("Email is required.");
  else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) errors.push("Email format is invalid.");
  }

  if (!password || typeof password !== "string") errors.push("Password is required.");

  if (errors.length) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors,
    });
  }

  next();
}
