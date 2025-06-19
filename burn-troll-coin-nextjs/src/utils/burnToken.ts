import { Connection, PublicKey, Transaction } from '@solana/web3.js';
import { getAssociatedTokenAddress, createTransferInstruction } from '@solana/spl-token';

export const burnTokens = async (wallet: any, amount: number) => {
  const connection = new Connection('https://api.mainnet-beta.solana.com');
  const publicKey = wallet.publicKey;
  const mint = new PublicKey('5UUH9RTDiSpq6HKS6bp4NdU9PNJpXRXuiw6ShBTBhgH2');
  const burnAddress = new PublicKey('11111111111111111111111111111111');

  const sourceTokenAccount = await getAssociatedTokenAddress(mint, publicKey);

  const tx = new Transaction().add(
    createTransferInstruction(
      sourceTokenAccount,
      await getAssociatedTokenAddress(mint, burnAddress, true),
      publicKey,
      amount * (10 ** 9)
    )
  );

  try {
    const signature = await wallet.sendTransaction(tx, connection);
    await connection.confirmTransaction(signature, 'confirmed');
    return { success: true, signature };
  } catch (error) {
    console.error('Burn failed:', error);
    return { success: false, error };
  }
};