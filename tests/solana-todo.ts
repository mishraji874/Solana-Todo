import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { SolanaTodo } from "../target/types/solana_todo";
import { expect } from "chai";

describe("solana-todo", () => {
  // Configure the client to use the local cluster.
  const provider = anchor.AnchorProvider.env();
  anchor.setProvider(provider);

  const program = anchor.workspace.solanaTodo as Program<SolanaTodo>;

  it("Creates a todo account successfully", async () => {
    const user = provider.wallet.publicKey;
    const [todoAccountPda] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("todo-account"), user.toBuffer()],
      program.programId
    );

    const name = "Test User";
    const age = 25;

    await program.methods.createAccount(name, age)
      .accounts({
        todoAccount: todoAccountPda,
        userAccount: user,
      })
      .rpc();

    const account = await program.account.todoAccount.fetch(todoAccountPda);
    
    expect(account.owner.equals(user)).to.be.true;
    expect(account.name).to.equal(name);
    expect(account.age).to.equal(age);
    expect(account.todos.length).to.equal(0);
  });

  it("Fails to create account with invalid parameters", async () => {
    const user = provider.wallet.publicKey;
    const [todoAccountPda] = anchor.web3.PublicKey.findProgramAddressSync(
      [Buffer.from("todo-account"), user.toBuffer()],
      program.programId
    );

    try {
      await program.methods.createAccount("", 200) // Invalid name and age
        .accounts({
          todoAccount: todoAccountPda,
          userAccount: user,
        })
        .rpc();
      expect.fail("Should have failed with invalid parameters");
    } catch (err) {
      expect(err).to.be.an('error');
    }
  });
});
