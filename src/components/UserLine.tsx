import { useState } from "react";
import { IUserProps } from "../types/types";

const UserLine = (props: IUserProps) => {
  const { user } = props;
  const [visible, setVisible] = useState(false);
  return (
    <li
      className="flex w-full justify-between text-gray-600 bg-slate-100 p-2 rounded-lg hover:text-blue-500 cursor-pointer items-center mb-3"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      <div className="flex items-center w-full">
        <img src={user.image} alt="avatar" width={20} height={20} />
        <span className="text-sm ml-2 w-full">
          {user.name + " " + user.lastName}
        </span>
        {visible ? <span className="relative right-0">→</span> : ""}
      </div>
    </li>
  );
};

export default UserLine;
