import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import Layout from '../components/Layout';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route path="/" component={HomePage} />
                </Layout>
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;
