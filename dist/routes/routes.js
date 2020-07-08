"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_1 = __importDefault(require("../middlewares/auth"));
var MessageController_1 = __importDefault(require("../controllers/MessageController"));
var routes = express_1.default.Router();
var messageController = new MessageController_1.default();
routes.post('/', auth_1.default, messageController.receiveMessage);
exports.default = routes;
