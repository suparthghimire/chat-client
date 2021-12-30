import Image from "next/image";
export default function UserInfo(props) {
  const { img_src, img_alt, dim } = props;
  return (
    <Image
      src={img_src}
      alt={img_alt}
      width={dim}
      height={dim}
      className="ratio ratio-1x1 rounded-circle"
    />
  );
}
