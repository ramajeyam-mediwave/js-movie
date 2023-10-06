import React, { useEffect, useState } from "react";
import Input from "./Components/input";
import Button from "./Components/Button";
import Card from "./Components/card";

function App() {
  const [titles, setTitles] = useState([]);
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitles(() => {
      const data = { id: titles.length + 1, title: title };
      return [...titles, data];
    });
    setTitle("");
  };
  useEffect(() => {
    console.log(titles);
  }, [titles]);
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
          <div>
            <Card values={item} />
            
          </div>
        );
      })}
    </div>
  );
}
export default App;
