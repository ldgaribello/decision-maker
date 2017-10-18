'use strict';

console.log('app.js is running...');

var app = {
    title: 'Indecision APP',
    subTitle: 'This is the indecision APP',
    options: ['One', 'Two']
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subTitle && React.createElement(
        'p',
        null,
        app.subTitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
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

var count = 0;
var addOne = function addOne() {
    count++;
    appRender();
};
var minusOne = function minusOne() {
    count--;
    appRender();
};
var reset = function reset() {
    count = 0;
    appRender();
};

var user = {
    name: 'Leon Garibello',
    age: 26,
    location: 'Medellin'
};
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}
var userTemplate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');
var appRender = function appRender() {
    var templateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count: ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );

    ReactDOM.render(templateTwo, appRoot);
};
appRender();
