use anchor_lang::prelude::*;

declare_id!("DBwSPFzCPmHLyqxxNtwNr9QmjPmA49sSNB9sETwmKaG9");



#[program]
pub mod solana_todo {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
