"use client";
import { Lottie } from "lottie-react";
import "./globals.css";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();
  const onClick = () => {
    router.push("/");
  };
  return (
    <div className="h-screen w-screen flex justify-self-center-safe items-center-safe flex-col overflow-hidden">
      <Lottie src="lottie/404.json" autoplay loop />
      <button
        className="bg-black text-white p-5 rounded-full font-extralight text-2xl text-center m-2.5 cursor-pointer transition-all ease-in-out duration-300 hover:text-4xl"
        onClick={onClick}>
        Home
      </button>
    </div>
  );
}

export default NotFound;
