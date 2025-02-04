"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Truck, Trash2, Cone } from 'lucide-react';
import DistanceCalculator from './DistanceCalculator';
import DisposalCalculator from './DisposalCalculator';
import CraneCalculator from './CraneCalculator';

type TabsContainerProps = {
  onTabChange: (tab: string) => void;
};

const TabsContainer = ({ onTabChange }: TabsContainerProps) => {
  const [activeTab, setActiveTab] = useState('moving');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const tabs = [
    { 
      id: 'moving', 
      label: 'Pervežimas',
      icon: <Truck className="w-4 h-4" />,
      color: 'from-red-500 to-red-600'
    },
    { 
      id: 'disposal', 
      label: 'Utilizavimas',
      icon: <Trash2 className="w-4 h-4" />,
      color: 'from-green-500 to-green-600'
    },
    { 
      id: 'crane', 
      label: 'Fiskaro nuoma',
      icon: <Cone className="w-4 h-4" />,
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange(tabId);
  };

  if (!mounted) return null;

  return (
    <div className="w-full backdrop-blur-lg bg-white/10 rounded-xl p-4">
      <div className="grid grid-cols-3 gap-2 p-1 bg-black/20 rounded-lg mb-6">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => handleTabChange(tab.id)}
            className={`
              relative py-3 px-4 rounded-md text-sm font-medium
              flex items-center justify-center gap-2
              transition-all duration-300
              ${activeTab === tab.id
                ? 'text-white'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }
            `}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {activeTab === tab.id && (
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${tab.color} rounded-md`}
                layoutId="activeTab"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.icon}</span>
            <span className="relative z-10">{tab.label}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="h-[350px]"
        >
          {activeTab === 'moving' && <DistanceCalculator />}
          {activeTab === 'disposal' && <DisposalCalculator />}
          {activeTab === 'crane' && <CraneCalculator />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TabsContainer;
