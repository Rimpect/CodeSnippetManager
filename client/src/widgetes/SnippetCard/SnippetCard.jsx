import React, { useState, useEffect } from "react";
import SnippetItem from "../SnippetItem/SnippetItem";
import "./SnippetCard.scss";
import { Link } from "react-router-dom";
import Fuse from "fuse.js";
export default function SnippetCard({ searchQuery }) {
  const defaultSnippets = [
    {
      id: "1",
      title: "Async/Await Fetch",
      description: "Получение данных с помощью async/await",
      tags: ["javascript", "async", "api", "fetch"],
    },
    {
      id: "2",
      title: "useEffect Hook",
      description: "Управление побочными эффектами в функциональных",
      tags: ["react", "hooks", "useEffect", "lifecycle"],
    },
    {
      id: "3",
      title: "Array Methods",
      description: "Методы массивов: map, filter, reduce",
      tags: ["javascript", "arrays", "methods"],
    },
    {
      id: "4",
      title: "CSS Flexbox",
      description: "Изучаем Flexbox для создания гибких макетов",
      tags: ["css", "flexbox", "layout"],
    },
    {
      id: "5",
      title: "Python Basics",
      description: "Основы Python для начинающих",
      tags: ["python", "basics", "programming"],
    },
    {
      id: "6",
      title: "Grid Layout",
      description: "Создание сложных сеток с CSS Grid",
      tags: ["css", "grid", "layout", "responsive"],
    },
  ];

  const [snippets, setSnippets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const filteredSnippets = (() => {
    if (!searchQuery) return snippets;

    const fuse = new Fuse(snippets, {
      keys: ["title"],
    });

    return fuse.search(searchQuery).map((res) => res.item);
  })();

  // можно будет вынести этот код с помощью кастомного хука
  useEffect(() => {
    const loadSnippets = () => {
      try {
        const stored = localStorage.getItem("codeSnippets");
        if (stored && stored !== "[]" && JSON.parse(stored).length !== 0) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            setSnippets(parsed);
          } else {
            setSnippets(defaultSnippets);
          }
        } else {
          localStorage.setItem("codeSnippets", JSON.stringify(defaultSnippets));
          setSnippets(defaultSnippets);
        }
      } catch (error) {
        console.error("Ошибка загрузки сниппетов:", error);
        setSnippets(defaultSnippets);
      } finally {
        setIsLoading(false);
      }
    };

    loadSnippets();

    const handleStorageChange = (e) => {
      if (e.key === "codeSnippets") {
        loadSnippets();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="card__container">
      <ul className="card__list">
        {filteredSnippets.map((snippet) => (
          <Link key={snippet.id} to={`/editor/${snippet.id}`}>
            <SnippetItem {...snippet} />{" "}
          </Link>
        ))}
      </ul>
    </div>
  );
}
