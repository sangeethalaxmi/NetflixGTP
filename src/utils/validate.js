export const validateForm = (name = null, email, password) => {
  const isValidMail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isValidPassword =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  if (!isValidMail) {
    return "Email is not valid";
  }
  if (!isValidPassword) {
    return "Password is not valid";
  }
  const isNameValid = /^[A-Za-z\s]+$/.test(name);
  if (!isNameValid) return "name is not valid";
  return null;
};
