export const getSquare = (num) => num ** 2;

export const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

export const castNumber = (value) => {
  const text = 'given value is not convertable';
  const final = parseInt(value, 10);
  const isNan = Number.isNaN(final);
  if (value === false || value === '') {
    return 0;
  }
  if (value === true) {
    return 1;
  }
  if (isNan === true) {
    return text;
  }
  return final;
};

export const checkType = (value) => typeof value;

export const countVowels = (text) => {
  let vowelsCount = 0;
  const str = text.toLowerCase();
  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i) === 'a'  str.charAt(i) === 'e'  str.charAt(i) === 'i'  str.charAt(i) === 'o'  str.charAt(i) === 'u') {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
};



export const getSquare= (num) => num * num;

export const isEven = (num) => num % 2 === 0;

export const castNumber = (value) => {
if (value.isNaN(num)) {
return 'given value is not convertible';
}
return num;
};

export const checkType = (str, num) => {
  if (num < 0 || num >= str.length) {
    return str;
  }

  return str.slice(0, num) + str.charAt(num).toUpperCase() + str.slice(num + 1);
};

export const countVowels = (text) => {
  let count = 0;
  for (let i = 0; i < text.length; i += 1) {
    if (text[i].match(/[A, E, I, O, U, Y, a , e , i , o , u , y]/)) {
      count += 1;
    }
  }
  return count;
};