import React from "react";
import { useExpenses } from "@/context/ExpenseContext";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./ui/select";


const ExpenseFilter = () => {
  const { selectedCategory, setSelectedCategory } = useExpenses();
  return (
    <div>
     <Select value={selectedCategory} onValueChange={setSelectedCategory}>
   
  <SelectTrigger
    className="
      w-25
      bg-zinc-800
      border border-zinc-800
      text-white
      rounded-xl
      shadow-lg
      hover:border-zinc-700
      focus:border-indigo-500
      focus:ring-0
      transition-colors duration-200
    "
  >   <i class="fa-solid fa-filter"></i>
    <SelectValue placeholder="Filter Category" />
  </SelectTrigger>

  <SelectContent
    className="
      bg-zinc-800
      border border-zinc-700
      text-white
      rounded-xl
      shadow-xl
    "
  >
    <SelectItem value="All" className="focus:bg-zinc-700 focus:text-white">
      All
    </SelectItem>
    <SelectItem value="Food" className="focus:bg-zinc-700 focus:text-white">
      Food
    </SelectItem>
    <SelectItem value="Cloths" className="focus:bg-zinc-700 focus:text-white">
      Cloths
    </SelectItem>
    <SelectItem value="Social" className="focus:bg-zinc-700 focus:text-white">
      Social
    </SelectItem>
    <SelectItem value="Healthcare" className="focus:bg-zinc-700 focus:text-white">
      Healthcare
    </SelectItem>
    <SelectItem value="Education" className="focus:bg-zinc-700 focus:text-white">
      Education
    </SelectItem>
    <SelectItem value="Other" className="focus:bg-zinc-700 focus:text-white">
      Other
    </SelectItem>
  </SelectContent>

</Select>

    </div>
  );
};

export default ExpenseFilter;
