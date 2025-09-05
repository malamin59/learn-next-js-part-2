"use client";
import {  signIn } from "next-auth/react";


export default function LoginButton() {
  return (
    <div>
      <button  onClick={() =>  signIn()}
       className="bg-sky-500 px-3 py-1 rounded-xl"> 
        
        Login</button>
    </div>
  );
}