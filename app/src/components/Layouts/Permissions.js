/* eslint-disable no-use-before-define */
import React from 'react';
//import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function Tags() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        id="tags-standard"
        options={permissions}
        getOptionLabel={(option) => option.label}
        defaultValue={[permissions[2]]}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Multiple values"
            placeholder="Favorites"
          />
        )}
      />
    </div>
  );
}

// Permissions
const permissions = [
    {label: 'registerNewUser', value: 'a'},
    {label: 'suspendAccount', value: 'B'},
    {label: 'viewUsers', value: 'C'},
    {label: 'viewActivityLog', value: 'D'}
]