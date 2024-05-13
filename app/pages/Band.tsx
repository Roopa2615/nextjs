'use client'
import React, { useState, useEffect } from 'react';

const Band = ({ color, name, delay } : any) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  return (
    <h1 className={`bg-purple-100 justify-center m-4 w-1/2 text-xl font-normal text-center text-purple-800 capitalize truncate align-middle rounded-lg border-2 border-purple-400 ${show ? 'opacity-100 animate-waving' : 'opacity-0'}`}>
      {name} Band 
    </h1>
  );
};

export default Band;