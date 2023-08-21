import React from 'react'
import styled from '@emotion/styled'

const StyledDiv = styled.div`
    background-color: whitesmoke;
    padding: 1rem 2rem;
    color:${(props=> props.color)}

    p {
        font-size: 28px;
    }
`;

const Dashboard = () => ( 
     <StyledDiv color="black">
        <p>Hellowordl</p>
    </StyledDiv>
)

export default Dashboard;
