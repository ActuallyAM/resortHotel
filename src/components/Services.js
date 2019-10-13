import React, { Component } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
export default class Services extends Component {
	state = {
		services: [
			{
				icon: <FaCocktail />,
				title: 'free cocktails',
				info: 'This is a further information about free cocktails and drinks'
			},
			{
				icon: <FaHiking />,
				title: 'endless hiking',
				info: 'This is a further information about free cocktails and drinks'
			},
			{
				icon: <FaShuttleVan />,
				title: 'free airport shuttle',
				info: 'This is a further information about free cocktails and drinks'
			},
			{
				icon: <FaBeer />,
				title: 'best beer in town',
				info: 'This is a further information about free cocktails and drinks'
			}
		]
	};
	render() {
		return (
			<section className="services">
				<Title title="services" />
				<div className="services-center">
					{this.state.services.map((item, index) => {
						return (
							<article key={index} className="service">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}
