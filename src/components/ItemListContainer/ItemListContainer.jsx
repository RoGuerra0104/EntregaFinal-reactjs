
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./ItemListContainer.css"
import { useNavigate } from 'react-router-dom';

const ItemListContainer = ({ productsData }) => {
    const navigate = useNavigate();

    return (
        <div className="productsContainer">
            {productsData.map((products) => {
                return (
                    <Card  className='card' style={{ width: '18rem' }} key={products.id}>
                        <Card.Img variant="top" src={products.images} />
                        <Card.Body  >
                            <Card.Title className='cardTitle'>{products.title}</Card.Title>
                            <Card.Text className='cardTitle'>{products.description}</Card.Text>
                            <Button variant="primary" className="btnCard" onClick={() => navigate(`/item/${products.id}`)}>Detalles</Button>
                        </Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}
export default ItemListContainer;
