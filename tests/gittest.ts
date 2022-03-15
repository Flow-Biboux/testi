import * as anchor from '@project-serum/anchor';
import { Program } from '@project-serum/anchor';
import { Gittest } from '../target/types/gittest';

describe('gittest', () => {

  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.Provider.env());

  const program = anchor.workspace.Gittest as Program<Gittest>;

  it('Is initialized!', async () => {
    // Add your test here.
    const tx = await program.rpc.initialize({});
    console.log("Your transaction signature", tx);
  });
});
