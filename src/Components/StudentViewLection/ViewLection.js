import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";

export default function ViewLection() {
    const courseInfo = JSON.parse(localStorage.getItem('currentCourse'));
    console.log(courseInfo);

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    let idx = 0;

    function handleShow(i) {
        setFullscreen(true);
        setShow(true);
        idx = i-1;
    }

    return (
        <>
            <main className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column mt-5 mb-5 shadow bg-white rounded'>
                <div className="container marketing">

                    <h1 className='mb-5 mt-5 display-1'>{courseInfo.Name}</h1>


                    <div className="w-100" style={{ opacity: '0.5', fontStyle: 'italic' }}>{courseInfo.description}</div>

                    <hr className="featurette-divider mt-5 mb-5" />

                    <h2>Содержание</h2>

                    <div className="m-5" >
                        {courseInfo.lecture.map((lec, index) => (
                            <Button key={index} onClick={()=>handleShow(index)} className="w-100 d-flex justify-content-start align-items-center" variant="outline-secondary">{index + 1}. {lec.Name}</Button>
                        ))}
                    </div>


                </div>
            </main>

            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{courseInfo.lecture[idx].Name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {courseInfo.lecture[idx].content.map((con, index)=>(
                        <div className="m-5">{con.contentValue}</div>
                    ))}
                </Modal.Body>
            </Modal>
        </>
    );
}