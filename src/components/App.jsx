import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = useState([]);

  function handleClick(notes) {
    setItems((prevItems) => {
      return [...prevItems, notes];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd = {handleClick}/>
      {items.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content = {item.content}
          removeItem = {deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
