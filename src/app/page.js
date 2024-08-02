import { UIForm } from "@/components/component/uiform";
import { Hero } from "@/components/component/hero";
import { Navbar } from "@/components/component/navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <Navbar />
      <Hero />
      <UIForm />
    </div>
  );
}
