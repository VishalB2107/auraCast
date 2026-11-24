import React from 'react';

const Footer = () => {
   const currentYear = new Date().getFullYear();
   return (
      <footer className="bg-black border-t border-gray-800 pt-8 pb-6 relative overflow-hidden">
         <div
            className="absolute inset-0 opacity-5"
            style={{
               backgroundImage:
                  'repeating-linear-gradient(45deg, #333 0, #333 1px, transparent 0, transparent 10px)',
               zIndex: 0,
            }}
         ></div>
         <div
            className="absolute bottom-0 left-0 w-full h-40 opacity-5"
            style={{
               backgroundImage: 'radial-gradient(circle at 15% 85%, #6366F1 0, transparent 60%)',
            }}
         ></div>
         <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
               <div className="col-span-3">
                  <div className="flex items-center mb-0">
                     <span
                        className="text-2xl filter drop-shadow-lg mr-2"
                        style={{
                           textShadow: '0 0 10px rgba(99, 102, 241, 0.5)',
                           fontSize: '1.75rem',
                        }}
                     >
                        🎙️
                     </span>
                     <span className="text-xl font-bold text-gray-100">
                        <span className="text-indigo-400">Aura</span>Cast
                     </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-0">
                     Intelligent Content Synthesis & Audio Broadcasting Studio.
                  </p>
               </div>
            </div>
            <div className="pt-0 mt-0  text-center sm:flex sm:justify-between sm:text-left">
               <p className="text-gray-400 text-sm">&copy; {currentYear} AuraCast.</p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
