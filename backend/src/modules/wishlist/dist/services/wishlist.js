"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medusa_1 = require("@medusajs/medusa");
const wishlist_1 = require("../models/wishlist");
const wishlist_item_1 = require("../models/wishlist-item");
const utils_1 = require("@medusajs/utils");
class WishlistService extends medusa_1.TransactionBaseService {
    constructor({ manager, productService, productVariantService }) {
        super(arguments[0]);
        this.manager_ = manager;
        this.productService_ = productService;
        this.productVariantService_ = productVariantService;
    }
    async retrieve(wishlistId, config) {
        const wishlistRepo = this.manager_.getRepository(wishlist_1.Wishlist);
        const wishlist = await wishlistRepo.findOne({ id: wishlistId }, config);
        if (!wishlist) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, `Wishlist with id ${wishlistId} was not found`);
        }
        return wishlist;
    }
    async retrieveByCustomer(customerId, config) {
        const wishlistRepo = this.manager_.getRepository(wishlist_1.Wishlist);
        const wishlist = await wishlistRepo.findOne({ customer_id: customerId }, config);
        if (!wishlist) {
            return await this.create({ customer_id: customerId });
        }
        return wishlist;
    }
    async create(data) {
        return await this.atomicPhase_(async (manager) => {
            const wishlistRepo = manager.getRepository(wishlist_1.Wishlist);
            const wishlist = wishlistRepo.create(data);
            await wishlistRepo.persistAndFlush(wishlist);
            return wishlist;
        });
    }
    async addItem(wishlistId, productId, variantId) {
        return await this.atomicPhase_(async (manager) => {
            const wishlist = await this.retrieve(wishlistId);
            // Verify product exists
            await this.productService_.retrieve(productId);
            // Verify variant if provided
            if (variantId) {
                await this.productVariantService_.retrieve(variantId);
            }
            const itemRepo = manager.getRepository(wishlist_item_1.WishlistItem);
            const existing = await itemRepo.findOne({
                wishlist_id: wishlistId,
                product_id: productId,
                ...(variantId && { variant_id: variantId })
            });
            if (existing) {
                return existing;
            }
            const item = itemRepo.create({
                wishlist_id: wishlist.id,
                product_id: productId,
                variant_id: variantId
            });
            await itemRepo.persistAndFlush(item);
            return item;
        });
    }
    async removeItem(wishlistId, itemId) {
        return await this.atomicPhase_(async (manager) => {
            const itemRepo = manager.getRepository(wishlist_item_1.WishlistItem);
            const item = await itemRepo.findOne({
                id: itemId,
                wishlist_id: wishlistId
            });
            if (!item) {
                return;
            }
            await itemRepo.removeAndFlush(item);
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaGxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zZXJ2aWNlcy93aXNobGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDZDQUt5QjtBQUV6QixpREFBNkM7QUFDN0MsMkRBQXNEO0FBQ3RELDJDQUE2QztBQVE3QyxNQUFNLGVBQWdCLFNBQVEsK0JBQXNCO0lBTWxELFlBQVksRUFDVixPQUFPLEVBQ1AsY0FBYyxFQUNkLHFCQUFxQixFQUNBO1FBQ3JCLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQTtRQUN2QixJQUFJLENBQUMsZUFBZSxHQUFHLGNBQWMsQ0FBQTtRQUNyQyxJQUFJLENBQUMsc0JBQXNCLEdBQUcscUJBQXFCLENBQUE7SUFDckQsQ0FBQztJQUVELEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBa0IsRUFBRSxNQUE2QjtRQUM5RCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBUSxDQUFDLENBQUE7UUFDMUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxZQUFZLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBRXZFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNkLE1BQU0sSUFBSSxtQkFBVyxDQUNuQixtQkFBVyxDQUFDLEtBQUssQ0FBQyxTQUFTLEVBQzNCLG9CQUFvQixVQUFVLGdCQUFnQixDQUMvQyxDQUFBO1FBQ0gsQ0FBQztRQUVELE9BQU8sUUFBUSxDQUFBO0lBQ2pCLENBQUM7SUFFRCxLQUFLLENBQUMsa0JBQWtCLENBQUMsVUFBa0IsRUFBRSxNQUE2QjtRQUN4RSxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBUSxDQUFDLENBQUE7UUFDMUQsTUFBTSxRQUFR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