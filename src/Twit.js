import React, { useState, useEffect } from "react";
import TwitList from "./components/TwitList";
import TwitForm from "./components/TwitForm";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Twit = () => {
  const [data, setData] = useState([]);
  const [editingTitle, setEditingTitle] = useState("");
  const [editingDescription, setEditingDescription] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("data") || "[]");
    setData(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const handleRemove = (id) => {
    setData(data.filter((inner) => inner.id !== id));
  };

  const handleRemoveChecked = () => {
    setData(data.filter((inner) => inner.completed !== true));
  };

  const updateData = (id, editingTitle, editingDescription) => {
    const updated = data.map((inner) => {
      if (id === inner.id) {
        return {
          ...inner,
          title: editingTitle,
          description: editingDescription,
        };
      }
      return inner;
    });
    setData(updated);
  };

  const checkState = (id) => {
    let checkData = [...data].map((inner) => {
      if (inner.id === id) {
        inner.completed = !inner.completed;
      }
      return inner;
    });
    setData(checkData);
  };

  const filteredList = data.filter((inner) =>
    inner.title.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  const clearAllData = () => {
    setData([]);
  };

  return (
    <>
      <Header />
      <TwitForm
        clearAllData={clearAllData}
        data={data}
        setData={setData}
        search={search}
        setSearch={setSearch}
        handleRemoveChecked={handleRemoveChecked}
      />
      <TwitList
        checkState={checkState}
        data={filteredList}
        onDelete={handleRemove}
        onEdit={updateData}
        setEditingTitle={setEditingTitle}
        setEditingDescription={setEditingDescription}
        editingTitle={editingTitle}
        editingDescription={editingDescription}
      />
      <Footer />
    </>
  );
};

export default Twit;
