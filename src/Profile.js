import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

class Profile extends Component {
  render() {
    return (
        <div className="container">
                <div className="btn-group">
                    <SocialIcon url="https://www.linkedin.com/in/adhishsingla/" />
                    <SocialIcon url="https://github.com/adhish20" />
                    <SocialIcon url="https://www.facebook.com/adhish.singla" />
                </div>
        </div>
    );
  }
}

export default Profile;
