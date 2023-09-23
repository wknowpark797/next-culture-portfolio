import Layout from '@/components/template/Layout/Layout';
import axios from 'axios';
import '@/styles/globals.scss';

axios.defaults.baseURL = 'http://openapi.seoul.go.kr:8088';

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
