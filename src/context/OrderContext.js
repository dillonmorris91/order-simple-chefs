import React, { useState, createContext } from "react"
import menu from "../data/menu"

export const OrderContext = createContext({})
export const defaultOrderState = menu.meals

const OrderProvider = ({ children }) => {
  const [meals, setMeals] = useState(defaultOrderState)
  const [subTotal, setSubTotal] = useState(0)
  const [mealCount, setMealCount] = useState(0)

  return (
    <OrderContext.Provider
      value={{
        meals,
        setMeals,
        subTotal,
        setSubTotal,
        mealCount,
        setMealCount,
      }}
    >
      {children}
    </OrderContext.Provider>
  )
}

export default OrderProvider
