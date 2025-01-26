import { LayoutProvider } from 'recyclerlistview';
import { Dimensions } from 'react-native';

function getWindowWidth() {
  // To deal with precision issues on android
  return Math.round(Dimensions.get('window').width * 1000) / 1000 - 6; // Adjustment for margin given to RLV;
}

export function getLayoutProvider(layoutNum: number) {
  switch (layoutNum) {
    case 0: {
      return new LayoutProvider(
        () => {
          return 'VSEL'; // Since we have just one view type
        },
        (type, dim, index) => {
          const columnWidth = getWindowWidth() / 3;
          switch (type) {
            case 'VSEL':
              if (index % 3 === 0) {
                // 若是第3个，占整个宽度
                dim.width = 3 * columnWidth;
                dim.height = 300;
              } else if (index % 2 === 0) {
                // 若是第2个，占2/3整个宽度
                dim.width = 2 * columnWidth;
                dim.height = 250;
              } else {
                // 若是第1个，占1/3整个宽度
                dim.width = columnWidth;
                dim.height = 250;
              }
              break;
            default:
              dim.width = 0;
              dim.height = 0;
          }
        }
      );
    }
    default: {
      return new LayoutProvider(
        () => {
          return 'VSEL';
        },
        (type, dim) => {
          switch (type) {
            case 'VSEL':
              dim.width = getWindowWidth();
              dim.height = 300;
              break;
            default:
              dim.width = 0;
              dim.height = 0;
          }
        }
      );
    }
  }
}
