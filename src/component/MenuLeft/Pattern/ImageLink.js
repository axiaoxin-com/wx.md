import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import { hotKeys } from "../../../utils/hotkey";

import "../common.css";

@inject("dialog")
@observer
class ImageLink extends Component {
  showModal = () => {
    this.props.dialog.setImageLinkOpen(true);
  };

  render() {
    return (
      <div
        id="nice-menu-image-link"
        className="nice-menu-item"
        onClick={this.showModal}
      >
        <span>
          <span className="nice-menu-flag" />
          <span className="nice-menu-name">图片</span>
        </span>
        <span className="nice-menu-shortcut">{hotKeys.image}</span>
      </div>
    );
  }
}

export default ImageLink;
