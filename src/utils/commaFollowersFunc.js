export const commaFollowersFunc = numb => {
  const numbToStr = String(numb);
  if (numbToStr.length < 4) return numbToStr;
  if (numbToStr.length > 3 && numbToStr.length < 7) {
    const result = numbToStr.split('');
    result.splice(-3, 0, ',');
    return result.join('');
  }
  if (numbToStr.length > 6 && numbToStr.length < 11) {
    const result = numbToStr.split('');
    result.splice(-3, 0, ',');
    result.splice(-7, 0, ',');
    return result.join('');
  }
};
