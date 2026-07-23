import "./sidebar.css";
import Property from "./Property/Property";
import Page from "./Page/Page";
import Elements from "./elements/Elements";

type Props = {
  activeTab: string;
};

export default function Content({ activeTab }: Props) {
  return (
    <div className="sidebar-content">
      {activeTab === "property" && <Property />}
      {activeTab === "page" && <Page />}
      {activeTab === "elements" && <Elements />}
    </div>
  );
}