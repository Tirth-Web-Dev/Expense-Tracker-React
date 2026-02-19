import { createContext, useContext, useState } from "react";

const ExpenseContext = createContext();

export function ExpenseProvider({children}){
     const [expenses, setExpenses] = useState([])
     const [selectedCategory, setSelectedCategory] = useState("All")

    const totalAmount = expenses.reduce(
  (acc, curr) => acc + (curr.amount || 0),
  0
);

const filteredExpenses = selectedCategory === "All" ? expenses : expenses.filter((expense) => expense.category === selectedCategory)
return(
    
     <ExpenseContext.Provider value={{expenses, setExpenses, totalAmount, filteredExpenses, selectedCategory, setSelectedCategory}}>
        {children}
        </ExpenseContext.Provider>
)

}

export function useExpenses(){
    return useContext(ExpenseContext)
}