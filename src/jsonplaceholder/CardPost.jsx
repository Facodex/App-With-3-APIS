import Card from 'react-bootstrap/Card';

function CardPost({postItem}) {
    return (
        <>
            <Card
                style={{ width: '18rem' }}
                className="mb-2 bg-primary text-light"
            >
                <Card.Header>Post number {postItem.id}</Card.Header>
                <Card.Body>
                    <Card.Title>{postItem.title} </Card.Title>
                    <Card.Text>{postItem.body}</Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default CardPost;