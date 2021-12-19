import React from 'react';
import { Container } from 'react-bootstrap'
import post from './post.png'
import bomb from './bomb.png'

function About() {
	return (
		<Container>
			<main className='cover-container d-flex w-100 h-100 p-3 mx-auto flex-column mt-5 mb-5 shadow bg-white rounded'>
				<div className="container marketing">
					<h1 className='text-center mb-5 mt-5 display-1'>Создатели</h1>
					<div className='d-xs-block d-md-flex'>

						<div className="mx-auto col-lg-4 mb-5 mt-5 text-center">
							<svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

							<h2 className=''>Максим Климниченко</h2>
							<p>Студент 4-го курса Политехнического Колледжа Городского Хозяйства.</p>
						</div>
						<div className="mx-auto col-lg-4 mt-5 mb-5 text-center">
							<svg className="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"></rect><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

							<h2>Владимир Лежибоков</h2>
							<p>Студент 4-го курса Политехнического Колледжа Городского Хозяйства.</p>
						</div>

					</div>



					<hr className="featurette-divider mt-5 mb-5" />

					<div className="row featurette">
						<div className="col-md-7">
							<h2 className="featurette-heading">Связь. <span class="text-muted">Почта.</span></h2>
							<p className="lead">Связаться с нами можно нажав на картинку.</p>
						</div>
						<div className="col-md-5">
							<img
							className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" focusable="false"
								src={post}
								alt='Почта'
							/>
							

						</div>
					</div>

					<hr className="featurette-divider mt-5 mb-5" />

					<div className="row featurette">
						<div className="col-md-7 order-md-2">
							<h2 className="featurette-heading">Бомба. <span class="text-muted">Буум.</span></h2>
							<p className="lead">Данный проект настолько хорош, что получил одобрение от аттестационной коммисии.</p><p className='lead'>Ведь так?..</p>
						</div>
						<div className="col-md-5 order-md-1">
						<img
							className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" focusable="false"
								src={bomb}
								alt='Бомба'
							/>
						</div>
					</div>

					<hr className="featurette-divider mt-5 mb-5" />



				</div>



			</main>
		</Container>
	);
}

export default About;