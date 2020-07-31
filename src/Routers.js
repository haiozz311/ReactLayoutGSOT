import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Containers/Header';
import Footer from './Containers/Footer/index';
import Introduce from './Containers/Page2';
import Services from './Containers/Page3';
import Page5 from './Containers/Page5';
import Services2 from './Containers/Page4';
import Page10 from './Containers/Page10'
import Page11 from './Containers/Page11'
import HomePage from './Containers/HomePage';
import Page9 from './Containers/Page9';

class Routes extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/' exact component={HomePage} />
                    <Route path='/page2' exact component={Introduce} />
                    <Route path='/page3' exact component={Services} />
                    <Route path='/page4' exact component={Services2} />
                    <Route path='/Page5' exact component={Page5} />
                    <Route path='/page9' exact component={Page9} />
                    <Route path='/page10' exact component={Page10} />
                    <Route path='/page11' exact component={Page11} />
                </Switch>
                <Footer />
            </div>
        );
    }
};

export default Routes;

