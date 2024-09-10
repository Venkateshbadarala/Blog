"use client"; 

import React from 'react';
import { signOut } from 'next-auth/react';

const PrimaryNavigation = () => {
  const handleSignOut = () => {
    console.log('Sign Out button clicked'); 
    signOut({ redirect: true, callbackUrl: '/' }); 
  };

  return (
    <div className='flex items-center justify-between p-5 bg-slate-700'>
      <button
        onClick={handleSignOut} 
        className='px-4 py-2 text-xl font-medium text-white transition-colors bg-red-500 rounded-full hover:bg-red-600'
      >
        Logout
      </button>
      <h1 className="flex-grow text-2xl font-bold text-center text-white">
        Blog Posts
      </h1>
    </div>
  );
}

export default PrimaryNavigation;
