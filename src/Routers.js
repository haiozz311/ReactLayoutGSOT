import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Containers/Header';
import Footer from './Containers/Footer/index';
import Introduce from './Containers/PageIntroduce';
import Services from './Containers/PageServices';
import Page5 from './Containers/Page_5';

class Routes extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/' exact component={Introduce} />
                    <Route path='/dichvu' exact component={Services} />
                    <Route path='/Page5' exact component={Page5} />
                </Switch>
                <Footer />
            </div>
        );
    }
};

export default Routes;

