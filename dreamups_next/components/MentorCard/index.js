import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const MentorCard = () => {
    return (
  
      <>
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="mentor_icon.svg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">View more</Button>
      </Card.Body>
    </Card>
      </>
    )
  }
  export default MentorCard;
