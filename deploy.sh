#!/usr/bin/env bash

#  ======================================
#    Build the site, store it in docs
#    folder and then commit and push the
#    source code to Gitlab, while commiting
#    and pushing the build (docs) folder
#    to Github.
#  ======================================

dir=$(pwd)
gatsby build --prefix-paths && mv public/ docs/ && gh-pages -d public -b master
git add . && git commit -m "Update source code."

#  ======================================
#    Here, origin = gitlab
#  ======================================

git push --set-upstream origin +master

# if [[ -d $dir/public ]]; then
#   cd $dir/public
#   git add . && git commit -m "Update build and deploy to Github."

#   #  ======================================
#   #    Here, origin = github
#   #  ======================================
  
#   git push --set-upstream origin +master
# fi
cd $dir
