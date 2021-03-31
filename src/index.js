import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import styled from 'styled-components'
import { Search, Box, UserInfo } from './components/index'

const Body = styled.div`
  background: #eee;
  min-height: 100vh;
  width: 100vw;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isEmpty: true,
      isTyping: false,
      username: '',
      userData: {},
      hasLoaded: false,
      error: false
    }
  }

  handleSearch = async e => {
    e.preventDefault()
    this.setState({ isTyping: false, hasLoaded: false })
    const userData = await (await fetch(
      `https://api.github.com/users/${this.state.username}`
    )).json()
    if (userData.message === 'Not Found') {
      this.setState({ hasLoaded: true, error: 'User not found' })
      return
    }
    this.setState({ hasLoaded: true, userData, error: false })
    console.log(userData)
  }

  handleUsernameInputChange = e =>
    e.target.value === ''
      ? this.setState({ isTyping: true, isEmpty: true, username: '' })
      : this.setState({
          isTyping: true,
          isEmpty: false,
          username: e.target.value
        })

  render() {
    let afterSearch
    // Do this only if the box is not empty and the user is not typing
    if (!this.state.isEmpty && !this.state.isTyping) {
      // Check if the content has loaded, show content
      if (this.state.hasLoaded) {
        // Check for errors
        if (this.state.error) {
          afterSearch = <Box>{this.state.error}</Box>
        } else {
          afterSearch = <UserInfo user={this.state.userData} />
        }
      } else {
        // If content has not loaded show the loading box
        afterSearch = <Box>loading</Box>
      }
    }

    return (
      <Body>
        <Container>
          <Search
            onClick={this.handleSearch}
            onChange={this.handleUsernameInputChange}
          />
          {afterSearch}
        </Container>
      </Body>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
