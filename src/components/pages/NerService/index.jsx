import React from 'react';

import { Title, Container, Content} from '../page.components';
import { Operations } from '../../organisms';


const NewService = props => {


    return (
        <Container>
            <Title>
                <h2>New service page</h2>
            </Title>
            <Content>
                <Operations />
            </Content>
        </Container>
    )
}

export default NewService;