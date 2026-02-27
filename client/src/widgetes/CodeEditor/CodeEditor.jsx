import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import Select from "react-select";
import "./CodeEditor.scss";
export default function CodeEditor() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  // const [buttonState, setButtonState] = useState();
  const language = [
    { value: "moscow", label: "Москва" },
    { value: "spb", label: "Санкт-Петербург" },
    { value: "kazan", label: "Казань" },
    { value: "novosibirsk", label: "Новосибирск" }, // мб все это хранить в json?
  ];

  return (
    <div className="editor__inner">
      <div className="editor__menu">
        {" "}
        <span className="editor__description-buttons--add-or-save">
          кнопка добавить/сохранить в зависимости от состояния
        </span>
        <span className="editor__description-buttons--delete">
          кнопка удалить
        </span>
      </div>
      <div className="editor__wrapper">
        <form action="" className="editor__form">
          <div className="editor__title">
            <label>Название*</label>
            <input
              className="editor__title-name"
              placeholder="Например: React useState hook"
            ></input>
          </div>
          <div className="editor__description">
            <textarea
              className="editor__description-text"
              placeholder="Краткое описание сниппета"
            ></textarea>
          </div>

          <div className="editor__select">
            <label>Язык программирования</label>
            <Select
              defaultValue={selectedLanguage}
              onChange={setSelectedLanguage}
              options={language}
              placeholder="Выберите..."
              isSearchable={true} // Включить поиск
            />
            {selectedLanguage && <p>Вы выбрали: {selectedLanguage.label}</p>}
          </div>

          <div className="editor__tags">
            <label htmlFor="">теги</label>
            <input type="text" placeholder="Добавьте тег..." />
            <div>кнопка добавить тег</div>
          </div>

          <span className="editor__description-tags">список тегов</span>
          <span className="editor__description-favorites">
            добавить в избранное
          </span>
        </form>

        <span>Код</span>
        <div className="editor__ide">
          {" "}
          <Editor defaultLanguage="javascript" theme="vs-dark" />
        </div>
      </div>
    </div>
  );
}
