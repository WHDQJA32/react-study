import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './FoodMarket.css';
import banner_bg from './banner_bg.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import foodsData from '../data/foodsData.js';
import { useState } from 'react';
import FoodCard from './components/FoodCard.js';
import Home from './pages/Home.js';

import { Routes, Route, Link, useNavigate} from 'react-router-dom';

function FoodMarket() {

    let [foods, setFoods] = useState(foodsData);
    let navigate = useNavigate(); //경로 조작 함수

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="/">Market</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link onClick={()=>{navigate("/detail")}}>FoodDetail</Nav.Link>
                        <Nav.Link onClick={()=>{navigate("/info")}}>Info</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            {/*
            1.css 이미지 경로
            
            2.js 에서는 import 후 사용
            <img src={파일명}/>
            
            3.public 폴더에 저장 후 사용
            img src={'/food1.jpg'}
            img src={process.env.PUBLIC_URL + '/food1.jpg'}

            package.json
            "homepage":"/newurlpath" 상세 경로로 인식
            */}

            <Routes>

                <Route path="/" element={<div>
                    <div className='main-bg' style={{ backgroundImage: 'url(' + banner_bg + ')' }}></div>

                    <Container>
                        <Row>
                            {/*<FoodCard title={foods[0].title} content={foods[0].content} 
                            price={foods[0].price}/>*/}
                            {
                                foods.map((food, index) => {
                                    return (<Col md={4} sm={2} key={index}><FoodCard food={food} index={index} foods={foods} /></Col>);
                                })
                            }

                            {/*<Col md={4} sm={2}><FoodCard food={foods[0]}/></Col>
                            <Col md={4} sm={2}><FoodCard food={foods[1]}/></Col>
                            <Col md={4} sm={2}><FoodCard food={foods[2]}/></Col>*/}
                        </Row>
                    </Container>
                </div>}/>
                    <Route path="/" element={<Home foods={foods}/>}/>
                    <Route path="/detail" element={<h1>detail page</h1>} />
                    <Route path="/info" element={<h1>info page</h1>} />
            </Routes>

        </div>

    );
}

export default FoodMarket;