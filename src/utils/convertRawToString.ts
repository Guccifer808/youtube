export const convertRawToString = (
    labelValue: String,
    isSub = false
  ): string => {
    //for views counter
    // Billions
    return Math.abs(Number(labelValue)) >= 1.0e9
      ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(0) + "B"
      : // Millions
      Math.abs(Number(labelValue)) >= 1.0e6
      ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(0) + "M"
      : // Thousands
      Math.abs(Number(labelValue)) >= 1.0e3
      ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(isSub ? 2 : 0) + "K"
      : Math.abs(Number(labelValue)).toString();
  };
  