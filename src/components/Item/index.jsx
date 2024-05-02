// Sempre que um componente react recebe parametros, ele vem dentro de um objeto desestruturado. O conceito disso se
// chama props. No React as props sao uma forma de passar informação a um componente. Ex:
// <Componente prop1='Hello' prop2='World' />
// const Componente = ({prop1, prop2}) => {...};
const Item = ({ item, onClick }) => {
    return (
        <>
            <div onClick={() => onClick(item.id)} className={`product ${item.isInBag ? 'selected' : ''}`.trim()}>
                <div className="photo">
                    <img src={`./img/${item.photo}`} />
                </div>
                <div className="description">
                    <span className="name">{item.name}</span>
                    <span className="price">{item.price}</span>
                    {
                        item.isInBag &&
                        <div className="quantity-area">
                            <button>-</button>
                            <span className="quantity">{item.quantity}</span>
                            <button>+</button>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Item;