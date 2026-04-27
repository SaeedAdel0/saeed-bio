import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const images = [
  { id: 'image1', name: 'Background 1', url: 'https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?q=80&w=400' },
  { id: 'image2', name: 'Background 2', url: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=400' },
  { id: 'image3', name: 'Background 3', url: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?q=80&w=400' },
];

const BackgroundSettings = ({ currentBackground, onBackgroundChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        className="fixed top-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-14 h-14 bg-white/20 backdrop-blur-md hover:bg-white/30 border-2 border-white/40 shadow-xl"
          size="icon"
        >
          <Palette className="w-6 h-6 text-white" />
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              onClick={() => setIsOpen(false)}
              transition={{ duration: 0.05 }}
            />
            
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ duration: 0.05 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-800">Background settings</h2>
                  <Button
                    onClick={() => setIsOpen(false)}
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-700">Images</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {images.map((image) => (
                      <motion.button
                        key={image.id}
                        onClick={() => {
                          onBackgroundChange(image.id);
                          setIsOpen(false);
                        }}
                        className={`h-24 rounded-xl bg-cover bg-center shadow-lg transition-all ${
                          currentBackground === image.id ? 'ring-4 ring-blue-500 scale-105' : ''
                        }`}
                        style={{ backgroundImage: `url(${image.url})` }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="sr-only">{image.name}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default BackgroundSettings;