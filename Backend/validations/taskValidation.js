// validate task title
const isValidTitle = (title) => {
    return title && title.length >= 3;
};

// validate task description
const isValidDescription = (description) => {
    return description && description.length >= 10;
};

// Task validation for create and update
export const validateTask = (data) => {
    const errors = {};

    if (!data.title || !isValidTitle(data.title)) {
        errors.title = 'Title must be at least 3 characters long.';
    }
    if (!data.description || !isValidDescription(data.description)) {
        errors.description = 'Description must be at least 10 characters long.';
    }

    return Object.keys(errors).length === 0 ? null : errors;
};

export const validteUpdateTask = (data) => {
    const errors = {};
    if (data.title && !isValidTitle(data.title)) {
        errors.title = 'Title must be at least 3 characters long.';
    }
    if (data.description && !isValidDescription(data.description)) {
        errors.description = 'Description must be at least 10 characters long.';
    }
}


