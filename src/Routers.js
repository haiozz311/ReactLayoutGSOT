import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Containers/Header';
import Footer from './Containers/Footer/index';
import Introduce from './Containers/PageIntroduce';
import Services from './Containers/PageServices';
import Services2 from './Containers/PageServices2';

class Routes extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/' exact component={Introduce}/>
                    <Route path='/dichvu' exact component={Services}/>
                    <Route path='/dichvu2' exact component={Services2}/>
                </Switch>
                <Footer />
            </div>
        );
    }
};

export default Routes;

