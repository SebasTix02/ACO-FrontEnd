import React from "react";
import { useNavigate } from "react-router-dom";
import UsuarioActual from "./usuario-actual";
import { Layout, Space } from "antd";
const Header = () => {
  const navigate = useNavigate();

  const headerStyles: React.CSSProperties = {
    background: "#1F4083",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0 24px",
    position: "sticky",
    top: 0,
    zIndex: 999,
  };

  return (
    <>
      <Layout.Header style={headerStyles}>
        <Space align="center" size="middle">
          <UsuarioActual />
        </Space>
      </Layout.Header>
    </>
  );
};

export default Header;
