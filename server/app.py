from flask import Flask
from data import home
import data.profile as profileData 
import data.experience as experienceData
import data.contact as contactData
import data.projects as projectsData


def after_request(resp):
    resp.headers['Access-Control-Allow-Origin'] = 'http://localhost:3000'
    return resp


app = Flask(__name__)
app.after_request(after_request)
@app.route('/api/')
# home page data
def index():
    test = {"basic": {"name":"zhengli", "age": 25},
            "education": {"bachlor":"BJUT"}}
    return test

@app.route('/api/profile/')
# profile data
def profile():

    data = profileData.getProfile("Zhengli")
    # print("got it")
    myProfile = {
        "name":data["name"], 
        "age": data["age"],
        'description':data["description"]
    }
    return myProfile

@app.route('/api/experiences')
# exprience data
def exprience():
    myExprience = {
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
    return myExprience

@app.route('/api/projects')
def projects():
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
    return myProjects

@app.route('/api/contact')
def contact():
    myContact = {
        'LinkedIn': "https://www.linkedin.com/in/zheng-li-875253106/",
        'email':'hughli@live.com'
    }
    return myContact

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)

