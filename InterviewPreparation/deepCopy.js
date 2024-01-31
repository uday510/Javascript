const obj = {
  a: '10',
  b: '20',
  c: {
    d: '30'
  }
};

function deepcopy(obj) {

  function dfs(obj) {
    if (obj == null || typeof obj !== 'object') {
      return obj;
    }

    const res = {};

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        res[key] = deepcopy(obj[key]);
      }
    }
    return res;
  }
  return dfs(obj);
  // return res;
}


