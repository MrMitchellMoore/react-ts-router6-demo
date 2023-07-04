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
		<div className='flex justify-center mt-2 mx-auto'>
			<div className='grid md:grid-cols-2 sm:grid-cols-3 sm:gap-4'>
				{vans.map((van) => (
					<div key={van.id}>
						<div className='grid grid-row-1 mb-2'>
							<div className='xs:w-[250]'>
								<img src={van.imageUrl} width='350px' height='233px' />
							</div>
							<div className='flex xs:justify-center justify-between mt-1'>
								<h3 className='sm:text-center'>{van.name}</h3>
								<p>
									<span className='font-bold'>${van.price}</span>
									<span>/day</span>
									<i
										className={`van-type ${van.type} selected p-[.20rem] rounded-md m-1 text-slate-50`}
									>
										{van.type}
									</i>
								</p>
							</div>
							<p className='xs:hidden flex justify-center items-center w-[350px]'>
								{van.description.substring(0, 100).split(',', 100)}...
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default App;

