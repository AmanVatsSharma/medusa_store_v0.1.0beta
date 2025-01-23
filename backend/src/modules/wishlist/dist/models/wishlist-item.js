"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistItem = void 0;
const core_1 = require("@mikro-orm/core");
const medusa_1 = require("@medusajs/medusa");
const utils_1 = require("@medusajs/medusa/dist/utils");
const medusa_2 = require("@medusajs/medusa");
const wishlist_1 = require("./wishlist");
let WishlistItem = class WishlistItem extends medusa_1.BaseEntity {
    async beforeCreate() {
        this.id = (0, utils_1.generateEntityId)(this.id, "wish_item");
    }
};
exports.WishlistItem = WishlistItem;
__decorate([
    (0, core_1.PrimaryKey)({ type: "string" }),
    __metadata("design:type", String)
], WishlistItem.prototype, "id", void 0);
__decorate([
    (0, core_1.Index)(),
    (0, core_1.Property)({ type: "string" }),
    __metadata("design:type", String)
], WishlistItem.prototype, "wishlist_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => wishlist_1.Wishlist),
    __metadata("design:type", wishlist_1.Wishlist)
], WishlistItem.prototype, "wishlist", void 0);
__decorate([
    (0, core_1.Index)(),
    (0, core_1.Property)({ type: "string" }),
    __metadata("design:type", String)
], WishlistItem.prototype, "product_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => medusa_2.Product),
    __metadata("design:type", typeof (_a = typeof medusa_2.Product !== "undefined" && medusa_2.Product) === "function" ? _a : Object)
], WishlistItem.prototype, "product", void 0);
__decorate([
    (0, core_1.Index)(),
    (0, core_1.Property)({ type: "string", nullable: true }),
    __metadata("design:type", String)
], WishlistItem.prototype, "variant_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => medusa_2.ProductVariant, { nullable: true }),
    __metadata("design:type", typeof (_b = typeof medusa_2.ProductVariant !== "undefined" && medusa_2.ProductVariant) === "function" ? _b : Object)
], WishlistItem.prototype, "variant", void 0);
__decorate([
    (0, core_1.BeforeCreate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WishlistItem.prototype, "beforeCreate", null);
exports.WishlistItem = WishlistItem = __decorate([
    (0, core_1.Entity)()
], WishlistItem);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaGxpc3QtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy93aXNobGlzdC1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FPd0I7QUFDeEIsNkNBQTZDO0FBQzdDLHVEQUE4RDtBQUM5RCw2Q0FBMEQ7QUFDMUQseUNBQXFDO0FBRzlCLElBQU0sWUFBWSxHQUFsQixNQUFNLFlBQWEsU0FBUSxtQkFBVTtJQTBCNUIsQUFBTixLQUFLLENBQUMsWUFBWTtRQUN4QixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUEsd0JBQWdCLEVBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0NBQ0YsQ0FBQTtBQTdCWSxvQ0FBWTtBQUV2QjtJQURDLElBQUEsaUJBQVUsRUFBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs7d0NBQ3JCO0FBSVY7SUFGQyxJQUFBLFlBQUssR0FBRTtJQUNQLElBQUEsZUFBUSxFQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDOztpREFDVjtBQUduQjtJQURDLElBQUEsZ0JBQVMsRUFBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBUSxDQUFDOzhCQUNoQixtQkFBUTs4Q0FBQTtBQUlsQjtJQUZDLElBQUEsWUFBSyxHQUFFO0lBQ1AsSUFBQSxlQUFRLEVBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7O2dEQUNYO0FBR2xCO0lBREMsSUFBQSxnQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLGdCQUFPLENBQUM7a0RBQ2hCLGdCQUFPLG9CQUFQLGdCQUFPOzZDQUFBO0FBSWhCO0lBRkMsSUFBQSxZQUFLLEdBQUU7SUFDUCxJQUFBLGVBQVEsRUFBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztnREFDMUI7QUFHbkI7SUFEQyxJQUFBLGdCQUFTLEVBQUMsR0FBRyxFQUFFLENBQUMsdUJBQWMsRUFBRSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQztrREFDMUMsdUJBQWMsb0JBQWQsdUJBQWM7NkNBQUE7QUFHVjtJQURiLElBQUEsbUJBQVksR0FBRTs7OztnREFHZDt1QkE1QlUsWUFBWTtJQUR4QixJQUFBLGFBQU0sR0FBRTtHQUNJLFlBQVksQ0E2QnhCIn0=