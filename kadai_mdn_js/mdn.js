const todaysDate = new Date();

// 確認用
console.log(todaysDate);

// 案１
const year1 = todaysDate.getFullYear();
const month1 = todaysDate.getMonth() + 1;
const date1 = todaysDate.getDate();

console.log(year1 + '年' + month1 + '月' + date1 + '日');

// 案２
console.log(
    todaysDate.getFullYear() + '年'
    + (todaysDate.getMonth() + 1) + '月'
    + todaysDate.getDate() + '日'
);
