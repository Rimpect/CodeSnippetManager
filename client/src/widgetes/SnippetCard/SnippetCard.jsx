import React from "react";
import SnippetItem from "../SnippetItem/SnippetItem";
import "./SnippetCard.scss";
import { Link } from "react-router-dom";
export default function SnippetCard() {
  const snippetCardArr = [
    {
      id: 1,
      title: "Async/Await Fetch",
      description: "Получение данных с помощью async/await",
      tags: ["javascript", "async", "api", "fetch"],
    },
    {
      id: 2,
      title: "useEffect Hook",
      description: "Управление побочными эффектами в функциональных",
      tags: ["react", "hooks", "useEffect", "lifecycle"],
    },
    {
      id: 3,
      title: "Array Methods",
      description: "Методы массивов: map, filter, reduce",
      tags: ["javascript", "arrays", "methods"],
    },
    {
      id: 4,
      title: "CSS Flexbox",
      description: "Изучаем Flexbox для создания гибких макетов",
      tags: ["css", "flexbox", "layout"],
    },
    {
      id: 5,
      title: "Python Basics",
      description: "Основы Python для начинающих",
      tags: ["python", "basics", "programming"],
    },
    {
      id: 6,
      title: "Grid Layout",
      description: "Создание сложных сеток с CSS Grid",
      tags: ["css", "grid", "layout", "responsive"],
    },
  ];
  return (
    <div className="card__container">
      <ul className="card__list">
        {snippetCardArr.map((snippet) => (
          <Link key={snippet.id} to={`/editor/${snippet.id}`}>
            <SnippetItem {...snippet} />{" "}
 
          </Link>
        ))}
      </ul>
    </div>
  );
}
