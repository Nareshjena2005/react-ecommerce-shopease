import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { MyStore } from '../context/MyContext';
import SingalCard from '../components/SingalCard';

const About = () => {
  const { id } = useParams();

  const { singalData, setSingalData } = useContext(MyStore);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSingalData = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );

        setSingalData(res.data);
      } catch (error) {
        console.log('Product fetch error:', error);
        setSingalData(null);
      } finally {
        setLoading(false);
      }
    };

    getSingalData();
  }, [id, setSingalData]);

  if (loading) {
    return <h2 className="p-6 text-center">Loading product...</h2>;
  }

  if (!singalData) {
    return <h2 className="p-6 text-center">Product not found!</h2>;
  }

  return (
    <div className="p-6">
      <SingalCard product={singalData} />
    </div>
  );
};

export default About;

