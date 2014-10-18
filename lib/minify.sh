#!/bin/sh

cat public/javascripts/jquery.min.js \
    public/javascripts/jquery.flot.min.js \
    public/javascripts/jquery.flot.time.min.js \
    public/javascripts/jquery.flot.resize.min.js \
    public/javascripts/jquery.flot.selection.min.js \
    public/javascripts/jquery.flot.navigate.min.js \
    public/javascripts/plugins.js \
    public/javascripts/main.js \
    public/javascripts/data.js \
    > public/javascripts/application.js
