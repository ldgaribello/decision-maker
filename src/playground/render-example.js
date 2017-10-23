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

ReactDOM.render(userTemplate, appRoot);