import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Spinner } from '@atoms/Spinner';
import { Cast } from '@src/types/models/creditsInterface';
import { MovieFull } from '@src/types/models/movieInterface';
import { CastItem } from '@atoms/CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
  isLoadingDetail?: boolean;
  isLoadingCast?: boolean;
}

export const MovieDetails: React.FC<Props> = ({
  movieFull,
  cast,
  isLoadingDetail,
  isLoadingCast,
}) => {
  return (
    <>
      {isLoadingDetail ? (
        <Spinner />
      ) : (
        <View style={detailStyles.container}>
          <View style={detailStyles.rate}>
            <Text style={detailStyles.genres}>
              {movieFull?.genres?.map((g) => g.name).join(', ')}
            </Text>
          </View>
          {!!movieFull?.overview && (
            <>
              <Text style={detailStyles.header}>Historia</Text>
              <Text style={detailStyles.overview}>{movieFull?.overview}</Text>
            </>
          )}
        </View>
      )}
      {isLoadingCast ? (
        <Spinner />
      ) : (
        cast.length > 0 && (
          <View style={castingStyles.container}>
            <Text style={castingStyles.actorsHeader}>Actores</Text>
            <FlatList
              data={cast}
              keyExtractor={(item, index) => item.id.toString() + index}
              renderItem={({ item }) => <CastItem actor={item} />}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              style={castingStyles.actorsList}
            />
          </View>
        )
      )}
    </>
  );
};

const detailStyles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  rate: {
    flexDirection: 'row',
  },
  genres: {
    marginLeft: 5,
  },
  header: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
  },
  budget: {
    fontSize: 18,
  },
  overview: {
    fontSize: 16,
    textAlign: 'justify',
  },
});

const castingStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 10,
  },
  actorsHeader: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  actorsList: {
    marginTop: 10,
    height: 70,
  },
});
