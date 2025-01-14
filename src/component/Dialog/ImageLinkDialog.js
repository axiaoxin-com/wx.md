import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import { Modal, Input, Form } from "antd";

@inject("dialog")
@inject("content")
@observer
class ImageLinkDialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: ""
    };
  }

  // 确认后将内容更新到编辑器上
  handleOk = () => {
    const { markdownEditor } = this.props.content;
    const cursor = markdownEditor.getCursor();
    const selection = markdownEditor.getSelection();
    const text = `![${selection}](${this.state.link})\n`;
    markdownEditor.replaceSelection(text, cursor);

    const content = markdownEditor.getValue();
    this.props.content.setContent(content);

    this.setState({ link: "" });
    this.props.dialog.setImageLinkOpen(false);
    cursor.ch += 2;
    markdownEditor.setCursor(cursor);
    markdownEditor.focus();
  };

  handleCancel = () => {
    this.setState({ link: "" });
    this.props.dialog.setImageLinkOpen(false);
  };

  handleChange = e => {
    this.setState({ link: e.target.value });
  };

  render() {
    return (
      <Modal
        title="添加图片"
        okText="确认"
        cancelText="取消"
        visible={this.props.dialog.isImageLinkOpen}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <Form.Item label="图片链接">
          <Input
            placeholder="请输入图片链接"
            value={this.state.link}
            onChange={this.handleChange}
          />
        </Form.Item>
      </Modal>
    );
  }
}

export default ImageLinkDialog;
