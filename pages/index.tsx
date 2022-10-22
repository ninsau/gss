import { NextPage } from "next";
import MetaComponent from "../components/Meta";
import VouchersTableComponent from "../components/VouchersTable";

const Home: NextPage = () => {
  return (
    <>
      <MetaComponent title="Vouchers" />
      <VouchersTableComponent />
    </>
  );
};

export default Home;
