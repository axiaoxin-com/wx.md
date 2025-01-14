import React, { Component } from "react";
import ImageLinkDialog from "../component/Dialog/ImageLinkDialog";
import LinkDialog from "../component/Dialog/LinkDialog";
import AboutDialog from "../component/Dialog/AboutDialog";
import VersionDialog from "../component/Dialog/VersionDialog";
import FormDialog from "../component/Dialog/FormDialog";
import HistoryDialog from "../component/Dialog/HistoryDialog";
import SitDownDialog from "../component/Dialog/SitDownDialog";

class Dialog extends Component {
  render() {
    return (
      <div>
        <ImageLinkDialog />
        <LinkDialog />
        <AboutDialog />
        <VersionDialog />
        <FormDialog />
        <HistoryDialog />
        <SitDownDialog />
      </div>
    );
  }
}

export default Dialog;
