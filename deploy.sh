#!/usr/bin/env bash

#  ======================================
#    Build the site, store it in docs
#    folder and then commit and push the
#    source code to Github, while also commiting
#    and pushing the build (docs) folder
#    to Github, which contains distribution
#    build for the website.
#  ======================================

dir=$(pwd)
gatsby build --prefix-paths && mv public/ docs/ && gh-pages -d public -b master
git add . && git commit -m "Update source code."

#  ======================================
#    Here, origin = a-y-u-s-h/portfolio
#  ======================================

git push --set-upstream origin +master

cd $dir
