import { useState } from 'react';
import './App.css';
import Item from './components/Item';
import OrderDetails from './components/OrderDetails';

// Todo componente deve começar com letra maiuscula
function App() {
    const shopName = 'Jersey Shop Made with React JS';

    const [items, setItems] = useState(
        [
            {
                
                id: 1, 
                photo: "real_madrid.webp",
                name: "Real Madrid",
                price: 119.99,
                active: false,
                quantity: 1, 
                isInBag: false
            },
            {
                id: 2, 
                photo: "milan.png",
                name: "Milan",
                price: 99.99,
                active: false,
                quantity: 1, 
                isInBag: false
            },
            {
                id: 3, 
                photo: "chelsea.webp",
                name: "Chelsea",
                price: 99.99,
                active: false,
                quantity: 1, 
                isInBag: false
            },
            {
                id: 4, 
                photo: "barcelona.png",
                name: "Barcelona",
                price: 109.99,
                active: false,
                quantity: 1, 
                isInBag: false
            },
            {
                id: 5, photo: "benfica.png",
                name: "Benfica",
                price: 89.49,
                active: false,
                quantity: 1, 
                isInBag: false
            },
            {
                id: 6, 
                photo: "manchester.webp",
                name: "Manchester City",
                price: 129.79,
                active: false,
                quantity: 1, 
                isInBag: false
            },
            {
                id: 7, 
                photo: "bayern.webp",
                name: "Bayern",
                price: 119.99,
                active: false,
                quantity: 1, 
                isInBag: false
            },
            {
                id: 8, 
                photo: "psg.png",
                name: "PSG",
                price: 94.99,
                active: false,
                quantity: 1, 
                isInBag: false
            },
            {
                id: 9, 
                photo: "ajax.webp",
                name: "Ajax",
                price: 89.99,
                active: false,
                quantity: 1, 
                isInBag: false
            }
        ]
    );

    const itensInBag = items.filter(item => item.isInBag);
    const hasItemsInBag = itensInBag.length > 0;

    const handleSelectItem = id => {
        setItems(items.map(item => item.id === id ? { ...item, isInBag: !item.isInBag } : item));
    };

    const handleOnChangeQuantity = (e, id, increment) => {
        e.stopPropagation();
        
        // Alterar o item diretamente dentro do array n altera o estado da página
        // eh necessario fazer a chamada no setItems e realizar essa alteração
        setItems(items.map(item => {
            if (item.id === id) {
                const quantity = item.quantity + increment <= 1 ? 1 : item.quantity + increment;

                return { ...item, quantity };
            }

            return item;
        }));
    };

    // Eh importante que todos os elementos de um componente estejam dentro de um unico componente raiz.
    // Pode ser dentro de um unico div ou dentro de um React Fragment <>...</>

    // Sempre que o meu componente receber um ID como parâmetro, é importante que ele seja declarado como uma
    // arrow function com todos os parametros
    return ( 
        <>
            <section className="items">
                <h4>{shopName}</h4>
                
                {items.map(item => 
                    <Item 
                        item={item}
                        key={item.id}
                        onClick={id => handleSelectItem(id)}
                        handleOnChangeQuantity={handleOnChangeQuantity}
                    />
                )}
            </section>            

            {hasItemsInBag && <OrderDetails itemsInBag={itensInBag}/>}
        </>
    );
}

export default App
