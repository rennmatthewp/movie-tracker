import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card.js';

it.skip('should render without crashing', () => {
  const mockFunc = jest.fn();
  const movie = {
    backdrop_path: 'gkdsdkf.jpg',
    title: 'The Sandlot',
    posterPath: 'rhgjdkn.jpg',
    release_date
  };
  const currentType = 'card';
  const CardWrapper = shallow(<Card 
    key={'movie-4'}
    backdropPath={'ksdjfllg.jpg'}
    title={'fkgdk.jps'}
    posterPath={movie.poster_path}
    handleAddFav= {jest.fn()}
    handleRemoveFav= {jest.fn}
    id={394249}
    releaseDate={2017-12-08}
    voteAvg={6.8}
    overview={'What the fuck'}
    user={} 
    history={props.history}
    isFav= {isFav}

  expect(CardWrapper).toBeDefined();
});