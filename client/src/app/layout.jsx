import Header from "../widgetes/Header/Header";
// import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Layout({onCreateClick}) {
  return (
    <div>
      <Header onCreateClick={onCreateClick} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
