import React, { useState } from "react";
import { BsTrash } from 'react-icons/bs';




import Accordion from '@material-ui/core/Accordion';
import { AccordionDetails, Button, FormControlLabel, IconButton, MenuItem, Select } from "@material-ui/core";
import './Lecture.css'

export default function CreateQuest() {
    const [btn, setBtn] = useState(
        [

        ]
    );
    // Пул вопросов

    const [questions, setQuestions] = useState(
        [
            {
                questionText: '',
                questionType: 'checkbox',
                options: [
                    { optionText: '', answer: false },
                ],
            }
        ]
    );

    saveQuestInLocaleStorage();

    //Сохранение locale.Storage
    function saveQuestInLocaleStorage() {
        let que = JSON.stringify(questions);
        localStorage.setItem('quest', que);
    }

    //Изменение самого вопроса
    function changeOptionValue(text, i, j) {
        let optionQuestion = [...questions];
        optionQuestion[i].options[j].optionText = text;

        setQuestions(optionQuestion);
        saveQuestInLocaleStorage();
    }

    //Изменение типа вопроса в select
    function addQuestionType(i, type) {
        let qs = [...questions];
        console.log(type);

        qs[i].questionType = type;

        setQuestions(qs);
        saveQuestInLocaleStorage();
    }

    //Изменение поля варианта ответа
    function changeQuestion(text, i) {
        let newQuestion = [...questions];
        newQuestion[i].questionText = text;
        setQuestions(newQuestion);
        saveQuestInLocaleStorage();
    }


    //Удаление варианта ответа
    function removeOption(i, j) {
        let RemoveOptionQuestion = [...questions];
        if (RemoveOptionQuestion[i].options.length > 1) {
            RemoveOptionQuestion[i].options.splice(j, 1);
            setQuestions(RemoveOptionQuestion);
            saveQuestInLocaleStorage();
        }
    }

    //Новый вариант ответа
    function addOption(i) {
        let optionsOfQuestion = [...questions];
        if (optionsOfQuestion[i].options.length < 5) {
            optionsOfQuestion[i].options.push({ optionText: 'Вариант ' + (optionsOfQuestion[i].options.length + 1), answer: false });
        } else {
            console.log('Нельзя больше 5-ти options');
        }
        setQuestions(optionsOfQuestion);
        saveQuestInLocaleStorage();
    }

    //Удаление вопроса
    function deleteQuestion(i) {
        let qs = [...questions];
        if (questions.length > 0) {
            qs.splice(i, 1);
        }
        setQuestions(qs);
        saveQuestInLocaleStorage();
    }

    //изменение текста в текстовом вопросе
    function textTypeQuestionChange(ques, i) {
        return (
            <div className='w-100 mt-5' key={i}>
                <textarea value={ques.questionText} onChange={(e) => { changeWords(e.target.value, i) }}  className='w-100'></textarea>
                <div className="text-center">
                    <Button onClick={() => { choiceWord(i) }}>Выбрать слово</Button>
                </div>
                {btn.map((but,k)=>(
                    <Button key={k} onClick={choiceAnswer(k)}>{but.word}</Button>
                ))}
            </div>
        );
    }

    //выбрать правильное слово из всех
    function choiceAnswer(k){
        let ques = [...questions];

        let but = [...btn]

    }

    function changeWords(text, i){
        let optionQuestion = [...questions];
        console.log(i);
        optionQuestion[i].options[0].optionText = text;

        setQuestions(optionQuestion);
        saveQuestInLocaleStorage();
    }

    //выбор правильного слова
    function choiceWord(i) {
        let optionQuestion = [...questions];
        let but = [];
        // let re = /[А-яЁё]+/g;
        let str = optionQuestion[i].options[0].optionText.split(' ');

        

        console.log(str);

        for(let j = 0; j<str.length; j++){
            but.push({optionText: str[j], answer: false});
            console.log(but)
        }

        setBtn(but);

        

    }

    //Добавление вопроса
    function addMoreQuestionField() {
        let qu = [...questions];
        let newQu = {
            questionText: '',
            questionType: 'checkbox',
            options: [
                { optionText: '', answer: false }
            ],
            open: true,
            required: false
        };
        qu.push(newQu);
        setQuestions(qu)
        saveQuestInLocaleStorage();
    }

    //Обработка правильного вопроса
    function handleCheckInput(i, j) {
        let qu = [...questions];
        qu[i].options[j].answer = !qu[i].options[j].answer;
        setQuestions(qu);
        saveQuestInLocaleStorage();
    }

    
    // Функция отображения коструктора вопросов и самих вопросов (закомменчено)

    function questionUI() {

        // Перебираем все вопросы

        return questions.map((ques, i) => (
            <div style={{ display: 'block', 'min-width': '388px' }}>
                <Accordion expanded={questions[i].open} className='add_border'>

                    {/* Вывод вопроса */}

                    {/* <AccordionSummary aria-controls='panelia-content' id='panelia-header' elevation={1} style={{ width: '100%' }}>
                        {questions[i].open ? (<div className='saved_questions'>
                            <Typography style={{ fontSize: '15px', fontWeight: '400', letterSpacing: '.1px', lineHeight: '24px', paddingBottom: '8px' }}>
                                {i + 1}. {questions[i].questionText}
                            </Typography>

                            {ques.options.map((op, j) => (

                                <div key={j}>
                                    <div style={{ display: 'flex' }}>
                                        <FormControlLabel style={{ marginLeft: '5px', marginBottom: '5px' }} disabled control={<input type={ques.questionType}
                                            color='primary' style={{ marginRight: '3px' }} required={ques.type} />} label={
                                                <Typography style={{
                                                    fontFamily: 'Roboto, Arial, sans-serif',
                                                    fontSize: '13px',
                                                    fontWeight: '400',
                                                    letterSpasing: '.2px',
                                                    lineHeight: '20px',
                                                    color: '#202124'
                                                }}>
                                                    {ques.options[j].optionText}
                                                </Typography>
                                            } />
                                    </div>
                                </div>
                            ))}
                        </div>
                        )
                            : 'Залупа'}
                    </AccordionSummary> */}

                    {/* Тело вопроса */}

                    <div className='question_boxes m-5'>

                        {/* Какая-то залупа, которая раскидывает тело по элементам */}

                        <AccordionDetails style={{ display: 'block', width: '100%' }} className='add_question'>

                            {/* Header вопроса */}

                            <div className='add_question_top'>
                                {(ques.questionType !== 'text')
                                    ?
                                    <input type='text' className='question' placeholder='Вопрос' value={ques.questionText} onChange={(e) => { changeQuestion(e.target.value, i) }} />
                                    :
                                    <div className='question'><div style={{ opacity: '0.5' }}>Введите текст ниже</div></div>
                                }

                                <Select defaultValue='Checkbox' id='select_ques' className='select' style={{ color: '#5f6368', fontSize: '13px' }}>
                                    <MenuItem id='checkbox' value='Checkbox' onClick={() => { addQuestionType(i, 'checkbox') }}>Checkbox</MenuItem>
                                    <MenuItem id='text' value='Text' onClick={() => { addQuestionType(i, 'text') }}>Text</MenuItem>
                                </Select>
                            </div>

                            {/* Вывод вариантов ответа */}

                            {ques.options.map((op, j) => (
                                <div className='add_question_body' key={j}>

                                    {/* Проверка индуса на неиндуссность */}

                                    {
                                        (ques.questionType !== 'text') ?
                                            <div>
                                                <div className="d-flex align-items-center">
                                                    <input onClick={() => handleCheckInput(i, j)} type={ques.questionType} style={{ marginRight: '10px' }} />
                                                    <div>
                                                        <input type='text' className='text_input' placeholder='Вариант ответа' value={ques.options[j].optionText} onChange={(e) => { changeOptionValue(e.target.value, i, j) }} />
                                                    </div>


                                                    {/* Кнопка удаления варианта ответа */}
                                                    <IconButton aria-label='delete' onClick={() => { removeOption(i, j) }}>
                                                        ×
                                                    </IconButton>

                                                </div>
                                                {ques.options.length < 5 ? (
                                                    <div className='add_question_body'>
                                                        <FormControlLabel disabled control={
                                                            (ques.questionType !== 'text' ?
                                                                <input type={ques.questionType} color='primary' inputProps={{ 'aria-label': 'secondary checkbox' }}
                                                                    style={{ marginLeft: '10px', marginRight: '10px' }} disabled /> :
                                                                <h5>Тт </h5>
                                                            )
                                                        }
                                                            label={
                                                                <div>
                                                                    <Button size='small' style={{ textTransform: 'none', color: '#4285f4', fontSize: '13px', fontWeight: '600' }} onClick={() => { addOption(i) }}>Добавить</Button>
                                                                </div>
                                                            } />
                                                    </div>
                                                ) : ''}
                                            </div>


                                            :

                                            //В случае текстового формата
                                            textTypeQuestionChange(ques, i)
                                    }

                                    {/* Вывод Инпута, куда вводится вариант ответа */}


                                </div>
                            ))}

                            {/* Добавить новый вариант ответа */}



                            {/* Подвал вопроса */}

                            <div className='add_footer'>
                                <div className='add_question_bottom'>
                                    <IconButton aria-label='delete' onClick={() => { deleteQuestion(i) }}>
                                        <BsTrash />
                                    </IconButton>
                                </div>
                            </div>


                        </AccordionDetails>
                    </div>
                </Accordion>
            </div>
        ));
    }

    return (
        <div>
            <div className='w-100 section'>
                {questionUI()}
            </div>

            <div className='mt-5 mb-5 d-flex justify-content-center'>
                <div className='w-50 d-flex justify-content-center'>
                    <Button className='border' onClick={() => addMoreQuestionField()} style={{ width: '30%' }}>+</Button>
                </div>
            </div>
        </div>
    );
}