import Table from "@/components/Table";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Home = () => {
  const router = useRouter()
  useEffect(() => {
    if(localStorage.length === 0){
      router.push('/login')
    }
  }, [])
  
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <Table />
    </main>
  );
}

export default Home;
