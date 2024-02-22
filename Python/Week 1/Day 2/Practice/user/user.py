class user:
    def __init__(self,first_name,last_name,age,email):
        self.first_name=first_name
        self.last_name=last_name
        self.age=age
        self.email=email
        self.is_rewards_member=False
        self.gold_card_points=0
    
    def display(self):
        print ( f"first name: {self.first_name} \n last name: {self.last_name} \n age: {self.age} \n email: {self.email} \n reward memeber: {self.is_rewards_member} \n card point: {self.gold_card_points}")
    def enroll(self):
        self.is_rewards_member=True
        self.gold_card_points=200
        
    def spend_points(self, amount):
        self.gold_card_points-=amount



user1=user("kabil","jaziri",23,"jazirikabil7@gmail.com")
user1.display()

user1.enroll()
user1.display()

user1.spend_points(50)
user1.display()

user1.enroll()
user1.display()

user1.spend_points(80)
user1.display()


