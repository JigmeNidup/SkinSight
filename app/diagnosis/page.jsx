"use client";
import React, { useState } from "react";
import { Col, Row} from "antd";
import UploadComp from "./Upload";
import DisplayDiseaseComp from "./DisplayDisease";

const DiagnosisPage = () => {
  const [showResult, setResultShow] = useState(false);
  const [name, setDiseaseName] = useState("");

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
        <UploadComp
          setDiseaseName={setDiseaseName}
          setResultShow={setResultShow}
        />
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
        {showResult ? <DisplayDiseaseComp dname={name} /> : null}
      </section>
    </div>
  );
};

export default DiagnosisPage;
