import React, { useState } from 'react';
import './Card.scss';
const Card = ({
	suptitle,
	title,
	subtitle,
	portion,
	stock,
	weight,
	disabled,
	description,
	...props
}) => {
	const [selected, setSelected] = useState(false);
	const [hovered, setHovered] = useState(false);
	let classNames = 'card';
	if (selected && !disabled) {
		classNames += ' card_selected';
	} else if (disabled) {
		classNames += ' card_disabled';
	}
	const hoverOnMouseOut = () => {
		if (selected && !disabled) {
			setHovered(true);
		}
	};
	const hoverOnMouseOver = () => {
		if (selected && !disabled) {
			setHovered(false);
		}
	};
	return (
		<div className='card__container'>
			<div
				className={classNames}
				onClick={() => setSelected(!selected)}
				onMouseOver={hoverOnMouseOver}
				onMouseOut={hoverOnMouseOut}
			>
				<h5
					className={
						hovered ? 'card__suptitle card__suptitle_hovered' : 'card__suptitle'
					}
				>
					{hovered ? 'Котэ не одобряет?' : suptitle}
				</h5>
				<h2 className='card__title'>{title}</h2>
				<h3 className='card__subtitle'>{subtitle}</h3>
				<h4 className='card__portion'>{portion}</h4>
				<h4 className='card__stock'>{stock}</h4>
				<div className='card__wieght'>
					{weight} <span className='card__wieght-unit'>кг</span>
				</div>
				<div className='card__extra'>{props.extra}</div>
			</div>

			{disabled ? (
				<p className='card__descr card_disabled-descr'>
					Печалька, {subtitle} закончился.
				</p>
			) : selected && !disabled ? (
				<p className='card_selected-descr'>{description}</p>
			) : (
				<p className='card__descr'>
					Чего сидишь? Порадуй котэ,
					<a
						className='card__descr-link'
						href='#go'
						onClick={() => setSelected(!selected)}
					>
						купи.
					</a>
				</p>
			)}
		</div>
	);
};

export default Card;
