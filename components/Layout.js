import SideBar from "./SideBar";

const Layout = props => (
  <div>
    <SideBar />
    {props.children}
    <style jsx>{`
      display: flex;
      box-orient: horizontal;
    `}</style>
  </div>
);

export default Layout;