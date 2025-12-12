import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
        <span>© {year} Tushar Rathore · tusharsVerse</span>
        <span>Built with React, Vite & Tailwind in Sapphire Frost mode ❄️</span>
      </div>
    </footer>
  );
};

export default Footer;
