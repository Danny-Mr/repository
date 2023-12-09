class AuthenticationService {
  static authenticate(username, password) {
    const authentication = { isAuthenticated: false };

    if (username==="admin" && password ==="password") {
    return authentication.isAuthenticated = true
  }

  return authentication;
  }
}

module.exports = AuthenticationService;
