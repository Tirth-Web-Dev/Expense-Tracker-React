import React from "react";
import { useExpenses } from "@/context/ExpenseContext";
import toast from "react-hot-toast";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";

const ExpenseList = () => {
  const { filteredExpenses, setExpenses } = useExpenses();
  
  function handleDelete(id) {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
    toast.success("Expense deleted");
  }
  return (
    <Card
      className="
  relative overflow-hidden rounded-3xl
  bg-zinc-900/60 backdrop-blur-xl
  border border-zinc-800/60
  shadow-xl shadow-black/30
"
    >
      <CardContent className="p-2  flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold tracking-tight text-white ml-4">
            Recent Expenses
          </h2>

          <span className="text-sm text-zinc-400">
            {filteredExpenses.length} entries
          </span>
        </div>

        {/* Empty State */}
        {filteredExpenses.length === 0 && (
          <div className="text-center py-16 text-zinc-500 text-sm">
            No expenses recorded yet.
          </div>
        )}

        {/* List */}
        <motion.div layout className="flex flex-col gap-4">
          <AnimatePresence mode="popLayout">
            {filteredExpenses.map((expense) => (
              <motion.div
                key={expense.id}
                layout
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, height: 0 }}
  transition={{
    layout: { duration: 0.25, ease: "easeInOut" },
    opacity: { duration: 0.2 },
    y: { duration: 0.25, ease: "easeOut" },
    height: { duration: 0.25 }
  }}
                className="
            group
            flex items-center justify-between
            px-6 py-5
            rounded-2xl
            bg-zinc-950/70
            border border-zinc-800/60
            transition-all duration-300
            hover:border-zinc-700
            hover:bg-zinc-900/70
                     "
              >
                {/* LEFT */}
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-white tracking-tight">
                    {expense.name}
                  </p>

                  <span
                    className="
              text-xs
              px-3 py-1
              rounded-full
              bg-zinc-800/80
              text-zinc-400
              w-fit
            "
                  >
                    {expense.category}
                  </span>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-8">
                  <span className="text-lg font-semibold text-white tracking-tight">
                    ₹ {expense.amount}
                  </span>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDelete(expense.id)}
                    className="
        text-zinc-400
        hover:text-red-500
        hover:bg-red-500/10
        transition-all duration-200
      ">
                    <lord-icon
    src="https://cdn.lordicon.com/jzinekkv.json"
    trigger="hover"
    colors="primary:#e83a30,secondary:#c71f16"
    style={{width:"30px",height:"30px"}}>
</lord-icon>


                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default ExpenseList;
