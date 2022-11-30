import Poster from '@atoms/Poster';
import React from 'react';
import { Text, View } from 'react-native';
import moment from 'moment';

interface Props {
  posterPath: string;
  title: string;
  releaseDate: Date;
}

const CardMovie: React.FC<Props> = ({ posterPath, title, releaseDate }) => {
  return (
    <View
      style={{
        height: 380,
        width: '45%',
        backgroundColor: 'white',
        marginVertical: 5,
        borderRadius: 20,
        overflow: 'hidden',
      }}
    >
      <Poster posterPath={posterPath} />
      <View style={{}}>
        <Text>votos</Text>
        <Text style={{}}>{title}</Text>
        <Text style={{}}>{moment(releaseDate).format('MMM DD, YYYY')}</Text>
      </View>
    </View>
  );
};

export default CardMovie;
