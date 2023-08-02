import { NextPage } from "next";
import LoginForm from "./LoginForm";
import Header from "./common/header";

const Home: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col">
      <Header />
      <LoginForm className="flex-1 mx-auto justify-center px-4 py-4" />
    </div>
  );
};

export default Home;
