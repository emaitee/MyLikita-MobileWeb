import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    height: '100vh',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginBottom: 5,
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
  },
  rowIcon: {
    width: 64,
    height: 64,
    marginRight: 20,
    borderRadius: '50%',
    boxShadow: '0 1px 2px 0 rgba(0,0,0,0.1)',
  },
  rowData: {
    flex: 1,
  },
  rowDataText: {
    fontSize: 15,
    textTransform: 'capitalize',
    color: '#4b4b4b',
  },
  rowDataSubText: {
    fontSize: 13,
    opacity: 0.8,
    color: '#a8a689',
    marginTop: 4,
  },
  actionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  actionButton: {
    padding: 10,
    color: 'white',
    borderRadius: 6,
    width: 80,
    backgroundColor: '#808080',
    marginRight: 5,
    marginLeft: 5,
  },
  actionButtonDestructive: {
    backgroundColor: '#ff4b21',
  },
  actionButtonText: {
    textAlign: 'center',
  },
  headerContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ff4e3f',
    backgroundColor: '#ff8179',
  },
  header: {
    padding: 10,
    paddingVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
    minHeight: 50,
  },
  headerCenter: {
    flex: 1,
    order: 2,
  },
  headerLeft: {
    order: 1,
    width: 80,
  },
  headerRight: {
    order: 3,
    width: 80,
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
    textAlign: 'center',
    color: 'white',
  },
});
