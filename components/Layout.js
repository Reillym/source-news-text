import SideNav from "./SideNav";

const Layout = props => (
  <div>
    {props.children}
    <SideNav />
    <style jsx>{`
      display: flex;
    `}</style>
  </div>
);

export default Layout;