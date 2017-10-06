console.log('app.js is running...');

var app = {
    title: 'Indecision APP',
    subTitle: 'This is the indecision APP'
};

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subTitle}</p>
        <ol>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
        </ol>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);