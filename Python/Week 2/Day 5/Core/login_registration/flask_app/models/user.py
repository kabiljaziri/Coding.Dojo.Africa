from flask_app.config.mysqlconnection import connectToMySQL
from flask import flash
# flash: Thez l error message lel template
from flask_app import DATABASE
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
class User:
    def __init__(self,data_dict):
        self.id = data_dict['id']
        self.first_name = data_dict['first_name']
        self.last_name = data_dict['last_name']
        self.email = data_dict['email']
        self.password = data_dict['password']
        # self.confirm_password = data_dict['confirm_password']
        self.created_at = data_dict['created_at']
        self.updated_at = data_dict['updated_at']

    # Queries = classmethods

    @classmethod
    def create(cls,data):
        query = """
                INSERT INTO users (first_name,last_name, email, password)
                        VALUES (%(first_name)s,%(last_name)s, %(email)s, %(password)s);"""
        
        # INSERT STATEMENT RETURNS THE NEW INSERTED ROW ID
        db_result = connectToMySQL(DATABASE).query_db(query,data)
        print("INSERT STATEMENT RETURN : ", db_result, "*"*25)
        return db_result
    

    @classmethod
    def get_by_id(cls,data):
        query = """ SELECT * FROM users WHERE id=%(id)s;"""
        db_result = connectToMySQL(DATABASE).query_db(query,data)
        print ("*****",db_result,"*****")
        user = cls(db_result[0])
        return user


    @classmethod
    def get_by_email(cls,data):
        query = """ SELECT * FROM users WHERE email=%(email)s;"""
        db_result = connectToMySQL(DATABASE).query_db(query,data)
        print ("*****",db_result,"*****")
        if db_result:
            return cls(db_result[0])
        return False
        # user = cls(db_result[0])
        # return user


    @staticmethod
    def validate(data):
        is_valid=True
    # First Name Validation
        if len(data ['first_name'])<2:
            flash('First Name Too Short!')
            is_valid=False
    # Last Name Validation
        if len(data ['last_name'])<2:
            flash('Last Name Too Short!')
            is_valid=False
    
    # EMAIL Validation
        if not EMAIL_REGEX.match(data['email']): 
            flash('Email is not Valid!')
            is_valid = False

    # PASSWORDS Validation
        if len(data['password'])<8:
            flash('Password must be 8 characters!')
            is_valid=False
    # PASSWORD CONFIM Validation
        elif data['password']!= data['confirm_password']:
            flash('Passwords must match!')
            is_valid=False

        return is_valid