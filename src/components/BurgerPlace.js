import React, { useState } from 'react';
import { useSubscription, gql, useMutation } from '@apollo/client';
import { List, ListItem } from './shared/List';
import { Badge } from './shared/Badge';
import InputForm from './shared/InputForm';
import PropTypes from 'prop-types';

const BURGERPLACE = gql`
subscription Burgerplace($id: uuid!) {
    burgerplaces_by_pk(id: $id) {
      id
      name
      description
      burgerplace_reviews(order_by: {created_at: desc}) {
        body
        id
      }
    }
  }
`;

const ADD_REVIEW = gql`
    mutation ($body: String!, $id: uuid!) {
        AddReview(body: $body, id: $id) {
        affected_rows
        }
    }  
`;

const BurgerPlace = ({
    match: {
        params: { id },
    },
}) => {
    const [inputVal, setInputVal] = useState("");
    const { loading, error, data } = useSubscription(BURGERPLACE, {
        variables: { id },
    });

    const [addReview] = useMutation(ADD_REVIEW);
      
    if (loading) return <p>Loading 🍔 ...</p>;
    if (error) return <p>Error :(</p>;
    
        return (
        <div>
          <h3>
            {data.burgerplaces_by_pk.name} <Badge>{data.burgerplaces_by_pk.description}</Badge>
          </h3>
          <InputForm
          inputVal={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onSubmit={() => {
            addReview({ variables: { id, body: inputVal } })
              .then(() => setInputVal(""))
              .catch((e) => {
                setInputVal(e.message);
              });
          }}
          buttonText="Review"
          />
          <List>
            {data.burgerplaces_by_pk.burgerplace_reviews.map((review) => (
              <ListItem key={review.id}>{review.body}</ListItem>
            ))}
          </List>
        </div>
    );
};

BurgerPlace.propTypes = {
    match: PropTypes.any
  };

export default BurgerPlace;