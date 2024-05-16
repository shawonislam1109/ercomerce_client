import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import MenuItemComponent from "../../../reuse-component/MenuItemComponent/MenuItemComponent";

const SettingsMenuItem = () => {
  const settings = [
    {
      name: "Settings",
      icons: <SettingsOutlinedIcon />,
      children: [
        {
          name: "Profile",
          icons: <Person2OutlinedIcon />,
          url: "auth/profile",
        },
      ],
    },
  ];

  return (
    <>
      <MenuItemComponent items={settings} />
    </>
  );
};

export default SettingsMenuItem;
