import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

import axiosWithAuth from '../utils/axiosWithAuth';

const StyledDiv = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-left: 30%;
    font-family: "Times New Roman", Times, serif;
`

const StyledH1 = styled.h1`
    font-size: 5rem;
    font-family: "Times New Roman", Times, serif;
`

class FriendsList extends React.Component {
    state={
        friends: [],
    }

    componentDidMount() {
        axiosWithAuth()
            .get('/friends')
            .then(resp=> {
                // console.log(resp.data);
                this.setState({
                    friends: resp.data
                });
            })
            .catch(err=> {
                console.log(err);
            })
        }

    formatData = () => {
        const formattedData = []

        this.state.friends.forEach((name, index, email) => {
            formattedData.push({
                id: index,
                name: name.name,
                email: email[index].email

            })
        })
        return formattedData;
    }

    render() {
        const allFriends = this.formatData();
        // console.log(allFriends);

        return (
           <div>
               <StyledH1>FRIENDS LIST</StyledH1>
               {allFriends.map(friend => (
                   <StyledDiv key={friend.id}>
                       <h2>- {friend.name} -</h2>
                       <h2>- {friend.email} -</h2>
                   </StyledDiv>
               ))}
           </div> 
    )}
}

export default FriendsList;