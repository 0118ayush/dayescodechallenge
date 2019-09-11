import React, { Component } from 'react';

// External Components
import { Item } from 'semantic-ui-react'

class ProductDetails extends Component {
    render() {

        const items = [
            {
                childKey: 0,
                image: '/images/wireframe/image.png',
                header: 'Header',
                description: 'Description',
                meta: 'Metadata',
                extra: 'Extra',
            },
            {
                childKey: 1,
                image: '/images/wireframe/image.png',
                header: 'Header',
                description: 'Description',
                meta: 'Metadata',
                extra: 'Extra',
            },
        ]

        return (
            <div>
                <Item.Group items={items} />
            </div>
        );
    }
}

export default ProductDetails;