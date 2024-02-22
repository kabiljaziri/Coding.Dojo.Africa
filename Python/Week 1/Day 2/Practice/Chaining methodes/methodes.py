class User:
    def __init__(self, first_name, last_name, email, age, is_rewards_member=False, gold_card_points=0):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = is_rewards_member
        self.gold_card_points = gold_card_points

    def display_info(self):
        print("First Name:", self.first_name)
        print("Last Name:", self.last_name)
        print("Email:", self.email)
        print("Age:", self.age)
        print("Reward Member:", self.is_rewards_member)
        print("Gold Card Points:", self.gold_card_points)
        return self

    def enroll(self, points=200):
        if not self.is_rewards_member:
            self.is_rewards_member = True
            self.gold_card_points += points
        return self

    def spend_points(self, amount):
        if self.is_rewards_member & self.gold_card_points >= amount:
            self.gold_card_points -= amount
            print(f"Spend {amount} points. Remove points: {self.gold_card_points}")
        else:
            print("Not enough points to spend.")

user1 = User("Kabil", "Jaziri", "jazirikabil7@gmail.com", 23)
user2 = User('Medali','Midessi', 'MedaliMidessi@gmail.com',20)
user1.display_info().enroll().spend_points(50)
user2.display_info().enroll().spend_points(80)
