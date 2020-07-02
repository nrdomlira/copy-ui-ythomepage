import React from 'react';

import { Container } from './styles';

export interface Props {
    selected?: boolean;
    title?: string;
};

const SideMenuButton: React.FC<Props> = ({
    selected,
    title,
}) => {
    return (
            <Container
                className={selected ? 'active' : ''}
                title={title} >
                <span> {title} </span>
            </Container>

    );
}

export default SideMenuButton;