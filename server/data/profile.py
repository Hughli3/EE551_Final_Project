import pymongo
 
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["EE551"]
collection = db["profile"]

# -------------- Checker ------------
def isExist(name):
    person = collection.find_one({"name":name})
    print(person)
    if (person):
        return True
    else:
        return False

# -------------- add --------------- 
def addProfile(name, age, description):

    profile = {
        "name": name,
        "age": age,
        "description": description
    }
    collection.insert_one(profile)
    output = collection.find_one({"name":name})
    return output if output!= None else None

# ---------------- get -------------
def getProfile(name):
    if(not isExist(name)): 
        raise Exception("name not found")
    profile = collection.find_one({"name":name})
    return profile


    