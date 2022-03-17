import { Input, Space, Select, Cascader, Slider, Upload, message } from "antd";
import { SettingOutlined, InboxOutlined } from "@ant-design/icons";
import React from "react";
import "./antDesign.css";
import "antd/dist/antd.css";

function AntDesign() {
  const { Option } = Select;
  const { Dragger } = Upload;

  const selectBefore = (
    <Select defaultValue="http://" className="select-before">
      <Option value="http://">http://</Option>
      <Option value="https://">https://</Option>
    </Select>
  );
  const selectAfter = (
    <Select defaultValue=".com" className="select-after">
      <Option value=".com">.com</Option>
      <Option value=".jp">.jp</Option>
      <Option value=".cn">.cn</Option>
      <Option value=".org">.org</Option>
    </Select>
  );

  const addBefore = (
    <Select defaultValue="+" className="select-before">
      <Option value="+">+</Option>
      <Option value="-">-</Option>
    </Select>
  );

  const addAfter = (
    <Select defaultValue="$" className="select-before">
      <Option value="USD">$</Option>
      <Option value="EUR">€</Option>
      <Option value="GBP">£</Option>
      <Option value="CNY">¥</Option>
    </Select>
  );

  const marks = {
    0: "0°C",
    26: "26°C",
    37: "37°C",
    100: {
      style: {
        color: "#f50",
      },
      label: <strong>100°C</strong>,
    },
  };

  const props = {
    name: "file",
    multiple: true,
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  return (
    <div className="component">
      <u>
        <p className="typography">Input Fields </p>
      </u>
      <Space direction="vertical">
        <Input addonBefore="http://" addonAfter=".com" defaultValue="mysite" />
        <Input
          addonBefore={selectBefore}
          addonAfter={selectAfter}
          defaultValue="mysite"
        />
        <Input addonAfter={<SettingOutlined />} defaultValue="mysite" />
        <Input addonBefore="http://" suffix=".com" defaultValue="mysite" />
        <Input
          addonBefore={
            <Cascader placeholder="cascader" style={{ width: 150 }} />
          }
          defaultValue="mysite"
        />
        <Input addonAfter="$" defaultValue="100" />
        <Input
          addonBefore={addBefore}
          addonAfter={addAfter}
          defaultValue="100"
        />
      </Space>
      <u>
        <p className="typography">Slider </p>
      </u>
      <div className="slider">
        <Slider vertical defaultValue={30} />
        <Slider vertical range step={10} defaultValue={[20, 50]} />
        <Slider vertical range marks={marks} defaultValue={[26, 37]} />
      </div>
      <u>
        <p className="typography">Upload </p>
      </u>
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibit from uploading
          company data or other band files
        </p>
      </Dragger>
    </div>
  );
}

export default AntDesign;
