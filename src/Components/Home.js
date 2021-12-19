import React, { Component } from 'react';
import { Card, Button, Row, Col, Container } from 'react-bootstrap'


export default class Home extends Component {
  render() {
    let cardInfo = [];
    
    
    if (JSON.parse(localStorage.getItem('allCourse')) != null) {
      cardInfo = JSON.parse(localStorage.getItem('allCourse'));
    }


    //   [
    //     {
    //         Name: '',
    //         img: '',
    //         description: '',
    //         lecture: [],
    //         active: false
    //     }
    // ]



    //отправка данных в просмотр курса
    function submitCourse(i){
      let currentCourse = JSON.stringify(cardInfo[i]);
      console.log(currentCourse);
      
      localStorage.setItem('currentCourse', currentCourse);
    }

    //Создание карточки с курсом
    const renderCard = (card, index) => {
      return (
        
          <Col key={index}>
            <Card style={{ width: '20rem' }} key={index}>
              <Card.Img variant="top" src={card.img} alt='standart'/>
              <Card.Body>
                <Card.Title>{card.Name}</Card.Title>
                <Card.Text>
                  {card.description}
                </Card.Text>
                <Button href='/course' onClick={()=> submitCourse(index)}  variant="primary">Перейти к уроку</Button>
              </Card.Body>
            </Card>
          </Col>
          
      );
    }
    return (
      <Container>
        <Row>
          <Container className='mt-5 mb-5'>
            <h1 className='text-center'>Главная страница</h1>
          </Container>
        </Row>
        <Row>

          <Container>
            {(cardInfo.length === 0)
              ?
              <h1 style={{ opacity: '0.5', margin: '150px auto' }} className='text-center'>Пока курсов нет...</h1>
              :
              <Row>{cardInfo.map(renderCard)}</Row>
            }
          </Container>

        </Row>
      </Container>
    );
  }
}

