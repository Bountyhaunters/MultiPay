import { useAccount } from "wagmi";
import { ConnectKitButton } from "connectkit";
export default function Navbar() {
  const { address } = useAccount();
  return (
    <>
      <div className="flex flex-row justify-between items-center px-8 md:px-12 py-4 fixed w-full z-50">
        <h1 className="text-2xl text-white">MultiPay</h1>
        <div className="flex flex-row justify-center items-center">
          <ConnectKitButton />
        </div>
      </div>
    </>
  );
}
