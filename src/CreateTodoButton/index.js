import './CreateTodoButton.css';

function CreateTodoButton() {
    return(
      <button className='CreateTodoButton'
        onClick={
            () => console.log('Le dieste click')
        }
      >+</button>
    );
  }
  
  export { CreateTodoButton };