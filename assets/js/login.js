(function () {
  const auth = window.GaotongAuth;

  function byId(id) {
    return document.getElementById(id);
  }

  function initLoginPage() {
    const form = byId("loginForm");
    const usernameInput = byId("username");
    const passwordInput = byId("password");
    const errorBox = byId("loginError");

    if (!form || !usernameInput || !passwordInput || !errorBox) {
      return;
    }

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
      const matchedUser = auth.findUser(username, password);

      if (matchedUser) {
        auth.signIn(matchedUser);
        auth.goToPage(auth.getUserTarget());
        return;
      }

      errorBox.textContent = "用户名或密码错误，请检查后重新输入。";
    });
  }

  initLoginPage();
})();
