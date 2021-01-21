from flask import Flask
import data.home as homeData
import data.profile as profileData 
import data.experience as experienceData
import data.contact as contactData
import data.projects as projectsData
import base64
import os
import datetime
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
from flask_cors import CORS
import socket

hostname = socket.gethostname()
ip = socket.gethostbyname(hostname)
# print(ip)
# def after_request(resp):
#     resp.headers['Access-Control-Allow-Origin'] = '*'
#     return resp


app = Flask(__name__)
ors = CORS(app, resources={r"/.*": {"origins": "*"}}) 
limiter = Limiter(
    app,
    key_func=get_remote_address,
    default_limits=["10 per minute"]
)
# app.after_request(after_request)
@app.route('/api/')
# home page data
def index():
    myHome = homeData.getHome("Zheng Li")

    with open(os.getcwd() + myHome["image"], 'rb') as f:
        img = base64.b64encode(f.read()).decode()

    output = {
        "name": myHome["name"],
        "image" :img
        }
    # print(output)
    print("here")
    return output

@app.route('/api/profile/')
# profile data
def profile():

    data = profileData.getProfile("Zheng Li")
    with open(os.getcwd() + data["profile"]["image"], 'rb') as f:
            img = base64.b64encode(f.read()).decode()
    birthday = data["profile"]["date_of_birth"]
    date_of_birth = datetime.datetime.strptime(birthday, "%Y/%m/%d")
    age = datetime.date.today().year - date_of_birth.year
    data["profile"]["image"] = img
    data["profile"]["age"] = age
    data["profile"].pop("date_of_birth")
    return data["profile"]

@app.route('/api/experiences')
# exprience data
def exprience():
    data = experienceData.getExperience("Zheng Li")
    myExprience = {
        'education':data["education"],
        'careers': data["careers"]
        }
    return myExprience

@app.route('/api/projects')
def projects():
    data = projectsData.getProjects("Zheng Li")
    myProjects = {
        "projects": data["projects"]
        }
    return myProjects

@app.route('/api/contact')
def contact():
    data = contactData.getContact("Zheng Li")
    myContact = {
        'linkedIn': data["linkedIn"],
        'email':data["email"]
    }
    return myContact

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5001)

