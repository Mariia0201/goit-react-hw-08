
import AppBar from "../AppBar/AppBar";

export const Layout = ({ children }) => {
  return (
    <>
      <AppBar />
      {children}
    </>
  );
};


export default Layout;