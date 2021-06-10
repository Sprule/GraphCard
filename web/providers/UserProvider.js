import React from 'react';

export const UserContext = React.createContext();

export default class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    const { userSession } = this.props;
    this.state = {
      user: userSession,
      setUser: (user) => {
        this.setState({ user });
        console.log('user:', user);
      },
    };
  }

  render() {
    const { user } = this.state;
    const { children } = this.props;
    return (
      <UserContext.Provider
        value={{
          state: this.state,
          user,
        }}
      >
        {children}
      </UserContext.Provider>
    );
  }
}
