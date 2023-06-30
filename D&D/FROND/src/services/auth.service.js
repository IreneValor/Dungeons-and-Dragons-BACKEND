import apiInstance from "./apiInstance";

class AuthService {
  constructor() {
    this.api = apiInstance;
  }

  signup(data) {
    return this.api.post("/auth/signup", data);
  }

  login(data) {
    return this.api.post("/auth/login", data);
  }

  verify(token) {
    // Agrega el token como parámetro en la solicitud GET
    return this.api.get(`/auth/verify`, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

const authService = new AuthService();

export default authService;
