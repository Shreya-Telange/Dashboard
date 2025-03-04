import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/sidebar.module.css"; // Import CSS module

// Import icons
import { FiHome, FiBarChart2, FiShoppingCart, FiUsers, FiSettings } from "react-icons/fi";
import { BsBox, BsGraphUp } from "react-icons/bs";
import { BiEnvelope, BiBookAlt } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";

const Sidebar = () => {
  const router = useRouter();

  const menuItems = [
    { name: "Dashboard", icon: <FiHome />, path: "/" },
    { name: "Analytics", icon: <FiBarChart2 />, path: "/analytics" },
    { name: "Sales", icon: <FiShoppingCart />, path: "/sales" },
    { name: "Products", icon: <BsBox />, path: "/products" },
    { name: "Customer", icon: <FiUsers />, path: "/customers" },
    { name: "Traffic", icon: <BsGraphUp />, path: "/traffic" },
    { name: "Reports", icon: <BiBookAlt />, path: "/reports", badge: "17" },
  ];

  const notifications = [
    { name: "Profile", icon: <IoMdNotificationsOutline />, path: "/profile" },
    { name: "Inbox", icon: <BiEnvelope />, path: "/inbox", badge: "14" },
    { name: "Accounting", icon: <FiUsers />, path: "/accounting" },
    { name: "Settings", icon: <FiSettings />, path: "/settings" },
  ];

  return (
    <aside className={styles.sidebar}>
      {/* Sidebar Header */}
      <div className={styles.sidebarHeader}>
        <img src="/logo.png" alt="Logo" className={styles.logo} />
        <h2>Dashcom</h2>
      </div>

      {/* Main Menu */}
      <p className={styles.menuHeading}></p>
      <nav className={styles.menu}>
        {menuItems.map((item, index) => (
          <Link key={index} href={item.path} className={`${styles.menuItem} ${router.pathname === item.path ? styles.active : ""}`}>
            {item.icon}
            <span>{item.name}</span>
            {item.badge && <span className={styles.badge}>{item.badge}</span>}
          </Link>
        ))}
      </nav>

      {/* Notifications */}
      <p className={styles.menuHeading}>NOTIFICATIONS</p>
      <nav className={styles.menu}>
        {notifications.map((item, index) => (
          <Link key={index} href={item.path} className={`${styles.menuItem} ${router.pathname === item.path ? styles.active : ""}`}>
            {item.icon}
            <span>{item.name}</span>
            {item.badge && <span className={styles.badge}>{item.badge}</span>}
          </Link>
        ))}
      </nav>

      {/* Profile Avatar */}
      <div className={styles.profileAvatar}></div>
    </aside>
  );
};

export default Sidebar;
