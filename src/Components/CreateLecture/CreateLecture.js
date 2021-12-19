import { Button, CloseButton } from "react-bootstrap";
import React, { useState } from "react";
import './Lecture.css'
import { Modal } from "react-bootstrap";
import CreateQuest from "./CreateQuest";
import { Switch } from "@material-ui/core";

export default function CreateLecture() {

    //Сам курс
    const [course, setCourse] = useState(
        [
            {
                Name: '',
                img: '',
                description: '',
                lecture: [],
                active: false
            }
        ]
    );

    //Все уроки курса
    const [lecture, setLecture] = useState(
        [

        ]
    );



    //Создаваемый урок
    const [newLecture, setNewLecture] = useState(
        [
            {
                Name: '',
                content: [
                    { contentType: 'text', contentValue: '' },
                ],
                quest: []
            }
        ]
    );

    //Создаваемое ДЗ
    /* const [newQuest, setNewQuest] = useState(
        [
            {
                Name: '',
                text: '',
                type: 'radio',
                questions: [],
                answers: []
            }
        ]
    ) */

    //Модалки на весь экран
    const [fullscreen, setFullscreen] = useState(true);

    //Статусы для модалки с уроком
    const values = [true];
    const [show, setShow] = useState(false);

    //Статусы для модалки с ДЗ
    const [questShow, setQuestShow] = useState(false);

    //Показ модалки с уроком
    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    //Показ модалки с ДЗ
    function createQuestForLecture(i) {
        setQuestShow(true);
        localStorage.setItem('currentLecture', i);
    }

    //Изменение названия урока в модалке
    function changeNameLecture(text) {
        let le = [...newLecture];
        le[0].Name = text;
        setNewLecture(le);
    }

    //Изменение контентного value с текстом
    function changeContentValue(text, i) {
        let le = [...newLecture];
        le[0].content[i].contentValue = text;
        setNewLecture(le);
    }

    //Удаление поля урока в модалке
    function deleteLectureField(i) {
        let le = [...newLecture];
        if (newLecture[0].content.length > 1) {
            le[0].content.splice(i, 1);
        }
        setNewLecture(le);
    }

    //Добавление текстового поля урока
    function addTextLectureField() {
        let le = [...newLecture];
        if (newLecture[0].content.length < 11) {
            le[0].content.push({ contentType: 'text', contentValue: '' });
        }
        setNewLecture(le);
    }

    //Добавление поля урока с картинкой
    function addImgLectureField() {
        let le = [...newLecture];
        if (newLecture[0].content.length < 11) {
            le[0].content.push({ contentType: 'img', contentValue: '' });
        }
        setNewLecture(le);
    }

    //Отправка урока с модального окна в содержание
    function submitNewLection() {
        if (newLecture[0].Name !== '') {
            let le = [...lecture];
            let crs = [...course];
            let nle = [...newLecture]
            le.push(nle[0]);
            console.log(le);
            setLecture(le);

            crs[0].lecture = le;
            setCourse(crs);

            setNewLecture([{
                Name: '',
                content: [
                    { contentType: 'text', contentValue: '' },
                ],
                quest: []
            }]);


            setShow(false);
        } else {
            alert('Название не должно быть пустым');
        }


    }

    //Кнопка создания ДЗ ||| Привязка к уроку
    function handleClickSubmit() {
        let nqw = JSON.parse(localStorage.getItem('quest'));
        let lec = [...lecture];
        let i = localStorage.getItem('currentLecture');
        lec[i].quest = nqw;
        console.log(lec[i], nqw);
        setLecture(lec);
        console.log(i);
        setQuestShow(false);
    }

    function handleViewCourse() {
        let crs = [...course];
        if (crs[0].Name === '') {
            alert('Введите название');
            crs[0].active = false;
            setCourse(crs);
            console.log(crs[0].active);
        } else if (crs[0].lecture.length < 1) {
            alert('В курсе должен быть хотя бы 1 урок');
            crs[0].active = false;
            setCourse(crs);
        } else {
            crs[0].active = !crs[0].active;
            setCourse(crs);
        }
    }


    //Изменение названия курса
    function changeNameCourse(text) {
        let crs = [...course];
        crs[0].Name = text;
        if (crs[0].Name === '') {
            crs[0].active = false;
        }
        setCourse(crs);
    }

    function changeDescriptionCourse(text){
        let crs = [...course];
        crs[0].description = text;
        setCourse(crs);
    }


    //Сохранение курса
    function handleSubmitCourse() {
        let thisCourse = [...course];
        let allCrs = JSON.parse(localStorage.getItem('allCourse'));
        allCrs.push(thisCourse[0]);
        

        //Запись в локальное хранилище
        allCrs = JSON.stringify(allCrs);
        localStorage.setItem('allCourse', allCrs);

        console.log(JSON.parse(localStorage.getItem('allCourse')));
        
        
        // let subCrs = JSON.stringify(course);;
        // localStorage.setItem('course', subCrs);
        // console.log(JSON.parse(localStorage.getItem('course')));
    }

    return (
        <div>
            <div className='shadow w-80 m-5 p-5'>
                <div className='d-flex justify-content-between align-items-center mb-5'>
                    <input value={course.Name} onChange={(e) => changeNameCourse(e.target.value)} style={{ border: 'none', 'borderBottom': '1.5px solid #d36a92' }} maxLength='30' className='nameCourse' type='text' placeholder='Название' />
                    <div className='d-flex align-items-center'>
                        <h5 style={{ 'marginRight': '5px' }}>Отображать на сайте</h5>
                        <Switch checked={course[0].active} onChange={() => handleViewCourse()} />
                    </div>
                </div>

                <div className='mb-5 pt-5 pb-5 text-center shadow'>
                    <p>Обложка</p>
                    <input type='file' />
                </div>

                <textarea value={course.description} onChange={(e)=> changeDescriptionCourse(e.target.value)} className='w-100 mb-5' type='text' placeholder='Описание Курса' />

                <div className='mb-5'>
                    <h2>Содержание</h2>
                </div>

                {/* Отображение созданных лекций */}
                {lecture.map((lec, i) => (
                    <div key={i} className='mb-4 w-80 d-flex align-items-center justify-content-between'>
                        <div>
                            <h3>Урок {i + 1}. "{lec.Name}"</h3>
                        </div>

                        {(lec.quest.length < 1)
                            ?
                            <Button onClick={() => createQuestForLecture(i)}>Создать ДЗ</Button>
                            :
                            <Button disabled>Редактировать ДЗ</Button>
                        }



                        <CloseButton onClick={() => { console.log(lec) }} />
                    </div>
                ))}

                {/* Кнопка 'Добавить урок' */}
                <div className='footer_constructor'>
                    {values.map((v, i) => (
                        <Button key={i} onClick={() => { handleShow(v) }}>Добавить урок</Button>
                    ))}
                </div>



                {/* Модальное окно для создания вопросов */}
                <Modal show={questShow} fullscreen={fullscreen} onHide={() => setQuestShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Создание ДЗ</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {/*                     <div>
                        {newQuest.map((ques, i) => (
                            <div key={i} className='p-4 mb-4 shadow d-flex align-items-center justify-content-between'>
                                <input style={{ border: 'none', 'border-bottom': '1.5px solid red' }} placeholder='Название вопроса' type='text' />


                                <CloseButton onClick={() => { deleteLectureField(i) }}></CloseButton>
                            </div>
                        ))}


                        <div className='mt-5 mb-5 d-flex justify-content-center'>
                            <div className='w-50 d-flex justify-content-center'>
                                <Button variant="outline-dark" style={{ width: '40%' }}>+</Button>
                            </div>
                        </div>
                        <div className='text-center'>
                            <hr className="featurette-divider mb-4" />
                            <Button variant="success" >Создать ДЗ</Button>
                        </div>
                    </div> */}
                        <CreateQuest />

                        <div className='text-center'>
                            <hr className="featurette-divider mb-4" />
                            <Button variant="success" onClick={() => handleClickSubmit()}>Создать ДЗ</Button>
                        </div>
                    </Modal.Body>
                </Modal>


                {/* \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ */}


                {/* Модальное окно создания урока */}
                <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Создание урока</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <input required className='mb-5' type='text' placeholder='Название' value={newLecture[0].Name} onChange={(e) => { changeNameLecture(e.target.value) }} />

                        {/* Содержание урока */}
                        <div className='mb-5'>
                            {newLecture[0].content.map((lec, i) => (
                                <div key={i} className='p-4 mb-4 shadow d-flex align-items-center justify-content-between'>
                                    {(lec.contentType === 'text') ?
                                        <textarea required value={lec.contentValue} onChange={(e) => changeContentValue(e.target.value, i)} style={{ width: '80%' }}></textarea>
                                        :
                                        <div style={{ width: '80%' }} className='d-flex align-items-center justify-content-between'>
                                            <Button disabled>🖼</Button>
                                            <div style={{ width: '80%' }} className='d-flex align-items-center justify-content-center'>
                                                <input accept='image/jpeg,image/png' type='file' />
                                            </div>
                                        </div>

                                    }
                                    <CloseButton onClick={() => { deleteLectureField(i) }}></CloseButton>
                                </div>
                            ))}
                        </div>

                        {/* Кнопки для добавления контента */}
                        <div className='d-flex justify-content-center'>
                            <div className='w-50 d-flex justify-content-between'>
                                <Button onClick={() => { addTextLectureField() }} style={{ width: '30%' }}>Tт</Button>
                                <Button onClick={() => { addImgLectureField() }} style={{ width: '30%' }}>🖼</Button>
                                <Button style={{ width: '30%' }} disabled>📹</Button>
                            </div>
                        </div>


                        {/* Кнопка Создания */}
                        <div className='text-center'>
                            <hr className="featurette-divider mb-4" />
                            <Button variant="success" onClick={() => submitNewLection()}>Создать урок</Button>
                        </div>
                    </Modal.Body>

                </Modal>

            </div>

            <div className="w-100 d-flex justify-content-center mb-5">
                <Button href='/mycourse' disabled={(course[0].Name === '')? true : false} onClick={()=> handleSubmitCourse()} variant="success">Создать курс</Button>
            </div>

        </div>
    );
}