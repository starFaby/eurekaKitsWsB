"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ControllerIndex {
    index(req, res) {
        res.json({ Manager: 'Roberto Brito' });
    }
}
const controllerIndex = new ControllerIndex();
exports.default = controllerIndex;
