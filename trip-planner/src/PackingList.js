import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItems,
  onUpdateitems,
  onClearItems,
}) {
  const [sortby, setsortedby] = useState("input");

  let sorteditems;

  if (sortby === "input") {
    sorteditems = items;
  }
  if (sortby === "description") {
    sorteditems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortby === "packed") {
    sorteditems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sorteditems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItems={onDeleteItems}
            onUpdateitems={onUpdateitems}
          />
        ))}
      </ul>
      <select value={sortby} onChange={(e) => setsortedby(e.target.value)}>
        <option value="input">Sort by Input</option>
        <option value="description">Sort by Description</option>
        <option value="packed">Sort by Packed Status</option>
      </select>
      <button onClick={onClearItems}>Clear List</button>
    </div>
  );
}
