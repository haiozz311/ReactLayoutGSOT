import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Containers/Header';
import Footer from './Containers/Footer/index';
import Introduce from './Containers/PageIntroduce';
import Services from './Containers/PageServices';
import Page5 from './Containers/Page_5';
import Services2 from './Containers/PageServices2';
import Page10 from './Containers/Page10'
import Page11 from './Containers/Page11'

class Routes extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/' exact component={Introduce} />
                    <Route path='/dichvu' exact component={Services} />
                    <Route path='/Page5' exact component={Page5} />
                    <Route path='/dichvu2' exact component={Services2} />
                    <Route path='/Page10' exact component={Page10} />
                    <Route path='/Page11' exact component={Page11} />
                </Switch>
                <Footer />
            </div>
        );
    }
};

export default Routes;

