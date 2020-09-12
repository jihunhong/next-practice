import PropTypes from 'prop-types';
import Head from 'next/head';
import 'antd/dist/antd.css';
import withReduxSaga from 'next-redux-saga';

import wrapper from '../store/configureStore';

const App = ({ Component }) => {
    return (
        <>
            <Head>
                <meta charSet="utf-8"></meta>
                <title>NodeBird</title>
            </Head>
            <Component />
        </>
    )
}

App.propTypes = {
    Component : PropTypes.elementType.isRequired
}

export default wrapper.withRedux(withReduxSaga(App));