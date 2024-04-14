"use client";
import React, { useState } from "react";

import { Col, Input, Menu, Row } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import CommunityCard from "@/components/CommunityCard";

const { Search } = Input;
const CommunityPage = () => {
  const posts = [
    {
      name: "Bill",
      title: "My Skin is Going Downhill FAST",
      desc: "I've had a really hard time keeping my skin clear. I've tried about 50 products, and by the time I found something that worked (an anti blemish serum that didn't have a name I could find), the necessary product was rebranded to be 12x as expensive. So, I introduced a niacinamide serum and astringent for my facial pores. I also introduced an exfoliating mitt for my body because the loofah wasn't doing it. I do moisturize well after using it. I thought it was perfect... until the bumps started to appear. We're talking hundreds of itty bitty bumps under the skin on my face, shoulders, upper arms, back, and thighs. I had quite a few before this that I just couldn't remove, even with a body acne cleanser, but this was absurd. They're very mildly itchy, not enough to make me think it's a rash. I genuinely don't know what to do, they're getting worse and I don't know what is causing it. Do you have any ideas? Here's some pics of the facial area for reference. I do have a little concealer on.",
      image: "",
    },
    {
      name: "Anny",
      title:
        "Please provide steps for a new skincare routine, as I've been trying for years but still haven't found a solution:",
      desc: "I frequently experience severe acne breakouts. I primarily experience acne breakouts on my forehead, cheeks, and chin. My skin's sensitivity is extremely high. I have concerns about dryness, hyperpigmentation, and irritation.When I use alpha hydroxy acids (e.g., glycolic acid, lactic acid) and niacinamide, I experience terrible sensitivity.I've had side effects from acne products in the past, such as redness,irritation, dryness, or peeling.I have been dealing with acne issues for more than 3 years.My goals for acne treatment include maintaining overall skin health.I also have eye eczema.I'm concerned that using toner, especially with glycolic acid, might have negative effects on my face.",
      image: "",
    },
    {
      name: "Sharuk",
      title: "Has anyone ever used this bleaching cream..?",
      desc: "Has anyone used or know if this bleaching cream is any good ?",
      image:
        "https://www.skincaretalk.com/cdn-cgi/image/format=auto,onerror=redirect,width=1920,height=1920,fit=scale-down/https://www.skincaretalk.com/attachments/img_8330-jpeg.69110/",
    },
    {
      name: "John",
      title: "Very sensitive skin prone to redness and adult acne",
      desc: "My mum has been complaining about her skin a lot recently? She is turning 60 and has very sensitive skin! she currently only uses 1 product - the Clinique superdefense cream spf 25. And she doesn’t wear makeup. Her skin is dry and textured, prone to redness and adult acne and her skin is sun damaged, she has had a couple of basel cell carcinomas removed from her face over the last 2 years. She just wants to find a few products she can use that will help with the texture, redness and acne and I’m not sure where to start as I don’t have sensitive skin so can use anything. Any advice on products or brands would be amazing!!",
      image: "",
    },
    {
      name: "Rishi",
      title: "Aftershave replacement for Skintactix Glycolic Exfoliator?",
      desc: "What would be a good replacement for (discontinued) Skintactix Glycolic Exfoliator if I used it for aftershave gel? It had less than 2% glycolic acid.",
      image: "",
    },
    {
      name: "Baru",
      title: "Relief for ichthyosis",
      desc: "What is better - citric, urea, lactic, glycolic, or salicylic acid? I'd like to make my own lotion using a base lotion with either of these. i see that i have to check the ph level though for base first but how do you know many ml of water to add to dissolve the the acidic powder & how many ml of the dissolved solution to add to the lotion?",
      image: "",
    },
  ];

  const [currPosts, setPosts] = useState(posts);

  return (
    <div>
      <section style={{ padding: 15 }}>
        <center>
          <Search
            placeholder="Search Community"
            onSearch={(val) => {
              let temp = posts.filter((v) =>
                String(v.title).toLowerCase().includes(val.toLowerCase())
              );
              setPosts(temp);
            }}
            style={{ width: 300 }}
          />
        </center>
      </section>
      <section style={{ paddingBottom: 15 }}>
        <center>
          <div style={{ width: 300 }}>
            <Menu
              onClick={() => {}}
              mode="horizontal"
              items={[
                {
                  label: "Top",
                  key: "top",
                  icon: <ArrowUpOutlined />,
                },
                {
                  label: "Latest",
                  key: "latest",
                  icon: <ArrowUpOutlined />,
                },
                {
                  label: "Trending",
                  key: "trending",
                  icon: <ArrowUpOutlined />,
                },
              ]}
            />
          </div>
        </center>
      </section>
      <section style={{ padding: 10 }}>
        <Row justify="space-evenly" gutter={[20, 20]}>
          {currPosts.map((val, i) => {
            return (
              <Col key={i}>
                <CommunityCard
                  name={val.name}
                  title={val.title}
                  desc={val.desc}
                  image={val.image}
                />
              </Col>
            );
          })}
        </Row>
      </section>
    </div>
  );
};

export default CommunityPage;
