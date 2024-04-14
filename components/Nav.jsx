"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Layout, Button, Menu, Row, Col, Space, Dropdown } from "antd";
import Image from "next/image";
import {
  BookOutlined,
  GlobalOutlined,
  HeartOutlined,
  HomeOutlined,
} from "@ant-design/icons";
const { Header } = Layout;

const NavLinks = [
  {
    key: "1",
    label: <Link href="/diagnosis">Diagnosis</Link>,
    icon: <HeartOutlined />,
  },
  {
    key: "2",
    label: <Link href="/">Home</Link>,
    icon: <HomeOutlined />,
  },
  {
    key: "3",
    label: <Link href="/community">Community</Link>,
    icon: <GlobalOutlined />,
  },
  {
    key: "4",
    label: <Link href="/resource">Resource</Link>,
    icon: <BookOutlined />,
  },
];

const dropdownitems = [
  {
    key: "1",
    label: <Link href="/profile">Profile</Link>,
  },
  {
    key: "2",
    label: (
      <Button type="primary" onClick={() => signOut()}>
        Sign Out
      </Button>
    ),
  },
];

const Nav = () => {
  const { data: session } = useSession();
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const res = await getProviders();
      setProvider(res);
    };
    if (!provider) {
      setUpProviders();
    }
  }, []);

  return (
    <Layout>
      <Header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1,
          width: "100%",
          backgroundColor: "#3498db",
        }}
      >
        <Row justify="space-between" style={{ width: "100%" }}>
          <Col span={6} style={{ marginTop: "12px" }}>
            <Image
              src="/icons/skinsight_logo.png"
              height={40}
              width={120}
              alt="logo"
              priority
              placeholder="empty"
            />
          </Col>

          <Col span={12}>
            <Menu
              theme="dark"
              mode="horizontal"
              items={NavLinks}
              style={{
                flex: 2,
                minWidth: 0,
                backgroundColor: "#3498db",
              }}
            />
          </Col>

          <Col>
            {session?.user ? (
              <>
                <Dropdown
                  menu={{ items: dropdownitems }}
                  placement="bottomRight"
                  arrow={{
                    pointAtCenter: true,
                  }}
                  overlayStyle={{ textAlign: "right" }}
                >
                  <Image
                    src={session?.user.image}
                    height={40}
                    width={40}
                    style={{ marginTop: "10px", borderRadius: "20px" }}
                    alt="profile picture"
                  />
                </Dropdown>
              </>
            ) : (
              <Space>
                <Button type="primary" onClick={() => signIn()}>
                  Sign In
                </Button>
                <Link href="/auth/register">
                  <Button type="primary">Register</Button>
                </Link>
              </Space>
            )}
          </Col>
        </Row>
      </Header>
    </Layout>
  );
};

export default Nav;
