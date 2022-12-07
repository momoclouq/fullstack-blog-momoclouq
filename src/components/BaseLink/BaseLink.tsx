import { Link } from "react-router-dom";
import styled from "styled-components";

const BaseLink = styled(Link)`
    text-decoration: none;
    color: #050505;

    &:visited {
        color: inherit;
    }
`;

export default BaseLink;