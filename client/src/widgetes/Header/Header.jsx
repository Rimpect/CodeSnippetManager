import React from "react";
import { Search, Filter, Plus } from "lucide-react";
import "./Header.scss";

export default function Header({
  searchQuery,
  onSearchChange,
  onFilterClick,
  onCreateClick,
}) {
  return (
    <header className="header">
      <div className="header__inner">
        {/* Поиск */}
        <div className="header__search">
          <Search className="header__search-icon" />
          <input
            type="text"
            placeholder="Поиск сниппетов..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="header__search-input"
          />
        </div>

        {/* Кнопка фильтров */}
        <button onClick={onFilterClick} className="header__filter-btn">
          <Filter className="header__filter-icon" />
          <span>Фильтры</span>
        </button>

        {/* Кнопка создания */}
        <button onClick={onCreateClick} className="header__create-btn">
          <Plus className="header__create-icon" />
          <span>Создать</span>
        </button>
      </div>
    </header>
  );
}
