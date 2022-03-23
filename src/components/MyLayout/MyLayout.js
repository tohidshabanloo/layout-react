import { Layout, Menu, Breadcrumb } from "antd";
import Posts from "../Posts/Posts";
import "./MyLayout.css";

const { Header, Footer, Sider, Content } = Layout;

const MyLayout = () => {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          {new Array(6).fill(null).map((_, index) => {
            const key = index + 1;
            return <Menu.Item key={key}>{`فهرست ${key}`}</Menu.Item>;
          })}
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>خانه</Breadcrumb.Item>
          <Breadcrumb.Item>لیست</Breadcrumb.Item>
          <Breadcrumb.Item>برنامه</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          {" "}
          <Posts />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        2022© سایت آزمایشی توسط توحید شعبانلو
      </Footer>
    </Layout>
  );
};

export default MyLayout;
