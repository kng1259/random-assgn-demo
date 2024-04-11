import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const SidebarItem = ({ item }) => {
   const navigate = useNavigate();
   const [open, setOpen] = useState(false);
   const [pick, setPick] = useState(false);
   const click = (i) => {
      if (i && i.path) {
         navigate(i.path);
      } else setOpen(!open);
   };
   return (
      <div
         className="sidebar_Item p-3 text-zinc-700 block border-b-2 border-cyan-800 hover:bg-black hover:cursor-pointer
        "
      >
         <div
            onClick={() => click(item)}
            className="sidebar-title flex justify-between"
         >
            {item ? <span>{item.title}</span> : ""}
         </div>
         {open && item ? (
            <div className="content pt-2 pl-2 hover:bg-blue-300 ">
               {item.childrens.map((child, index) => {
                  return <SidebarItem key={index} item={child} />;
               })}
            </div>
         ) : (
            ""
         )}
      </div>
   );
};

export default SidebarItem;