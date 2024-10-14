import * as React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";

const NAVIGATION = [
  {
    segment: "home",
    title: "Home",
    icon: <HomeIcon />,
  },
  {
    segment: "projects",
    title: "Projects",
    icon: <DashboardIcon />,
  },
  {
    segment: "members",
    title: "Members",
    icon: <GroupsIcon />,
  },

  {
    kind: "divider",
  },
  {
    segment: "my projects",
    title: "My Projects",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "project1",
        title: "Project1",
        icon: <DescriptionIcon />,
      },
      {
        segment: "project2",
        title: "Project2",
        icon: <DescriptionIcon />,
      },
    ],
  },
];


function AppBar({ children }) {
  const [pathname, setPathname] = React.useState("/dashboard");
  const [session, setSession] = React.useState({
    user: {
      name: "Zaid Zaidan",
      email: "zaid@gmail.com",
      image: "https://avatars.githubusercontent.com/u/19550456",
    },
  });

  const authentication = React.useMemo(() => {
    return {
      signIn: () => {
        setSession({
          user: {
            name: "Zaid Zaidan",
            email: "zaid@gmail.com",
            image: "https://avatars.githubusercontent.com/u/19550456",
          },
        });
      },
      signOut: () => {
        setSession(null);
      },
    };
  }, []);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return (
    // preview-start
    <AppProvider
      session={session}
      authentication={authentication}
      navigation={NAVIGATION}
      router={router}
      branding={{logo:<img src="/logo_crystask.png" alt="CrysTask Logo"/> ,title: "CrysTask" }}
    >
      <DashboardLayout>{children}</DashboardLayout>
    </AppProvider>
    // preview-end
  );
}
export default AppBar;
