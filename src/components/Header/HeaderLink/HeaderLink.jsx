import React, { Component } from 'react';

class HeaderLink extends Component {
    render() {
        return (
            <div>
                <li>
                      <a href={this.props.linkUrl}>{this.props.linkName}</a>
                    </li>
          </div>
        );
    }
}

export default HeaderLink;
