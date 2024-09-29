"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen  bg-[url('/bg.png')] bg-cover bg-center">
    
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md ">
        <Image
          src="/interview1.png" // Replace with your own image path
          alt="AI Interview Mocker"
          width={300}
          height={300}
          className="mx-auto mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Welcome to AI Interview Mocker
        </h1>
        <p className="text-gray-600 mb-8">
          Sign in to proceed to your mock interview dashboard.
        </p>
        <Button 
          onClick={handleClick}
          className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-md hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
        >
          Go to Dashboard
        </Button>
      </div>
    </div>
  );
}
