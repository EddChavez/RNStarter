import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface Props {
  title: string;
  data: any[];
  renderItem: any;
}

const Carousel: React.FC<Props> = ({ title, data, renderItem }) => {
  return (
    <View style={castingStyles.container}>
      <Text style={castingStyles.actorsHeader}>{title}</Text>
      <FlatList
        data={data}
        keyExtractor={(item, index) => item.id.toString() + index}
        renderItem={renderItem}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={castingStyles.actorsList}
      />
    </View>
  );
};

const castingStyles = StyleSheet.create({
  container: {},
  actorsHeader: {
    fontSize: 23,
    marginTop: 10,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  actorsList: {
    marginTop: 10,
    paddingVertical: 15,
  },
});

export default Carousel;
