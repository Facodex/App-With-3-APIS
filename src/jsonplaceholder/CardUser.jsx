import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import photo from '../assets/images/hacked.jpg'

function CardUser({user}) {
  return (
    <Card style={{ width: '18rem' }} className='my-3'>
      <Card.Img variant="top" src={photo} />
      <Card.Body>
        <Card.Title>{user.username} - {user.name}</Card.Title>
        <Card.Text>
            <span className='fw-bold text-primary'> Company: {user.company.name}</span> <br/>
            <span> About: {user.company.catchPhrase}</span>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Email: {user.email}</ListGroup.Item>
        <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
        <ListGroup.Item>Website: {user.website}</ListGroup.Item>
        <ListGroup.Item>City: {user.address.city}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardUser;