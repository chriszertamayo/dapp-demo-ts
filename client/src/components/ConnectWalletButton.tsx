import { requestAccount } from "../utils/contractServices";

function ConnectWalletButton({
  setAccount,
}: {
  setAccount: (account: string) => void;
}) {
  const connectWallet = async () => {
    try {
      const account = await requestAccount();
      setAccount(account);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  return <button onClick={connectWallet}>Connect Web3 Wallet</button>;
}

export default ConnectWalletButton;
