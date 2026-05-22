(function () {
  const AUTH_KEY = "gaotong_demo_auth";
  const USER_KEY = "gaotong_demo_user";
  const LOGIN_PAGE = "/login/";
  const LOGIN_USERS = [
    { username: "jsc", password: "83170510" },
    { username: "wl", password: "police2006" },
    { username: "jjc", password: "rescue2000" },
    { username: "gtzf", password: "zf123" },
    { username: "admin", password: "admin" }
  ];

  const storage = (() => {
    try {
      const testKey = "__gaotong_storage_test__";
      window.localStorage.setItem(testKey, "1");
      window.localStorage.removeItem(testKey);
      return window.localStorage;
    } catch (error) {
      return window.sessionStorage;
    }
  })();

  function goToPage(page) {
    window.location.href = new URL(page, window.location.href).href;
  }

  function getUserTarget() {
    return "/";
  }

  function findUser(username, password) {
    return (
      LOGIN_USERS.find(
        (user) => user.username === username && user.password === password
      ) || null
    );
  }

  function signIn(user) {
    storage.setItem(AUTH_KEY, "ok");
    storage.setItem(USER_KEY, user.username);
  }

  function signOut() {
    storage.removeItem(AUTH_KEY);
    storage.removeItem(USER_KEY);
  }

  function getCurrentUser() {
    return storage.getItem(USER_KEY) || "";
  }

  window.GaotongAuth = Object.freeze({
    AUTH_KEY,
    USER_KEY,
    LOGIN_PAGE,
    LOGIN_USERS,
    storage,
    goToPage,
    getUserTarget,
    findUser,
    signIn,
    signOut,
    getCurrentUser
  });
})();
