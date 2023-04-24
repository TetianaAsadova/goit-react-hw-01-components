import PropTypes from 'prop-types';
import user from '../user.json';
import data from '../data.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';


export const App = () => {
  
  // console.log(`user`, user);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}  
        // followers={user.stats.followers}
        // views={user.stats.views}
        // likes={user.stats.likes}
      />
      
      {/* <Statistics title="Upload stats" stats={data} /> */}
  
      <Statistics stats={data} />
  

      
      
    </div>
  );
};

    
