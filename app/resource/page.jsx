"use client";
import TextToSpeech from "@/components/TextToSpeech";
import { Card, Col, Input, Row } from "antd";
import Image from "next/image";
import React, { useState } from "react";

const { Search } = Input;
const ResourcePage = () => {
  const diseaseList = [
    {
      name: "Acne",
      desc: "Acne is a common skin condition that occurs when hair follicles become clogged with oil and dead skin cells. It often presents as pimples, blackheads, or whiteheads, and commonly appears on the face, chest, back, and shoulders.",
      image:
        "https://images.ctfassets.net/1ny4yoiyrqia/3ZtVcJZfVB0oIGKekQWyxt/4e2633a3899295e319007fec51a587f2/GettyImages-155285341.jpg?fm=webp&w=450&h=450",
    },
    {
      name: "Psoriasis",
      desc: "Psoriasis is an autoimmune skin condition that causes itchiness and discomfort. Plaque psoriasis is the most common type. It causes thick, scaly areas of skin. While there isn’t a cure, psoriasis treatment can help manage symptoms.",
      image:
        "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/6866-psoriasis",
    },
    {
      name: "Rosacea",
      desc: "Rosacea is a skin condition that causes redness on your face. The most common places to find symptoms of rosacea include your nose, cheeks and forehead. Rosacea can flare throughout your life and usually starts after age 30.",
      image:
        "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/12174-rosacea",
    },
    {
      name: "Vitiligo",
      desc: "Vitiligo causes your skin to lose color or pigmentation. Smooth white or light areas called macules or patches appear on your skin. It generally starts on your hands, forearms, feet and face. Globally, about 1% of the population has vitiligo. Treatment isn’t necessary, but it’s available if you don’t like the changes to your skin tone.",
      image:
        "https://my.clevelandclinic.org/-/scassets/images/org/health/articles/12419-vitiligo",
    },
  ];

  const [currDiseaseList, setDiseaseList] = useState(diseaseList);

  return (
    <div>
      <section style={{ padding: 15 }}>
        <center>
          <Search
            placeholder="Search Resource"
            style={{ width: 300 }}
            onSearch={(val) => {
              let temp = diseaseList.filter((v) =>
                String(v.name).toLowerCase().includes(val.toLowerCase())
              );
              setDiseaseList(temp);
            }}
          />
        </center>
      </section>
      <section style={{ paddingBottom: 15 }}>
        <Row justify="center" gutter={[20, 20]}>
          {currDiseaseList.map((val, i) => {
            return (
              <Col key={i}>
                <Card hoverable style={{ width: 600, minHeight: 230 }}>
                  <Row>
                    <Col span={12}>
                      <Image
                        style={{ borderRadius: 10 }}
                        height={180}
                        width={250}
                        alt="img"
                        src={val.image}
                      />
                    </Col>
                    <Col span={12}>
                      <h3>
                        {val.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <TextToSpeech text={val.desc} />
                      </h3>

                      <span>{val.desc}</span>
                    </Col>
                  </Row>
                </Card>
              </Col>
            );
          })}
        </Row>
      </section>
    </div>
  );
};

export default ResourcePage;
