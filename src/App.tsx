import { useEffect, useState } from 'react';
import { Van } from './types/Van';
import { createServer } from 'miragejs';
import { vans } from './vans';

createServer({
	routes() {
		this.get('/api/vans', () => {
			return [...vans];
		});
	},
});

const App = () => {
	const [vans, setVans] = useState<Van>([]);

	useEffect(() => {
		fetch('api/vans')
			.then((res) => res.json())
			.then((data) => {
				return setVans(data as Van);
			});
	}, []);

	return (
		<>
			<p className='font-bold'>Hello There</p>
			{vans.map((van) => (
				<div key={van.id}>
					<img src={van.imgUrl} />
					<div>
						<h3>{van.name}</h3>
						<p>
							${van.price}
							<span>/day</span>
						</p>
					</div>
					<i>{van.type}</i>
				</div>
			))}
		</>
	);
};

export default App;

