import { 
    createWorkflow, 
    WorkflowResponse,
    createStep,
    StepResponse,
  } from "@medusajs/framework/workflows-sdk"
  import { Modules } from "@medusajs/framework/utils"
  
  const createStoreStep = createStep(
    "create-store",
    async ({}, { container }) => {
      const storeModuleService = container.resolve(Modules.STORE)
  
      const store = await storeModuleService.createStores({
        name: "My Store",
        supported_currencies: [{
          currency_code: "usd",
          is_default: true,
        }],
      })
  
      return new StepResponse({ store }, store.id)
    },
    async (storeId, { container }) => {
      if(!storeId) {
        return
      }
      const storeModuleService = container.resolve(Modules.STORE)
      
      await storeModuleService.deleteStores([storeId])
    }
  )
  
  export const createStoreWorkflow = createWorkflow(
    "create-store",
    () => {
      const { store } = createStoreStep()
  
      return new WorkflowResponse({ store })
    }
  )