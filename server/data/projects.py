import pymongo
 
client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["EE551"]
collection = db["projects"]

# -------------- Checker ------------
def isExist(name):
    person = collection.find_one({"name":name})
    # print(person)
    if (person):
        return True
    else:
        return False

# -------------- add ---------------
def addProjects(name, projects):
    if(isExist(name)): 
        raise Exception("name is already exist")

    project = {
        "name":name,
        "projects": projects
    }
    collection.insert_one(project)
    output = collection.find_one({"name":name})
    return output["projects"] if output!= None else None

def getProjects(name):
    if(not isExist(name)): 
        raise Exception("name not found")

    projects = collection.find_one({"name":name})
    return projects