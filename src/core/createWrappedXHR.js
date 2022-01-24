import videojsXHR from '@videojs/xhr'
import compose from '../utils/compose'

const createWrappedXHR = (middlewares = [], xhr = videojsXHR) => {
  return compose(...middlewares)(xhr)
}

export default createWrappedXHR
