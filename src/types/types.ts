export interface IUser {
  id: number;
  name: string;
  lastName: string;
  phone: string;
  url: string;
  email: string;
  image: string;
}
export interface IUserProps {
  user: {
    id: number;
    name: string;
    lastName: string;
    phone: string;
    url: string;
    email: string;
    image: string;
  };
}
