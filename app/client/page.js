'use client';
import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from "react-toastify";

const Page = () => {
    const notify = () => toast.success("Wow so easy!", {
        hideProgressBar:true,
        theme: "colored",
    });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <botton onClick={notify} className="text-3xl cursor-pointer rounded-3xl bg-blue-600 p-4">Show Toast</botton>
      </div>
    </main>
  );
};

export default Page;
