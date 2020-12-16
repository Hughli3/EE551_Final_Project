import pymongo
 
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["EE551"]
collection = db["home"]

# -------------- Checker ------------

def isExist(name):
    person = collection.find_one({"name":name})
    if (person):
        return True
    else:
        return False

# 