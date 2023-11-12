import { useDebugValue, useState } from "react";
import "./index.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  const [items, setItems] = useState(faqs);

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

function Accordion({ items }) {
  console.log(items);
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem num={index + 1} title={item.title} text={item.text} />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  console.log(title, text);
  return (
    <div className={isOpen ? "open item" : "item"}>
      <p className="number">
        {num < 10 && "0"}
        {num}
      </p>
      <p className="text">{title}</p>
      <p className="icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "➖" : "➕"}
      </p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
