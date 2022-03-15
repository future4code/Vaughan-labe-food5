import axios from 'axios';
import React, { useContext, useState } from 'react';
import FeedCard from '../../components/FeedCard/FeedCard';
import { GlobalStateContext } from '../../components/Global/GlobalStateContext';
import { BASE_URL } from '../../constants/urls';
import useRequestData from '../../hooks/useRequestData';


const FeedPage = () => {
    const [restaurants, setRestaurants] = useState([]);
    const feeds = useRequestData([], `${BASE_URL}/restaurants`);
    
    
    const feedCards = feeds.map((feed) => {
        
        return (
            <div key={feed[0]}>
              <FeedCard 
                name={feed[0]}
            />
            </div>
          );
        });
        

    return (
        <div>
            <h1>Feed</h1>
            
        </div>
      );
}

export default FeedPage;