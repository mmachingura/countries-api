import Data from "./data";
import StoreProvider from "./storeProvider";

export default function Home() {
  return (
    <main>
      <h1>Tester</h1>
      <StoreProvider>
        <Data />
      </StoreProvider>
    </main>
  );
}
