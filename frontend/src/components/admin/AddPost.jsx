import React, { Component } from 'react';
import { Form, Container } from "semantic-ui-react";


const options = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
    { key: 'o', text: 'Other', value: 'other' },
]

class AddPost extends Component {
    // newPost.title = title;
    // newPost.description = description;
    // newPost.img_src = img_src; 
    // newPost.category = category;
    // const tagsList = tags.split(',');
    // newPost.tags = tagsList; /// GET VALUE AS ARRAY AND SAVE AS ARRAY
    render() {
        return (
            <Container>
                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input fluid label='Title' placeholder='Title' />
                        <Form.Select
                            fluid
                            label='Category'
                            options={options}
                            placeholder='Gender'
                        />
                    </Form.Group>
                    <Form.Input fluid label='Image Source' placeholder='Image Source' />
                    <Form.TextArea label='About' placeholder='Tell us more about you...' />
                    <Form.Input fluid label='Tags' placeholder='Tags are comma seperated list' />
                    <Form.Button color="teal">Submit</Form.Button>
                </Form>
            </Container>
        )
    }
}

export default AddPost;
