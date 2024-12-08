import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../components/CardComponentStyle.css"
export function CardComponent(props) {

    return  <Card style={{ width: '18rem' }} className="cardFloting">
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>{props.discription}
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>

}

