import "./toolbar.css";
import { useState, useRef, useEffect } from "react";
import Menu from "../Menu/Menu";
import type { MenuItem } from "../Menu/menu.types";


export default function Toolbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const menuItems: MenuItem[] = [
    {
      label: "Nouveau projet",
      action: () => console.log("New project"),
    },
    {
      label: "Ouvrir",
      action: () => console.log("Open"),
    },
    { separator: true },
    {
      label: "Exporter",
      children: [
        {
          label: "PDF",
          action: () => console.log("PDF export"),
        },
        {
          label: "PNG",
          action: () => console.log("PNG export"),
        },
      ],
    },
  ];

  // fermeture clic extérieur
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);


  return (
    <div className="toolbar">
      <div ref={ref} className="menu-wrapper">
        <button onClick={() => setOpen(!open)}>Menu</button>

        {open && (
          <div className="dropdown">
            <Menu items={menuItems} />
          </div>
        )}
      </div>
      <button className="toolbar-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M5 4h12l2 2v14H5V4z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M8 4v6h8V4"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <path
            d="M8 14h8v6H8v-6z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      </button>
      <button className="toolbar-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 6h6l2 2h8v12H4V6z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M12 12v6M9 15h6"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      </button>
      <button className="toolbar-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 14l-4-4 4-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M5 10h10a5 5 0 1 1 0 10h-2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      </button>
      <button className="toolbar-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M15 14l4-4-4-4"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M19 10H9a5 5 0 1 0 0 10h2"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      </button>
    </div>
  );
}