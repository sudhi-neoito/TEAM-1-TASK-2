import React from "react";
import Header from "./components/Header";
import HorizotalScrollView from "./components/HorizotalScrollView";
import { Layout } from "./components/Layout";
import VerticalScrollVew from "./components/VerticalScrollView";

const App: React.FC = () => (
  <div className=" w-full h-screen flex justify-center items-center bg-[#0D0D0D]">
    <Layout>
      <Header />
      <HorizotalScrollView />
      <VerticalScrollVew />
    </Layout>
  </div>
);

export default App;
