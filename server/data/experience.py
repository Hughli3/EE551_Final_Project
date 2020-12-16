import pymongo
 
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["EE551"]
collection = db["experience"]

# -------------- Checker ------------
def isExist(name):
    person = collection.find_one({"name":name})
    # print(person)
    if (person):
        return True
    else:
        return False

# -------------- add ---------------
def addExperience(name, education, careers):
    if(isExist(name)): 
        raise Exception("name is already exist")
    experience = {
        "name":name,
        "education":education,
        "careers":careers
    }
    collection.insert_one(experience)
    output = collection.find_one({"name":name})
    return output if output!= None else None

def getExperience(name):
    if(not isExist(name)): 
        raise Exception("name not found")

    experience = collection.find_one({"name":name})
    return experience