import "./sidebar.css";

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export default function SidebarTab({ activeTab, setActiveTab }: Props) {
  return (
    <div className="sidebar-tab">
      <button
        type="button"
        onClick={() => setActiveTab("property")}
        className={activeTab === "property" ? "active" : ""}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
          <path
            d="M19 12a7 7 0 0 0-.1-1l2-1-2-3-2 1a7 7 0 0 0-1.7-1l-1-2h-4l-1 2a7 7 0 0 0-1.7 1l-2-1-2 3 2 1a7 7 0 0 0 0 2l-2 1 2 3 2-1a7 7 0 0 0 1.7 1l1 2h4l1-2a7 7 0 0 0 1.7-1l2 1 2-3-2-1c.1-.3.1-.7.1-1z"
            stroke="currentColor"
            strokeWidth="1.2"
          />
        </svg>
      </button>

      <button
        type="button"
        onClick={() => setActiveTab("page")}
        className={activeTab === "page" ? "active" : ""}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 3h9l3 3v15H6V3z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          <path
            d="M15 3v4h4"
            stroke="currentColor"
            strokeWidth="1.8"
          />
        </svg>
      </button>
    </div>
  );
}