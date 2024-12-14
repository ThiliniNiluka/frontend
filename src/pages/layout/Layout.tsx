import { Outlet } from "react-router-dom";
import CustomAppBar from "../../components/appbar/CustomAppBar";
import SideBar from "../../components/sidebar/SideBar";

export function Layout() {
  const drawerWidth = 250;
  const appBarHeight = 88;
  //   const [breadcrumbPath, setBreadcrumbPath] = useState([
  //     "Dashboard",
  //     "Product",
  //   ]);

  //   const handleMenuClick = (path: string[]) => {
  //     setBreadcrumbPath(path);
  //   };

  return (
    <div className="flex flex-row h-full bg-none">
      <div className={`w-[${drawerWidth}px]`} aria-label="Sidebar navigation">
        {/* <SideBar onMenuClick={handleMenuClick} /> */}
        <SideBar />
      </div>
      <div className={`flex-grow p-0 w-[calc(100% - 250)px] `}>
        {/* <AppBar breadcrumbPath={breadcrumbPath} height={appBarHeight} /> */}
        <CustomAppBar height={appBarHeight} />
        <div className={`flex items-center mt-[88px] w-full flex-grow `}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
