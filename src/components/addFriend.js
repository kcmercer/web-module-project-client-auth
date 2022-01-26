import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import axiosWithAuth from '../utils/axiosWithAuth';

const StyledDiv = styled.div`
    display: flex;
    flex-flow: column wrap;
    align-content: center;
`

const StyledH1 = styled.h1`
    font-size: 5rem;
    font-family: "Times New Roman", Times, serif;
`

const StyledInput = styled.input`
    margin-bottom: 5%;
    height: 2em;
    width: 16em;
    background-color: black;
    border-radius: 6px;
    color: white;
    font-size: 2rem;
`

const StyledLabel = styled.label`
    margin-right: 45%;
    font-size: 2.5rem;
    font-family: "Times New Roman", Times, serif;
`

const StyledButton = styled.button`
    margin-top: 4%;
    height: 2em;
    width: 14em;
    background-color: black;
    color: white;
    font-size: 2rem;
    border-radius: 6px;
    font-family: "Times New Roman", Times, serif;
`

class AddFriends extends React.Component {
    state = {
        credentials: {
            name: '',
            email: ''
        }
    };
  
    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    addFriend = e => {
        e.preventDefault();
        console.log('click!');

        axiosWithAuth()
            .post('/friends', this.state.credentials)
            .then(resp=> {
                console.log(resp);
            })
            .catch(err=> {
                console.log(err);
            })
        }

    render() {
        return (
            <StyledDiv>
                <StyledH1>ADD FRIEND</StyledH1>
                <form onSubmit={this.addFriend}>
                    <StyledLabel> FRIEND NAME </StyledLabel>
                <br></br>
                    <StyledInput
                        type='text'
                        name='name'
                        value={this.state.credentials.name}
                        onChange={this.handleChange}
                        /> 
                <br></br>
                    <StyledLabel> FRIEND EMAIL </StyledLabel>
                <br></br>
                    <StyledInput
                        type='text'
                        name='email'
                        value={this.state.credentials.email}
                        onChange={this.handleChange}
                        />
                  <br></br>      
                    <StyledButton>SUBMIT</StyledButton>
                </form>
            </StyledDiv>
        )
    }
}
export default AddFriends;