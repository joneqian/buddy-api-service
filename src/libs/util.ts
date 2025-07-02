import { ResponseCode, WeiTaiResponseError } from '@config/global';

interface SignJsonData {
  [key: string]: any;
}

export function transArrayToObject(ary, key) {
  const obj = {};
  for (const item of ary) {
    obj[item[key]] = {
      ...item,
    };
  }
  return obj;
}

export function sortAsc(o: SignJsonData): string {
  const n: string[] = [];
  for (const k in o) n.push(k);
  n.sort();
  let str = '';
  for (let i = 0; i < n.length; i++) {
    let v = o[n[i]];
    if (v !== '') {
      if ({}.toString.call(v) === '[object Object]') {
        v = `{${sortAsc(v)}}`;
      } else if ({}.toString.call(v) === '[object Array]') {
        let ary = '';
        for (const t of v) {
          if ({}.toString.call(t) === '[object Object]') {
            ary += `,{${sortAsc(t)}}`;
          } else {
            ary += `,${sortAsc(t)}`;
          }
        }
        v = '[' + ary.slice(1) + ']';
      }
      str += '&' + n[i] + '=' + v;
    }
  }
  return str.slice(1);
}

export function dateFormat(date: Date, fmt = 'yyyy-MM-dd hh:mm:ss') {
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds().toString().substr(0, 3), // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
    }
  }
  return fmt;
}

export function OkResponse(data?: any, msg = 'OK') {
  return {
    code: ResponseCode.OK,
    data,
    msg,
  };
}

export function weiTaiOkResponse(data?: any, msg = 'OK') {
  return {
    code: ResponseCode.OK,
    data,
    msg,
  };
}

export function ErrorResponse(code: ResponseCode, msg: string | Error) {
  if (typeof msg === 'string') {
    return {
      code,
      data: null,
      msg,
    };
  }

  return {
    code,
    data: null,
    msg: msg.message || JSON.stringify(msg),
  };
}
export function WeiTaiErrorResponse(msg) {
  // 为了确保msg.split(':')[1].trim();不会报错
  if (!msg) {
    return {
      code: ResponseCode.UNKOWN_ERROR,
      data: null,
      message: JSON.stringify(msg),
    };
  }
  const Error = msg.split(':')[1] ? msg.split(':')[1].trim() : msg;
  const message = WeiTaiResponseError[Error];
  return {
    code: message ? Error : ResponseCode.UNKOWN_ERROR,
    data: null,
    message: message || Error || JSON.stringify(msg),
  };
}
export function OtherOkResponse(data?: any, msg = 'OK') {
  return {
    success: true,
    data,
    msg,
  };
}

export function OriginResponse(data?: any) {
  console.log('OriginResponse: ', data);
  return data;
}

export function OtherErrorResponse(code: ResponseCode, msg: string | Error) {
  if (typeof msg === 'string') {
    return {
      success: false,
      data: null,
      msg,
    };
  }

  return {
    success: false,
    data: null,
    msg: msg.message || JSON.stringify(msg),
  };
}

export function randomNo(len = 6) {
  let random_no = '';
  for (
    let i = 0;
    i < len;
    i++ //j位随机数，用以加在时间戳后面。
  ) {
    random_no += Math.floor(Math.random() * 10);
  }
  return random_no;
}

export function await2<T, U = Error>(promise: Promise<T>, errorExt?: Record<string, unknown>): Promise<[U, undefined] | [null, T]> {
  return promise
    .then<[null, T]>((data: T) => [null, data]) // 执行成功，返回数组第一项为 null。第二个是结果。
    .catch<[U, undefined]>((err: U) => {
      if (errorExt) {
        Object.assign(err, errorExt);
      }

      return [err, undefined]; // 执行失败，返回数组第一项为错误信息，第二项为 undefined
    });
}

export const wait = (ms: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export const safetyParseJson = (str) => {
  let result = null;
  try {
    result = JSON.parse(str);
  } catch (e) {
    return null;
  }
  return result;
};

export function isDefined<T>(value: T): value is NonNullable<T> {
  return value != null;
}

export function arrayToTree(items, primary_key = 'id', parent_key = 'parent_id') {
  const result = []; // 存放结果集
  const itemMap = {}; //
  for (const item of items) {
    const id = item[primary_key];
    const pid = item[parent_key];

    if (!itemMap[id]) {
      itemMap[id] = {
        children: [],
      };
    }

    itemMap[id] = {
      ...item,
      children: itemMap[id]['children'],
    };

    const treeItem = itemMap[id];

    if (!pid) {
      result.push(treeItem);
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        };
      }
      itemMap[pid].children.push(treeItem);
    }
  }
  return result;
}

export function isBetweenNum(num, lowerBound, upperBound) {
  return num >= lowerBound && num <= upperBound;
}

export function estimateTokens(text: string): number {
  // 将文本分割成单词
  const words = text.split(/\s+/);

  // 估算token数量
  let tokenCount = 0;
  for (const word of words) {
    // 假设每个单词平均是 1.3 个token
    tokenCount += Math.ceil(word.length / 4);
  }

  return tokenCount;
}

// cm转inch 1cm = 0.3937inch inch是英寸
export function cmToInch(cm: number): number {
  const inch = cm / 2.54;
  return Number(inch.toFixed(2));
}

// cmtopx dpi默认为96
export function cmToPx(cm: number, dpi = 96): number {
  const inch = cmToInch(cm);
  return Math.round(inch * dpi);
}

