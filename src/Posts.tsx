/**
 * A sample for posts that uses a reference field. 
 */
import * as React from 'react';
import {ListProps}from '@material-ui/core';
import {List, Datagrid, ReferenceField, TextField} from 'react-admin';

export const PostList = (props:any) => (
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