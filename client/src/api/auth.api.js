import { postJson } from "./http.js";

export function loginApi({ email, password }) {
  return postJson("/api/login", { email, password });
}
