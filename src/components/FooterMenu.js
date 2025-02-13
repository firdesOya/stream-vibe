import Link from "next/link";

export default function FooterMenu({ menuData, className }) {
  return (
    <div className={className}>
      <h2 className="font-bold text-lg text-white mb-5">
        {menuData.title}
      </h2>
      <div className="flex flex-col gap-3">
        {menuData.submenus.map((submenu, index) => (
          <div key={index} className="text-base font-medium cursor-pointer hover:underline text-gray-800 ">
            {submenu.title}
          </div>
        ))}
      </div>
    </div>
  );
}
