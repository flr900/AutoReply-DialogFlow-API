"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MessageReceiverController = /** @class */ (function () {
    function MessageReceiverController() {
    }
    MessageReceiverController.prototype.receiveMessage = function (req, res) {
        var _a = req.body, senderMessage = _a.senderMessage, senderName = _a.senderName;
        var request = req.body;
        return res.json({ data: [
                {
                    message: request
                }
            ]
        });
    };
    return MessageReceiverController;
}());
exports.default = MessageReceiverController;
