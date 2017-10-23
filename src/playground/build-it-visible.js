let isVisible = false;

const onToggleVisibility = () => {
    isVisible = !isVisible;
    appRender();
};

const appRender = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggleVisibility}>
                {isVisible ? 'Hide details' : 'Show details'} 
            </button>
            
            {
                isVisible && (<p>These are the details!</p>)
            }
        </div>
    );

    ReactDOM.render(template, document.getElementById('app'));
};
appRender();