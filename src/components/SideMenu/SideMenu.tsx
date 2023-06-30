import React from "react"
import "./SideMenu.css"

import { Divider, Flex, SideMenuItem } from ".."
import { ArrowDownToLine, ChevronRightSquare, Menu, Settings2, X } from "lucide-react"

const SideMenu = () => {
  const [collapsed, setCollapsed] = React.useState(true);

  const handleToggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const menuIcon = (
    <a href="https://github.com/LostRuins/koboldcpp" target="_blank">
      <img 
        className={`sidemenu-icon ${collapsed ? "collapsed": ""}`}
        width={32}
        height={32}
        src="https://raw.githubusercontent.com/LostRuins/koboldcpp/concedo/niko.ico"
      />
    </a>
  )

  return (
    <div className={`sidemenu-outer ${collapsed ? "collapsed" : ""}`}>
        <div className="sidemenu-header">
          {collapsed && menuIcon}
          <Flex>
            {!collapsed && menuIcon}
            {!collapsed && (
            <div className="sidemenu-title">KoboldCPP</div>
          )}
          <div
            className={`sidemenu-close ${collapsed ? "collapsed": ""}`}
            onClick={handleToggleCollapse}
          >
            {collapsed ? 
                  <Menu width={32} height={32}/>
                : <X width={32} height={32} /> 
            }
          </div>
          </Flex>
        </div>
      <div>
        <Divider size={2} />
        <SideMenuItem title="Options" Icon={<Settings2/>} collapsed={collapsed}/>
        <SideMenuItem title="Kobold Lite" collapsed={collapsed}/>
        <SideMenuItem title="Console" Icon={<ChevronRightSquare/>} onClick={() => console.log("s")} collapsed={collapsed}/>
        <SideMenuItem title="Version Manager" Icon={<ArrowDownToLine/>} collapsed={collapsed}/>
      </div>
    </div>
  )
}

export default SideMenu as typeof SideMenu