import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Home = () => {
  const {
    shoppingCart: { qty },
    addProduct,
    removeProduct,
    getProductQty,
  } = useContext(CartContext);
  const classes = useStyles();

  return (
    <div className="home">
      <div>num of products: {qty}</div>
      <Link href="/cart">cart</Link>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                addProduct({ name: 'product 1', id: 1, currentPrice: 35.0 })
              }
            >
              Product 1
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                addProduct({ name: 'product 2', id: 2, currentPrice: 30.0 })
              }
            >
              Product 2
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
