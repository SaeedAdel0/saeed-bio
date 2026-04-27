import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut } from 'lucide-react';

const buttons = [
  { label: 'My Company', url: 'https://sabatc-new.vercel.app/' },
  { label: 'LinkedIn Profile', url: 'https://www.linkedin.com/in/saeed00/' },
  { label: 'My Resume', isModal: true },
  { label: 'Schedule meeting with me', url: 'https://cal.com/saeed-adel-saeed-alkatheri-movfbg' },
  { label: 'Email Me', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=saeedadil0@gmail.com' },
];

const ActionButtons = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [scale, setScale] = useState(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.div 
        className="space-y-4 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {buttons.map((button) => (
          button.isModal ? (
            <motion.button
              key={button.label}
              onClick={() => {
                setScale(1);
                setIsResumeOpen(true);
              }}
              className="w-full max-w-[400px] py-4 px-6 bg-white/90 backdrop-blur-md rounded-2xl text-gray-800 font-semibold text-lg shadow-xl text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {button.label}
            </motion.button>
          ) : (
            <motion.a
              key={button.label}
              href={button.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full max-w-[400px] py-4 px-6 bg-white/90 backdrop-blur-md rounded-2xl text-gray-800 font-semibold text-lg shadow-xl text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {button.label}
            </motion.a>
          )
        ))}
      </motion.div>

      <AnimatePresence>
        {isResumeOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setIsResumeOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full h-full max-h-[90vh] flex flex-col items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Controls */}
              <div className="absolute top-4 right-4 z-[110] flex gap-2">
                <button
                  onClick={() => setScale(prev => Math.min(prev + 0.25, 3))}
                  className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-md transition-colors"
                >
                  <ZoomIn className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setScale(prev => Math.max(prev - 0.25, 0.5))}
                  className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-md transition-colors"
                >
                  <ZoomOut className="w-6 h-6" />
                </button>
                <button
                  onClick={() => setIsResumeOpen(false)}
                  className="p-2 bg-white/20 hover:bg-white/40 rounded-full text-white backdrop-blur-md transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Image Container */}
              <div className="w-full h-full overflow-auto flex items-start justify-center p-4 sm:p-12 scrollbar-hide">
                <motion.img
                  src="./cv.jpg"
                  alt="My Resume"
                  animate={{ scale }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="max-w-full h-auto shadow-2xl rounded-sm origin-top"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/800x1100?text=Resume+Not+Found'; }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ActionButtons;