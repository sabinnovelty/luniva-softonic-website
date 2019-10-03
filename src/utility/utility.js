var helper = (function() {
  const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const username_regex = /^[a-zA-Z][0-9]*$/;

  function emailValidation(email) {
    if (email) {
      return email_regex.test(email);
    }
    return false;
  }

  function usernameValidation(username) {
    if (username) {
      return username_regex.test(username);
    }
    return false;
  }

  function passwordValidation(password) {
    if (password) {
    }
  }

  function validation(key, value) {
    switch (key) {
      case "email":
        return emailValidation(value);
        break;
      case "username":
        return usernameValidation(value);
      default:
    }
  }

  return {
    validation
  };
})();

export default helper;
