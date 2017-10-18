console.log('app.js is running...');

const app = {
    title: 'Indecision APP',
    subTitle: 'This is the indecision APP',
    options: ['One', 'Two']
};
const template = (
    <div>
        <h1>{app.title}</h1>
        {(app.subTitle) && <p>{app.subTitle}</p>}
        <p>{(app.options.length > 0) ?
            'Here are your options' : 'No options'}</p>
        <ol>
            <li>Option 1</li>
            <li>Option 2</li>
            <li>Option 3</li>
        </ol>
    </div>
);

let count = 0;
const addOne = function () {
    count++;
    appRender();
};
const minusOne = function () {
    count--;
    appRender();
};
const reset = function () {
    count = 0;
    appRender();
};


const user = {
    name: 'Leon Garibello',
    age: 26,
    location: 'Medellin'
};
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>
    }
}
const userTemplate = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');
const appRender = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>reset</button>
        </div>
    );
    
    ReactDOM.render(templateTwo, appRoot);
}
appRender();