import React from 'react';
import Card from '../Card';
import './App.scss';
const App = () => {
	return (
		<div className='app'>
			<h1 className='app__title'>Ты сегодня покормил кота?</h1>
			<main className='app__main'>
				<Card
					disabled={false}
					suptitle='Сказочное заморское яство'
					title='Нямушка'
					subtitle='с фуа-гра'
					portion='10 порций'
					stock='мышь в подарок'
					weight='0,5'
					description='Печень утки разварная с артишоками.'
				/>
				<Card
					disabled={false}
					suptitle='Сказочное заморское яство'
					title='Нямушка'
					subtitle='с рыбой'
					portion='40 порций'
					stock='2 мыши в подарок'
					weight='2'
					description='Головы щучьи с чесноком да свежайшая сёмгушка.'
				/>
				<Card
					disabled={false}
					suptitle='Сказочное заморское яство'
					title='Нямушка'
					subtitle='с курой'
					portion='100 порций'
					stock='5 мышей в подарок'
					weight='5'
					extra='заказчик доволен'
					description='Филе из цыплят с трюфелями в бульоне.'
				/>
			</main>
		</div>
	);
};

export default App;
