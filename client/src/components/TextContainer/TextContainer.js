import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h3>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h3>
      <h5>Created with React.js, Express.js, Node.js and Socket.io</h5>
    </div>
    {
      users
        ? (
          <div>
            <h3>People in the room:</h3>
            <div className="activeContainer">
              <h4>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src={onlineIcon}/>
                  </div>
                ))}
              </h4>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;