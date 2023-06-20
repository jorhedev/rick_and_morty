// validation.js

export function validateEmail(email) {
    // Validar que el nombre de usuario no esté vacío
    if (!email) {
    }
  
    // Validar que el nombre de usuario no tenga más de 35 caracteres
    if (email.length > 35) {
      return "No puede ser mayor a 35 caracteres.";
    }
  
    // Validar que el nombre de usuario sea un email utilizando una expresión regular
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Ingrese un email válido.";
    }
  
    // Si pasa todas las validaciones, retorna null para indicar que el email es válido
    return null;
  }

  export function validatePassword(password) {
    // Validar que la contraseña no esté vacía
    if (!password) {
      return "La contraseña no puede estar vacía.";
    }
  
    // Validar que la contraseña tenga una longitud entre 6 y 10 caracteres
    if (password.length < 6 || password.length > 10) {
      return "La contraseña debe tener entre 6 y 10 caracteres.";
    }
  
    // Validar que la contraseña contenga al menos un número utilizando una expresión regular
    const numberRegex = /\d/;
    if (!numberRegex.test(password)) {
      return "La contraseña debe contener al menos un número.";
    }
  
    // Si pasa todas las validaciones, retorna null para indicar que la contraseña es válida
    return null;
  }