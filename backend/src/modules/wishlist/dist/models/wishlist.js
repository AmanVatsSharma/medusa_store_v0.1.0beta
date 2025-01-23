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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wishlist = void 0;
const core_1 = require("@mikro-orm/core");
const medusa_1 = require("@medusajs/medusa");
const utils_1 = require("@medusajs/medusa/dist/utils");
const medusa_2 = require("@medusajs/medusa");
const wishlist_item_1 = require("./wishlist-item");
let Wishlist = class Wishlist extends medusa_1.BaseEntity {
    async beforeCreate() {
        this.id = (0, utils_1.generateEntityId)(this.id, "wish");
        if (!this.share_token) {
            this.share_token = (0, utils_1.generateEntityId)(undefined, "share");
        }
    }
};
exports.Wishlist = Wishlist;
__decorate([
    (0, core_1.PrimaryKey)({ type: "string" }),
    __metadata("design:type", String)
], Wishlist.prototype, "id", void 0);
__decorate([
    (0, core_1.Property)({ type: "string", nullable: true }),
    __metadata("design:type", String)
], Wishlist.prototype, "name", void 0);
__decorate([
    (0, core_1.Property)({ type: "boolean", default: false }),
    __metadata("design:type", Boolean)
], Wishlist.prototype, "is_public", void 0);
__decorate([
    (0, core_1.Property)({ type: "string", nullable: true }),
    __metadata("design:type", String)
], Wishlist.prototype, "share_token", void 0);
__decorate([
    (0, core_1.Index)(),
    (0, core_1.Property)({ type: "string" }),
    __metadata("design:type", String)
], Wishlist.prototype, "customer_id", void 0);
__decorate([
    (0, core_1.ManyToOne)(() => medusa_2.Customer),
    __metadata("design:type", typeof (_a = typeof medusa_2.Customer !== "undefined" && medusa_2.Customer) === "function" ? _a : Object)
], Wishlist.prototype, "customer", void 0);
__decorate([
    (0, core_1.OneToMany)(() => wishlist_item_1.WishlistItem, (item) => item.wishlist),
    __metadata("design:type", Array)
], Wishlist.prototype, "items", void 0);
__decorate([
    (0, core_1.BeforeCreate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], Wishlist.prototype, "beforeCreate", null);
exports.Wishlist = Wishlist = __decorate([
    (0, core_1.Entity)()
], Wishlist);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaGxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbHMvd2lzaGxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDBDQVF3QjtBQUN4Qiw2Q0FBNkM7QUFDN0MsdURBQThEO0FBQzlELDZDQUEyQztBQUMzQyxtREFBOEM7QUFHdkMsSUFBTSxRQUFRLEdBQWQsTUFBTSxRQUFTLFNBQVEsbUJBQVU7SUF3QnhCLEFBQU4sS0FBSyxDQUFDLFlBQVk7UUFDeEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFBLHdCQUFnQixFQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUE7UUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUEsd0JBQWdCLEVBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFBO1FBQ3pELENBQUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQTlCWSw0QkFBUTtBQUVuQjtJQURDLElBQUEsaUJBQVUsRUFBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQzs7b0NBQ3JCO0FBR1Y7SUFEQyxJQUFBLGVBQVEsRUFBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDOztzQ0FDaEM7QUFHYjtJQURDLElBQUEsZUFBUSxFQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUM7OzJDQUM1QjtBQUdsQjtJQURDLElBQUEsZUFBUSxFQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7OzZDQUN6QjtBQUlwQjtJQUZDLElBQUEsWUFBSyxHQUFFO0lBQ1AsSUFBQSxlQUFRLEVBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7OzZDQUNWO0FBR25CO0lBREMsSUFBQSxnQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLGlCQUFRLENBQUM7a0RBQ2hCLGlCQUFRLG9CQUFSLGlCQUFROzBDQUFBO0FBR2xCO0lBREMsSUFBQSxnQkFBUyxFQUFDLEdBQUcsRUFBRSxDQUFDLDRCQUFZLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7O3VDQUNsQztBQUdQO0lBRGIsSUFBQSxtQkFBWSxHQUFFOzs7OzRDQU1kO21CQTdCVSxRQUFRO0lBRHBCLElBQUEsYUFBTSxHQUFFO0dBQ0ksUUFBUSxDQThCcEIifQ==