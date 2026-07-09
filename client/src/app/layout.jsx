import Header from "../widgetes/Header/Header";
import { Outlet } from "react-router-dom";

function Layout({
  searchQuery,
  setSearchQuery,
  onCreateClick,
  showFavoritesOnly,
  onToggleFavoritesFilter,
}) {
  return (
    <div>
      <Header
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onCreateClick={onCreateClick}
        onFilterClick={onToggleFavoritesFilter}
        filterActive={showFavoritesOnly}
      />
      <main>
        <Outlet context={{ searchQuery, showFavoritesOnly }} />
      </main>
    </div>
  );
}

export default Layout;
