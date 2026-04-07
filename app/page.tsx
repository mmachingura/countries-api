import NavBar from "./components/NavBar";
import TopBar from "./components/TopBar";
import Country from "./components/Country";
import StoreProvider from "./storeProvider";

export default function Home() {

  return (
    <StoreProvider>
      <TopBar />
      <NavBar />
      <Country />
    </StoreProvider>
  );
}
