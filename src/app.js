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

const user = {
    name: 'Leon Garibello',
    age: 26,
    location: 'Medellin'
};
function getLocation(location){
    if(location){
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
ReactDOM.render(template, appRoot);