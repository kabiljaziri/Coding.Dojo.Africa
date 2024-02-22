class BankAccount:
    all_account=[]
    def __init__(self, int_rate, balance):
        self.int_rate = int_rate
        self.balance = balance
        BankAccount.all_account.append(self)

    def deposit(self, amount):
        if amount>0:
            self.balance+=amount
            print(f"Deposited ${amount}. New balance: ${self.balance}")
        else:
            print("Invalid deposit amount. Please deposit a positive amount.")
        return self

    def withdraw(self, amount):
        if amount<=self.balance:
            self.balance-=amount
            print(f"Withdrawn ${amount}. \nNew balance: ${self.balance}")
        else:
            print("Insufficient funds: Charging a $5 fee.")
            self.balance-=5
        return self

    def display_account_info(self):
        print(f"Your balance is: {self.balance}")

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

account = BankAccount(balance=500, int_rate=0.02)
account2 = BankAccount(balance=0,int_rate=0.05)
account.deposit(500).deposit(100).deposit(50).withdraw(1200).display_account_info()
account.yield_interest()
account2.deposit(90).deposit(50).withdraw(20).withdraw(10).withdraw(5).withdraw(200)
BankAccount.print_all_accounts_info()