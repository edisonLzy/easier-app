import Layout from '@/layout';
import { BrowserRouter as Router } from 'react-router-dom';
import { UseRequestProvider } from 'ahooks';
import axios from 'axios';
export default () => {
	return (
		<Router>
			<UseRequestProvider
				value={{
					requestMethod:(...args)=>axios.request(...args)
				}}
			>
				<Layout />
			</UseRequestProvider>
		</Router>
	);
};
