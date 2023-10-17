import { Navbar } from "./_components/dashboard.navbar";

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-full dark:bg-[#1F1F1F]">
      <Navbar />
      <main className="h-full flex justify-center items pt-28">
        {children}
      </main>
    </div>
   );
}
 
export default MarketingLayout;
