"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes = express_1.default.Router();
routes.post('/', function (req, res) {
    var data = req.body;
    return res.json({ data: [
            {
                message: 'received'
            }
        ]
    });
});
exports.default = routes;
