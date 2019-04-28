import React, {Component} from 'react';
import {Tab, Tabs, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl'

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    visitPage(){
        window.location='http://www.example.com';
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (

                <div className="projects-grid">
                    {/* React Project */}
                    <Card shadow={5} style={{minWidth: '650', margin: 'auto'}}>
                        <CardTitle style={{
                            color: '#fff',
                            height: '240px',
                            background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover'
                        }}>React Portfolio Project</CardTitle>
                        <CardText>
                            React Portfolio Project. Checkout the code on my GitHub.
                        </CardText>
                        <CardActions border>
                            <a href="http://www.example.com" rel="noopener noreferrer" target="_blank"> <Button colored>GitHub</Button></a>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        </CardMenu>
                    </Card>


                    {/* React Project2 */}
                    <Card shadow={5} style={{minWidth: '650', margin: 'auto'}}>
                        <CardTitle style={{
                            color: '#fff',
                            height: '240px',
                            background: 'url(https://d1vf55kg5nz00t.cloudfront.net/wp-content/uploads/2013/09/ruby_and_rails-624x442.jpg) center / cover'
                        }}>React Portfolio Project 2</CardTitle>
                        <CardText>
                            React Portfolio Project. Checkout the code on my GitHub.
                        </CardText>
                        <CardActions border>
                            <Button colored>GitHub</Button>
                        </CardActions>
                        <CardMenu style={{color: '#fff'}}>
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is my NodeJS project</h1></div>
            )
        }
    }

    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                    <Tab>Web</Tab>
                    <Tab>Automation</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Projects;
