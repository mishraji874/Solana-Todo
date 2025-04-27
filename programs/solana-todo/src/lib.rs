use anchor_lang::prelude::*;

declare_id!("DBwSPFzCPmHLyqxxNtwNr9QmjPmA49sSNB9sETwmKaG9");

const TODO_ACCOUNT_SEED: &[u8] = b"todo-account";

#[derive(AnchorSerialize, AnchorDeserialize, Debug, Clone)]
struct Task {
    title: String,
    description: String,
    complete: bool,
}

#[account]
pub struct TodoAccount {
    owner: PubKey,
    age: u8,
    name: String,
    todos: Vec<Task>,
}

#[derive(Accounts)]
pub struct CreateAccount<'info> {
    #[account(mut)]
    pub user_account: Signer<'info>,
    #[account(
        init,
        space=1024,
        payer=user_account,
        seeds=[TODO_ACCOUNT_SEED, user_account.key().as_ref()],
        bump
    )]
    pub todo_account: Account<'info, TodoAccount>,
    pub system_program: Program<'info, System>,
}

#[program]
pub mod solana_todo {
    use super::*;

    pub fn create_account(ctx: Context<CreateAccount>, name: String, age: u8) -> Result<()> {
        *ctx.accounts.todo_account = TodoAccount {
            name,
            age,
            owner: ctx.accounts.user_account.key(),
            todos: vec![],
        };
    }
}