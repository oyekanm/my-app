import NavBar from "./NavBar";
import Styles from "../../styles/Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div className={Styles.Layout}>{children}</div>
    </>
  );
}

export default Layout;
