'use client'
import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import { Countries } from "./countries/countries";
import StoreProvider from "./storeProvider";

export default function Home() {
  return (
    <StoreProvider>
      <TopBar />
      <NavBar />
      <Countries />
    </StoreProvider>
  );
}
