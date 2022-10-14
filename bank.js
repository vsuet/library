/*global window, document, prompt */
'use strict';
window.addEventListener('load', function () {
function input(message) {
var number;
do {
number = parseFloat(prompt(message));
} while (!number);
return number;
}
function insert(content) {
var box;
box = document.querySelector('#box');
box.textContent += content;
}
function show(collection) {
var length = collection.length, i, content = "";
for (i = 0; i < length; i += 1) {
content += i + 1 + ': ' + parseFloat(collection[i]).toFixed(2) + ' | ';
}
insert(content);
}
function income(deposit, percent) {
return (deposit * percent / 100).toFixed(2);
}
function calculation(deposit, percent, term) {
var result = [], i, prevois;
result[0] = parseFloat(income(deposit, percent)) + parseFloat(deposit);
for (i = 1; i < term; i += 1) {
prevois = result[i - 1];
result[i] = parseFloat(income(prevois, percent)) + parseFloat(prevois);
}
return result;
}
function main() {
var deposit, percent, term, collection;
deposit = input('Введите размер вклада');
percent = input('Введите процентную ставку');
term = 5;
collection = calculation(deposit, percent, term);
show(collection);
}
main();
});
