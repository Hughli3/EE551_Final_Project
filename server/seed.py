import pymongo
import data.home
import data.profile as profile 
import data.experience as experience
import data.contact as contact 
import data.projects as projects


client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["EE551"]
# Create cv of zheng li
def clean():
    db.profile.remove({})
    db.experience.remove({})
    db.contact.remove({})
    db.projects.remove({})

def create():
    # myProfile = {
    #     "name":"zhengli", 
    #     "age": 25,
    #     'description':"Hi! I'm zheng"
    # }
    print("------------ Start seed ------------")
    profile.addProfile("Zhengli", 25, "Hi! I'm zheng")
    myExperience = {
        'education':[{'name': "SIT",
                    'major':"CS",
                    'description':"I am some description",
                    "location": "Hoboken, NJ, US",
                    'startTime':'Aug 2019',
                    'endTime': 'Now'},
                    {'name': "BJUT",
                    'major':"MATH",
                    'Description':"I am some description",
                    "location": "BeiJing, China",
                    'startTime':'Sep 2013',
                    'endTime': 'June 2017'}],
        'careers': [{'name': "China telecom",
                    'title':"Software Engineer",
                    'description':"I am some description",
                    "location": "Beijing, China",
                    'startTime':'June 2017',
                    'endTime': 'Aug 2018'}]
        }

    experience.addExperience("Zhengli", myExperience["education"], myExperience["careers"])
    myProjects = {
        "projects":[{'name': "DogDog",
        'description':"I am some description",
        'startTime':'Aug 2019',
        'endTime': 'Now',
        "url":"a url"},
        {'name': "RentSIT",
        'Description':"I am some description",
        'startTime':'Sep 2013',
        'endTime': 'June 2017',
         "url":"a url"}]
        }
    projects.addProjects("Zhengli", myProjects["projects"])

    myContact = {
        'LinkedIn': "https://www.linkedin.com/in/zheng-li-875253106/",
        'email':'hughli@live.com'
    }
    contact.addContact("Zhengli", myContact)

    print("------------ Finished seed ------------")

if __name__ == "__main__":
    clean()
    create()