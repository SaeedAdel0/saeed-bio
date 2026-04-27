import React from 'react';
import { motion } from 'framer-motion';

const ProfileSection = () => {
  return (
    <motion.div 
      className="flex flex-col items-center text-center space-y-4" 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <img className="w-32 h-32 rounded-full border-4 border-white shadow-2xl object-cover object-top" alt="Profile picture of Saeed Adel Alkatheri" src="profile.jpg" />
      </motion.div>
      
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Saeed Adel Alkatheri
        </h1>
        <p className="text-xl text-white/90 drop-shadow-md">
          Software Engineering
        </p>
      </div>
    </motion.div>
  );
};

export default ProfileSection;