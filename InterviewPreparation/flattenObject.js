const nestedObj = {
  a: {
    b: {
      c: 1,
      d: { e: 2 },
      f: [3, 4],
    },
  },
  g: 5
}



function flattenObject(obj) {

  const res = {};

  function dfs(curr, path = []) {
    for (const key in curr) {
      const val = curr[key];
      const newPath = path.concat([key]);

      if (typeof val === 'object' && val !== null) {
        dfs(val, newPath);
      } else {
        res[newPath.join('.')] = val;
      }
    }
  }
  dfs(obj);
  return res;
}

