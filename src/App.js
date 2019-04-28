import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';
import Main from './components/main.js'
import { Link } from 'react-router-dom'

class App extends Component {

    render() {
    return (
            <div className="demo-big-content" >
                <Layout>
                    <Header className="main-header" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Sukh Nagra</Link>} scroll>
                        <Navigation>
                            <Link className="NavLink" to="/cv">CV</Link>
                            <Link className="NavLink" to="/aboutme">About Me</Link>
                            <Link className="NavLink" to="/projects">Projects</Link>
                            <Link className="NavLink" to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title={<Link to="/">Sukh Nagra</Link>}>
                        <Navigation>
                            <Link to="/cv">CV</Link>
                            <Link to="/aboutme">About Me</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main/>
                    </Content>
                </Layout>
            </div>
    );
  }
}

export default App;
