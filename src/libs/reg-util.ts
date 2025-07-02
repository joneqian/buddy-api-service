// 是否只是数字
export const regInter = /^\d+$/;
// 中国手机号
export const regCNMobile = /^(?:(?:\+|00)86)?1[3-9]\d{9}$/;

export const regSpecText = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\]./?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]");
export const mobileMask = (mobile: string) => {
  return mobile?.replace(/^(\d{3})\d+(\d{4})$/, '$1****$2');
};
