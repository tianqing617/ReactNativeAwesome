import axios from 'axios'

// Mock API 地址

// region 金刚位
export const iconsUrl = 'https://61c48e65f1af4a0017d9966d.mockapi.io/icons';
// export const animalsUrl = 'https://61c48e65f1af4a0017d9966d.mockapi.io/animals';
// export const catsUrl = 'https://61c48e65f1af4a0017d9966d.mockapi.io/cats';
const defaultImageUrl = 'https://lsky.11101122.xyz/i/2024/09/30/66fa212771c19.png'

export interface IconType {
  id: string;
  title: string;
  image: string;
}

export async function queryIcons(): Promise<IconType[]> {
  const {data} = await axios.get<IconType[]>(`${iconsUrl}`);
  return data.map(item => ({
    ...item,
    // 接口请求的地址，已无法使用，替换为默认地址
    image: defaultImageUrl,
  }));
}
// endregion

// region 模拟无限列表返回的数据
interface PolicyInfiniteList {
  message: string[]
  status: string // success
}
let infiniteFullData: string[] = []
export async function queryInfiniteList(pageNum = 1, pageSize = 5) {
  console.log('queryInfiniteList-pageNum', pageNum)
  if (infiniteFullData.length < 1) {
    console.log('queryInfiniteList-fetch')
    const { data: responseJsonHusky } = await axios.get<PolicyInfiniteList>('https://dog.ceo/api/breed/husky/images');
    const { data: responseJsonBeagle} = await axios.get<PolicyInfiniteList>('https://dog.ceo/api/breed/beagle/images');
    infiniteFullData = responseJsonHusky.message.concat(
      responseJsonBeagle.message
    )
  }

  const currentStartNum = (pageNum - 1) * pageSize
  const filteredData = infiniteFullData.slice(
    currentStartNum,
    Math.min(infiniteFullData.length, currentStartNum + pageSize)
  );
  return filteredData;
}
// endregion
