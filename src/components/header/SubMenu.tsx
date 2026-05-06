import Link from "next/link";

type MenuData = {
  id: number;
  title: string;
  path: string;
  newTab: boolean;
};
type SubMenuProps = {
  id: number;
  title: string;
  path: string;
  newTab: boolean;
  subItem: MenuData[];
};

const SubMenu: React.FC<{ item: SubMenuProps }> = ({ item }) => {
  return (
    <div>
      <h3 className="font-bold">
        <Link
          href={item.path}
          className="block rounded text-dark hover:text-primary dark:text-black dark:hover:text-blue-800"
        >
          {item.title}
        </Link>
      </h3>
      {item.subItem?.map((submenuItem, index) => (
        <Link
          href={submenuItem.path}
          key={index}
          className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-black dark:hover:text-blue-800 lg:px-3"
        >
          {submenuItem.title}
        </Link>
      ))}
    </div>
  );
};

export default SubMenu;
