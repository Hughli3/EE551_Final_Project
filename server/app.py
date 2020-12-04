from flask import Flask
# from flask_cors import CORS

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

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=5000)

