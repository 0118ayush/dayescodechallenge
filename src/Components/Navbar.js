import React, { Component } from 'react';
import { Dropdown, Menu } from 'semantic-ui-react'
import { Link, withRouter } from "react-router-dom"



class Navbar extends Component {
    render() {

        const tamponSizes = [
            { key: 1, text: 'All', value: 1 },
            { key: 2, text: 'Small', value: 2 },
            { key: 3, text: 'Regular', value: 3 },
            { key: 4, text: 'Large', value: 4 }
        ]

        const packSizes = [
            { key: 1, text: 'All', value: 1 },
            { key: 2, text: '1  - 5', value: 2 },
            { key: 3, text: '6 - 10', value: 3 },
        ]

        const sortByOptions = [
            { key: 1, text: 'Price: low to high', value: 1 },
            { key: 2, text: 'Price: high to low', value: 2 },
        ]

        return (
            <Menu size='small'>
                <Menu.Item>
                    <img style={{ borderRadius: "50%" }} alt="logo" src="https://media.licdn.com/dms/image/C4D0BAQGh4j08Y_6sDw/company-logo_200_200/0?e=2159024400&v=beta&t=kz6Sau1srSvpMIk-oas3VLN_dNU-DxtcOijnC5rIeO0" />
                </Menu.Item>

                <Link to="/">
                    <Menu.Item name="home" />
                </Link>

                <Link to="/products">
                    <Menu.Item name="products" />
                </Link>

                {
                    this.props.location.pathname === "/products" ?
                        <Menu.Menu position='right'>
                            <Dropdown text='Tampon size' options={tamponSizes} simple item onChange={this.props.changeTamponSize} />
                            <Dropdown text='Pack size' options={packSizes} simple item onChange={this.props.changePackSize} />
                            <Dropdown text='Sort by...' options={sortByOptions} simple item onChange={this.props.changeSortBy} />
                        </Menu.Menu>
                        : null
                }

            </Menu >
        );
    }
}

export default withRouter(Navbar);
