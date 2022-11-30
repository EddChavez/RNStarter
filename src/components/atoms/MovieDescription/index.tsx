import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import * as Progress from 'react-native-progress';

interface Props {
  title: string;
  releaseDate: Date;
  voteAverage: number;
  isViewDetails?: boolean;
}

const MovieDescription: React.FC<Props> = ({
  title,
  releaseDate,
  voteAverage,
  isViewDetails,
}) => {
  const [average, setAverage] = useState(0);

  useEffect(() => {
    setAverage(voteAverage / 10);
  }, [voteAverage]);

  return (
    <View
      style={isViewDetails ? styles.containerViewDetails : styles.container}
    >
      <View
        style={[
          isViewDetails
            ? styles.progressContainerViewDetails
            : styles.progressContainerNoViewDetails,
          styles.progressContainer,
        ]}
      >
        <Progress.Circle
          size={isViewDetails ? 60 : 40}
          progress={average}
          showsText={true}
          textStyle={styles.progressTextStyle}
          color="#274B83"
        />
      </View>
      <View style={[isViewDetails && styles.descriptionContainer]}>
        <Text style={styles.titleStyle}>{title}</Text>
        <Text style={styles.releaseDateStyle}>
          {moment(releaseDate).format('MMM DD, YYYY')}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 30,
  },
  containerViewDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    justifyContent: 'center',
  },
  progressContainer: {
    backgroundColor: 'white',
    borderRadius: 20,
  },
  progressContainerNoViewDetails: {
    position: 'absolute',
    top: -20,
    left: 8,
  },
  progressContainerViewDetails: {
    backgroundColor: 'red',
  },
  progressTextStyle: {
    color: 'black',
    fontSize: 11,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    marginLeft: 15,
  },
  titleStyle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  releaseDateStyle: {
    fontSize: 12,
    color: '#828282',
  },
});

export default MovieDescription;
