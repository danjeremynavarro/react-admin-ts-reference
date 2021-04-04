/**
 * A sample for posts that uses a reference field. 
 */
import * as React from 'react';
import {ListProps}from '@material-ui/core';
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Create
} from 'react-admin';

const PostTitle = (rec:{record:any}) => {
        return <span>Post {rec.record ? `"${rec.record.title}"` : ''}</span>;
    };

/**
 * To list all post
 * @param props 
 * @returns 
 */
export const PostList = (props:object) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <ReferenceField source="userId" reference="users">
               <TextField source="name" />
            </ReferenceField>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="body" />
        </Datagrid>
    </List>
)

/**
 * To show form page
 * @param props 
 * @returns 
 */
export const PostEdit = (props:object) => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput disabled source="id" />
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
)

export const PostCreate = (props:object) => (
        <Create {...props}>
            <SimpleForm>
                <ReferenceInput source="userId" reference="users">
                    <SelectInput optionText="name" />
                </ReferenceInput>
                <TextInput source="title" />
                <TextInput multiline source="body" />
            </SimpleForm>
        </Create>
    );