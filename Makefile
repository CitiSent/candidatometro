
install:
	gem install jekyll
	npm install grunt-cli grunt-contrib-uglify grunt-contrib-concat

update-data:
	cd data && python update.py && cd ..

build-js:
	grunt uglify
	grunt concat

js: build-js

build-s3: js
	jekyll build --config _s3.yml

deploy-s3: build-s3
	s3cmd put --acl-public --recursive _site/ s3://candidatometro/

server:
	jekyll server --watch --baseurl=

clean:
	rm -rf _site
