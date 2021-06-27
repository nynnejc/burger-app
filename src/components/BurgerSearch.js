/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';
import InputForm from './shared/InputForm';
import BurgerPlaces from './BurgerPlaces';

const SEARCH = gql`
query Search($match: String) {
    burgerplaces(order_by: { name: asc }, where: { name: { _ilike: $match } }) {
      description
      id
      name
    }
  }
`;

const BurgerSearch = () => {
  const [inputVal, setInputVal] = useState("");
  const [search, { loading, error, data }] = useLazyQuery(SEARCH);

    if (loading) return <p>Loading 🍔 ...</p>;
    if (error) return <p>Error :(</p>;

      return (
        <div>
          <InputForm
            inputVal={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onSubmit={() => search({ variables: { match: `%${inputVal}%` } })}
          />
          <BurgerPlaces newBurgerPlaces={data ? data.burgerplaces : null} />
        </div>
      );
    };

export default BurgerSearch;