"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var AppError_1 = __importDefault(require("../errors/AppError"));
function ensureAuthenticated(request, response, next) {
    var authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new AppError_1.default('Token is missing', 401);
    }
    if (authHeader !== process.env.SECRET_KEY) {
        throw new AppError_1.default('Not allowed', 401);
    }
    return next();
}
exports.default = ensureAuthenticated;
