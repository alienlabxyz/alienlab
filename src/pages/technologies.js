import React from 'react'
import { Divider, Header, Icon, Grid, Segment, Table } from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css';

const TechnologiesPage = () => (
  <div>
        <Header as='h1' style={{ padding: '6rem 0 2rem' }} textAlign='center' icon>
            <Icon name='settings' />
            Technologies we use
        </Header>
        <Divider  style={{ marginBottom: '4rem' }}/>
        <Grid columns={3}>
            <Grid.Column>
                <Segment.Group>
                    <Segment>
                    <p>Frontend</p>
                    </Segment>
                    <Segment.Group>
                    <Segment>
                        <p>React</p>
                    </Segment>
                    <Segment>
                        <p>Vue</p>
                    </Segment>
                    <Segment>
                        <p>SASS</p>
                    </Segment>
                    <Segment>
                        <p>LESS</p>
                    </Segment>
                    </Segment.Group>
                </Segment.Group>
            </Grid.Column>

        <Grid.Column>
            <Segment.Group>
                <Segment>
                <p>Backend</p>
                </Segment>
                <Segment.Group>
                <Segment>
                    <p>Meteor</p>
                </Segment>
                <Segment>
                    <p>Express</p>
                </Segment>
                <Segment>
                    <p>Loopback</p>
                </Segment>
                <Segment>
                    <p>Gatsby</p>
                </Segment>
                <Segment>
                    <p>Zeit </p>
                </Segment>
                </Segment.Group>
            </Segment.Group>
        </Grid.Column>
        
        <Grid.Column>
            <Segment.Group>
                <Segment>
                <p>Database</p>
                </Segment>
                <Segment.Group>
                <Segment>
                    <p>Mongo</p>
                </Segment>
                <Segment>
                    <p>MySQL</p>
                </Segment>
                </Segment.Group>
            </Segment.Group>
        </Grid.Column>
    </Grid>

    <Grid columns={3}>
        <Grid.Column>
            <Segment.Group>
                <Segment>
                    <p>Mobile</p>
                </Segment>
                <Segment.Group>
                    <Segment>
                        <p>React Native</p>
                    </Segment>
                    <Segment>
                        <p>PhoneGap</p>
                    </Segment>
                </Segment.Group>
            </Segment.Group>
        </Grid.Column>

        <Grid.Column>
            <Segment.Group>
                <Segment>
                    <p>Testing</p>
                </Segment>
                <Segment.Group>
                    <Segment>
                        <p>Jest</p>
                    </Segment>
                    <Segment>
                        <p>Mocha</p>
                    </Segment>
                    <Segment>
                        <p>Enzyme</p>
                    </Segment>
                    <Segment>
                        <p>Sinon</p>
                    </Segment>
                    <Segment>
                        <p>Phantom.js</p>
                    </Segment>
                </Segment.Group>
            </Segment.Group>
        </Grid.Column>

        <Grid.Column>
            <Segment.Group>
                <Segment>
                    <p>Devops</p>
                </Segment>
                <Segment.Group>
                    <Segment>
                        <p>Docker</p>
                    </Segment>
                    <Segment>
                        <p>CI/CD pipelines</p>
                    </Segment>
                </Segment.Group>
            </Segment.Group>
        </Grid.Column>
    </Grid> 
  </div>
);

export default TechnologiesPage;
