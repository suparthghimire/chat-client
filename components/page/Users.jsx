export default function Users(props) {
  let users = [
    {
      id: 1,
      name: "Shree Krishna Lamichhane",
      image: "https://source.unsplash.com/200x200",
      last_msg: "Oe Ija Na",
      sent_by_me: true,
      last_msg_time: "12:00",
      msg_delivery_status: "delivered",
    },
    {
      id: 2,
      name: "Shree Krishna Lamichhane",
      image: "https://source.unsplash.com/200x200",
      last_msg: "Oe Ija Na",
      sent_by_me: true,
      last_msg_time: "12:00",
      msg_delivery_status: "delivered",
    },
    {
      id: 3,
      name: "Shree Krishna Lamichhane",
      image: "https://source.unsplash.com/200x200",
      last_msg: "Oe Ija Na",
      sent_by_me: true,
      last_msg_time: "12:00",
      msg_delivery_status: "delivered",
    },
    {
      id: 4,
      name: "Shree Krishna Lamichhane",
      image: "https://source.unsplash.com/200x200",
      last_msg: "Oe Ija Na",
      sent_by_me: true,
      last_msg_time: "12:00",
      msg_delivery_status: "delivered",
    },
  ];
  return <div className={`h-100 border ${props.className}`}>Hello</div>;
}
