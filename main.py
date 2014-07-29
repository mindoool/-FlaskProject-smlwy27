import os
import tweepy
from urllib import urlopen
from bs4 import BeautifulSoup
from flask import Flask, render_template, request
import json
app = Flask(__name__)
app.config['DEBUG'] = True

# Note: We don't need to call run() since our application is embedded within
# the App Engine WSGI application server.




@app.route('/')
def hello():
    """Return a friendly HTTP greeting."""
    return render_template('index.html')

@app.route('/koreaplan.html')
def koreaplan():
    """Return a friendly HTTP greeting."""
    return render_template('koreaplan.html')

@app.route('/webtoon.html')
def webtoon():
    """Return a friendly HTTP greeting."""
    data = urlopen("http://comics.nate.com/webtoon/detail.php?btno=64925&bsno=370600").read()
    soup = BeautifulSoup(data)
    container= soup.select('div.toonView img')
    webtoon=[]
    for item in container:
    	webtoon.append(item.get('src'))
    return render_template('webtoon.html',webtoon=webtoon)


@app.route('/twittersearch.html')
def twitter():
    return render_template('twittersearch.html')


@app.route('/twittersearch', methods=['POST'])
def twittersearch():
    consumer_key = 'GJaSikdsXmHc0YWKyc5Ih5Zd6'
    consumer_secret = 'UQvkOb9VlrIdhN841jspXPs0mqyaRrXXoa3Z4ADng00KoLQ44h'
    access_token = '157543651-GIKZTvAFVDTxKJHOwo3n4fqeuH5NFm2gMv0Ta3zp'
    access_token_secret = 'ytGzFmlHOqk3kS01eb42lyFd2stewgeFW8kCFZwwn6qak'

    auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
    auth.set_access_token(access_token, access_token_secret)

    api = tweepy.API(auth)
    list=[]
    if request.method=='POST':
        query = request.form["keyword"]
        results = api.search(q=query, count=10)
        for result in results:
            info={}
            info['name']=result.user.screen_name
            info['text']=result.text
            list.append(info)
    return json.dumps(list)


@app.errorhandler(404)
def page_not_found(e):
    """Return a custom 404 error."""
    return 'Sorry, nothing at this URL.', 404