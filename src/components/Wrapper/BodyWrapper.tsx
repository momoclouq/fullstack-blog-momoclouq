import styled from 'styled-components';

const BodyWrapper = styled.div`
    width: 100%;
    padding: 1em;
    flex-grow: 1;

    @media (min-width: 768px) {
        max-width: 75%;
    }
`;

export default BodyWrapper;