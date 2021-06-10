/* eslint-disable consistent-return */
import React, { useState, useEffect, useContext, memo } from 'react';
import io from 'socket.io-client';

import { UserContext } from './UserProvider';

export const RealtimeContext = React.createContext();

const RealtimeProvider = ({ children }) => {
  const userContext = useContext(UserContext);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (!process.browser) return;

    const newSocket = io(process.env.API_URL);

    setSocket(newSocket);

    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [userContext.state.user]);

  return (
    <RealtimeContext.Provider
      value={{
        socket,
      }}
    >
      {children}
    </RealtimeContext.Provider>
  );
};
export default memo(RealtimeProvider);
