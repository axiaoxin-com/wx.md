import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Modal, Timeline, Button } from "antd";
import { NEWEST_VERSION } from "../../utils/constant";
import SvgIcon from "../../icon";

import "./VersionDialog.css";

@inject("dialog")
@observer
class VersionDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      versionNumber: 0,
      versionTimeline: [],
      recommend: null,
      specialInfo: ""
    };
  }

  handleOk = () => {
    this.props.dialog.setVersionOpen(false);
  };

  handleCancel = () => {
    this.props.dialog.setVersionOpen(false);
  };

  handleMore = () => {
    const w = window.open("about:blank");
    w.location.href = "https://blog.axiaoxin.com";
  };

  handleDocs = () => {
    const w = window.open("about:blank");
    w.location.href = "https://blog.axiaoxin.com/post/md2wechat/";
  };

  componentDidUpdate(prevProps) {
    if (!prevProps.dialog.isVersionOpen && this.props.dialog.isVersionOpen) {
      if (this.adComponent) {
        this.adComponent.loadAd();
      }
    }
  }

  componentDidMount = async () => {
    try {
      const data = {
        versionId: 1,
        versionNumber: "1.0.0",
        versionTimeline: [
          "一文带你了解<a href='https://blog.axiaoxin.com/post/what-is-markdown/' target='_blank'><strong>《什么是Markdown？》</strong></a>",
          "精通Markdown<a href='https://blog.axiaoxin.com/post/markdown-guide/' target='_blank'><strong>《Markdown 语法参考手册》</strong></a>"
        ],
        recommend: {
          link: "https://mp.weixin.qq.com/s/k6P0Sk96VPGo6D59tMM95Q",
          mainInfo: "欢迎关注「人言兑」公众号"
        },
        specialInfo:
          '<div style="display:flex;justify-content:center;align-items:center;"><img style="width:100%;margin-top:-30px;" loading="lazy" src="https://pic.rmb.bdstatic.com/bjh/3eacca401b/241115/e37c7891297fd64d6d690e59adc9eac0.png"/></div>'
      };
      const newestVersion = localStorage.getItem(NEWEST_VERSION);
      if (data.versionNumber !== newestVersion) {
        // this.props.dialog.setVersionOpen(true);
        localStorage.setItem(NEWEST_VERSION, data.versionNumber);
      }
      this.props.dialog.setVersionOpen(true);
      this.setState({ ...data });
    } catch (err) {
      console.error("读取最新版本信息错误");
    }
  };

  render() {
    return (
      <Modal
        title="欢迎使用「人言兑.md」"
        visible={this.props.dialog.isVersionOpen}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={[
          <Button key="submit" type="primary" onClick={this.handleOk}>
            确认
          </Button>
        ]}
        destroyOnClose
      >
        <Timeline>
          <Timeline.Item
            dot={<SvgIcon name="environment" style={style.svgIcon} />}
          >
            <strong>
              更多信息请查看&nbsp;
              <a
                id="more-info"
                style={{ fontWeight: "bold", borderBottom: "solid" }}
                alt=""
                href="https://blog.axiaoxin.com/post/md2wechat/"
                rel="noopener noreferrer"
                target="_blank"
              >
                人言兑.md
              </a>
            </strong>
          </Timeline.Item>
          {this.state.versionTimeline.map((version, index) => {
            /*if (index === 0) {
              return (
                <Timeline.Item key={index} dot={<SvgIcon name="environment" style={style.svgIcon} />}>
                  <strong>{version}</strong>
                </Timeline.Item>
              );
            } else {
              return <Timeline.Item key={index}>{version}</Timeline.Item>;
            }*/
            return (
              <Timeline.Item key={index}>
                <div dangerouslySetInnerHTML={{ __html: version }} />
              </Timeline.Item>
            );
          })}
          {this.state.recommend && (
            <Timeline.Item dot={<SvgIcon name="more" style={style.svgIcon} />}>
              <a
                id="nice-version-dialog-recommend"
                style={{ fontWeight: "bold", borderBottom: "double" }}
                alt=""
                href={this.state.recommend.link}
                rel="noopener noreferrer"
                target="_blank"
              >
                {this.state.recommend.mainInfo}
              </a>
            </Timeline.Item>
          )}
        </Timeline>

        {this.state.specialInfo && (
          <div
            id="nice-version-dialog-special"
            dangerouslySetInnerHTML={{ __html: this.state.specialInfo }}
            className="specialInfo"
          />
        )}
      </Modal>
    );
  }
}

const style = {
  svgIcon: {
    width: "16px",
    height: "16px"
  }
};

export default VersionDialog;
