import colors from './colors';

const globalStyles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 'auto',
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#8FCACA',
    marginTop: 10,
  },
  buttonTextContainer: {
    color: colors.white,
    fontWeight: '500',
  },
  goBackText: {
    color: '#316B83',
    marginTop: 5,
    fontWeight: '600',
  },
};

export default globalStyles;
