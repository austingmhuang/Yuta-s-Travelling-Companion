import { fetchRoutesAndQuotesData } from "./FlightFetch";
import { Card, Button } from "react-bootstrap";

export default function() {
  const renderCard = (card, index) => {
    return (
      <div>
        <Card key={index}>
          <Card.Header>{card.carrier.id}</Card.Header>
          <Card.Body>
            <Card.Title>{card.carrier.id}</Card.Title>
            <Card.Text>{card.carrier.id}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    );
  };

  return <div>{fetchRoutesAndQuotesData.map(renderCard)}</div>;
}
