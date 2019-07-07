import React from 'react';
import {
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  View,
  Image,
  Text,
  SwipeableFlatList,
  TouchableHighlight,
  Alert,
} from 'react-native';
import { styles } from './styles';

const UserList = ({ users }) => {
  return (
    <SwipeableFlatList
      data={users}
      bounceFirstRowOnMount={true}
      maxSwipeDistance={160}
      renderItem={UserItem}
      renderQuickActions={UserActions}
    />
  );
};

const UserItem = ({ item: user }) => {
  return (
    <View style={styles.row}>
      <Image style={styles.rowIcon} source={user.picture.medium} />
      <View style={styles.rowData}>
        <Text style={styles.rowDataText}>{`${user.name.title} ${
          user.name.first
        } ${user.name.last}`}</Text>
        <Text style={styles.rowDataSubText}>{user.email}</Text>
      </View>
    </View>
  );
};

const UserActions = () => {
  return (
    <View style={styles.actionsContainer}>
      <TouchableHighlight
        style={styles.actionButton}
        onPress={() => {
          Alert.alert('Tips', 'You could do something with this edit action!');
        }}
      >
        <Text style={styles.actionButtonText}>Edit</Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={[styles.actionButton, styles.actionButtonDestructive]}
        onPress={() => {
          Alert.alert(
            'Tips',
            'You could do something with this remove action!'
          );
        }}
      >
        <Text style={styles.actionButtonText}>Remove</Text>
      </TouchableHighlight>
    </View>
  );
};

export default class Home extends React.Component {
  state = {
    users: [],
    loading: true,
  };

  componentDidMount() {
    this.getUsers();
  }

  async getUsers() {
    const res = await fetch('https://randomuser.me/api/?results=20');
    const { results } = await res.json();
    this.setState({ users: [...results], loading: false });
  }

  render() {
    const { loading, users } = this.state;
    return (
      <ScrollView noSpacer={true} noScroll={true} style={StyleSheet.container}>
        {loading ? (
          <ActivityIndicator
            style={[styles.centering, styles.gray]}
            color="#ff8179"
            size="large"
          />
        ) : (
          <UserList users={users} />
        )}
      </ScrollView>
    );
  }
}
