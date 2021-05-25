import React from 'react';
import {Card, Button} from 'react-bootstrap';

function DogList({dogs}){
    return (
        <div className="container d-flex justify-content-around">
            {dogs.map(dog => (
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dog.src} />
                <Card.Body>
                  <Card.Title>{dog.name}</Card.Title>
                  <Card.Text>
                    <ul>
                        {dog.facts.map(fact => (
                            <li key={fact}>{fact}</li>
                        ))}
                    </ul>
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            ))}
        </div>
    )
}

export default DogList;