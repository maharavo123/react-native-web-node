import React, { PureComponent } from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { connect } from 'react-redux';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import styles from 'css/styles.css';

import renderNavIcon from 'components/common/renderNavIcon';
import renderContent from 'components/common/renderContent';
import { Content, HeaderNavIcons, Tabs } from '../../ressources/content';
import { Icon } from '../../ressources/Icon';

class HomeScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.initialSelected,
    };
  }

  render() {
    console.log({ props: this.props });
    const renderTab = (tab, index) => {
      const isSelected = index === this.state.selected;
      return (
        <TouchableHighlight
          className={isSelected ? styles.liCurrent : styles.li}
          onPress={() => {
            if (index === 3) {
              this.props.logout();
            }
            if (isSelected) {
              return;
            }
            this.setState({ selected: index });
            this.props.onTabSelect(index);
          }}
          underlayColor="transparent"
          key={index}
        >
          <View className={styles.link}>
            <Icon
              name={tab.toLowerCase()}
              size={23}
              className={isSelected ? styles.currentIcon : styles.icon}
            />
            <Text
              className={
                isSelected ? styles.liCurrentLinkText : styles.linkText
              }
            >
              {tab}
            </Text>
          </View>
        </TouchableHighlight>
      );
    };

    return (
      <SafeAreaView className={styles.wrapper}>
        <ScrollView>
          <View className={styles.header}>
            <View className={styles.headerHeadings}>
              <Text className={styles.headerSpan}>BLUEPRINT</Text>
              <Text className={styles.h1}>Responsive Full Width Tabs</Text>
            </View>
            <View className={styles.headerNav}>
              {HeaderNavIcons.map(renderNavIcon)}
            </View>
          </View>
          <View className={styles.tabsWrapper}>
            <View className={styles.tabs}>
              <View className={styles.ul}>{Tabs.map(renderTab)}</View>
              <View className={styles.bottomBorder} />
            </View>
            <View className={styles.contentSection}>
              {Content[this.state.selected].map(renderContent)}
            </View>
            <View className={styles.info}>
              <Text className={styles.infoText}>
                Food Shapes/Icons by{' '}
                <Text
                  className={styles.infoLink}
                  onPress={() => Linking.openURL('http://psdblast.com/50-food-icon-set-psd')
                  }
                >
                  PsdBlast
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
