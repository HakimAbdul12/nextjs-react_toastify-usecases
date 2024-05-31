'use client'
import CreateSomething from "../server-actions/CreateSomething";
import { SubmitButton } from "../components/SubmitButton";
import { toast } from "react-toastify";

export default  function Server(){
  
  //a client action calling a server action
  async function clientAction (formData) {
    const response = await CreateSomething(formData);
    if(response?.error) {
      console.log(response.error);
    }
    toast.success(response?.message || 'Success!');
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <form className="flex gap-4 flex-col" action={clientAction}>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <SubmitButton />
        </form>
      </div>
    </main>
  );
};

