"use client";
import { Button, Col, Row, Select, Space } from "antd";
import React, { useState } from "react";
import { message, Upload } from "antd";
import { InboxOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import Image from "next/image";
import { isMobile } from "react-device-detect";
import { useSession } from "next-auth/react";
const { Dragger } = Upload;

const UploadComp = ({ setDiseaseName, setResultShow }) => {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [filebase64, setFileBase64] = useState();

  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setFileBase64(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }

  const handleAnalyze = async () => {
    try {
      setResultShow(false);
      setLoading(true);
      // console.log(filebase64.substr(22));
      let res = await fetch("http://localhost:5000/image", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: filebase64.substr(22),
        }),
      });
      res = await res.json();
      console.log(res);

      setLoading(false);
      setDiseaseName(res.data);
      setResultShow(true);

      setLoading(false);
    } catch (error) {
      console.log(error);

      setLoading(false);
    }
  };

  return (
    <div
      style={{
        backgroundColor: "lightgray",
        borderRadius: "30px 0px 0px 30px",
        marginLeft: 40,
        minHeight: 400,
        padding: 30,
      }}
    >
      <span style={{ fontSize: "50px", fontWeight: "bold" }}>Upload Photo</span>
      <br />
      <br />
      {filebase64 ? (
        <section>
          <center>
            <Image
              style={{ borderRadius: "25px" }}
              src={filebase64}
              alt="upload file"
              height={isMobile ? 250 : 350}
              width={isMobile ? 300 : 500}
            />
            <br />
            <Button type="primary" onClick={() => setFileBase64()} danger>
              Clear Image
            </Button>
          </center>
        </section>
      ) : (
        <Dragger
          name="file"
          maxCount={1}
          accept="image/png, image/jpeg, image/jpg"
          beforeUpload={(file) => {
            const isJpgOrPng =
              file.type === "image/jpeg" || file.type === "image/png";
            if (!isJpgOrPng) {
              message.error("You can only upload JPG/PNG file!");
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
              message.error("Image must smaller than 2MB!");
            }

            getBase64(file);
          }}
          onChange={async (info) => {
            const { status } = info.file;
            if (status !== "uploading") {
              // console.log(info.file, info.fileList);
            }
            if (status === "done") {
              message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === "error") {
              message.error(`${info.file.name} file upload failed.`);
            }
          }}
          onDrop={(e) => {
            console.log("Dropped files", e.dataTransfer.files);
          }}
        >
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
        </Dragger>
      )}
      <br />
      <br />
      <Row justify="space-between">
        <Col>
          <QuestionCircleOutlined />
          &nbsp; Help Center
        </Col>
        <Col>
          <Space>
            <Button type="primary" onClick={handleAnalyze} loading={loading}>
              Analyze
            </Button>
          </Space>
        </Col>
        <Col />
      </Row>
    </div>
  );
};

export default UploadComp;
