"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var express_1 = __importDefault(require("express"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var AppError_1 = __importDefault(require("./errors/AppError"));
var routes_1 = __importDefault(require("./routes/routes"));
require("express-async-errors");
var app = express_1.default();
app.use(morgan_1.default('dev'));
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use(function (err, request, response, _) {
    if (err instanceof AppError_1.default) {
        return response.status(err.statusCode).json({
            status: 'error',
            message: err.message,
        });
    }
    console.error(err);
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
});
app.listen(process.env.PORT || 3333, function () {
    console.log('Listening');
});
