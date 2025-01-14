import React, { Component } from "react";
import { Menu } from "antd";

import LinkToFoot from "../component/MenuLeft/Pattern/LinkToFoot";
import Format from "../component/MenuLeft/Pattern/Format";
import ImageLink from "../component/MenuLeft/Pattern/ImageLink";
import Link from "../component/MenuLeft/Pattern/Link";
import Bold from "../component/MenuLeft/Pattern/Bold";
import "./EditorMenu.css";

class EditorMenu extends Component {
  render() {
    return (
      <Menu id="nice-editor-menu" className="nice-editor-menu">
        <Menu.Item className="ant-dropdown-menu-item">
          <LinkToFoot />
        </Menu.Item>
        <Menu.Item className="ant-dropdown-menu-item">
          <Format />
        </Menu.Item>
        <Menu.Item className="ant-dropdown-menu-item">
          <Link />
        </Menu.Item>
        <Menu.Item className="ant-dropdown-menu-item">
          <ImageLink />
        </Menu.Item>
        <Menu.Item className="ant-dropdown-menu-item">
          <Bold />
        </Menu.Item>
      </Menu>
    );
  }
}

export default EditorMenu;
