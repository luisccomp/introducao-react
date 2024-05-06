// Eh importante sempre colocar o arquivo CSS do nosso componente dentro da pasta
// para deixar a estrutura do projeto mais separada.
const OrderDetails = ({ itemsInBag }) => {
    const total = itemsInBag.reduce((acc, item) => acc + (item.quantity * item.price), 0);

    return (
        <>
            <section className="summary">
                <strong>Order Summary</strong>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itemsInBag.map(item => 
                            <tr key={item.id}>
                                <td>{item.quantity}x {item.name}</td>
                                <td>R$ {(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                        )}
                        
                        <tr>
                            <th>Total</th>
                            <th>R$ {total.toFixed(2)}</th>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
    );
};

export default OrderDetails;