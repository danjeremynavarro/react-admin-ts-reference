/**
 * Sample of using styles
 */
import * as React from "react";
import {FC} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LaunchIcon from '@material-ui/icons/Launch';
import {Record} from 'react-admin';

const useStyles = makeStyles({
    link: {
        textDecoration: 'none',
    },
    icon: {
        width: '0.5em',
        paddingLeft: 2,
    },
});

/**
 * see props that are passed to Fields in react admin
 * https://marmelab.com/react-admin/Fields.html
 */
interface reco {
    [record:string]: any,
    source:string
}

export const MyUrlField:FC<any> = (rec) => {
    const classes = useStyles();
    console.log("My Url FIeld");
    console.log(rec);
    return (
        <a href={rec.record[rec.source]} className={classes.link}>
            {rec.record[rec.source]}
            <LaunchIcon className={classes.icon} />
        </a>
    );
};