import React, { Component } from 'react';

import homepagePic from "../Data/dayesHomepage.jpg"

class HomePage extends Component {
    render() {
        return (
            <div align="center">
                <a href="https://yourdaye.com">
                    <img src={homepagePic} />
                </a>
            </div>
        );
    }
}

export default HomePage;