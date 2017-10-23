console.log('app.js is running...');

const app = {
    title: 'Indecision APP',
    subTitle: 'This is the indecision APP',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        appRender();
    }
};
const onClearOptions = () => {
    app.options = [];
    appRender();
};
const onPickOne = () => { 
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert('Option: ' + option);
};


const appRoot = document.getElementById('app');

const appRender = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {(app.subTitle) && <p>{app.subTitle}</p>}
            <p>{(app.options.length > 0) ?
                'Here are your options' : 'No options'}</p>
            <button onClick={onClearOptions}>Clear</button>
            <button onClick={onPickOne} disabled={app.options.length === 0}>Pick One</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>

            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};
appRender();