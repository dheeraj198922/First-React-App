import React, { useState } from "react";
import "./App.css"
import { CardComponent } from "./components/CardComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from './assets/componentdiscription.json';
import Button from 'react-bootstrap/Button';
export default function App() {
    const [showSelectedContent, setShowSelectedContent] = useState('This is default content');
    const [selectedComponent, setSelectedComponent] = useState('');
    function getSelectedComponent(prop){
        console.log(prop);
        setSelectedComponent(prop);
        if(prop==='Component'){
            setShowSelectedContent(data[0].code)
        }else if(prop==='JSX'){
            setShowSelectedContent(data[1].code)
        }else {
            setShowSelectedContent(data[2].code) 
        }
    }
    return (<div >
        <Container className="cardContainer">
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <Row>
                <Col md={4}>
                    <CardComponent class="App-header" title={data[0].title} discription={data[0].discription} />
                </Col>
                <Col md={4}>
                    <CardComponent class="App-header" title={data[1].title} discription={data[0].discription} />
                </Col>
                <Col md={4}>
                    <CardComponent class="App-header" title={data[2].title} discription={data[0].discription} />
                </Col>
            </Row>
        </Container>
        <div>
            <Button variant="primary" className="buttonMargin" onClick={()=>getSelectedComponent('Component')}>Component</Button>
            <Button variant="primary" className="buttonMargin" onClick={()=>getSelectedComponent('JSX')}>JSX</Button>
            <Button variant="primary" className="buttonMargin" onClick={()=>getSelectedComponent('Props')}>Props</Button>
        </div>
        <div>
            {showSelectedContent}
        </div>
    </div>
    );

}