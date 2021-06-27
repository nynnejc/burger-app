import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import { List, ListItemWithLink } from './shared/List';
import { Badge } from './shared/Badge';

const BURGERPLACES = gql`
{
    burgerplaces {
      description
      id
      name
    }
  }  
`;

// eslint-disable-next-line react/prop-types
const BurgerPlaces = ({ newBurgerPlaces }) => {
    const { loading, error, data } = useQuery(BURGERPLACES);

    const renderBurgerPlaces = (burgerplaces) => {
        return burgerplaces.map(({ id, name, description }) => (
            <ListItemWithLink key={id}>
                <Link to={`./burgerplace/${id}`}>
                {name} <Badge>{description}</Badge>
                </Link>
            </ListItemWithLink>
        ));
    };

    if (loading) return <p>Loading 🍔 ...</p>;
    if (error) return <p>Error :(</p>;

    return <List>{renderBurgerPlaces(newBurgerPlaces || data.burgerplaces)}</List>;
};

export default BurgerPlaces;