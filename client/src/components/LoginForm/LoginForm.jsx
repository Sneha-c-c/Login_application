import { useState } from "react";
import { useForm } from "react-hook-form";
import { loginApi } from "../../api/auth.api";
import "./LoginForm.css";

export default function LoginForm() {
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onTouched" });

  const onSubmit = async (data) => {
    setMessage("");
    setIsSuccess(false);

    try {
      const res = await loginApi(data);
      setMessage(res.message || "Login successful");
      setIsSuccess(true);
    } catch (err) {
      setMessage(err.message || "Login failed");
      setIsSuccess(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="card" noValidate>
      <h2 className="cardTitle">Login</h2>

        <label className="field">
        <span>
            Email <span className="required">*</span>
        </span>
        <input
            className={`input ${errors.email ? "inputError" : ""}`}
            placeholder="Enter email"
            type="email"
            {...register("email", {
            required: "Email is required",
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email",
            },
            })}
        />
        {errors.email && <p className="errorText">{errors.email.message}</p>}
        </label>

        <label className="field">
        <span>
            Password <span className="required">*</span>
        </span>
        <input
            className={`input ${errors.password ? "inputError" : ""}`}
            placeholder="Enter password"
            type="password"
            {...register("password", {
            required: "Password is required",
            })}
        />
        {errors.password && <p className="errorText">{errors.password.message}</p>}
        </label>

      <button className="button" disabled={isSubmitting} type="submit">
        {isSubmitting ? "Logging in..." : "Login"}
      </button>

      {message && (
        <p className={isSuccess ? "successText" : "errorBox"}>
          {message}
        </p>
      )}
    </form>
  );
}
