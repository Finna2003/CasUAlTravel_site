import Project from '../components/project/Project';
import { projects } from "./../helpers/projectsList";

const Projects = () => {
	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">About Us</h2>
				<div style={{ textAlign: 'center', margin: '40px', fontSize: '21px', fontWeight: 'bold' }}>
					<p>
						"CasUAlTravel" — це інноваційний мобільний застосунок, створений для сучасних мандрівників, які цінують свою незалежність та індивідуальність. Цей застосунок є ідеальним помічником для людей, котрі бажають самостійно планувати свої подорожі, відкривати нові місця та здійснювати незабутні прогулянки.
						Розроблений із думкою про різні категорії користувачів, "CasUAlTravel" відповідає на потреби:
					</p>
					<p style={{ textAlign: 'justify', width: '90%', margin: '0 auto' }}>
						• Молодих професіоналів, яким необхідно ефективно комбінувати роботу та особисте життя, пропонуючи швидке планування маршрутів, оптимізованих під вільний час і переваги.
					</p>
					<p style={{ textAlign: 'justify', width: '90%', margin: '0 auto' }}>
						• Студентів, що шукають доступні варіанти для відпочинку та вивчення культурних пам'яток, з можливістю легко організувати короткі міські екскурсії та зустрічі з друзями.
					</p>
					<p style={{ textAlign: 'justify', width: '90%', margin: '0 auto' }}>
						• Молодих сімей, для яких важливі комфорт та безпека під час подорожей з дітьми, надаючи функціонал для планування сімейно-орієнтованих активностей.
					</p>
					<p style={{ textAlign: 'justify', width: '90%', margin: '0 auto'}}>
						• Іноземних туристів, які прагнуть зануритися в українську культуру, з допомогою індивідуально налаштованих маршрутів, що ведуть через відомі та таємні куточки країни.
					</p>
					<p style={{ margin: '20px 0', fontSize: '24px', textAlign: 'center' }}>
						<span style={{ borderBottom: '5px solid ', display: 'inline-block', width: '100%' }}></span>
					</p>
					<p style={{ marginTop: '20px', fontSize: '30px' }}>
						З "CasUAlTravel" подорожі стають простішими, а враження — яскравішими.
					</p>
				</div>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<video width="1200" height="550" controls>
						<source src={require('../pages/video.mp4')} type="video/mp4" />
					</video>
				</div>
			</div>
		</main>
	);
};

export default Projects;
