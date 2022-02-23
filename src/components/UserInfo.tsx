import { IUserProps } from "../types/types";

const UserInfo = (props: IUserProps) => {
  const { user } = props;
  return (
    <div className="w-full">
      <div className="flex h-3/6 pt-10 items-center justify-center w-full h-2/5 flex-col">
        <img className="h-2/12 w-2/12" alt="avatar" src={user.image} />
        <p className="mt-4">{`${user.name} ${user.lastName}`}</p>
      </div>
      <div className="flex h-2/6 mt-10 w-full flex items-center pl-5 pt-2">
        <div className="flex h-max w-full flex-col items-center">
          <h1 className="text-xl font-bold w-full pt-5 ">
            Phone:{" "}
            <span className="pl-5 text-m font-normal ">{user.phone}</span>
          </h1>
          <h1 className="text-xl font-bold w-full pt-5">
            URL:{" "}
            <a href={user.url} className="pl-5 text-m font-normal">
              {user.url}
            </a>
          </h1>
          <h1 className="text-xl font-bold w-full pt-5">
            Email:{" "}
            <a href="/" className="pl-5 text-m font-normal">
              {user.email}
            </a>
          </h1>
        </div>
      </div>
      <div className="w-full h-1/6 flex justify-center items-center">
        <button className="w-5/6 h-12 rounded-md bg-indigo-500 text-white">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
