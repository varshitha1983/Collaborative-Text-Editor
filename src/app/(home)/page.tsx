import  Link  from "next/link";
import { Navbar } from "./navbar";
import { TemplatesGallery } from "./templates-gallery";



export const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-10 h-16 bg-white p-4">
        <Navbar />
      </div>
      <div className="mt-16">
        <TemplatesGallery />
      </div>
    </div>
  );
    
}
export default Home;