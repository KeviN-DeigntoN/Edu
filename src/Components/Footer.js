import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Footer() {
    return (
        <footer className='mt-3'>
            <div className="container">
                <footer className="py-3 my-4">
                    
                    <div className="nav border-bottom pb-3 mb-3">
                        <Row>
                            <Col>
                                <h5>Авторы</h5>
                                <ul className='list-unstyled'>
                                    <li>Лежибоков Владимир</li>
                                    <li>Климниченко Максим</li>
                                </ul>
                                <h5>Адрес</h5>
                                <ul className='list-unstyled'>
                                    <li><address>просп. Авиаконструкторов, 28, Санкт-Петербург</address></li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <div>
                        <p className="text-left text-muted">&copy;{new Date().getFullYear()} React Education Platform - All Rights Reserved</p>
                    </div>
                </footer>
            </div>
        </footer>
    );
}

export default Footer;