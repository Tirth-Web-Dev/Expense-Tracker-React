import React from "react";
import { useExpenses } from "@/context/ExpenseContext";
import { Card, CardContent } from "./ui/card";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = [
  "#818CF8",
  "#38BDF8",
  "#4ADE80",
  "#FACC15",
  "#FB7185",
  "#C084FC"
];

const ExpenseChart = () => {
  const { expenses } = useExpenses();

  const categoryData = expenses.reduce((acc, curr) => {
    const existing = acc.find(item => item.name === curr.category);

    if(existing){
       existing.value += curr.amount
    }else{
        acc.push({ name: curr.category, value:curr.amount})
    }
       
    return acc;
 
    
  },[])
  return (
    <Card className="relative overflow-hidden rounded-3xl
  bg-zinc-900/60 backdrop-blur-xl
  border border-zinc-800/60
  shadow-xl shadow-black/30">

    <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-transparent pointer-events-none" />
<CardContent className="p-6">
    
        <div className="flex items-center justify-between">
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-white">
          Category Overview
        </h2>
        <p className="text-sm text-zinc-400 mt-1">
          Expense distribution by category
        </p>
      </div>
    </div>
    <div className="w-full h-80">
      {expenses.length === 0 && (
      <div className="text-center py-12 text-zinc-500">
        No expenses found.
      </div>
    )}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>

          <Pie
            data={categoryData}
            cx="50%"
            cy="50%"
            outerRadius={110}
            innerRadius={65}
            paddingAngle={3}
            dataKey="value"
          >
            {categoryData.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
                className="focus:outline-none"
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: "#18181b",
              border: "1px solid #27272a",
              borderRadius: "12px",
              color: "#fff"
            }}
            itemStyle={{ color: "#e4e4e7" }}
          />

          <Legend
            verticalAlign="bottom"
            iconType="circle"
            wrapperStyle={{
              color: "#a1a1aa",
              paddingTop: "20px"
            }}
          />

        </PieChart>
      </ResponsiveContainer>
    </div>

  </CardContent>
    
  
</Card>

  
  );
};

export default ExpenseChart;
