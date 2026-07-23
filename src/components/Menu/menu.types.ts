export type MenuItem = {
  id?: string;
  label: string;
  action?: () => void;
  icon?: React.ReactNode;
  separator?: boolean;
  disabled?: boolean;
  children?: MenuItem[];
};