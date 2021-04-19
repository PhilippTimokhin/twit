import React from "react";
import Cry from "../images/cry.gif";

const DialogRemove = ({ onDelete, onClose, inner }) => {
  return (
    <>
      <section className="dialogRemove dialogRemove--wrapper">
        <div className="paper dialogRemove__paper">
          <div>
            <img src={Cry} alt="cry" />
          </div>
          <span className="paper__post">
            Вы действительно хотите удалить пост "{inner.title}" ?
          </span>
          <div className="btn dialogRemove__btn">
            <button
              className="btn__yes"
              onClick={() => {
                onDelete(inner.id);
                onClose();
              }}
            >
              Да
            </button>
            <button className="btn__no" onClick={onClose}>
              Нет, не хочу
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DialogRemove;
