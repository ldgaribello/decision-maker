'use strict';

console.log('app.js is running...');

var app = {
    title: 'Indecision APP',
    subTitle: 'This is the indecision APP'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subTitle
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Option 1'
        ),
        React.createElement(
            'li',
            null,
            'Option 2'
        ),
        React.createElement(
            'li',
            null,
            'Option 3'
        )
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
