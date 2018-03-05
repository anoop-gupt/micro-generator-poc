import React from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import PropTypes from 'prop-types';

const styles = theme => ({
root: {
padding: theme.spacing.unit
}
});

class secondBase extends React.Component {
static propTypes = {
dummy: PropTypes.string
};

render() {
const { classes } = this.props;

return (
<div className={classes.root}>
    <Typography type="title">second</Typography>
</div>
);
}
}

export const Second = withStyles(styles)(SecondBase);