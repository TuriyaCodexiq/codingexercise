import axios from 'axios'
import { LatLng, SunInfo } from '../interfaces'
import { generateCoordsArray, chunkArray, getEarliestResult } from './utils'

export const getSunriseSunsetInfo = async (req, res) => {
  const randomArr = generateCoordsArray()
  const chunkedArr = chunkArray(randomArr)
  await queryByChunk(chunkedArr)
    .then((data) => {
      const flatArr = [].concat.apply([], data)
      const earliestResult = getEarliestResult(flatArr)
      res.header("Content-Type",'application/json');
      res.status(200).send(JSON.stringify(earliestResult))
    })
    .catch((error) => {
      console.log(error, "server error")
    })
}

const queryByChunk = (chunkedArr: LatLng[][])  => {
  return Promise.all(chunkedArr.map(chunk => fetchSunInfo(chunk)))
}

const fetchSunInfo = (coordsArray: LatLng[])  => {
  return Promise.all(coordsArray.map(coordSet => getSunInfo(coordSet)))
}

const getSunInfo = async (coordSet: LatLng) => {
  return await instance(coordSet)
    .then(({ data }): SunInfo => {
      const { results } = data
      return {
        sunrise: results.sunrise,
        sunset: results.sunset,
        dayLength: results.day_length
      }
    })
    .catch(error => {
      console.log(error.code, "remote server error")
    })
}

const instance = (coordSet: LatLng) => {
  return axios({
    baseURL: 'https://api.sunrise-sunset.org/json',
    method: 'GET',
    timeout: 10000,
    params: { ...coordSet, formatted: 0 }
  })
}

