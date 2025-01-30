import {
  ImageRequireSource,
} from 'react-native';

export interface PolicyNTF {
  title: string;
  describe: string;
  price: number;
  image: ImageRequireSource;
  symbol?: string;
}

export const ALL_NTF: PolicyNTF[] = [
  {
    title: 'Kitty',
    describe: 'She is a beautiful girl.',
    price: 9.9,
    image: require('./images/kitty.png'),
  },
  {
    title: '旺财',
    describe: '旺财旺财旺财~',
    price: 99.9,
    image: require('./images/dog.png'),
  },
  {
    title: 'Simba',
    describe: '狮子王归来',
    price: 19.9,
    image: require('./images/lion.png'),
  },
];
