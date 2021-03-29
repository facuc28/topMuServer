import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '2px',
        backgroundColor: '#1e272e'
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        width: '25ch',
    },
}));

export default function UserPanel(props) {
    const classes = useStyles();

    return (
        <Grid container alignContent="center" justify="center" spacing={1}>
            <Paper className={classes.root} elevation={0}>
                <Grid item md={4} lg={4}>
                    <FormControl className={classes.margin}>
                        <TextField
                            id="username"
                            label="Usuario"
                            defaultValue={props.userName}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4} lg={4}>
                    <FormControl className={classes.margin}>
                        <TextField
                            id="username"
                            label="Nombre"
                            defaultValue={props.firstName}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4} lg={4}>
                    <FormControl className={classes.margin}>
                        <TextField
                            id="username"
                            label="Apellido"
                            defaultValue={props.lastName}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4} lg={4}>
                    <FormControl className={classes.margin}>
                        <TextField
                            id="username"
                            label="Email"
                            defaultValue={props.email}
                        />
                    </FormControl>
                </Grid>
                <Grid item md={4} lg={4}>
                    <FormControl className={classes.margin}>
                        <TextField
                            id="username"
                            label="Token"
                            defaultValue={props.token}
                        />
                    </FormControl>
                </Grid>
            </Paper>
        </Grid>
    );
}
