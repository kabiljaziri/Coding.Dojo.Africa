from flask_app.config.mysqlconnection import connectToMySQL
from pprint import pprint
from flask_app.models import user
from flask_app import DATABASE



class Recipies :
    def __init__(self,data):
        self.id = data["id"]
        self.name = data["name"]
        self.time = data["time"]
        self.description = data["description"]
        self.instruction = data["instruction"]
        self.created_at = data["created_at"] 
        self.updated_at = data["updated_at"]


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM recipies;"
        results = connectToMySQL(DATABASE).query_db(query)
        recipies = []
        for row in results:
            one_recipie = cls(row)
            recipies.append(one_recipie)
        return recipies
