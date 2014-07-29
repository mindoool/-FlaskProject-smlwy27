import os
from urllib import urlopen
from bs4 import BeautifulSoup

data = urlopen("http://comics.nate.com/webtoon/detail.php?btno=64925&bsno=370600").read()
soup = BeautifulSoup(data)
webtoon= soup.select('div.toonView'):
	item('img')