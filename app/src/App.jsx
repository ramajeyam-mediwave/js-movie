import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "./Components/card";
import Input from "./Components/input";
import Button from "./Components/button";
import "./App.css";

function App() {
  const [titles, setTitles] = useState([]);
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { id: uuidv4(), title: title };
    const newTitles = [...titles, data];
    setTitles(newTitles);
    localStorage.setItem("titles", JSON.stringify(newTitles));
    setTitle("");
  };

  useEffect(() => {
    const storedTitles = JSON.parse(localStorage.getItem("titles"));
    if (storedTitles) {
      setTitles(storedTitles);
    }
  }, []);

  function deleteCard(id) {
    const filterArray = titles.filter((iteam) => iteam.id !== id);
    setTitles(filterArray);
    localStorage.setItem("titles", JSON.stringify(filterArray));
  }

  function UpdateCard(id, updatedTitle) {
    const updatedTitles = titles.map((item) => {
      if (item.id === id) {
        return { ...item, title: updatedTitle };
      }
      return item;
    });

    setTitles(updatedTitles);
    localStorage.setItem("titles", JSON.stringify(updatedTitles));
    return updatedTitle;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            label="Title"
            type="text"
            id="1"
            name="title"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <Button type="submit" name="Add" />
        </div>
      </form>

      {titles.map((item) => {
        return (
          <div key={item.id}>
            <Card
              values={item}
              deleteCard={() => deleteCard(item.id)}
              UpdateCard={(updatedTitle) => UpdateCard(item.id, updatedTitle)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
