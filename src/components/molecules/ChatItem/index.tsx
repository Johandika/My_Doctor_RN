import {StyleSheet} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import IsMe from './IsMe';
import Others from './Others';

interface ChatItemProps {
  isMe?: boolean;
}

const ChatItem: React.FC<ChatItemProps> = ({isMe}) => {
  if (isMe) {
    return <IsMe />;
  } else {
    return <Others />;
  }
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingRight: 16,
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.cardLight,
    maxWidth: '70%',
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.normal,
    color: colors.text.primary,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
