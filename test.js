'use strict'
const todo = require('./index.js');
const assert = require('assert');

// addとlist のテスト
todo.add('ノートを買う');
todo.add('鉛筆を買う');

// done と donelist のテスト
todo.done('鉛筆を買う');

// del のテスト
todo.del('ノートを買う');
todo.del('鉛筆を買う');

assert.deepStrictEqual(todo.list(), []);
assert.deepStrictEqual(todo.donelist(), []);

console.log('テストが正常に完了しました')
