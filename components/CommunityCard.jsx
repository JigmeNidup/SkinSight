"use client";
import { Avatar, Card, Space, Tooltip } from "antd";
import Image from "next/image";
import React from "react";

const CommunityCard = ({ name, title, desc, image }) => {
  return (
    <Card hoverable style={{ width: 500, minHeight: 300 }}>
      <Space>
        <Tooltip title={name}>
          <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
        </Tooltip>
        <h3>{title}</h3>
      </Space>
      <p>{String(desc).substring(0,300)} ....</p>
      {image ? <Image width={490} height={300} src={image} alt="img" /> : null}
    </Card>
  );
};

export default CommunityCard;
