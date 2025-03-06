// validate email format
const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

// validate password 
const isValidPassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return hasUppercase && hasNumber && hasSpecialChar && password.length >= 6;
};

// Signup validation
export const validateSignup = (data) => {
    const errors = {};

    if (!data.name || data.name.length < 3) {
        errors.name = 'Name must be at least 3 characters long.';
    }
    if (!data.email || !isValidEmail(data.email)) {
        errors.email = 'Please enter a valid email address.';
    }
    if (!data.password || !isValidPassword(data.password)) {
        errors.password = 'Password must be at least 6 characters long, and include one uppercase letter, one number, and one special character.';
    }

    return Object.keys(errors).length === 0 ? null : errors;
};

// Login validation
export const validateLogin = (data) => {
    const errors = {};

    if (!data.email || !isValidEmail(data.email)) {
        errors.email = 'Please enter a valid email address.';
    }
    if (!data.password || data.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long.';
    }

    return Object.keys(errors).length === 0 ? null : errors;
};


