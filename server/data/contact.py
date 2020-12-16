import pymongo
 
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["EE551"]
collection = db["contact"]

# -------------- Checker ------------

def isExist(name):
    person = collection.find_one({"name":name})
    if (person):
        return True
    else:
        return False




# -------------- add ---------------
def addContact(name, contact):

    contact = {
        "name": name,
        "contact": contact
    }
    collection.insert_one(contact)
    output = collection.find_one({"name":name})
    return output["contact"] if output!= None else None

# ---------------- get -------------
def getContact(name):
    if(not isExist(name)): 
        raise Exception("name not found")
    contact = collection.find_one({"name":name})
    return contact["contact"]


    