"use strict";

if(typeof Promise ==='undefined'){
    require('promise/lib/rejection-tracking').enable()
    window.Promise = require('promise/lib/es6-extensions.js')
}

// fetch polyfill

require('whatwg-fetch')

// Object.assign() use vue 

Object.assign = require('object-assign')