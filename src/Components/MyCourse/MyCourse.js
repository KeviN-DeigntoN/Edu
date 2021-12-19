import React from "react";
import { useState } from "react";
import { Col, Card, Button, CloseButton } from "react-bootstrap";


export default function MyCourse() {
    const [myCourseInfo, setMyCourseInfo] = useState(
        JSON.parse(localStorage.getItem('allCourse'))
        );
    console.log(myCourseInfo.length);

    function deleteCourse(i){
        let arr = myCourseInfo.filter((course, index) => index!==i);
        console.log(arr);
        setMyCourseInfo(arr);

        localStorage.setItem('allCourse', JSON.stringify(arr));


    }

    function submitCourse(i){
        alert('В разработке');
        localStorage.setItem('currentCourseEdit', JSON.stringify(myCourseInfo[i]));
        localStorage.setItem('currentCourseIndex', JSON.stringify(i));
      }

    return (
        <div>
            <h1>Мои курсы</h1>
            {myCourseInfo.map((card, i) => (
                <Col key={i}>
                    <Card style={{ width: '20rem' }} key={i}>
                    <Card.Header className="d-flex justify-content-end"><CloseButton onClick={()=>deleteCourse(i)}/></Card.Header>
                        <Card.Img variant="top" src={card.img} alt='' />
                        <Card.Body>
                            <Card.Title>{card.Name}</Card.Title>
                            <Card.Text>
                                {card.description}
                            </Card.Text>
                            <Button href='/test' onClick={()=>submitCourse(i)} variant="primary">Редактировать курс</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </div>
    );
}