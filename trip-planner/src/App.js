import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setitems] = useState([]);

  function handleAddItems(item) {
    setitems((items) => [...items, item]);
  }

  function handleDeleteItems(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }

  function handleUpdateItems(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearItems() {
    const confirmed = window.confirm(
      "Do you want to clear the items in your list"
    );
    if (confirmed) setitems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onUpdateitems={handleUpdateItems}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
