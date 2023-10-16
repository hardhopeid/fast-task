import React from "react";

function useLocalStorage(itemName, initialValue) {
    const [item, setItem] = React.useState(initialValue); 
    const [loading, setLoading] = React.useState(true); 
    const [error, setError] = React.useState(false); 

    React.useEffect(() => {
        setTimeout(() => {
          try {
            const localStorageItem = localStorage.getItem(itemName);
        
            let parsedItem;
      
            if (!localStorageItem) {
              localStorage.setItem(itemName, JSON.stringify(initialValue));
              parsedItem = initialValue;
            } else {
              parsedItem = JSON.parse(localStorageItem);
              setItem(parsedItem);
            }
      
            setLoading(false);
          } catch(error) {
            setLoading(false);
            setError(true);
          }
        }, 2000);
      }, []);
    
      const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem));
        setItem(newItem);
      };
    
      return {
        item,
        saveItem,
        loading,
        error,
      };
    }
    
    export { useLocalStorage };

    /* 
    const defaultTodos = [
      {text: 'Cortar Sebolla', completed: true},
      {text: 'Comer mucho', completed: false},
      {text: 'Darle amor a mi amorcito', completed: false},
      {text: 'Dormir un poco', completed: false},
    ];
    localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
    */