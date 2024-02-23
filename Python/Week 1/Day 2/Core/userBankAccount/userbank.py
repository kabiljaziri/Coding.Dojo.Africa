class BankAccount:
    all_account = []

    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_account.append(self)

    def deposit(self, amount):
        if amount > 0:
            self.balance += amount
            print(f"Deposited ${amount}. New balance: ${self.balance}")
        else:
            print("Invalid deposit amount. Please deposit a positive amount.")
        return self

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
            print(f"Withdrawn ${amount}. \nNew balance: ${self.balance}")
        else:
            print("Insufficient funds: Charging a $5 fee.")
            self.balance -= 5
        return self

    def display_account_info(self):
        print(f"Your balance is: ${self.balance}")

    def yield_interest(self):
        if self.balance > 0:
            int_earned = self.balance * self.int_rate
            self.balance += int_earned
            print(f"Interest earned: ${int_earned}. \nNew balance: ${self.balance}")
        else:
            print("No interest earned. The balance is not positive.")
        return self

    @classmethod
    def print_all_accounts_info(cls):
        print("All Bank Accounts:")
        for account in cls.all_account:
            account.display_account_info()


class User:
    def __init__(self, name, email, accounts=None):
        self.name = name
        self.email = email
        self.accounts = accounts or []

    def create_account(self, interest_rate=0.01, balance=0):
        new_account = BankAccount(interest_rate, balance)
        self.accounts.append(new_account)
        return new_account

    def make_deposit(self, amount, account_index=0):
        if 0 <= account_index < len(self.accounts):
            self.accounts[account_index].deposit(amount)
        else:
            print("Incorrect input please try again")

    def make_withdrawal(self, amount, account_index=0):
        if 0 <= account_index < len(self.accounts):
            self.accounts[account_index].withdraw(amount)
        else:
            print("Incorrect input please try again")

    def display_user_balance(self, account_index=0):
        if 0 <= account_index < len(self.accounts):
            print(f"User: {self.name}, Account {account_index} Balance: ${self.accounts[account_index].balance}")
        else:
            print("Incorrect input please try again")

    def transfer_money(self, amount, other_user, from_account_index=0, to_account_index=0):
        if 0 <= from_account_index < len(self.accounts) and 0 <= to_account_index < len(other_user.accounts):
            self.accounts[from_account_index].withdraw(amount)
            other_user.accounts[to_account_index].deposit(amount)
        else:
            print("Verify the account indexes")


user1 = User("john", "john@email.com", [])
user2 = User("johny", "johny@email.com", [])

user1_account1 = user1.create_account(interest_rate=0.02, balance=500)
user1_account2 = user1.create_account(interest_rate=0.01)

user2_account1 = user2.create_account(interest_rate=0.015, balance=1000)

user1.make_deposit(200, account_index=0)
user1.make_withdrawal(50, account_index=0)
user1.display_user_balance(account_index=0)

user2.make_deposit(300, account_index=0)
user2.transfer_money(100, user1, from_account_index=0, to_account_index=0)

user1.display_user_balance(account_index=0)
user2.display_user_balance(account_index=0)

BankAccount.print_all_accounts_info()