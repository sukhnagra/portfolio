import React, {Component} from 'react';
import {Grid, Cell, Chip} from 'react-mdl'
import profilePic from '../imgs/profile-pic.png'
class LandingPage extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid" >
                    <Cell col={12}>
                        <img
                            src={profilePic}
                            alt="profile-pic"
                            className="profile-pic"
                        />
                        <div className="banner-text">
                            <h1 style={{fontSize: '75px', fontFamily:'Oxygen'}}>QA Automation Engineer</h1>

                            <hr/>

                            <p className="Badges"><Chip className="Badge">Ruby</Chip> <Chip className="Badge">JavaScript</Chip> <Chip className="Badge">NodeJS</Chip> <Chip className="Badge">Selenium</Chip> <Chip className="Badge">Appium</Chip>  <Chip className="Badge">Jenkins</Chip> <Chip className="Badge">React</Chip></p>

                            <div className="social">
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-linkedin" aria-hidden="true"/>
                                </a>

                                <a href="https://github.com/sukh-nagra" rel="noopener noreferrer" target="_blank">
                                    <i className="fab fa-github" aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;
