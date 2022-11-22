"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
class AppError extends Error {
    constructor(message, statusCode = 400) {
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}
exports.default = AppError;
const handleError = (error, response) => {
    const { statusCode, message } = error;
    return response.status(statusCode).json({
        status: "error",
        statusCode,
        message,
    });
};
exports.handleError = handleError;
