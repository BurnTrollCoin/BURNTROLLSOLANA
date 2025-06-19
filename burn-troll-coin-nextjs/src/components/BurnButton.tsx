import { useWallet } from '@solana/wallet-adapter-react';
import { useState } from 'react';
import { burnTokens } from '../utils/burnToken';

const BurnButton = () => {
  const { publicKey, wallet, connected } = useWallet();
  const [status, setStatus] = useState('');
  const [signature, setSignature] = useState('');

  const handleBurn = async () => {
    if (!connected) {
      setStatus('Please connect wallet');
      return;
    }

    setStatus('Burning...');
    const result = await burnTokens(wallet.adapter, 1);

    if (result.success) {
      setSignature(result.signature);
      setStatus('Burn successful!');
    } else {
      setStatus('Burn failed');
    }
  };

  return (
    <div>
      <button onClick={handleBurn} className="bg-red-500 text-white px-4 py-2 rounded">
        🔥 Burn Troll Coin
      </button>
      <div>{status}</div>
      {signature && (
        <a
          href={`https://solscan.io/tx/${signature}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 underline"
        >
          View Transaction
        </a>
      )}
    </div>
  );
};

export default BurnButton;