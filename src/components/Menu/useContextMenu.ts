import { useEffect, useState } from "react";
import type { MenuItem } from "./menu.types";

type ContextMenuState = {
  x: number;
  y: number;
  items: MenuItem[];
} | null;

export function useContextMenu() {
  const [menu, setMenu] = useState<ContextMenuState>(null);

  const show = (e: React.MouseEvent, items: MenuItem[]) => {
    e.preventDefault();

    setMenu({
      x: e.clientX,
      y: e.clientY,
      items,
    });
  };

  const hide = () => setMenu(null);

  useEffect(() => {
    const handleClick = () => hide();
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return { menu, show, hide };
}