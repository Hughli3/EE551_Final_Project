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


# -------------- add ---------------
def addHome(name, image):
    if(isExist(name)): 
        raise Exception("name is already exist")

    home = {
        "name":name,
        "image": image
    }
    collection.insert_one(home)
    output = collection.find_one({"name":name})
    return output if output!= None else None

def getHome(name):
    if(not isExist(name)): 
        raise Exception("name not found")

    projects = collection.find_one({"name":name})
    return projects