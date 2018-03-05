import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';

const styles = theme => ({
root: {
padding: theme.spacing.unit
}
});

class myFirstBase extends React.Component {
static propTypes = {
dummy: PropTypes.string
};

render() {
const { classes } = this.props;

return (
<div className={classes.root}>
    <Typography type="title">myFirst</Typography>
</div>
);
}
}

export const MyFirst = withStyles(styles)(MyFirstBase);