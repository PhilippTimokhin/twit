import React, { useState } from "react";
import DialogEdit from "./DialogEdit";
import DialogRemove from "./DialogRemove";

const TwitList = ({
  data,
  onDelete,
  onEdit,
  setEditingDescription,
  setEditingTitle,
  editingDescription,
  editingTitle,
  checkState,
}) => {
  const [showDialogRemove, setShowDialogRemove] = useState(false);
  const [showDialogEdit, setShowDialogEdit] = useState(false);
  const [selected, setSelected] = useState(null);
  const [selectedEdit, setSelectedEdit] = useState(null);

  const tasksNoun = data.length !== 1 ? "Твитов" : "Твит";
  const headingText = `На стене: ${data.length} ${tasksNoun} 😉`;
  const handleOnOpenDialogEdit = (inner) => {
    setSelectedEdit(inner);
    setShowDialogEdit(true);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onEdit(selectedEdit.id, editingTitle, editingDescription);
    handleOnCloseDialogEdit();
  };
  const handleOnCloseDialogEdit = () => {
    setShowDialogEdit(false);
    setSelectedEdit(null);
  };

  const handleOnOpenDialogRemove = (inner) => {
    setSelected(inner);
    setShowDialogRemove(true);
  };

  const handleOnCloseDialogRemove = () => {
    setShowDialogRemove(false);
    setSelected(null);
  };

  if (data.length === 0) {
    return (
      <div className="empty empty--wrapper">
        <span className="empty__twit">На стене не найдено твитов 😓</span>
      </div>
    );
  }

  return (
    <>
      <section className="list list--wrapper">
        <span className="list__count">{headingText}</span>
        {showDialogRemove && (
          <div className="dialog list__dialog">
            <DialogRemove
              onClose={handleOnCloseDialogRemove}
              inner={selected}
              onDelete={onDelete}
            />
          </div>
        )}
        {showDialogEdit && (
          <div className="dialog list__dialog">
            <DialogEdit
              handleOnSubmit={handleOnSubmit}
              onClose={handleOnCloseDialogEdit}
              inner={selectedEdit}
              onEdit={onEdit}
              setEditingDescription={setEditingDescription}
              editingDescription={editingDescription}
              setEditingTitle={setEditingTitle}
              editingTitle={editingTitle}
            />
          </div>
        )}

        {data.map((inner) => (
          <div
            className="card list__card"
            key={inner.title}
            style={{ backgroundColor: inner.completed ? "#e0e0e0" : "white" }}
          >
            <span
              className="card__title"
              style={{
                textDecoration: inner.completed ? "line-through" : "none",
              }}
            >
              <em className="card__text">Твит: </em> {inner.title}
            </span>
            <span
              className="card__description"
              style={{
                textDecoration: inner.completed ? "line-through" : "none",
              }}
            >
              <em className="card__text">Пост: </em> {inner.description}
            </span>
            <span className="card__date">
              <em>Дата: {inner.date}</em>
            </span>
            <div className="card__check">
              <input
                type="checkbox"
                checked={inner.completed}
                onChange={() => checkState(inner.id)}
              />
              <span className="checkText">
                <em style={{ color: inner.completed ? "green" : "black" }}>
                  Прочитано
                </em>
              </span>
            </div>
            <div className="btn card__btn">
              <button
                className="btn_remove"
                onClick={() => handleOnOpenDialogRemove(inner)}
              >
                Удалить
              </button>
              <button
                className="btn_edit"
                onClick={() => handleOnOpenDialogEdit(inner)}
              >
                Редактировать
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default TwitList;
