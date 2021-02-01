import pymongo
import data.home as home
import data.profile as profile 
import data.experience as experience
import data.contact as contact 
import data.projects as projects
import os

client = pymongo.MongoClient("mongodb://localhost:27017/")
db = client["EE551"]
# Create cv of zheng li
def clean():
    db.home.remove({})
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
    home.addHome("Zheng Li", "/image/IMG_5823.jpg")
    print(os.getcwd())

    myProfile = {
        'name': "Zheng Li",
        'date_of_birth' : "1995/05/29",
        "description": "He is a talented student from Stevens Institute of technology majored in Computer Science. Having a good understanding on both software and hardware, he has great interest in web programming and data mining. He also has experience on data auditing, one of his main work in China Telecom is to data auditing which includes data profiling and improving data quality etc. Familiar with Python, Java, React. ",
        "image":"/image/IMG_5894.jpeg"
    }
    profile.addProfile("Zheng Li", myProfile)
    myExperience = {
        'education':[{'name': "Stevens Institute of Technology",
                    'major':"Computer Science",
                    "degree":"Master",
                    'description':"SIT provided me the opportunity to improve my CS skills. The teachers here are professional and responsible, and I have gained a lot here.",
                    "location": "Hoboken, NJ, US",
                    'startTime':'Aug 2019',
                    'endTime': 'Now'
                    },
                    {'name': "Beijing University of Technology",
                    'major':"Information and Computing Science (MATH)",
                    "degree":"Bachelor",
                    'description':"At BJUT, I established my CS foundation. As a mathematics student, I am mainly training my logical thinking and problem-solving methods. This has a profound impact on my CS learning path.",
                    "location": "Beijing, China",
                    'startTime':'Sep 2013',
                    'endTime': 'June 2017'}],
        'careers': [{'name': "China telecom",
                    'title':"Software Engineer",
                    'description':"I work as a software engineer in CTSI's big data department. My main job is data auditing and data modeling. At the end of the project, the data compliance rate increased from 43.32% at the beginning of the project to 82.80%. The project built a data warehouse according to the requirements and output 5 data models. Among them, I was responsible for the aggregation and integration of network domain, call voice and call IP data. Output model.",
                    "location": "Beijing, China",
                    'startTime':'June 2017',
                    'endTime': 'Apr 2018'}]
        }

    experience.addExperience("Zheng Li", myExperience["education"], myExperience["careers"])
    myProjects = {
        "projects":[{'name': "DogDog",
        'description':'1. Developed a full-stack web service with Express to help users manage their pet health \n2. Created Express service with RESTful APIs to handle HTTP request and responses Design the whole backend data model, built databases to store user data and dog body data\n3. Architected and implemented the interactive web frontend work flow utilizing AJAX technology (Handlebars)\n4. Implemented basic cookies-based SignUp/login/logout flow and server-side authentication with express session',       
        'startTime':'Sep 2019',
        'endTime': 'Dec 2019',
        "url":"http://mydogdog.com"},
        {'name': "RentSIT",
        'description':'1. Built a full-stack web service with Express to helper users post and find for rent\n2. Developed a REACT app for interactive web frontend webpage. Implements features such as, "Create/Edit/Delete post", "Sort housing" and "Watch List" with Argon Design, React Image Light, MongoDB Sorting\n3. Implemented basic token-based SignUp/login/logout flow with React Router and FireBase\n4. Implemented paging with MongoDB and react \n5. Optimized the request process by using Redis to cache the data',
        'startTime':'Feb 2020',
        'endTime': 'May 2020',
         "url":"http://myrentsit.com"},
         {'name': "Stock Search",
        'description':'1. Lead team of three in developing a website to search and analyze stock data to help user make investment decision using flask.\n2. Built a recommendation system and designed interactive graph to better illustrate result with plotly.\n3. Using Ajax technology has reduced page load time by 30%.',
        'startTime':'Feb 2020',
        'endTime': 'May 2020',
         "url":"https://github.com/Hughli3/FE520_FinalProject"}]
        }
    projects.addProjects("Zheng Li", myProjects["projects"])

    myContact = {
        'linkedIn': "https://www.linkedin.com/in/zheng-li-875253106/",
        'email':'hughli@live.com'
    }
    contact.addContact("Zheng Li", myContact)

    print("------------ Finished seed ------------")

if __name__ == "__main__":
    clean()
    create()