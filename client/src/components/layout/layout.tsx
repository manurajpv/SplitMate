import Header from "./header";
import Sidebar from "./sidebar";

export default function PageLayout() {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </>
  );
}
