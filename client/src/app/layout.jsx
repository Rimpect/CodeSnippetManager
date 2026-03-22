import Header from "../widgetes/Header/Header";
import { Outlet } from "react-router-dom";

function Layout({ searchQuery, setSearchQuery }) {
  return (
    <div>
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <main>
        <Outlet context={{ searchQuery }} />
      </main>
    </div>
  );
}

export default Layout;
