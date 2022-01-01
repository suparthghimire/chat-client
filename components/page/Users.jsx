import UserItem from "../partials/UserItem";
import { USER_MESSAGES } from "../../utils/constants";
export default function Users(props) {
  return (
    <div className={`h-100 px-3`}>
      {USER_MESSAGES.map((user, index) => {
        return <UserItem key={`user-info-${index}}`} user={user} />;
      })}
    </div>
  );
}
