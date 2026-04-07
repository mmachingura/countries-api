import TopBar from "../components/TopBar";
import StoreProvider from "../storeProvider";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
        <div>
            <TopBar />
            <div className="w-24 h-auto my-8 mx-2 bg-white flex gap-1 items-center px-4 py-2 shadow-md overflow-hidden outline-none border-none justify-center">
                <IoIosArrowRoundBack className="text-2xl text-grey-950" />
                <span className="text-grey-950"><Link href="/">Back</Link></span>
            </div>
            <main>{children}</main>
        </div>
    </StoreProvider>
  );
}
