import { BsFillCalendarDateFill, BsFillGridFill } from "react-icons/bs";
import { FaPlusSquare } from "react-icons/fa";
import { IoCallSharp, IoChatbubbleEllipses } from "react-icons/io5";
import { RiChatHistoryFill } from "react-icons/ri";
import { TbGraphFilled } from "react-icons/tb";

export const navLinks = {
  general: [
    { name: "Dashboard", path: "#", icon: <BsFillGridFill /> },
    { name: "History", path: "#", icon: <RiChatHistoryFill /> },
    { name: "Calendar", path: "#", icon: <BsFillCalendarDateFill /> },
    { name: "Appointments", path: "#", icon: <FaPlusSquare /> },
    { name: "Statistics", path: "#", icon: <TbGraphFilled size={28} /> },
  ],
  tools: [
    { name: "Chat", path: "#", icon: <IoChatbubbleEllipses /> },
    { name: "Support", path: "#", icon: <IoCallSharp /> },
  ],
};
