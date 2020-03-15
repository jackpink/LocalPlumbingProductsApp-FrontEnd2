import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class Filter extends Component {
    render() {
        const {name} = this.props;
        return(
            <div className='filter'>
                <Form>    
                    <Form.Group controlId="filter.ProductCategory">
                        <Form.Label>Select a Product Category</Form.Label>
                        <Form.Control as="select">
                            <option>Toilet Suites</option>
                            <option>Basins</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <p> Name is {name} </p>
            </div>
        )
    }
}


export default Filter;