import './App.css';
import Item from './components/Item';
import OrderDetails from './components/OrderDetails';

// Todo componente deve começar com letra maiuscula
function App() {

    const items = [
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
    ];

    const hasItemsInBag = items.filter(item => item.isInBag).length > 0;

    const shopName = 'Jersey Shop Made with React JS';

    // Eh importante que todos os elementos de um componente estejam dentro de um unico componente raiz.
    // Pode ser dentro de um unico div ou dentro de um React Fragment <>...</>
    return ( 
        <>
            <section className="items">
                <h4>{shopName}</h4>
                
                {items.map(item => <Item item={item} key={item.id} />)}
            </section>            

            {hasItemsInBag && <OrderDetails/>}
        </>
    );
}

export default App
