"use strict";
/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date:  2020-12-09 14:14:02
 * @Last Modified by: qiuz
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.equalInterestCalc = void 0;
const equalInterestCalc = ({ commerceLoanYear, commerceLoanRate, commerceTotalPirce, accumulatFundYear, accumulatFundRate, accumulatTotalPirce }) => new Promise(resolve => {
    const commerceMonth = commerceLoanYear * 12;
    const commercePayMonty = getInterestEveryMonth(commerceTotalPirce, commerceLoanRate / 12, commerceMonth);
    const accumlatMonth = accumulatFundYear * 12;
    const accumlatPayMonty = getInterestEveryMonth(accumulatTotalPirce, accumulatFundRate / 12, accumlatMonth);
    const interestTotal = getInterestTotal(commercePayMonty * commerceMonth + accumlatPayMonty * accumlatMonth, commerceTotalPirce + accumulatTotalPirce);
    const principalCommList = getPrincipalListByMonth(commerceTotalPirce, commerceLoanRate / 12, commerceMonth);
    const principalAccuList = getPrincipalListByMonth(accumulatTotalPirce, accumulatFundRate / 12, accumlatMonth);
    const principalList = mergeList(principalCommList, principalAccuList, commerceMonth, accumlatMonth);
    const principalTotal = getPrincipalTotal(principalList, commerceTotalPirce + accumulatTotalPirce);
    const equalInterestPayMonth = parseInt(((commercePayMonty + accumlatPayMonty) * 10000).toFixed(0), 10);
    resolve({
        equalInterest: {
            payMonth: equalInterestPayMonth,
            totalInterest: interestTotal.toFixed(1),
            monthDecline: 0
        },
        equalPrincipal: {
            payMonth: principalList[0],
            totalInterest: principalTotal.toFixed(1),
            monthDecline: principalList[0] - principalList[1]
        },
        equalInterestMonthList: new Array(Math.max(commerceMonth, accumlatMonth)).fill(equalInterestPayMonth),
        equalPrincipalMonthList: principalList
    });
});
exports.equalInterestCalc = equalInterestCalc;
/**
 * 获取（等额本息）每月还款额
 *
 * @param loanTotalPrice 贷款总额
 * @param monthLoanRate  每月利息
 * @param monthNum       贷款期限（月份）
 * @return
 */
const getInterestEveryMonth = (loanTotalPrice, monthLoanRate, monthNum) => {
    if (Math.pow(1 + monthLoanRate, monthNum) - 1 == 0) {
        return 0;
    }
    return ((loanTotalPrice * monthLoanRate * Math.pow(1 + monthLoanRate, monthNum)) /
        (Math.pow(1 + monthLoanRate, monthNum) - 1));
};
/**
 * 获取（等额本息）利息总额
 *
 * @param repaymentTotal 还款总额
 * @param loanTotalPrice 贷款总额
 * @return
 */
const getInterestTotal = (repaymentTotal, loanTotalPrice) => {
    return repaymentTotal - loanTotalPrice;
};
const getPrincipalTotal = (list, loanTotalPrice) => {
    return list.reduce((p, c) => p + c) / 10000 - loanTotalPrice;
};
const getPrincipalListByMonth = (loanTotalPrice, monthLoanRate, monthNum) => {
    const accumulatList = [];
    let finshRepayTotal = 0;
    for (let i = 0; i < monthNum; i++) {
        const repayMonth = loanTotalPrice / monthNum +
            (loanTotalPrice - finshRepayTotal) * monthLoanRate;
        finshRepayTotal = finshRepayTotal + loanTotalPrice / monthNum;
        accumulatList.push(parseInt((repayMonth * 10000).toFixed(0), 10));
    }
    return accumulatList;
};
/**
 * 在组合贷款下拼接（等额本金）和（等额本金）分月还款额
 *
 * @param commList     商业贷款分月还款数额列表
 * @param accuList     公积金贷款分月还款数额列表
 * @param commMonthNum 商业贷款期限（月份）
 * @param accuMonthNum 公积金贷款期限（月份）
 * @return
 */
const mergeList = (commList, accuList, commMonthNum, accuMonthNum) => {
    const size = Math.min(commMonthNum, accuMonthNum);
    const list = [];
    for (let i = 0; i < size; i++) {
        list.push((commList[i] || 0) + (accuList[i] || 0));
    }
    return list;
};
// # sourceMappingURL=helper.js.map
