import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Modal, Button } from "antd";

@inject("dialog")
@observer
class AboutDialog extends Component {
  handleOk = () => {
    this.props.dialog.setAboutOpen(false);
  };

  handleCancel = () => {
    this.props.dialog.setAboutOpen(false);
  };

  handleVersion = () => {
    this.props.dialog.setAboutOpen(false);
    this.props.dialog.setVersionOpen(true);
  };

  render() {
    return (
      <Modal
        title="关于「人言兑.md」"
        okText="确认"
        cancelText="取消"
        visible={this.props.dialog.isAboutOpen}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={this.handleOk}>
            确认
          </Button>
        ]}
        bodyStyle={{
          paddingTop: "5px"
        }}
      >
        <h3 style={style.headerMargin}>
          <a href="https://blog.axiaoxin.com/post/md2wechat/" target="_blank">
            人言兑.md-公众号排版编辑器功能介绍
          </a>
        </h3>

        <p style={style.lineHeight}>
          支持自定义样式的 Markdown 转公众号图文排版编辑器
        </p>
        <p style={style.lineHeight}>
          支持Markdown转微信公众号、知乎和稀土掘金等文章
        </p>
        <p style={style.lineHeight}>
          如果你喜欢这个工具，欢迎关注公众号：
          <a
            href="https://mp.weixin.qq.com/s/k6P0Sk96VPGo6D59tMM95Q"
            target="_blank"
          >
            人言兑
          </a>
        </p>

      </Modal>
    );
  }
}

const style = {
  leftImgWidth: {
    width: "40%",
    height: "100%"
  },
  rightImgWidth: {
    width: "60%",
    height: "100%"
  },
  headerMargin: {
    marginTop: "5px",
    marginBottom: "5px",
    color: "black"
  },
  lineHeight: {
    lineHeight: "26px",
    color: "black",
    padding: 0,
    margin: 0
  },
  img: {
    width: "70px",
    marginLeft: "10px",
    display: "inline-block"
  },
  noBorder: {
    border: "none"
  }
};

export default AboutDialog;
