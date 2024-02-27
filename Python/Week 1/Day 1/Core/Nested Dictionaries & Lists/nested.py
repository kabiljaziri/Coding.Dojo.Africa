# 1)
x = [[5, 2, 3], [10, 8, 9]]
students = [
    {"first_name": "Michael", "last_name": "Jordan"},
    {"first_name": "John", "last_name": "Rosales"},
]
sports_directory = {
    "basketball": ["Kobe", "Jordan", "James", "Curry"],
    "soccer": ["Messi", "Ronaldo", "Rooney"],
}
z = [{"x": 10, "y": 20}]


x[1][0] = 15
print(x)
students[0]["last_name"] = "Micheal"
svg = sports_directory["soccer"]
for i in range(0, len(svg)):
    if svg[i] == "Messi":
        svg[i] = "Andres"
print(sports_directory)

z[0]["y"] = 30
print(z)

# 2
students = [
    {"first_name": "Michael", "last_name": "Jordan"},
    {"first_name": "John", "last_name": "Rosales"},
    {"first_name": "Mark", "last_name": "Guillen"},
    {"first_name": "KB", "last_name": "Tonel"},
]


def iterateDictionary(students):
    for i in range(0, len(students)):
        print(
            f"first_name - {students[i]['first_name']}, last_name -{students[i]['last_name']}"
        )


iterateDictionary(students)

# 3A
def iterateDictionary(key_name, students):
    for i in range(0, len(students)):
        print(f"{students[i][key_name]}")


iterateDictionary("first_name", students)


# 3B
def iterateDictionary(key_name, students):
    for i in range(0, len(students)):
        print(f"{students[i][key_name]}")


iterateDictionary("last_name", students)
# 4
dojo = {
    "locations": ["San Jose", "Seattle", "Dallas", "Chicago", "Tulsa", "DC", "Burbank"],
    "instructors": ["Michael","Amy","Eduardo","Josh","Graham","Patrick","Minh","Devon",]
}
def printInfo(dojo):
    size = len(dojo["locations"])
    print(str(size) +" "+ "Locations")
    for x in range(0, len(dojo["locations"])):
        print(f"{dojo['locations'][x]}")
    size2 = len(dojo["instructors"])
    print(str(size2) +" "+ "instructors")
    for l in range(0,len(dojo["instructors"])):
        print(f"{dojo['instructors'][l]}")


printInfo(dojo)