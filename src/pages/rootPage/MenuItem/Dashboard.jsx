import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import StackedBarChartOutlinedIcon from "@mui/icons-material/StackedBarChartOutlined";
import MenuItemComponent from "../../../reuse-component/MenuItemComponent/MenuItemComponent";

const Dashboard = () => {
  const dashboard = [
    {
      name: "DashBoard",
      icons: <DashboardOutlinedIcon />,
      children: [
        {
          name: "analyst",
          icons: <StackedBarChartOutlinedIcon />,
          url: "auth/login",
        },
      ],
    },
  ];

  return (
    <>
      <MenuItemComponent items={dashboard} defaultOpen={true} />
    </>
  );
};

export default Dashboard;
