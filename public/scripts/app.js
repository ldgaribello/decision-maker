'use strict';

console.log('app.js is running...');

var app = {
    title: 'Indecision APP',
    subTitle: 'This is the indecision APP',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        appRender();
    }
};
var onClearOptions = function onClearOptions() {
    app.options = [];
    appRender();
};
var onPickOne = function onPickOne() {
    var randomNum = Math.floor(Math.random() * app.options.length);
    var option = app.options[randomNum];
    alert('Option: ' + option);
};

var appRoot = document.getElementById('app');

var appRender = function appRender() {
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
            'button',
            { onClick: onClearOptions },
            'Clear'
        ),
        React.createElement(
            'button',
            { onClick: onPickOne, disabled: app.options.length === 0 },
            'Pick One'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};
appRender();
