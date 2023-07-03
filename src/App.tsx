import { useEffect, useState } from 'react';
import { Van } from './types/Van';

const App = () => {
	const [_vans, setVans] = useState<Van>();

	useEffect(() => {
		const getVans = async () => {
			await fetch('api/vans')
				.then((res) => res.json())
				.then((data: Van) => {
					console.log(data);
					return setVans(data);
				});
		};
		getVans();
	}, []);

	return (
		<>
			<p className='font-bold'>Hello There</p>
		</>
	);
};

export default App;

