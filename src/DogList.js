import React from 'react';
import {Card, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

function DogList({dogs}){
    return (
        <div className="container d-flex justify-content-around">
            {dogs.map(dog => (
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={dog.src} />
                <Card.Body>
                  <Card.Title>{dog.name}</Card.Title>
                  <Card.Text>
                    {dog.facts[0]}
                  </Card.Text>
                  <Link className="btn btn-primary" to={`/dogs/${dog.name}`}>Check it out!</Link>
                </Card.Body>
              </Card>
            ))}
        </div>
    )
}

export default DogList;