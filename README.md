# Solana Todo App

A simple todo application built on Solana using Anchor framework.

## Features
- Create a todo account
- Store multiple tasks with title, description, and completion status
- Basic account management

## Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [Yarn](https://yarnpkg.com/)
- [Rust](https://www.rust-lang.org/)
- [Solana CLI](https://docs.solana.com/cli/install-solana-cli-tools)
- [Anchor](https://www.anchor-lang.com/docs/installation)

## Installation
1. Clone the repository
    ```bash
    git clone https://github.com/mishraji874/Solana-Todo.git
    cd Solana-Todo
    ```
2. Install dependencies:
    ```bash
    yarn install
    ```
3. Compile the Anchor program:
    ```bash
    anchor build
    ```
4. Run the tests:
    ```bash
    anchor test
    ```
5. Deploy the program to Solana:
    ```bash
    anchor deploy
    ```

## Program Structure

- `programs/solana-todo/src/lib.rs` : Main program logic
- `tests/solana-todo.ts` : Test suite
- `Anchor.toml` : Configuration file

## Smart Contract Details

### Accounts
- TodoAccount : Stores user's todo list with:
  - Owner's public key
  - User's name and age
  - List of tasks

### Instructions
- create_account : Creates a new todo account for a user

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgements
- Built using Anchor
- Inspired by Solana's developer ecosystem
```plaintext
This README provides a comprehensive overview of the project, including installation instructions, program structure, and usage details. It follows standard markdown formatting and includes all necessary information for developers to understand and work with the project.
```