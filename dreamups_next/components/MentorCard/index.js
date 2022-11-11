import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardWrapper } from './styles';

const MentorCard = () => {
    return (

      <CardWrapper>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="mentor_icon.svg" />
      <Card.Body>
        <Card.Title>Yan Budman</Card.Title>
        <Card.Text>  
          Marketing Manager
        </Card.Text>
        <Card.Text>
          Indigogo
        </Card.Text>
        <Card.Text>
          Over 10 years experience with crowdfunding platforms Yan can help you list yout startups on global platforms.
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    </CardWrapper>

  );
}
  
  export default MentorCard;
