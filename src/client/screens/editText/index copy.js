import React, { PureComponent } from 'react';
import { View, ScrollView, Text, KeyboardAvoidingView, Dimensions } from 'react-native';
import { RichEditor, RichToolbar, actions, defaultActions } from 'react-native-pell-rich-editor';
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import mapStateToProps from 'mapStateToProps';
import mapDispatchToProps from 'mapDispatchToProps';

import styles from 'css/screens/home/styles.css';

import { InsertLinkModal } from './src/insertLink';
import { EmojiView } from './src/emoji';

export const devicesHeight = Dimensions.get('window').height;

const phizIcon = require('./src/assets/phiz.png');
const htmlIcon = require('./src/assets/h5.png');
const videoIcon = require('./src/assets/video.png');
const strikethrough = require('./src/assets/strikethrough.png');

class ContactScreen extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
  }

  onEditorInitialized() {

  }

  insertEmoji(emoji) {
    this.richText && this.richText.current?.insertText(emoji);
    this.richText && this.richText.current?.blurContentEditor();
  }

  render() {
    console.log('ContactScreen');
    return (
      <View className={styles.containt}>
        <KeyboardAwareScrollView
          behavior="position"
          keyboardShouldPersistTaps="always"
          style={{
            height: devicesHeight,
          }}
        >
          <ScrollView style={{}} keyboardShouldPersistTaps={'handled'}>
              <View style={{ height: devicesHeight / 2, marginTop: 50 }}>
                <RichEditor
                  ref={(r) => this.richtext = r}
                  initialContentHTML={'Hello <b>World</b> <p>this is a new paragraph</p> <p>this is another new paragraph</p>'}
                  editorInitializedCallback={() => this.onEditorInitialized()}
                  onHeightChange={onHeightChange => console.log({ onHeightChange })}
                  onChange={onChange => console.log({ onChange })}
                />
              </View>
              <View style={{
                 position: 'absolute',
                 top: 10,
                 right: 20,
              }}>
              <RichToolbar
                style={[styles.richBar]}
                editor={this.richText}
                getEditor={() => this.richtext}
                // disabled={disabled}
                // iconTint={color}
                selectedIconTint={'#2095F2'}
                disabledIconTint={'#8b8b8b'}
                // onPressAddImage={that.onPressAddImage}
                // onInsertLink={that.onInsertLink}
                iconSize={40} // default 50
                actions={[
                  'insertVideo',
                  ...defaultActions,
                  actions.setStrikethrough,
                  actions.heading1,
                  actions.heading4,
                  'insertEmoji',
                  'insertHTML',
                ]} // default defaultActions
                iconMap={{
                  insertEmoji: phizIcon,
                  [actions.setStrikethrough]: strikethrough,
                  [actions.heading1]: ({ tintColor }) => (
                    <Text style={[styles.tib, { color: tintColor }]}>H1</Text>
                  ),
                  [actions.heading4]: ({ tintColor }) => (
                    <Text style={[styles.tib, { color: tintColor }]}>H3</Text>
                  ),
                  insertHTML: htmlIcon,
                  insertVideo: videoIcon,
                }}
              // insertEmoji={that.handleEmoji}
              // insertHTML={that.insertHTML}
              // insertVideo={that.insertVideo}
              />
              {/* {<EmojiView onSelect={this.insertEmoji} />} */}
              </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactScreen);
