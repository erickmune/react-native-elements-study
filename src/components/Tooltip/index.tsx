import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { Container, Content } from './styles';

interface TooltipProps {
  message?: string;
}

const Tooltip: React.FC<TooltipProps> = () => {
  return (
    <Container>
      <Content
        withOverlay={false}
        skipAndroidStatusBar
        width={250}
        popover={<Text>Aniversário ------------ R$ 10,00</Text>}
      >
        <Icon name="question" size={30} />
      </Content>
    </Container>
  );
};

export default Tooltip;
