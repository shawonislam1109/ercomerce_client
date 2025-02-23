import { SettingOutlined } from "@ant-design/icons";
import { dashboardItem } from "./DashboardItem";
import { employeeItem } from "./EmployeeItem";

export const items = [
  dashboardItem,
  employeeItem,
  {
    type: "divider",
  },
  {
    key: "sub4",
    label: "Navigation Three",
    icon: <SettingOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      { key: "11", label: "Option 11" },
      { key: "12", label: "Option 12" },
    ],
  },
];
