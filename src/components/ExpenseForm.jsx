import React from "react";
import { useState } from "react";
import { useExpenses } from "@/context/ExpenseContext";
import toast from "react-hot-toast";
import { Card, CardContent } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";
const ExpenseForm = () => {
  const { setExpenses } = useExpenses();
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Other");

  function addexpenses() {
    if (!name.trim() || !amount.trim()) {
      toast.error("All fields are Required");
      return;
    }
    if (isNaN(Number(amount)) || Number(amount) === 0) {
      toast.error("Please enter a valid amount");
      setAmount("");
      return;
    }
    const newExpense = {
      id: Date.now(),
      name: name,
      amount: Number(amount),
      category: category,
    };
    setExpenses((prev) => [newExpense,...prev]);
    toast.success("Expense added successfully");
    setName("");
    setAmount("");
    setCategory("Other");
  }
  return (
    <>
    <Card className="
  relative overflow-hidden rounded-3xl
  bg-zinc-900/60 backdrop-blur-xl
  border border-zinc-800/60
  shadow-xl shadow-black/30
">

  {/* subtle gradient overlay */}
  <div className="absolute inset-0 bg-linear-to-br from-indigo-500/5 via-transparent to-transparent pointer-events-none" />

  <CardContent className="relative p-10 space-y-8">

    {/* Header */}
    <div className="space-y-1">
      <h2 className="text-xl font-semibold tracking-tight text-white">
        Add Expense
      </h2>
      <p className="text-sm text-zinc-400">
        Fill in the details to record a transaction
      </p>
    </div>

    {/* Form Fields */}
    <div className="space-y-6">

      {/* Expense Name */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400">
          Expense Name
        </label>

        <Input
          type="text"
          placeholder="e.g. Grocery Shopping"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="
            h-12 rounded-xl
            mt-2
            bg-zinc-950/80
            border border-zinc-800
            text-white
            placeholder:text-zinc-500
            focus:border-indigo-500
            focus:ring-0
            transition-all duration-300
          "
        />
      </div>

      {/* Amount */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400 mb-4">
          Amount
        </label>

        <Input
          type="number"
          placeholder="₹ 0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="
            h-12 rounded-xl
            mt-2
            bg-zinc-950/80
            border border-zinc-800
            text-white
            placeholder:text-zinc-500
            focus:border-indigo-500
            focus:ring-0
            transition-all duration-300
          "
        />
      </div>

      {/* Category */}
      <div className="space-y-2">
        <label className="text-sm font-medium text-zinc-400 mb-4">
          Category
        </label>

        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger
            className="
              h-12 rounded-xl
              mt-2
              bg-zinc-950/80
              border border-zinc-800
              text-white
              focus:border-indigo-500
              focus:ring-0
              transition-all duration-300
            "
          >
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>

          <SelectContent className="
            bg-zinc-900 border border-zinc-800 text-white rounded-xl
          ">
            <SelectItem value="Food" className="focus:bg-zinc-800 focus:text-white">
              Food
            </SelectItem>
            <SelectItem value="Cloths" className="focus:bg-zinc-800 focus:text-white">
              Cloths
            </SelectItem>
            <SelectItem value="Social" className="focus:bg-zinc-800 focus:text-white">
              Social
            </SelectItem>
            <SelectItem value="Healthcare" className="focus:bg-zinc-800 focus:text-white">
              Healthcare
            </SelectItem>
            <SelectItem value="Education" className="focus:bg-zinc-800 focus:text-white">
              Education
            </SelectItem>
            <SelectItem value="Other" className="focus:bg-zinc-800 focus:text-white">
              Other
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

    </div>

    {/* Button */}
    <Button
      onClick={addexpenses}
      className="
      flex items-center gap-2
        w-full h-12 rounded-xl
        bg-linear-to-r from-indigo-600 to-purple-600
        hover:from-indigo-500 hover:to-purple-500
        text-white font-medium
        shadow-lg shadow-indigo-900/40
        transition-all duration-300
        hover:-translate-y-0.5
      "
    >
     Add Expense
<lord-icon
    src="https://cdn.lordicon.com/vjgknpfx.json"
    trigger="hover"
    colors="primary:#e5e7eb,secondary:#ffffff"
    style={{width:"25px",height:"25px"}} 
    >  
</lord-icon>

    
    </Button>

  </CardContent>
</Card>

    </>
  );
};

export default ExpenseForm;
