import { useState } from "react";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import { items } from "./menuItem/IndexMeuItem";
import "./navigation.css";
import { Autocomplete, Box, Stack, TextField } from "@mui/material";
import ProfileMenu from "./ProfileMenu";
import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useGetBranchQuery } from "../../api/service/branch.service";
import { convertToLabel } from "../../utils/convertToLabel";

const { Header, Sider, Content } = Layout;

const Navigation = () => {
  // => USE AUTH HOOK
  const { user } = useAuth();

  //   ->RTK QUERY HOOK
  const { branches } = useGetBranchQuery(user._id, {
    skip: !user,
    selectFromResult: ({ data, ...rest }) => {
      console.log(data);
      return { branches: convertToLabel(data, "name", "_id"), ...rest };
    },
  });

  // => COLLAPSED FOR USE STATE
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          overflow: "auto",
          height: "100vh",
          position: "sticky",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        className={"sider-scrollbar "}
      >
        <div className="demo-logo-vertical " />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            overflow: "auto",
            position: "sticky",
            left: 0,
            top: 0,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: "16px",
                  width: 50,
                  height: 50,
                }}
              />
            </Box>

            <Stack direction="row" sx={{ mr: 2 }}>
              <Stack sx={{ width: 150 }}>
                <Autocomplete
                  onChange={(event, data) => {
                    console.log(data);
                  }}
                  value={
                    branches?.find((item) => item._id === user?.branch) || null
                  }
                  options={branches || []}
                  getOptionLabel={(option) => option?.label}
                  disableClearable
                  //   PopperComponent={StyledPopper} // Use the custom Popper component
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      sx={{ height: 40 }} // Set the height here
                    />
                  )}
                />
              </Stack>

              <ProfileMenu />
            </Stack>
          </Stack>
        </Header>
        <Content
          style={{ margin: "24px 16px 0", overflow: "initial" }}
          className={"sider-scrollbar "}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Navigation;
