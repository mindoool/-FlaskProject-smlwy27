import tweepy

consumer_key = 'GJaSikdsXmHc0YWKyc5Ih5Zd6'
consumer_secret = 'UQvkOb9VlrIdhN841jspXPs0mqyaRrXXoa3Z4ADng00KoLQ44h'
access_token = '157543651-GIKZTvAFVDTxKJHOwo3n4fqeuH5NFm2gMv0Ta3zp'
access_token_secret = 'ytGzFmlHOqk3kS01eb42lyFd2stewgeFW8kCFZwwn6qak'

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)
auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)
query = "aaa"
results = api.search(q=query, count=5)
list=[]
for result in results:
	info={}
	info['name']=result.user.screen_name
	info['text']=result.text
	list.append(info)
print list