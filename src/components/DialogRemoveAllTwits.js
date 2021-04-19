import React from "react";
import Alien from "../images/alien.gif";

const DialogRemoveAllTwits = ({ closeDialog, clearAllData }) => {
  const deleteAndClose = () => {
    clearAllData();
    closeDialog();
  };
  return (
    <>
      <section className="dialogRemove dialogRemove--wrapper">
        <div className="paper dialogRemove__paper">
          <div>
            <img src={Alien} alt="cry" />
          </div>
          <span className="paper__post">
            Вы действительно хотите удалить все твиты?
          </span>
          <div className="btn dialogRemove__btn">
            <button className="btn__yes" onClick={deleteAndClose}>
              Да
            </button>
            <button className="btn__no" onClick={closeDialog}>
              Нет, не хочу
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DialogRemoveAllTwits;
