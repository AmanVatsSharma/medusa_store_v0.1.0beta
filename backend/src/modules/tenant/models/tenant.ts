import { model } from "@medusajs/framework/utils"

const Tenant = model.define("tenant", {
  id: model.id().primaryKey(),
  name: model.text(),
  handle: model.text().unique(),
  status: model.enum(["active", "inactive", "pending"]).default("pending"),
  
  settings: model.json().default({
    storeConfigurations: {
      currency: "USD",
      language: "en",
      timezone: "UTC",
      taxSettings: {
        enableTaxes: true,
        taxRates: [
          {
            name: "Standard Tax",
            rate: 0.07,
            region: "US",
          },
        ],
      },
      shippingSettings: {
        carriers: ["UPS", "FedEx", "DHL"],
        defaultCarrier: "UPS",
        shippingZones: [
          {
            name: "Domestic",
            regions: ["US"],
            rates: [
              { name: "Standard Shipping", cost: 5.99, deliveryTime: "3-5 business days" },
              { name: "Express Shipping", cost: 9.99, deliveryTime: "1-2 business days" },
            ],
          },
          {
            name: "International",
            regions: ["CA", "MX"],
            rates: [
              { name: "Standard International", cost: 15.99, deliveryTime: "7-10 business days" },
            ],
          },
        ],
      },
    },
    brandingSettings: {
      logoUrl: "/assets/default-logo.png",
      faviconUrl: "/assets/default-favicon.ico",
      theme: {
        primaryColor: "#3498db",
        secondaryColor: "#2ecc71",
        backgroundColor: "#ffffff",
        fontFamily: "Arial, sans-serif",
      },
      storefront: {
        headerText: "Welcome to Your Store!",
        footerText: "© 2024 Your Store. All rights reserved.",
      },
    },
    domainSettings: {
      primaryDomain: "yourstore.com",
      sslEnabled: true,
      customDomains: [],
    },
    subscriptionPlanDetails: {
      currentPlan: "free",
      availablePlans: [
        {
          id: "free",
          name: "Free",
          features: ["Basic Features"],
          price: 0,
        },
        {
          id: "pro",
          name: "Pro",
          features: ["Advanced Features", "Priority Support"],
          price: 29.99,
        },
        {
          id: "enterprise",
          name: "Enterprise",
          features: ["All Features", "Dedicated Support", "Custom Integrations"],
          price: 99.99,
        },
      ],
      renewalCycle: "monthly",
    },
    paymentSettings: {
      providers: ["Stripe", "PayPal"],
      defaultProvider: "Stripe",
      currency: "USD",
      paymentMethods: {
        creditCards: true,
        paypal: true,
        bankTransfers: false,
      },
      invoicing: {
        automatedInvoices: true,
        invoiceTemplate: "default",
      },
    },
  }),
  
  metadata: model.json().default({}),
  
  domain: model.text().nullable(), // For custom domains
  store_name: model.text().nullable(),
  store_description: model.text().nullable(),
  store_logo: model.text().nullable(),
  store_favicon: model.text().nullable(),
  store_theme: model.text().nullable(),
  plan_type: model.enum(["free", "pro", "enterprise"]).default("free"),
  plan_id: model.text().nullable(), // For plan id
  company_details: model.json().default({
    name: "",
    address: "",
    contact_email: "",
    contact_phone: "",
  }), // Add company information
  billing_details: model.json().default({
    billing_address: "",
    payment_terms: "Net 30",
    taxId: "",
  }), // Add billing information
})

export default Tenant 