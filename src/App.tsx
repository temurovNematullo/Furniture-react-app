import React, { useEffect, useRef } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import FurnitureSection from "./components/OurFirnitureSection/OurFurnitureSection";
import ClientReviewsSection from "./components/ClientREviewsSection/ClientReviewsSection";
import Footer from "./components/Footer/Footer";
import LoginForm from "./components/Auth/authUsers";
import UserForm from "./components/UserForm/userForm";
import UserFormWithoutZod from "./components/UserForm/UserFormwithoutZod";
import { setToken } from "./reduxTK/slices/authSlice";
import "./styles/styles.scss";
import { useAppDispatch } from "./hooks/hooks";

function App() {
  const dispatch = useAppDispatch();
  const furnitureRef = useRef<HTMLDivElement>(null);

  const handleScrollToComponent = () => {
    furnitureRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const token = localStorage.getItem("fakeToken");
    dispatch(setToken(token));
    console.log(token);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<UserFormWithoutZod />} />
      </Routes>
      <Header handleScroll={handleScrollToComponent} />
      <MainSection />
      <AboutUsSection />
      <ServiceSection />
      <FurnitureSection ref={furnitureRef} />
      <ClientReviewsSection />
      <Footer />
    </div>
  );
}

export default App;
