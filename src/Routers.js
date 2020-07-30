import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Containers/Header';
import Footer from './Containers/Footer/index';
import Introduce from './Containers/PageIntroduce';
import Services from './Containers/PageServices';

class Routes extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/' exact component={Introduce}/>
                    <Route path='/dichvu' exact component={Services}/>
                </Switch>
                <Footer />
            </div>
        );
    }
};

export default Routes;

