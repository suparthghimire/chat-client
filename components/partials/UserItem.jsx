import CircleImage from "./CircleImage";
import styles from "../../styles/Index.module.scss";

import { PatchCheck, PatchCheckFill } from "react-bootstrap-icons";
export default function UserItem({ user }) {
  let delivery_tag = "";
  if (user.msg_delivery_status === "seen") {
    delivery_tag = (
      <CircleImage img_src={user.image} img_alt={user.name} dim={20} />
    );
  } else if (user.msg_delivery_status === "sent") {
    delivery_tag = <PatchCheck />;
  } else if (user.msg_delivery_status === "delivered") {
    delivery_tag = <PatchCheckFill />;
  }

  return (
    <div
      role="button"
      className={`py-3 px-3 bg-white my-3 rounded d-flex gap-3 align-items-center position-relative ${styles.user_item}`}
    >
      <CircleImage img_src={user.image} img_alt={user.name} dim={40} />
      <div className="d-flex flex-column">
        <p className="fw-bold m-0 p-0">{user.name}</p>
        <p
          className={
            (user.msg_delivery_status === "unread" ? "fw-bold" : "") +
            " m-0 p-0"
          }
        >
          {user.sent_by_me ? "You:" : ""} {user.last_msg}{" "}
          <small className="text-muted" style={{ fontSize: "0.7rem" }}>
            {user.last_msg_time}
          </small>
        </p>
      </div>
      <div
        className="position-absolute"
        style={{ right: "0.75rem", bottom: "calc(50% - 10px)" }}
      >
        {delivery_tag}
      </div>
    </div>
  );
}

// read -> Light Text
// unread -> Bold Text
// seen -> Profile Image
// sent -> Border Tick
// delivered -> Filled Tick
