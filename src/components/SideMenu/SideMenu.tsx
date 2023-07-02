import React from "react";
import "./SideMenu.css";

import { Divider, Flex, SideMenuItem } from "..";
import {
  ArrowDownToLine,
  ChevronRightSquare,
  ListTodo,
  Menu,
  Settings2,
  X,
} from "lucide-react";

const SideMenu = () => {
  const [collapsed, setCollapsed] = React.useState(true);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const menuIcon = (
    <a
      className={`sidemenu-icon ${collapsed ? "collapsed" : ""}`}
      href="https://github.com/LostRuins/koboldcpp"
      target="_blank"
    >
      <img
        width={32}
        height={32}
        src="https://raw.githubusercontent.com/LostRuins/koboldcpp/concedo/niko.ico"
      />
    </a>
  );

  const MenuHeader = () => {
    return (
      <span className="sidemenu-header">
        {collapsed && menuIcon}
        <div className="sidemenu-header-flex">
          {!collapsed && menuIcon}
          {!collapsed && (
            <span className={`sidemenu-title ${collapsed ? "collapsed" : ""}`}>
              KoboldCPP
            </span>
          )}
          <span
            className={`sidemenu-toggle ${collapsed ? "collapsed" : ""}`}
            onClick={handleToggleCollapse}
          >
            {collapsed ? (
              <Menu width={32} height={32} />
            ) : (
              <X width={32} height={32} />
            )}
          </span>
        </div>
      </span>
    );
  };

  return (
    <div className={`sidemenu-outer ${collapsed ? "collapsed" : ""}`}>
      <MenuHeader />
      <div>
        <Divider size={2} />
        <SideMenuItem
          title="Options"
          Icon={<Settings2 />}
          collapsed={collapsed}
        />
        <SideMenuItem
          title="Model Manager"
          Icon={<ListTodo />}
          collapsed={collapsed}
        />
        <SideMenuItem title="Kobold Lite" collapsed={collapsed} />
        <SideMenuItem
          title="Console"
          Icon={<ChevronRightSquare />}
          onClick={() => console.log("s")}
          collapsed={collapsed}
        />
        <SideMenuItem
          title="Version Manager"
          Icon={<ArrowDownToLine />}
          collapsed={collapsed}
        />
      </div>
    </div>
  );
};

export default SideMenu;
