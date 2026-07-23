import "./menu.css";
import type { MenuItem } from "./menu.types";

type Props = {
  items: MenuItem[];
};

export default function Menu({ items }: Props) {
  return (
    <div className="menu">
      {items.map((item, index) => {
        if (item.separator) {
          return <div key={index} className="menu-separator" />;
        }

        return (
          <div
            key={item.id ?? index}
            className={`menu-item ${item.disabled ? "disabled" : ""}`}
            onClick={() => {
              if (!item.disabled) item.action?.();
            }}
          >
            {item.icon && <span className="menu-icon">{item.icon}</span>}
            {item.label}

            {item.children && item.children.length > 0 && (
              <div className="menu-sub">
                <Menu items={item.children} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}