import React, { PropsWithChildren } from "react";
import Header from "./header";
import Footer from "./footer";

const LandingLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;
