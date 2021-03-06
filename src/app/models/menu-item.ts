export interface MenuItem {
  icon: string;
  id: number;
  key: string;
  title: string;
  url: string;
  subItems?: SubMenuItem[];
  open?: boolean;
}

export interface SubMenuItem {
  id: number;
  title: string;
  url: string;
}
