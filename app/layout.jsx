import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Provider from "@/components/Provider";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const metadata = {
  title: "SkinSight",
  description: "Intelligent Skin Disease Diagnosis and Management System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          <Provider>
            <Nav />
            <main style={{ minHeight: "85vh" }}>{children}</main>
            <Footer />
          </Provider>
        </AntdRegistry>
      </body>
    </html>
  );
}
