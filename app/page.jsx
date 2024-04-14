import { Button, Col, Row } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <section>
        <Row>
          <Col
            style={{
              backgroundImage: `url("/img/bg1.png")`,
              backgroundRepeat: "no-repeat",
              minHeight: "500px",
              maxWidth: "600px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div style={{ marginLeft: "55px" }}>
              <h1 style={{ fontSize: "29px" }}>
                Discover The Care Your Skin Deserves
              </h1>
              <p style={{ color: "gray", fontWeight: "bolder" }}>
                Reveal Your Radiance With SkinSight - Your Personalized Skin
                Health Companion. Upload A Photo, Unlock Insights, And Embrace
                Your Skin's Well-Being Now!
              </p>
              <Link href="/diagnosis">
                <Button type="primary">Get Started!</Button>
              </Link>
            </div>
          </Col>
          <Col style={{ minHeight: "500px", maxWidth: "600px" }}>
            <Image
              height={617}
              width={564}
              src="/img/male_doctor.png"
              alt="male doctor"
            />
          </Col>
        </Row>
      </section>
      <section
        style={{
          backgroundColor: "#f1fafc",
          minHeight: "600px",
          paddingTop: "50px",
          paddingBottom: "50px",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h6 style={{ color: "#333333", fontSize: "20px" }}>OUR KEY FEATURES</h6>
        <h3 style={{ color: "#333333", fontSize: "40px" }}>
          Your Skin is Our Priority!
        </h3>
        <Row justify="space-evenly">
          <Col>
            <div
              style={{
                backgroundColor: "white",
                margin: "5px",
                padding: "5px",
                maxWidth: "220px",
                textAlign: "center",
              }}
            >
              <div style={{ height: 170, width: 220, paddingTop: 5 }}>
                <Image
                  src="/img/cloud_girl.png"
                  height={168}
                  width={165}
                  alt="png"
                />
              </div>
              <h1 style={{ color: "#333333", fontSize: "20px" }}>
                Accurate Skin Disease Prediction
              </h1>
              <p style={{ color: "#999999", fontSize: "18px" }}>
                Upload Skin Photos For Instant, Accurate Diagnosis.
              </p>
            </div>
          </Col>
          <Col>
            <div
              style={{
                backgroundColor: "white",
                margin: "5px",
                padding: "5px",
                maxWidth: "220px",
                textAlign: "center",
              }}
            >
              <div style={{ height: 150, width: 220, paddingTop: 5 }}>
                <Image
                  src="/img/health_report.png"
                  height={110}
                  width={102}
                  alt="png"
                />
              </div>
              <h1 style={{ color: "#333333", fontSize: "20px" }}>
                In-Depth Disease Information
              </h1>
              <p style={{ color: "#999999", fontSize: "18px" }}>
                Details On Skin Condition: Causes, Symptoms, And Treatment
                Insights.
              </p>
            </div>
          </Col>
          <Col>
            <div
              style={{
                backgroundColor: "white",
                margin: "5px",
                padding: "5px",
                maxWidth: "220px",
                textAlign: "center",
              }}
            >
              <div style={{ height: 150, width: 220, paddingTop: 5 }}>
                <Image
                  src="/img/patients.png"
                  height={127}
                  width={233}
                  alt="png"
                />
              </div>
              <h1 style={{ color: "#333333", fontSize: "20px" }}>
                Engage, Learn, And Connect
              </h1>
              <p style={{ color: "#999999", fontSize: "18px" }}>
                Engage With Chat, Access Articles, Videos, And Tips For Skin
                Health.
              </p>
            </div>
          </Col>
        </Row>
      </section>
      <section
        style={{
          backgroundColor: "#ffffff",
          minHeight: "500px",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <Row>
          <Col
            style={{ minHeight: "500px", maxWidth: "600px", padding: "50px" }}
          >
            <Image
              height={501}
              width={501}
              src="/img/female_doctor.png"
              alt="male doctor"
            />
          </Col>
          <Col
            style={{ minHeight: "500px", maxWidth: "600px", padding: "50px" }}
          >
            <div style={{ textAlign: "left" }}>
              <h6 style={{ fontSize: "20px", color: "#333333" }}>About Us</h6>
              <h3 style={{ fontSize: "40px", color: "#333333" }}>
                We Help Your Skin
              </h3>
              <p style={{ fontSize: "18px", color: "#999999" }}>
                SkinSight is your trusted companion in skin health. Our mission
                is to provide accurate and accessible skin disease diagnosis and
                management. With advanced technology and a commitment to
                community support, we empower users with valuable insights for
                proactive skincare. Join us on the journey to healthier skin.
              </p>
              <Link href="/">
                <Button type="primary">More About Us</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}
