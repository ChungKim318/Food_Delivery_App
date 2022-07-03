import {dataProduct} from '../constants/dataProduct';

const getData = (skip = 0, take = 4) => {
  return new Promise((resolve, reject) => {
    if (skip > dataProduct[0].products.length) {
      resolve([]);
    } else {
      setTimeout(() => {
        resolve(dataProduct[0].products.slice(skip, take + skip));
      }, 2000);
    }
  });
};

export {getData};
