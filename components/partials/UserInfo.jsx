import CircleImage from "./CircleImage";
export default function UserInfo(props) {
  const { user_img, user_name, image_dim } = props;
  return (
    <div className="d-flex align-items-center gap-3">
      <CircleImage img_src={user_img} dim={image_dim} img_alt={user_name} />
      <h4>{user_name}</h4>
    </div>
  );
}
