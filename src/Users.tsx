/**
 * A sample of users that uses a custom MyUrlField
 */
import { List, Datagrid, TextField, EmailField} from 'react-admin';
import { MyUrlField} from './MyUrlField';

export const UserList = (props:any) => (
    <List {...props}>
    <Datagrid rowClick="edit">
        {console.log(props)}
    <TextField source="id" />
    <TextField source="name" />
    <EmailField source="email" />
    <TextField source="phone" />
    <MyUrlField source="website" />
    <TextField source="company.name" />
    </Datagrid>
    </List>
);