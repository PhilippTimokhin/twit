import React from "react";
import Rocket from "../images/rocket.gif";

const DialogEdit = ({
  onClose,
  inner,
  setEditingDescription,
  setEditingTitle,
  editingDescription,
  editingTitle,
  handleOnSubmit,
}) => {
  const enabled = editingTitle.length >= 3 && editingDescription.length >= 3;
  return (
    <>
      <section className="dialogEdit dialogEdit--wrapper">
        <form className="paper dialogEdit__paper">
          <div>
            <img src={Rocket} alt="cry" />
          </div>
          <span className="paper__post">
            Вы хотите изменить твит "{inner.title}" ?
          </span>
          <div className="form dialogEdit__form">
            <input
              value={editingTitle}
              placeholder={inner.title}
              className="form__input"
              onChange={(event) => setEditingTitle(event.target.value)}
            />
            <textarea
              value={editingDescription}
              placeholder={inner.description}
              rows={5}
              className="form__textarea"
              onChange={(event) => setEditingDescription(event.target.value)}
            />
          </div>
          <div className="btn dialogEdit__btn">
            <button
              className="btn__yes"
              onClick={handleOnSubmit}
              disabled={!enabled}
            >
              Изменить
            </button>
            <button className="btn__no" onClick={onClose}>
              Отменить
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default DialogEdit;
