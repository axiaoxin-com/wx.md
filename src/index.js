import React from "react";
import ReactDOM from "react-dom";

import Lib from "./Lib";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Lib
    useImageHosting={{
      url: "https://imgkr.com/api/files/upload",
      name: "图壳",
      isSmmsOpen: false,
      isQiniuyunOpen: false,
      isAliyunOpen: true,
      isGiteeOpen: true,
      isGitHubOpen: true
    }}
    defaultTitle="人言兑.md-公众号排版编辑器"
  />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
