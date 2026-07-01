const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email) {
  return EMAIL_PATTERN.test(email.trim());
}

export function validateSurveyForm(formData) {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = "โปรดใส่ชื่อของคุณ";
  }

  if (!formData.email.trim()) {
    errors.email = "โปรดใส่อีเมลของคุณ";
  } else if (!isValidEmail(formData.email)) {
    errors.email = "รูปแบบอีเมลไม่ถูกต้อง";
  }

  if (!formData.selectedMovie) {
    errors.selectedMovie = "กรุณาเลือกหนังที่คุณชอบ";
  }

  return errors;
}
