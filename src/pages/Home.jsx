import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../actions/actions';
import Loading from '../components/Loading';

const Home = () => {
  const { loading, error, products } = useSelector((state) => state);

  console.log(loading, error, products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  return <h1>Home</h1>;
};

export default Home;
