import "./PhoneComponent.scss";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export interface IPhone {
  id: string;
  displayImageUrl: string;
  displayName: string;
  link: string;
}

export interface PhoneComponentProps {
  phone: IPhone;
  onHeartIconClick: (id: string) => void;
  isMarked?: boolean;
  onDeleteIconClick: (id: string) => void;
}
export default function PhoneComponent({
  phone: { displayName, displayImageUrl, link, id },
  onHeartIconClick,
  isMarked,
  onDeleteIconClick,
}: PhoneComponentProps) {
  const Icon = isMarked ? AiFillHeart : AiOutlineHeart;

  return (
    <div className={"phone-container"}>
      <div className="phone-info">
        <Link to={link}>
          <img src={displayImageUrl} alt={displayName} className={"image"} />
          <h4 className="phone-name">{displayName}</h4>
        </Link>
      </div>
      <div className="icon-container">
        <Icon size={25} role="button" onClick={() => onHeartIconClick(id)} />
        <BsFillTrashFill size={25} onClick={() => onDeleteIconClick(id)} />
      </div>
    </div>
  );
}
