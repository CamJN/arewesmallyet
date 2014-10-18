#!/bin/sh

cat public/javascripts/jquery.min.js \
    public/javascripts/jquery.flot.min.js \
    public/javascripts/jquery.flot.time.min.js \
    public/javascripts/jquery.flot.resize.min.js \
    public/javascripts/jquery.flot.selection.min.js \
    public/javascripts/plugins.js \
    public/javascripts/main.js \
    public/javascripts/data.js \
    > public/javascripts/application.tmp.js

# java -jar ~/Downloads/yuicompressor-2.4.7.jar \
#     -o public/javascripts/application.js \
#     public/javascripts/application.tmp.js

cp public/javascripts/application.tmp.js public/javascripts/application.js

rm public/javascripts/application.tmp.js
