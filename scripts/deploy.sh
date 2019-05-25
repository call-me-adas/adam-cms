#!/usr/bin/env bash

rm -Rf public &&
mkdir public &&
cp -a dist/browser/. public/ &&
cp -a dist/ functions/dist &&
firebase deploy
