import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import Select from "react-select";
import "./CodeEditor.scss";
import { saveSnippet } from "../../features/snippet/StorageSnippet";
export default function CodeEditor() {
  const language = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "cpp", label: "C++" },
  ];

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [code, setCode] = useState("");
  const [tags, setTags] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentSnippetId, setCurrentSnippetId] = useState(null);
  const handleSave = () => {
    // здесь собираем данные из состояний
    const snippetData = {
      title: title,
      description: description,
      language: selectedLanguage,
      code: code,
      tags: tags,
      isFavorite: isFavorite,
      currentSnippetId: currentSnippetId,
    };

    // вызываем импортированную функцию
    saveSnippet(snippetData);
  };
  return (
    <div className="editor__inner">
      <div className="editor__menu">
        <button className="editor__menu-buttons--back">кнопка назад</button>
        <button
          className="editor__menu-buttons--add-or-save"
          onClick={handleSave}
        >
          кнопка добавить/сохранить
        </button>
        <button className="editor__menu-buttons--delete">кнопка удалить</button>
      </div>

      <div className="editor__main">
        <form className="editor__form">
          <div className="editor__title">
            <label>Название*</label>
            <input
              className="editor__title-input"
              placeholder="Например: React useState hook"
            />
          </div>

          <div className="editor__description">
            <label>Описание</label>
            <textarea
              className="editor__description-textarea"
              placeholder="Краткое описание сниппета"
              rows={4}
            />
          </div>

          <div className="editor__select">
            <label>Язык программирования</label>
            <Select
              defaultValue={selectedLanguage}
              onChange={setSelectedLanguage}
              options={language}
              placeholder="Выберите..."
              isSearchable={true}
            />
            {selectedLanguage && (
              <p className="editor__select-info">
                Вы выбрали: {selectedLanguage.label}
              </p>
            )}
          </div>

          <div className="editor__tags">
            <label>Теги</label>
            <div className="editor__tags-input-group">
              <input type="text" placeholder="Добавьте тег..." />
              <button type="button" className="editor__tags-add">
                Добавить
              </button>
            </div>
            <div className="editor__tags-list">
              {/* Список тегов будет здесь */}
              <span className="editor__tag">react</span>
              <span className="editor__tag">javascript</span>
            </div>
          </div>

          <div className="editor__favorites">
            <label className="editor__favorites-checkbox">
              <input type="checkbox" />
              <span>Добавить в избранное</span>
            </label>
          </div>
        </form>

        <div className="editor__code-section">
          <div className="editor__code-header">
            <span className="editor__code-label">Код</span>
            <span className="editor__code-language">JavaScript</span>
          </div>
          <div className="editor__ide">
            <Editor
              defaultLanguage="javascript"
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
