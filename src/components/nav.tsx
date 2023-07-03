import { Link } from 'react-router-dom';

export const Nav = () => {
	return (
		<nav className='flex justify-center items-center w-full h-24 bg-blue-400'>
			<div className='mx-2 p-4'>
				<button className='rounded-lg bg-blue-950 hover:bg-blue-700 text-slate-300 h-10 w-20'>
					<Link to={'/'}>Home</Link>
				</button>
			</div>
			<div className='mx-2 p-4'>
				<button className='rounded-lg bg-blue-950 hover:bg-blue-700 text-slate-300 h-10 w-20'>
					<Link to={'/about'}>About</Link>
				</button>
			</div>
		</nav>
	);
};
