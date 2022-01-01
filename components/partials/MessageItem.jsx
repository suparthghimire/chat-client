import styles from "../../styles/Index.module.scss";
import CircleImage from "../partials/CircleImage";
import { EmojiLaughingFill } from "react-bootstrap-icons";
export default function MessageItem({
  msg,
  first_msg,
  last_msg,
  middle_msg,
  single_msg,
}) {
  const my_id = 1;

  return (
    <li
      className={`w-100 d-flex align-items-end gap-2 position-relative ${
        msg.sender.id === my_id
          ? "flex-row-reverse justify-content-end"
          : "justify-content-end"
      }`}
    >
      <div
        className={`m-0 position-relative
        ${styles.msg_item} ${
          msg.sender.id === my_id
            ? `bg-light ${styles.msg_item_pull_right}`
            : `bg-primary text-white`
        } 
        ${first_msg && styles.first_msg}
        ${last_msg && styles.last_msg}
        ${middle_msg && styles.middle_msg} 
        ${single_msg && styles.single_msg} 
        
        p-3`}
      >
        <p className={`${styles.message_msg} m-0`}>{msg.msg}</p>
        <div
          role="button"
          className={`position-absolute border d-none bg-white text-dark shadow-sm ${
            styles.reaction_container
          } ${msg.sender.id === my_id ? "end-0" : "start-0"}`}
          style={{
            width: "25px",
            height: "25px",
            borderRadius: "100vh",
            zIndex: "999",
          }}
        >
          <EmojiLaughingFill />
        </div>
      </div>
      {last_msg ? (
        <CircleImage
          img_src={msg.sender.image}
          dim={50}
          img_alt={msg.sender.name}
        />
      ) : (
        <div style={{ width: "50px", height: "50px" }}></div>
      )}
    </li>
  );
}
