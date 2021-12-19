import React, {Component} from 'react';
import { Container, Tab, Row, Col, Nav} from 'react-bootstrap';

export default class Profile extends Component{
	render(){
		return(
			<Container>
				<Tab.Container id='left-tabs-example' defaultActiveKey='first'>
					<Row className='m-5 d-flex justify-content-center'>
						<Col sm={3} style={{minWidth: '150px'}}>
							<Nav variant='pills' className='flex-coloumn'>
								<ul className='list-unstyled'>
								<li>
								<Nav.Item className='nav_profile'>
									<Nav.Link eventKey='first'>Информация о профиле</Nav.Link>
								</Nav.Item>
								</li>
								<li>
								<Nav.Item className='nav_profile'>
									<Nav.Link eventKey='second'>Друзья</Nav.Link>
								</Nav.Item>
								</li>
								<li>
								<Nav.Item className='nav_profile'>
									<Nav.Link eventKey='third'>Курсы</Nav.Link>
								</Nav.Item>
								</li>
								<li>
								<Nav.Item className='nav_profile'>
									<Nav.Link eventKey='fourth'>Настройки</Nav.Link>
								</Nav.Item>
								</li>
								</ul>
							</Nav>
						</Col>
						<Col sm={9}>
							<Tab.Content className='mt-3 center-tabs-example'>
								<Tab.Pane eventKey='first'>
									<img style={{maxWidth: '100px'}} src='https://www.go-fit.ru/assets/images/persons/img/non-user.jpg' alt='ProfileImage'/>
									<p><h3>
										Зубенко Михаил Петрович
									</h3>
									</p>
								</Tab.Pane>
								<Tab.Pane eventKey='second'>
									<img 
										style={{width: '80%'}}
										src='https://media1.thehungryjpeg.com/thumbs2/800_3519441_858696e0b1eefbd3ba06ae5126600247ca1e2279_smiling-young-hugging-friends-adolescentes-friendship-vector-concept.jpg'
										alt='FriendsImage'

									/>
									<p><h3>
										Не имей сто рублей, а имей сто тысяч рублей.
									</h3>
									</p>
								</Tab.Pane>
								<Tab.Pane eventKey='third'>
									<img style={{width: '80%'}} src='https://www.alooma.com/img/integrations/postgresql.png' alt='CardImage'/>
									<p><h3>
										Дурак изучает постгре
									</h3>
									</p>
								</Tab.Pane>
								<Tab.Pane eventKey='fourth'>
									<img style={{width: '20%'}} src='http://cdn.onlinewebfonts.com/svg/img_150710.png' alt='ToolsImage'/>
									<p><h3>
										Удалить жопу
									</h3>
									</p>
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			</Container>
		)
	}
}