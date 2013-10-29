
install:
	gem install jekyll
	npm install grunt-cli grunt-contrib-uglify grunt-contrib-concat

clean-js:
	rm js/datavis.js
	rm js/site.js

build-js:
	grunt uglify
	grunt concat

js: build-js clean-js

build-s3: js
	jekyll build --config _s3.yml

server:
	jekyll server --watch --baseurl=

clean:
	rm -rf _site
