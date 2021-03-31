import React from 'react'
import styled from 'styled-components'

export const Box = styled.div`
  width: 20%;
  padding: 5px;
  background: white;
  border: 2px solid #113641;
  border-radius: 1px;
  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.07);
`
const UserameBox = styled.input`
  width: 60%;
  font-size: 1rem;
  padding: 7px;
  border: 2px solid #eee;
`

const SearchButton = styled.button`
  width: 35%;
  font-size: 1rem;
  padding: 7px;
  border: 2px solid #113641;
  background: #113641;
  text-align: center;
  color: white;
  cursor: pointer;
`

export const Search = ({ onChange, onClick }) => (
  <Box
    style={{
      flexDirection: 'row',
      alignItems: 'center'
    }}
  >
    <UserameBox
      type="text"
      className="usernamebox"
      placeholder="username"
      onChange={onChange}
    />
    <SearchButton className="searchbtn" onClick={onClick}>
      search
    </SearchButton>
  </Box>
)

const Avatar = styled.img`
  height: 150px;
  width: 150px;
  border: none;
  border-radius: 100px;
`

const UserFullname = styled.a`
  color: black;
  font-size: 22px;
  cursor: pointer;
  text-decoration: none;
`

export const UserInfo = ({ user }) => (
  <Box
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
  >
    <Avatar src={user.avatar_url} />
    <UserFullname target="__blank" href={user.html_url}>
      {user.name}
    </UserFullname>
    { <p>User ID: {user.id}</p> }
    <div>
      <center>
        <i>{user.bio}</i>
      </center>
    </div>
  </Box>
)
