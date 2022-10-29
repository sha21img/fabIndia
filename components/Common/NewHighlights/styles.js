import {StyleSheet} from 'react-native';
export const Styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  textBox: {
    position: 'absolute',
    top: '37%',
    left: '4%',
    zIndex: 10,
  },
  imageContainer: {
    backgroundColor: '#F6EFE6',
    paddingLeft: '15%',
    paddingTop: 20,
    paddingBottom: 5,
    marginLeft: '17%',
    marginVertical: 10,
  },
  newText: {
    fontSize: 14,
    fontWeight: '300',
    color: '#4A4A4A',
  },
  title: {
    color: '#4A4A4A',
    fontWeight: '700',
    fontSize: 24,
  },
  imageBox: {
    padding: 5,
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: 'cover',
  },
});
