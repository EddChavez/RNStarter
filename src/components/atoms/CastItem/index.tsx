import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Cast } from '@src/types/models/creditsInterface';

interface Props {
  actor: Cast;
}

export const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path && <Image source={{ uri }} style={styles.image} />}
      <View style={styles.actorInfo}>
        <Text style={styles.title}>{actor.name}</Text>
        <Text style={styles.character}>{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    height: 50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.14,
    shadowRadius: 7,
    marginLeft: 20,
    paddingRight: 15,
  },
  image: { width: 50, height: 50, borderRadius: 10 },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  character: { fontSize: 16, opacity: 0.7 },
});
