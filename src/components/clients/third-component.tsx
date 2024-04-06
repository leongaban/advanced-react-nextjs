'use client';
import React, { useState, useEffect, useTransition } from 'react';
import { fetchData } from '@/app/actions/_actions';
import PhotoList from '@/components/clients/photo-list';

const ThirdComponent = () => {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState(null);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataFromServer = async () => {
      try {
        // startTransition to fetch data from server Action (/actions)
        startTransition(async () => {
          const data = await fetchData();
          setData(data);
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromServer();
  }, []);

  return (
    <div>
      <h1>Third Component</h1>
      {/* <form action={fetchData}>
        <button type="submit">Submit</button>
      </form> */}
      {isPending && <p>Loading...</p>}
      {!isPending && data && <PhotoList photos={data} />}
    </div>
  );
};

export default ThirdComponent;
