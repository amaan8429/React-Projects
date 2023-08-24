export default function Item({ item, onDeleteItems, onUpdateitems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onClick={() => onUpdateitems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}
