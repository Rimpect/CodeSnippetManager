import React from "react";
import Dashboard from "../../widgetes/Dashboard/Dashboard";
import { useOutletContext } from "react-router-dom";
export default function DashboardPage() {
  const { searchQuery, showFavoritesOnly } = useOutletContext();

  return (
    <Dashboard searchQuery={searchQuery} showFavoritesOnly={showFavoritesOnly} />
  );
}
