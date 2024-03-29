from flask_app.config.mysqlconnection import connectToMySQL

DATABASE = "users_schema"
# user.py
class User:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

#! all queries are classmethods
        
    #* =========== READ ALL ===========
        
    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL(DATABASE).query_db(query)

        # print(results)

        users_instances = []
        if results:
            for row in results:
                one_user = User(row)
                users_instances.append(one_user)

            return users_instances
        
        return []
        
    #* =========== CREATE ===========

    @classmethod
    def save(cls, data):

        query = """
                INSERT INTO users (first_name, last_name, email)
                VALUES (%(first_name)s, %(last_name)s,%(email)s);
                """
        result = connectToMySQL(DATABASE).query_db(query, data)
        # print("The id of the created car is: ", result)

        return result
    
    