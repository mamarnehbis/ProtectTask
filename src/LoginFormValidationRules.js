export default function validate(values) {
  let errors = {};
  if (!values.name) {
    errors.name = 'name is required';
  }
   else if (values.name.length < 3) {
    errors.name = 'name must be 3 or more characters';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 or more characters';
  }
  return errors;
};
