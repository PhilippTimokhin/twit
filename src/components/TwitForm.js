import React, { useState } from "react";
import Zombie from "../images/zombie.gif";
import { v4 as uuid_v4 } from "uuid";
import DialogRemoveAllTwits from "./DialogRemoveAllTwits";

const TwitForm = ({
  data,
  setData,
  search,
  setSearch,
  clearAllData,
  handleRemoveChecked,
}) => {
  const [reverse, setReverse] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [showDialogRemove, setShowDialogRemove] = useState(false);
  const openDialog = () => {
    if (!data.length) {
      return alert("На стене не найдено твитов");
    } else {
      setShowDialogRemove(true);
    }
  };

  const closeDialog = () => {
    setShowDialogRemove(false);
  };
  const handleOnAdd = () => {
    const newState = {
      title: title,
      description: description,
      id: uuid_v4(),
      date:
        new Date().getDate() +
        "." +
        (new Date().getMonth() + 1) +
        "." +
        new Date().getFullYear(),
      completed: false,
    };
    setData((prev) => [newState, ...prev]);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleOnAdd(title, description);
    setTitle("");
    setDescription("");
    onReverseOpen();
  };
  const onReverseOpen = () => setReverse(!reverse);
  const enabled = title.length > 3 && description.length > 3;
  return (
    <>
      {reverse ? (
        <section className="form form--wrapper">
          <img src={Zombie} alt="zombie" />
          <form className="adding form__adding">
            <input
              placeholder="Введите название твита..."
              className="adding__input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              placeholder="Введите содержимое поста..."
              rows={5}
              className="adding__textarea"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <div className="btn from__btn">
              <button
                className="btn__add"
                onClick={handleOnSubmit}
                disabled={!enabled}
              >
                Добавить
              </button>
              <button className="btn__cancel" onClick={onReverseOpen}>
                Отменить
              </button>
            </div>
          </form>
        </section>
      ) : (
        <div className="btn btn--wrapper">
          <div className="group btn__group">
            <button className="btn__twit" onClick={onReverseOpen}>
              Твитнуть
            </button>
            <button className="btn__twitDel" onClick={handleRemoveChecked}>
              Удалить выбранные твиты
            </button>
            <button className="btn__twitDel" onClick={openDialog}>
              Удалить все твиты
            </button>
          </div>

          <div>
            <input
              className="search__input"
              placeholder="Найдите твит..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
        </div>
      )}
      {showDialogRemove && (
        <div className="dialog list__dialog">
          <DialogRemoveAllTwits
            closeDialog={closeDialog}
            clearAllData={clearAllData}
          />
        </div>
      )}
    </>
  );
};

export default TwitForm;
