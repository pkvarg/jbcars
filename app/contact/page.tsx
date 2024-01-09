'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import WhatsApp from '../components/WhatsApp';

const page = () => {
  return (
    <div className="page-bg h-[100vh] w-[100%]">
      <Navbar />
      <h1 className="my-8 text-center text-[30px]">Kontakt</h1>
      <div className="lg:ml-[20%] lg:mt-[17%]">
        <WhatsApp />
      </div>
    </div>
  );
};

export default page;
