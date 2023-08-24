import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initialFriends = [
  {
    id: 118836,
    name: "Aman",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -50,
  },
  {
    id: 933372,
    name: "Jafar",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Kaushal",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [showAddFriend, setAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selected, setselected] = useState(null);

  function handleshowFriend() {
    setAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
  }
  function handleSelected(friend) {
    setselected((current) => (current?.id === friend.id ? null : friend));
    setAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selected.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setselected(null);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          handleSelected={handleSelected}
          selected={selected}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleshowFriend}>
          {showAddFriend ? "Close" : "Add Friend"}
        </Button>
      </div>

      {selected && (
        <FormSplitBill selected={selected} handleSplitBill={handleSplitBill} />
      )}
    </div>
  );
}

function FriendsList({ selected, friends, handleSelected }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          key={friend.id}
          handleSelected={handleSelected}
          selected={selected}
        />
      ))}
    </ul>
  );
}

function Friend({ selected, friend, handleSelected }) {
  const isSelected = selected?.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ₹ {friend.balance}
        </p>
      )}
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ₹ {Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance === 0 && <p>You and {friend.name} are equal.</p>}
      <Button onClick={() => handleSelected(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();
    const id = uuidv4();

    if (!name || !id) return;

    const newFriend = {
      name,
      id,
      image: `${image}?=${id}`,
      balance: 0,
    };

    onAddFriend(newFriend);

    setImage("https://i.pravatar.cc/48");
    setName("");
  }
  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👦Friend Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label>📷Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selected, handleSplitBill }) {
  const [billValue, setBillValue] = useState("");
  const [yourexpense, setyourexpense] = useState("");
  const friendexpense = billValue ? billValue - yourexpense : "";
  const [whoIsPaying, setwhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!billValue || !yourexpense) return;
    handleSplitBill(whoIsPaying === "user" ? friendexpense : -yourexpense);
  }
  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split your Bill with {selected.name}</h2>
      <label>💴Bill Value</label>
      <input
        type="text"
        value={billValue}
        onChange={(e) => setBillValue(Number(e.target.value))}
      />
      <label>👨‍💼Your Expense</label>
      <input
        type="text"
        value={yourexpense}
        onChange={(e) =>
          setyourexpense(
            Number(e.target.value) > billValue
              ? yourexpense
              : Number(e.target.value)
          )
        }
      />
      <label>👨{selected.name}'s Expense</label>
      <input type="text" disabled value={friendexpense} />
      <label>💸Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setwhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selected.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
