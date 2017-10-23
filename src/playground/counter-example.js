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