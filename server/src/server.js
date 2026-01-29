import app from "./app.js";
import { env } from "./config/environment.js";

app.listen(env.PORT, () => {
  console.log(`Backend running on http://localhost:${env.PORT}`);
});
