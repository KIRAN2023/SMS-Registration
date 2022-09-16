function showPassword() {
    var pass = document.getElementsById("password")
    if (pass.type === "password") {
        pass.type = "text";
    } else {
      pass.type = "password";
    }
  }