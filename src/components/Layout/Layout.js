import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import classes from './Layout.module.css';

class Layout extends Component {
    state = {
        showSideDrawer: true
    };
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    };

    render() {
        return (
            <Auxiliary>
                <div>
                    <Toolbar/>
                    <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
                </div>
                <main className={classes.Container}>
                    {this.props.children}
                </main>
            </Auxiliary>
        );
    }
}
export default Layout;