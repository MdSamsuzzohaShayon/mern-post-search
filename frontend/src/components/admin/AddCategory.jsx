import React from 'react';
import {Input, Form} from "semantic-ui-react";

const AddCategory = () => {
    return (
        <Form>
            <Input
                action={{
                    color: 'teal',
                    labelPosition: 'right',
                    icon: 'arrow alternate circle right outline',
                    content: 'Submit',
                }}
                actionPosition='right'
                placeholder='Caregory'
                defaultValue=''
            />
        </Form>
    )
}

export default AddCategory;
