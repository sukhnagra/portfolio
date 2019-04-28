import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl'
import profilePic from '../imgs/profile-pic.png'
import {List, ListItem, ListItemContent } from 'react-mdl'

class Contact extends Component {
    render() {
        return (
            <div className="my-contact">
                <Grid shadow={5} className="contact-grid">
                    <Cell col={6}>
                        <h2>Sukh Nagra</h2>
                        <img
                        src={profilePic}
                        alt="contact pic"
                        style={{height: '250px'}}
                        />
                        <p style={{width: '70%', margin: 'auto', paddingTop: '1em' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                        <div className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize: '35px', fontFamily: 'Anton'}}>
                                    <i className="fas fa-phone-square" aria-hidden="true"/>
                                     07881027571
                                </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize: '35px', fontFamily: 'Anton'}}>
                                    <i className="fas fa-envelope-open" aria-hidden="true"/>
                                    sukh_nagra@live.co.uk
                                </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Contact;
