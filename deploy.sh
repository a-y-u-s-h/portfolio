#!/usr/bin/env bash

#  ======================================
#    Build the site, store it in docs
#    folder and then commit and push the
#    source code to Github, while also commiting
#    and pushing the build (docs) folder
#    to Github, which contains distribution
#    build for the website.
#  ======================================

rm -rvf docs                                        && \
gatsby clean                                        && \
gatsby build --prefix-paths                         && \
mv public/ docs/                                    && \
rm -rvf .cache                                      && \
gh-pages -d docs -b master                          && \
git add . && git commit -m "Update source code."    && \
git push -u origin +master

# <------------------------------>