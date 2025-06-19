import Head from 'next/head';
import dynamic from 'next/dynamic';
import BurnButton from '../src/components/BurnButton';
import BurnCounter from '../src/components/BurnCounter';

const WalletConnect = dynamic(() => import('../src/components/WalletConnect'), { ssr: false });

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <Head>
        <title>Burn Troll Coin</title>
      </Head>
      <h1 className="text-4xl mb-4">🔥 Burn Troll Coin 🔥</h1>
      <WalletConnect />
      <BurnButton />
      <BurnCounter />
    </div>
  );
}