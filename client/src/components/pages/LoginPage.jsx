import LoginForm from "./../LoginForm/LoginForm"

export default function LoginPage() {
  return (
    <div style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 16 }}>
      <div style={{ width: "100%", maxWidth: 420 }}>
        <LoginForm />
      </div>
    </div>
  );
}