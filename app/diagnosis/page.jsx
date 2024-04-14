"use client";
import React, { useState } from "react";
import { InboxOutlined, QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Col, Row, Space, Typography, Upload, message } from "antd";
import Image from "next/image";
import TextToSpeech from "@/components/TextToSpeech";

const { Dragger } = Upload;
const { Title, Paragraph, Text } = Typography;
const DiagnosisPage = () => {
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

  const diseaseDetails = {
    name: "Acne",
    desc: "Acne is a common skin condition that occurs when hair follicles become clogged with oil and dead skin cells. It often presents as pimples, blackheads, or whiteheads, and commonly appears on the face, chest, back, and shoulders. Acne is usually associated with hormonal fluctuations experienced during your teenage years, but adults can experience acne, too. About 17 million Americans have acne, making it one of the most common skin conditions among both children and adults.",
    cause:
      "Acne develops when sebaceous glands in the skin produce too much oil (sebum), which can combine with dead skin cells to clog pores. Factors that contribute to acne include: Hormonal changes (common during adolescence, menstruation, pregnancy, or due to hormonal disorders). Excess oil production. Bacteria (Propionibacterium acnes) that thrive in clogged pores. Inflammation.",
    symptoms:
      "Symptoms of acne can vary depending on the severity and type of lesions, but they commonly include: Pimples (papules or pustules). Blackheads (open comedones). Whiteheads (closed comedones). Cysts or nodules (deep, painful lumps beneath the skin).",
    treatment:
      "Treatment options for acne aim to reduce oil production, prevent clogged pores, and decrease inflammation. They may include: Topical treatments: Over-the-counter or prescription creams, gels, or lotions containing ingredients like benzoyl peroxide, salicylic acid, retinoids, or antibiotics. Oral medications: Antibiotics, hormonal medications (e.g., birth control pills), or isotretinoin (a powerful medication for severe acne). Procedures: Dermatological procedures such as chemical peels, microdermabrasion, laser therapy, or extraction of comedones. Lifestyle changes: Maintaining good skincare habits, avoiding picking or squeezing lesions, and managing stress can help improve acne. Professional guidance: Dermatologists can provide personalized treatment plans tailored to the individual's skin type and severity of acne.",
  };

  return (
    <div id="report" style={{ backgroundColor: "lightgray", padding: 25 }}>
      <section
        style={{
          padding: 40,
          borderRadius: "30px 30px 30px 0px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Row justify="space-between">
          <Col>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "45px",
                color: "#121212",
              }}
            >
              Diagnosis and Insights
            </span>
          </Col>
        </Row>
      </section>
      <section style={{ backgroundColor: "#FFFFFF" }}>
        <div
          style={{
            backgroundColor: "lightgray",
            borderRadius: "30px 0px 0px 30px",
            marginLeft: 40,
            minHeight: 400,
            padding: 30,
          }}
        >
          <span style={{ fontSize: "50px", fontWeight: "bold" }}>
            Upload Photo
          </span>
          <br />
          <br />
          {filebase64 ? (
            <section>
              <center>
                <Image
                  style={{ borderRadius: "25px" }}
                  src={filebase64}
                  alt="upload file"
                  height={350}
                  width={500}
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
                  message.success(
                    `${info.file.name} file uploaded successfully.`
                  );
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
                <Button
                  type="primary"
                  // onClick={handleAnalyze}
                  // loading={loading}
                >
                  Analyze
                </Button>
              </Space>
            </Col>
            <Col />
          </Row>
        </div>
      </section>
      <section
        style={{
          backgroundColor: "#FFFFFF",
          minHeight: "5vh",
          borderRadius: "0px 30px 30px 30px",
          padding: 40,
          marginBottom: 10,
        }}
      >
        <span>Play Voice</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <TextToSpeech text={diseaseDetails.desc} />
        <Typography>
          <Title>{diseaseDetails.name}</Title>
          <Paragraph>{diseaseDetails.desc}</Paragraph>

          <Title>Cause</Title>
          <TextToSpeech text={diseaseDetails.cause} />
          <Paragraph>{diseaseDetails.cause}</Paragraph>

          <Title>Symptoms</Title>
          <TextToSpeech text={diseaseDetails.symptoms} />
          <Paragraph>{diseaseDetails.symptoms}</Paragraph>

          <Title>Treatments</Title>
          <TextToSpeech text={diseaseDetails.treatment} />
          <Paragraph>{diseaseDetails.treatment}</Paragraph>
        </Typography>
      </section>
    </div>
  );
};

export default DiagnosisPage;
