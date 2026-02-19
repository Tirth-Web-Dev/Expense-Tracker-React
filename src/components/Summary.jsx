import React from 'react';
import { Card, CardContent } from './ui/card';
import { useExpenses } from '@/context/ExpenseContext';
import { motion, AnimatePresence } from "framer-motion";


const Summary = () => {
  
    const {totalAmount, expenses} = useExpenses()
    return (
        

     <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

  {/* TOTAL EXPENSES */}
  <Card className="group relative overflow-hidden rounded-3xl 
    bg-zinc-900/60 backdrop-blur-xl 
    border border-zinc-800/60 
    shadow-xl shadow-black/30
    transition-all duration-300 
    hover:-translate-y-1 hover:border-indigo-500/40"
  >

    {/* Gradient Border Glow */}
    <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-indigo-500/10 via-transparent to-transparent opacity-60" />

    <CardContent className="relative p-8 flex flex-col gap-6">

      {/* Top Row */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-zinc-400 tracking-wide">
          Total Expenses
        </p>

        <div className="w-10 h-10 rounded-xl bg-indigo-500/10 
          flex items-center justify-center text-indigo-400 text-sm font-semibold">
          ₹
        </div>
      </div>

      {/* Amount */}
      <div>
        <h2 className="text-4xl font-semibold tracking-tight text-white">
          <AnimatePresence mode='wait'>
            <motion.span
            key={totalAmount}
             initial={{ opacity: 0, scale: 0.65 }}
             animate={{ opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{
      layout: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      opacity: { duration: 0.2 }
    }} className='inline-block'>
                 ₹ {totalAmount}
            </motion.span>
          </AnimatePresence>
         
        </h2>
        <p className="text-xs text-zinc-500 mt-2">
          Overall spending recorded
        </p>
      </div>

      {/* Bottom subtle progress bar */}
      <div className="h-1.5 w-full">
        <div className="h-full w-1/3 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full" />
      </div>

    </CardContent>
  </Card>


  {/* TOTAL ENTRIES */}
  <Card className="group relative overflow-hidden rounded-3xl 
    bg-zinc-900/60 backdrop-blur-xl 
    border border-zinc-800/60 
    shadow-xl shadow-black/30
    transition-all duration-300 
    hover:-translate-y-1 hover:border-emerald-500/40"
  >

    <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-emerald-500/10 via-transparent to-transparent opacity-60" />

    <CardContent className="relative p-8 flex flex-col gap-6">

      {/* Top Row */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-zinc-400 tracking-wide">
          Total Entries
        </p>

        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 
          flex items-center justify-center text-emerald-400 text-sm font-semibold">
          #
        </div>
      </div>

      {/* Value */}
      <div>
        <h2 className="text-4xl font-semibold tracking-tight text-white">
           <AnimatePresence mode='wait'>
            <motion.span
            key={expenses.length}
             initial={{ opacity: 0, scale: 0.65 }}
             animate={{ opacity: 1, scale: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{
      layout: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
      opacity: { duration: 0.2 }
    }} className='inline-block'>
                 {expenses.length}
            </motion.span>
          </AnimatePresence>
         
         
        </h2>
        <p className="text-xs text-zinc-500 mt-2">
          Transactions added
        </p>
      </div>

      {/* Bottom subtle progress bar */}
      <div className="h-1.5 w-full">
        <div className="h-full w-1/3 bg-linear-to-r from-emerald-500 to-teal-500 rounded-full" />
      </div>

    </CardContent>
  </Card>

</div>

    );
};

export default Summary;