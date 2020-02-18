import { LatLng, SunInfo } from '../interfaces'
import * as moment from 'moment'

export const generateSingleCoords = (): LatLng => {
  const lat = Math.random() * (90 + 90) - 90
  const lng = Math.random() * (180 + 180) - 180
  return { lat, lng }
}

export const generateCoordsArray = (): LatLng[] => {
  const result = []
  for (let i = 0; i < 100; i++) {
    result.push(generateSingleCoords())
  }
  return result
}

export const chunkArray = (array: LatLng[]): LatLng[][] => {
  const chunkedArr = [];
  let index = 0;
  while (index < array.length) {
    chunkedArr.push(array.slice(index, 5 + index));
    index += 5;
  }
  return chunkedArr;
}

export const getEarliestResult = (arr: SunInfo[]): any => [...arr].sort(findEarliest)[0]

const findEarliest = (a: SunInfo, b: SunInfo) => Date.parse(a.sunrise) - Date.parse(b.sunrise)