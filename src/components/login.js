import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
    margin-right: 65%;
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

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
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

    login = e => {
        e.preventDefault();
        console.log(this.state.credentials);

        axios.post('http://localhost:9000/api/login', this.state.credentials)
            .then(resp => {
                console.log(resp)

                localStorage.setItem("token", resp.data.token)
                localStorage.setItem("role", resp.data.role)
                localStorage.setItem("username", resp.data.username);

                this.props.history.push('/friends')
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <StyledDiv>
                <StyledH1>LOGIN</StyledH1>
                <form onSubmit={this.login}>
                    <StyledLabel> USERNAME </StyledLabel>
                <br></br>
                    <StyledInput
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                        onChange={this.handleChange}
                        /> 
                <br></br>
                    <StyledLabel> PASSWORD </StyledLabel>
                <br></br>
                    <StyledInput
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                        />
                  <br></br>      
                    <StyledButton>SUBMIT</StyledButton>
                </form>
            </StyledDiv>
        )
    }
}

export default Login;