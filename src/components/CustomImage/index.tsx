import * as React from 'react';
import { StyleSheet, Image, TouchableOpacity, ActivityIndicator, View } from 'react-native';
import { HEIGHT, WIDTH } from '../../config/dimensions';
import ImageModal from '../ImageModal/Modal';

export default function CustomImage({ source, ...props }: any) {
  const [modal, setModal] = React.useState(false)
  const [loaded, setIsLoaded] = React.useState(false)
  const [modalLoaded, setModalLoaded] = React.useState(false)

  const onPress = () => {
    // open modal
    setModal(!modal)
  }

  return (
    <React.Fragment>
      <TouchableOpacity onPress={onPress}>
        {!loaded &&
          <View style={styles.center}>
            <ActivityIndicator color='white' />
          </View>
        }
        <Image
          source={source}
          {...props}
          onLoadEnd={() => setIsLoaded(true)}
        />
      </TouchableOpacity>
      <ImageModal visible={modal} onClose={onPress}>
        {!modalLoaded &&
          <View style={styles.center}>
            <ActivityIndicator color='white' />
          </View>
        }
        <Image
          style={styles.image}
          source={source}
        //{...props}
        />
      </ImageModal>
    </React.Fragment >
  );
}


const styles = StyleSheet.create({
  image: {
    width: WIDTH,
    height: HEIGHT,
    resizeMode: 'contain',
    alignSelf: "center"
  },
  center: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  }
}); 