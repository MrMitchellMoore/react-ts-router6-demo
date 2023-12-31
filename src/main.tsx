import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Nav } from './components/nav.tsx';
import { About } from './pages/about.tsx';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<Nav />
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/about' element={<About />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);

