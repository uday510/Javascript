const array = [
  {
    user_id: 'fcf3a320-278f-418a-805b-1b851a7ec083',
    user_name: 'Arpit Demo',
    employee_id: null
  },
  {
    user_id: 'a20ce397-8dff-477b-a435-5344a079e487',
    user_name: 'Anil',
    employee_id: null
  },
  {
    user_id: '844600b2-13cc-4eb8-857f-0bd360c5b2eb',
    user_name: 'Lakshmi ',
    employee_id: null
  },
  {
    user_id: 'a9082da7-1b73-4330-a5b9-58cf25dfd7bc',
    user_name: 'Manish',
    employee_id: null
  },
  {
    user_id: 'a828cb6f-8735-434c-935c-5543960a0c4d',
    user_name: 'Taplu',
    employee_id: null
  },
  {
    user_id: 'a448449d-fd1b-4c84-8fe7-08af17d398d8',
    user_name: 'Prithvi raj',
    employee_id: null
  },
  {
    user_id: 'da7a3afd-6608-4964-b6b3-093908dd17f3',
    user_name: 'Raj kapoor',
    employee_id: null
  },
  {
    user_id: 'd1d096fa-ac95-4b45-ac03-c3517daa9d1b',
    user_name: 'Randheer',
    employee_id: null
  },
  {
    user_id: 'debe2e07-4da2-49a6-ac52-d5de7f635c45',
    user_name: 'rishi',
    employee_id: null
  },
  {
    user_id: '6449b978-8316-4cc1-98ad-f6292133b6a3',
    user_name: 'shammi',
    employee_id: null
  },
  {
    user_id: '0051f004-311d-435a-ac3e-da2900cb2d1f',
    user_name: 'karina',
    employee_id: null
  },
  {
    user_id: '84d7bd85-84e1-4a80-88ac-0fa271c76f36',
    user_name: 'anil663',
    employee_id: null
  },
  {
    user_id: '9d60aebc-e917-4c9b-904f-5fd958088f3f',
    user_name: 'nitisha',
    employee_id: null
  },
  {
    user_id: '068ec178-e34b-4726-abf8-fc1552131bec',
    user_name: 'Karishma',
    employee_id: null
  },
  {
    user_id: 'a74240d4-209c-4f1d-9d42-a0d9ea7570a7',
    user_name: 'MDMDMDMDMDMDMDM KumarKumarKumar (MD112)',
    employee_id: 'MD112'
  },
  {
    user_id: 'e78fe931-aeaf-4691-88aa-c6bcbe9c5c1a',
    user_name: 'Uday',
    employee_id: null
  }
];


/**
 * export const convertArrayToObject = (array: [], key: string) => {
  const initialValue = {};

  return array.reduce((obj, item) => {
    obj[item[key]] = item;

    return obj;
  }, initialValue);
};

 */

const value = {};

const result = array.reduce((obj, item) => {
   obj[item['user_id']] = item;
   return obj;
}, value);

console.log(result);