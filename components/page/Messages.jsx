import MessageItem from "../partials/MessageItem";
import { USER_MESSAGES } from "../../utils/constants";
export default function Messages(props) {
  const messages = [
    {
      id: 1,
      sender: {
        id: 1,
        name: "Suparth Narayan Ghimire",
        image: "https://source.unsplash.com/200x200",
      },
      msg: "Lorem ipsum dolor sit",
    },
    {
      id: 2,
      sender: {
        id: 1,
        name: "Suparth Narayan Ghimire",
        image: "https://source.unsplash.com/200x200",
      },
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium nisi placeat consectetur blanditiis fugit minus vitae tempora cupiditate, facilis animi a nobis modi ullam debitis veritatis consequuntur accusantium expedita alias repudiandae odit ab in molestias amet. Consectetur obcaecati iure ratione porro, aliquid dignissimos, voluptatibus suscipit ullam tempora magnam atque vel. Iste corrupti velit dolores odio, repellendus quo laudantium rem non, aliquam quos a numquam amet voluptates perferendis fugit quod rerum voluptate, eaque recusandae culpa reprehenderit magni. Asperiores perferendis explicabo hic fugit dolor minus adipisci magnam voluptate in, error aspernatur quisquam non impedit minima qui culpa necessitatibus facere voluptatem? Impedit?",
    },
    {
      id: 2,
      sender: {
        id: 1,
        name: "Suparth Narayan Ghimire",
        image: "https://source.unsplash.com/200x200",
      },
      msg: "Lorem ipsum dolor sit",
    },
    {
      id: 3,
      sender: {
        id: 2,
        name: "Shree Krishna Lamichhane",
        image: "https://source.unsplash.com/200x200",
      },
      msg: "Lorem ipsum dolor sit",
    },
    {
      id: 4,
      sender: {
        id: 1,
        name: "Suparth Narayan Ghimire",
        image: "https://source.unsplash.com/200x200",
      },
      msg: "Lorem ipsum dolor sit",
    },
    {
      id: 1,
      sender: {
        id: 1,
        name: "Suparth Narayan Ghimire",
        image: "https://source.unsplash.com/200x200",
      },
      msg: "Lorem ipsum dolor sit",
    },
    {
      id: 2,
      sender: {
        id: 1,
        name: "Suparth Narayan Ghimire",
        image: "https://source.unsplash.com/200x200",
      },
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium nisi placeat consectetur blanditiis fugit minus vitae tempora cupiditate, facilis animi a nobis modi ullam debitis veritatis consequuntur accusantium expedita alias repudiandae odit ab in molestias amet. Consectetur obcaecati iure ratione porro, aliquid dignissimos, voluptatibus suscipit ullam tempora magnam atque vel. Iste corrupti velit dolores odio, repellendus quo laudantium rem non, aliquam quos a numquam amet voluptates perferendis fugit quod rerum voluptate, eaque recusandae culpa reprehenderit magni. Asperiores perferendis explicabo hic fugit dolor minus adipisci magnam voluptate in, error aspernatur quisquam non impedit minima qui culpa necessitatibus facere voluptatem? Impedit?",
    },
    {
      id: 2,
      sender: {
        id: 1,
        name: "Suparth Narayan Ghimire",
        image: "https://source.unsplash.com/200x200",
      },
      msg: "Lorem ipsum dolor sit",
    },
    {
      id: 3,
      sender: {
        id: 2,
        name: "Shree Krishna Lamichhane",
        image: "https://source.unsplash.com/200x200",
      },
      msg: "Lorem ipsum dolor sit",
    },
    {
      id: 4,
      sender: {
        id: 1,
        name: "Suparth Narayan Ghimire",
        image: "https://source.unsplash.com/200x200",
      },
      msg: "Lorem ipsum dolor sit",
    },
    {
      id: 1,
      sender: {
        id: 1,
        name: "Suparth Narayan Ghimire",
        image: "https://source.unsplash.com/200x200",
      },
      msg: "Lorem ipsum dolor sit",
    },
    {
      id: 2,
      sender: {
        id: 1,
        name: "Suparth Narayan Ghimire",
        image: "https://source.unsplash.com/200x200",
      },
      msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae laudantium nisi placeat consectetur blanditiis fugit minus vitae tempora cupiditate, facilis animi a nobis modi ullam debitis veritatis consequuntur accusantium expedita alias repudiandae odit ab in molestias amet. Consectetur obcaecati iure ratione porro, aliquid dignissimos, voluptatibus suscipit ullam tempora magnam atque vel. Iste corrupti velit dolores odio, repellendus quo laudantium rem non, aliquam quos a numquam amet voluptates perferendis fugit quod rerum voluptate, eaque recusandae culpa reprehenderit magni. Asperiores perferendis explicabo hic fugit dolor minus adipisci magnam voluptate in, error aspernatur quisquam non impedit minima qui culpa necessitatibus facere voluptatem? Impedit?",
    },
    {
      id: 2,
      sender: {
        id: 1,
        name: "Suparth Narayan Ghimire",
        image: "https://source.unsplash.com/200x200",
      },
      msg: "Lorem ipsum dolor sit",
    },
    {
      id: 3,
      sender: {
        id: 2,
        name: "Shree Krishna Lamichhane",
        image: "https://source.unsplash.com/200x200",
      },
      msg: "Lorem ipsum dolor sit",
    },
    {
      id: 4,
      sender: {
        id: 1,
        name: "Suparth Narayan Ghimire",
        image: "https://source.unsplash.com/200x200",
      },
      msg: "Lorem ipsum dolor sit",
    },
  ];
  return (
    <div className="h-100 px-3 py-0 list-unstyled">
      <ul
        className="d-flex flex-column gap-1 list-unstyled pe-5 mt-2"
        style={{ minHeight: "82vh", maxHeight: "82vh", overflowY: "auto" }}
      >
        {messages.map((msg, index) => {
          return (
            <MessageItem
              msg={msg}
              key={index}
              last_msg={msg.sender.id !== messages[index + 1]?.sender.id}
              first_msg={msg.sender.id !== messages[index - 1]?.sender.id}
              middle_msg={
                !(msg.sender.id !== messages[index + 1]?.sender.id) &&
                !(msg.sender.id !== messages[index - 1]?.sender.id)
              }
              single_msg={
                msg.sender.id !== messages[index + 1]?.sender.id &&
                msg.sender.id !== messages[index - 1]?.sender.id
              }
            />
          );
          {
            /* middle_msg={msg.sender.id !== messages[index]?.sender.id} */
          }
        })}
      </ul>
    </div>
  );
}