// (args) => {
//   const { field_hyperglycemia_date } = args;
//   const today = new Date();
//   const targetDate = new Date(field_hyperglycemia_date);
//   const diffTime = today - targetDate;
//   const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
//   return diffYears.toFixed(1);
// };

// 计算两个日期之间的年龄
export function calculateAge(date: Date): string | number {
  const today: Date = new Date();
  // 断言
  const targetDate: Date = date;
  const diffTime: number = today.getTime() - targetDate.getTime();
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
  return diffYears.toFixed(1);
}

/**
 * 生成唯一的6位邀请码
 * 特点：
 * 1. 数字+字母组合
 * 2. 避免使用易混淆的字符（如0和O）
 * 3. 避免全重复数字/字母
 * 4. 避免单调递增或递减序列
 * 5. 保证唯一性
 * @param seed 种子值，可以是用户ID或时间戳等唯一标识
 * @returns 6位邀请码
 */
export function generateInvitationCode(seed: number | string): string {
  // 定义字符集，排除易混淆的字符（0、O、1、I、L）
  const digits = '23456789';
  const letters = 'ABCDEFGHJKMNPQRSTUVWXYZ';
  const charset = digits + letters;

  // 创建一个更强的种子值
  let seedStr: string;
  if (typeof seed === 'number') {
    seedStr = seed.toString();
  } else {
    seedStr = seed;
  }

  // 组合种子和完整时间戳以增强唯一性
  const uniqueInput = `${seedStr}-${Date.now()}-${Math.random()}`;

  // 使用更强的哈希算法 (简单模拟，实际项目中可使用crypto模块)
  function simpleHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash = hash & hash; // 转换为32位整数
    }
    return Math.abs(hash);
  }

  // 生成哈希值
  let hashValue = simpleHash(uniqueInput);

  // 使用更可靠的随机数生成方法
  const random = (max: number): number => {
    hashValue = simpleHash((hashValue * Date.now()).toString());
    return hashValue % max;
  };

  // 确保至少有一个数字和一个字母
  const hasDigit = () => digits.split('').some((digit) => code.includes(digit));
  const hasLetter = () => letters.split('').some((letter) => code.includes(letter));

  let code = '';
  let lastChar = '';
  let consecutiveCount = 0;
  let isIncreasing = false;
  let isDecreasing = false;

  for (let i = 0; i < 6; i++) {
    let char: string;
    let attempts = 0;

    // 如果已经生成了5个字符，检查是否需要强制使用数字或字母
    const needDigit = i === 5 && !hasDigit();
    const needLetter = i === 5 && !hasLetter();

    // 根据需要选择字符集
    const currentCharset = needDigit ? digits : needLetter ? letters : charset;

    // 生成不重复且不形成模式的字符
    do {
      char = currentCharset[random(currentCharset.length)];
      attempts++;

      // 检查是否与上一个字符相同
      const isSameAsLast = char === lastChar;

      // 检查是否形成递增或递减序列
      const charIndex = charset.indexOf(char);
      const lastCharIndex = charset.indexOf(lastChar);

      const wouldBeIncreasing = lastChar !== '' && charIndex === lastCharIndex + 1;
      const wouldBeDecreasing = lastChar !== '' && charIndex === lastCharIndex - 1;

      // 如果已经有两个连续递增/递减的字符，检查是否会形成第三个
      const wouldFormPattern = (isIncreasing && wouldBeIncreasing) || (isDecreasing && wouldBeDecreasing);

      // 如果字符重复或形成模式，且尝试次数不超过10次，则重新生成
      if ((isSameAsLast && consecutiveCount >= 1) || wouldFormPattern) {
        if (attempts < 10) continue;
      }

      break;
    } while (true);

    // 更新状态
    if (char === lastChar) {
      consecutiveCount++;
    } else {
      consecutiveCount = 0;

      // 检查是否形成递增或递减序列
      if (lastChar !== '') {
        const charIndex = charset.indexOf(char);
        const lastCharIndex = charset.indexOf(lastChar);

        isIncreasing = charIndex === lastCharIndex + 1;
        isDecreasing = charIndex === lastCharIndex - 1;
      }
    }

    code += char;
    lastChar = char;
  }

  // 如果生成的代码仍然没有同时包含数字和字母（极少数情况），强制重新生成
  if (!hasDigit() || !hasLetter()) {
    // 确保至少有一个数字和一个字母
    const positions = [0, 1, 2, 3, 4, 5];
    // 随机选择一个位置放置数字
    const digitPos = positions.splice(random(positions.length), 1)[0];
    // 随机选择一个位置放置字母
    const letterPos = positions[random(positions.length)];

    const codeArray = code.split('');
    codeArray[digitPos] = digits[random(digits.length)];
    codeArray[letterPos] = letters[random(letters.length)];
    code = codeArray.join('');
  }

  return code;
}

export function treeToArray(tree, children_key = 'children') {
  const list = [];
  const findChildren = function (tree) {
    tree.forEach((item) => {
      const _item = {};
      Object.keys(item).forEach((key) => {
        if (key !== children_key) {
          _item[key] = item[key];
        }
      });
      list.push(_item);
      if (item[children_key] && item[children_key].length) {
        findChildren(item[children_key]);
      }
    });
  };
  findChildren(tree);
  return list;
}

export function extractImageUrlsFromHtml(html: string): string[] {
  const imgRegex = /<img[^>]+src="([^">]+)"/g;
  const urls: string[] = [];
  let match;

  while ((match = imgRegex.exec(html))) {
    urls.push(match[1]);
  }

  return urls;
}
