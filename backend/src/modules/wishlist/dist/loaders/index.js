"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleDefinition = exports.loaders = exports.models = exports.service = void 0;
const wishlist_1 = require("../models/wishlist");
const wishlist_item_1 = require("../models/wishlist-item");
const wishlist_2 = __importDefault(require("../services/wishlist"));
exports.service = wishlist_2.default;
exports.models = [wishlist_1.Wishlist, wishlist_item_1.WishlistItem];
exports.loaders = [
    async (options) => {
        // Any initialization logic can go here
    }
];
exports.moduleDefinition = {
    service: exports.service,
    models: exports.models,
    loaders: exports.loaders
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9sb2FkZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBLGlEQUE2QztBQUM3QywyREFBc0Q7QUFDdEQsb0VBQWtEO0FBRXJDLFFBQUEsT0FBTyxHQUFHLGtCQUFlLENBQUE7QUFDekIsUUFBQSxNQUFNLEdBQUcsQ0FBQyxtQkFBUSxFQUFFLDRCQUFZLENBQUMsQ0FBQTtBQUVqQyxRQUFBLE9BQU8sR0FBRztJQUNyQixLQUFLLEVBQUUsT0FBdUMsRUFBaUIsRUFBRTtRQUMvRCx1Q0FBdUM7SUFDekMsQ0FBQztDQUNnQixDQUFBO0FBRU4sUUFBQSxnQkFBZ0IsR0FBa0I7SUFDN0MsT0FBTyxFQUFQLGVBQU87SUFDUCxNQUFNLEVBQU4sY0FBTTtJQUNOLE9BQU8sRUFBUCxlQUFPO0NBQ1IsQ0FBQSJ9