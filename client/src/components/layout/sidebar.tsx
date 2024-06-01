import { LayoutDashboard, Users } from "lucide-react";

export default function Sidebar() {
  const items = [
    {
      title: "Dashboard",
      href: "/dashboard/",
      icon: <LayoutDashboard />,
    },
    {
      title: "Groups",
      href: "/groups/",
      icon: <Users />,
    },
  ];
  const pathname = location.pathname;
  console.log(pathname);
  return (
    <>
      <nav className="fixed top-16 w-60 border-r h-screen flex flex-col p-2 gap-1 py-5">
        {items.map((item) => {
          return (
            <span
              key={item.href}
              className={
                "flex gap-2 pl-5 py-2 cursor-pointer font-medium rounded-md " +
                (pathname === item.href ? "bg-gray-200 dark:bg-secondary" : "")
              }
            >
              {item.icon}
              {item.title}
            </span>
          );
        })}
      </nav>
    </>
  );
}
