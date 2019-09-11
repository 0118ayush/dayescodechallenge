import React, { Component } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react'




class Navbar extends Component {
    render() {

        const tamponSizes = [
            { key: 1, text: 'Small', value: 1 },
            { key: 2, text: 'Regular', value: 2 },
            { key: 3, text: 'Large', value: 3 },
            { key: 3, text: 'All', value: 4 },
        ]

        const packSizes = [
            { key: 1, text: '1  - 5', value: 1 },
            { key: 2, text: '6 - 10', value: 2 },
            { key: 3, text: 'All', value: 3 }
        ]

        return (
            <Menu size='small'>
                <Menu.Item>
                    <img style={{ borderRadius: "50%" }} alt="logo" src="https://media.licdn.com/dms/image/C4D0BAQGh4j08Y_6sDw/company-logo_200_200/0?e=2159024400&v=beta&t=kz6Sau1srSvpMIk-oas3VLN_dNU-DxtcOijnC5rIeO0" />
                </Menu.Item>

                {/* <Menu.Item name="home" /> */}

                <Menu.Menu position='right'>
                    <Dropdown text='Tampon size' options={tamponSizes} simple item onChange={this.props.changeTamponSize} />
                    <Dropdown text='Pack size' options={packSizes} simple item onChange={this.props.changePackSize} />
                </Menu.Menu>
            </Menu >
        );
    }
}

export default Navbar;
