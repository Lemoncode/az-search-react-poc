export const isValueInList = (list: any[], value) => list ? (list.indexOf(value) >= 0) : false;

export const addValueToList = (list: any[], value) => {
  if (list) {
    return isValueInList(list, value) ? list : [...list, value];
  } else {
    return [value];
  }  
};

export const removeValueFromList = (list: any[], value) => {
  return isValueInList(list, value) ? list.filter(v => v !== value) : list;
};
