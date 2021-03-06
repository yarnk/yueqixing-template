"use strict";
/*
 * @Author: qiuz
 * @Github: <https://github.com/qiuziz>
 * @Date:  2020-12-10 23:41:11
 * @Last Modified by: qiuz
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.OPTION = exports.MONTY_TITLE = exports.MONTY_DATA = exports.LOAN_WAY_TITLE = exports.COMPUTE_WAY_TITLE = exports.getRenderList = exports.COMPUTE_WAY = exports.LIST_TYPE = exports.DEMO_VIDEO = exports.GRADIENT_BG = exports.CHECK_RIDIO = exports.CHECK_RIDIO_Y = exports.REPORT_BG_BUILDING = exports.REPORT_BG_MARK = exports.RIGHT_ARROW_WHITE = exports.PERCENT_ICON = exports.RIGHT_ARROW = exports.imgPrefix = void 0;
exports.imgPrefix = "../../assets/images";
const yz_prop_icon_arrow_png_1 = require("../../assets/images/yz_prop_icon_arrow.png");

exports.RIGHT_ARROW = yz_prop_icon_arrow_png_1.default;
// export const RIGHT_ARROW = `../../assets/images/yz_prop_icon_arrow.png`;
const esf_calculator_icon_question_png_1 = require("../../assets/images/esf_calculator_icon_question.png");
const yz_prop_icon_arrow_white_png_1 = require("../../assets/images/yz_prop_icon_arrow_white.png");

exports.RIGHT_ARROW_WHITE = yz_prop_icon_arrow_white_png_1.default;
const esf_calculator_img_mark_png_1 = require("../../assets/images/esf_calculator_img_mark.png");

exports.REPORT_BG_MARK = esf_calculator_img_mark_png_1.default;
const esf_calculator_img_building_png_1 = require("../../assets/images/esf_calculator_img_building.png");

exports.REPORT_BG_BUILDING = esf_calculator_img_building_png_1.default;
const comm_form_icon_gouxuan_png_1 = require("../../assets/images/comm_form_icon_gouxuan.png");

exports.CHECK_RIDIO_Y = comm_form_icon_gouxuan_png_1.default;
const comm_form_icon_weigouxuan_png_1 = require("../../assets/images/comm_form_icon_weigouxuan.png");

exports.CHECK_RIDIO = comm_form_icon_weigouxuan_png_1.default;
const esf_calculator_img_percent_png_1 = require("../../assets/images/esf_calculator_img_percent.png");

exports.PERCENT_ICON = esf_calculator_img_percent_png_1.default;
const esf_calculator_img_bggradient_png_1 = require("../../assets/images/esf_calculator_img_bggradient.png");

exports.GRADIENT_BG = esf_calculator_img_bggradient_png_1.default;
const DEMO_VIDEO = 'https://wos2.58cdn.com.cn/DeFazYxWvDti/frsupload/bed49a933db6b5deedd8b868ec9c8bca.mp4';
exports.DEMO_VIDEO = DEMO_VIDEO;
exports.LIST_TYPE = {
    0: ["reservedFunds", "busniessLoan", "group"],
    1: ["busniessLoan"],
    2: ["reservedFunds"]
};
exports.COMPUTE_WAY = {
    0: ["loan"],
    1: ["house", "loan"]
};
const getRenderList = (data) => {
    const { loanLrpType, commerceLoanYear, accumulatFundYear } = data;
    const LPR = loanLrpType === 1
        ? [
            {
                name: "LPR",
                icon: esf_calculator_icon_question_png_1.default,
                value: data["loanLrp"],
                readOnly: true,
                key: "loanLrp",
                valueStyle: {
                    color: "#0B0F12"
                },
                ratio: 100,
                explain: {
                    title: "LPR(????????????????????????)",
                    content: "???2019???10?????????????????????????????????LPR???????????????????????????????????????LPR??????????????????????????????????????????????????????LPR????????????????????????????????????"
                },
                unit: "%",
                renderType: "busniessLoan"
            },
            {
                name: "??????",
                icon: esf_calculator_icon_question_png_1.default,
                value: data["commercialLoanBasePoint"],
                key: "commercialLoanBasePoint",
                unit: "BP(???)",
                explain: {
                    title: "??????????????????",
                    content: "1?????????=0.01%???????????????10????????????????????????LPR??????????????????0.1%????????????????????????"
                },
                inputType: "number",
                keyboardType: "number-pad",
                renderType: "busniessLoan"
            },
            {
                name: "????????????",
                readOnly: true,
                value: data["commerceLoanRateEqua"],
                valueStyle: {
                    color: "#979B9E"
                },
                key: "commerceLoanRateEqua",
                unit: data["commerceLoanRateNewUnit"],
                unitStyle: {
                    color: "#0B0F12"
                },
                renderType: "busniessLoan"
            }
        ]
        : [
            {
                name: "????????????",
                readOnly: true,
                range: data.options["commerceLoanRate"] || [],
                value: data["commerceLoanRate"],
                type: "selector",
                rangeFilter: commerceLoanYear > 5
                    ? "outFive"
                    : commerceLoanYear > 1
                        ? "inFive"
                        : "inOne",
                key: "commerceLoanRate",
                unit: "arrowright",
                renderType: "busniessLoan"
            }
        ];
    return [
        {
            name: "????????????",
            value: data["houseTotal"],
            key: "houseTotal",
            unit: "???",
            maxLength: 6,
            inputType: "number",
            keyboardType: "number-pad",
            renderType: "house",
            hidden: ""
        },
        {
            name: "????????????",
            value: data["downPayRate"],
            type: "selector",
            key: "downPayRate",
            range: data.options["downPayRate"] || [],
            unit: "arrowright",
            renderType: "house"
        },
        {
            name: "????????????",
            value: data["loanAmount"],
            inputType: "number",
            readOnly: data.way === 1,
            keyboardType: "number-pad",
            key: "loanAmount",
            unit: "???",
            valueStyle: {
                color: "#0B0F12"
            },
            renderType: "loan"
        },
        {
            name: "???????????????",
            value: data["accumulatTotalPirce"],
            key: "accumulatTotalPirce",
            unit: "???",
            blurCheck: true,
            inputType: "number",
            keyboardType: "number-pad",
            renderType: "group"
        },
        {
            name: "???????????????",
            value: data["accumulatFundYear"],
            type: "selector",
            key: "accumulatFundYear",
            range: data.options["accumulatFundYear"] || [],
            unit: "arrowright",
            renderType: "reservedFunds"
        },
        {
            name: "???????????????",
            value: data["accumulatFundRate"],
            type: "selector",
            key: "accumulatFundRate",
            renderType: "reservedFunds",
            range: data.options["accumulatFundRate"] || [],
            rangeFilter: accumulatFundYear > 5 ? "outFive" : "inFive",
            unit: "arrowright"
        },
        {
            name: "????????????",
            value: data["commerceTotalPirce"],
            key: "commerceTotalPirce",
            unit: "???",
            inputType: "number",
            keyboardType: "number-pad",
            renderType: "group"
        },
        {
            name: "????????????",
            value: data["commerceLoanYear"],
            type: "selector",
            key: "commerceLoanYear",
            range: data.options["commerceLoanYear"] || [],
            unit: "arrowright",
            renderType: "busniessLoan"
        },
        {
            name: "????????????",
            value: data["loanLrp"],
            type: "selector",
            key: "loanLrp",
            range: data.options["loanLrp"] || [],
            unit: "arrowright",
            renderType: "busniessLoan"
        },
        ...LPR
    ];
};
exports.getRenderList = getRenderList;
exports.COMPUTE_WAY_TITLE = [
    {
        id: 1,
        index: 0,
        name: "???????????????",
        key: "way"
    },
    {
        id: 2,
        index: 1,
        name: "???????????????",
        key: "way"
    }
];
exports.LOAN_WAY_TITLE = [
    {
        id: 3,
        index: 0,
        name: "?????????",
        key: "loanType"
    },
    {
        id: 4,
        index: 1,
        name: "?????????",
        key: "loanType"
    },
    {
        id: 5,
        index: 2,
        name: "????????????",
        key: "loanType"
    }
];
exports.MONTY_DATA = [
    {
        title: "????????????",
        type: "equalInterest",
        advant: "??????????????????"
    },
    {
        title: "????????????",
        type: "equalPrincipal",
        advant: "????????????20???"
    }
];
exports.MONTY_TITLE = {
    equalInterest: "?????????????????????",
    equalPrincipal: "?????????????????????"
};
exports.OPTION = {
    options: {
        commerceLoanYear: [
            {
                label: "1???",
                value: 1.0
            },
            {
                label: "2???",
                value: 2.0
            },
            {
                label: "3???",
                value: 3.0
            },
            {
                label: "4???",
                value: 4.0
            },
            {
                label: "5???",
                value: 5.0
            },
            {
                label: "6???",
                value: 6.0
            },
            {
                label: "7???",
                value: 7.0
            },
            {
                label: "8???",
                value: 8.0
            },
            {
                label: "9???",
                value: 9.0
            },
            {
                label: "10???",
                value: 10.0
            },
            {
                label: "11???",
                value: 11.0
            },
            {
                label: "12???",
                value: 12.0
            },
            {
                label: "13???",
                value: 13.0
            },
            {
                label: "14???",
                value: 14.0
            },
            {
                label: "15???",
                value: 15.0
            },
            {
                label: "16???",
                value: 16.0
            },
            {
                label: "17???",
                value: 17.0
            },
            {
                label: "18???",
                value: 18.0
            },
            {
                label: "19???",
                value: 19.0
            },
            {
                label: "20???",
                value: 20.0
            },
            {
                label: "21???",
                value: 21.0
            },
            {
                label: "22???",
                value: 22.0
            },
            {
                label: "23???",
                value: 23.0
            },
            {
                label: "24???",
                value: 24.0
            },
            {
                label: "25???",
                value: 25.0
            },
            {
                label: "26???",
                value: 26.0
            },
            {
                label: "27???",
                value: 27.0
            },
            {
                label: "28???",
                value: 28.0
            },
            {
                label: "29???",
                value: 29.0
            },
            {
                label: "30???",
                value: 30.0
            }
        ],
        commerceLoanRate: [
            {
                label: "3.43%?????????????????????7???)",
                value: 0.0343
            },
            {
                label: "3.68%?????????????????????7.5???)",
                value: 0.0368
            },
            {
                label: "3.92%?????????????????????8???)",
                value: 0.0392
            },
            {
                label: "4.17%?????????????????????8.5???)",
                value: 0.0417
            },
            {
                label: "4.41%?????????????????????9???)",
                value: 0.0441
            },
            {
                label: "4.66%?????????????????????9.5???)",
                value: 0.0466
            },
            {
                label: "4.9%?????????????????????)",
                value: 0.049
            },
            {
                label: "5.15%?????????????????????1.05???)",
                value: 0.0515
            },
            {
                label: "5.39%?????????????????????1.1???)",
                value: 0.0539
            },
            {
                label: "5.64%?????????????????????1.15???)",
                value: 0.0564
            },
            {
                label: "5.88%?????????????????????1.2???)",
                value: 0.0588
            },
            {
                label: "6.13%?????????????????????1.25???)",
                value: 0.0613
            },
            {
                label: "6.37%?????????????????????1.3???)",
                value: 0.0637
            }
        ],
        commerceLoanInFiveYearRate: [
            {
                label: "3.33%?????????????????????7???)",
                value: 0.0333
            },
            {
                label: "3.56%?????????????????????7.5???)",
                value: 0.0356
            },
            {
                label: "3.8%?????????????????????8???)",
                value: 0.038
            },
            {
                label: "4.04%?????????????????????8.5???)",
                value: 0.0404
            },
            {
                label: "4.28%?????????????????????9???)",
                value: 0.0428
            },
            {
                label: "4.51%?????????????????????9.5???)",
                value: 0.0451
            },
            {
                label: "4.75%?????????????????????)",
                value: 0.0475
            },
            {
                label: "4.99%?????????????????????1.05???)",
                value: 0.0499
            },
            {
                label: "5.23%?????????????????????1.1???)",
                value: 0.0523
            },
            {
                label: "5.46%?????????????????????1.15???)",
                value: 0.0546
            },
            {
                label: "5.7%?????????????????????1.2???)",
                value: 0.057
            },
            {
                label: "5.94%?????????????????????1.25???)",
                value: 0.0594
            },
            {
                label: "6.18%?????????????????????1.3???)",
                value: 0.0618
            }
        ],
        commerceLoanInOneYearRate: [
            {
                label: "3.05%?????????????????????7???)",
                value: 0.0305
            },
            {
                label: "3.26%?????????????????????7.5???)",
                value: 0.0326
            },
            {
                label: "3.48%?????????????????????8???)",
                value: 0.0348
            },
            {
                label: "3.7%?????????????????????8.5???)",
                value: 0.037
            },
            {
                label: "3.92%?????????????????????9???)",
                value: 0.0392
            },
            {
                label: "4.13%?????????????????????9.5???)",
                value: 0.0413
            },
            {
                label: "4.35%?????????????????????)",
                value: 0.0435
            },
            {
                label: "4.57%?????????????????????1.05???)",
                value: 0.0457
            },
            {
                label: "4.79%?????????????????????1.1???)",
                value: 0.0479
            },
            {
                label: "5%?????????????????????1.15???)",
                value: 0.05
            },
            {
                label: "5.22%?????????????????????1.2???)",
                value: 0.0522
            },
            {
                label: "5.44%?????????????????????1.25???)",
                value: 0.0544
            },
            {
                label: "5.66%?????????????????????1.3???)",
                value: 0.0566
            }
        ],
        loanLrp: [
            {
                label: "????????????LPR",
                value: 0.0465
            },
            {
                label: "????????????????????????",
                value: 0.0
            }
        ],
        loanInFiveYearLrp: null,
        accumulatFundYear: [
            {
                label: "1???",
                value: 1.0
            },
            {
                label: "2???",
                value: 2.0
            },
            {
                label: "3???",
                value: 3.0
            },
            {
                label: "4???",
                value: 4.0
            },
            {
                label: "5???",
                value: 5.0
            },
            {
                label: "6???",
                value: 6.0
            },
            {
                label: "7???",
                value: 7.0
            },
            {
                label: "8???",
                value: 8.0
            },
            {
                label: "9???",
                value: 9.0
            },
            {
                label: "10???",
                value: 10.0
            },
            {
                label: "11???",
                value: 11.0
            },
            {
                label: "12???",
                value: 12.0
            },
            {
                label: "13???",
                value: 13.0
            },
            {
                label: "14???",
                value: 14.0
            },
            {
                label: "15???",
                value: 15.0
            },
            {
                label: "16???",
                value: 16.0
            },
            {
                label: "17???",
                value: 17.0
            },
            {
                label: "18???",
                value: 18.0
            },
            {
                label: "19???",
                value: 19.0
            },
            {
                label: "20???",
                value: 20.0
            },
            {
                label: "21???",
                value: 21.0
            },
            {
                label: "22???",
                value: 22.0
            },
            {
                label: "23???",
                value: 23.0
            },
            {
                label: "24???",
                value: 24.0
            },
            {
                label: "25???",
                value: 25.0
            },
            {
                label: "26???",
                value: 26.0
            },
            {
                label: "27???",
                value: 27.0
            },
            {
                label: "28???",
                value: 28.0
            },
            {
                label: "29???",
                value: 29.0
            },
            {
                label: "30???",
                value: 30.0
            }
        ],
        accumulatFundRate: [
            {
                label: "3.25%?????????????????????1???)",
                value: 0.0325
            },
            {
                label: "3.58%?????????????????????1.1???)",
                value: 0.0358
            },
            {
                label: "3.9%?????????????????????1.2???)",
                value: 0.039
            },
            {
                label: "4.23%?????????????????????1.3???)",
                value: 0.0423
            }
        ],
        accumulatFundInFiveYearRate: [
            {
                label: "2.75%?????????????????????1???)",
                value: 0.0275
            },
            {
                label: "3.03%?????????????????????1.1???)",
                value: 0.0303
            },
            {
                label: "3.3%?????????????????????1.2???)",
                value: 0.033
            },
            {
                label: "3.58%?????????????????????1.3???)",
                value: 0.0358
            }
        ],
        downPayRate: [
            {
                label: "10%",
                value: 0.1
            },
            {
                label: "15%",
                value: 0.15
            },
            {
                label: "20%",
                value: 0.2
            },
            {
                label: "25%",
                value: 0.25
            },
            {
                label: "30%",
                value: 0.3
            },
            {
                label: "35%",
                value: 0.35
            },
            {
                label: "40%",
                value: 0.4
            },
            {
                label: "45%",
                value: 0.45
            },
            {
                label: "50%",
                value: 0.5
            },
            {
                label: "55%",
                value: 0.55
            },
            {
                label: "60%",
                value: 0.6
            },
            {
                label: "65%",
                value: 0.65
            },
            {
                label: "70%",
                value: 0.7
            },
            {
                label: "75%",
                value: 0.75
            },
            {
                label: "80%",
                value: 0.8
            },
            {
                label: "85%",
                value: 0.85
            },
            {
                label: "90%",
                value: 0.9
            },
            {
                label: "95%",
                value: 0.95
            }
        ]
    },
    defult: {
        commerceLoanYear: 30,
        commerceLoanRate: 0.049,
        commerceLoanInFiveYearRate: 0.0475,
        commerceLoanInOneYearRate: 0.0435,
        loanLrp: 0.0465,
        loanInOneYearLrp: 0.0385,
        accumulatFundYear: 30,
        accumulatFundRate: 0.0325,
        accumulatFundInFiveYearRate: 0.0275,
        downPayRate: 0.3,
        accumulatLoanLimit: 120.0
    }
};
// # sourceMappingURL=constans.js.map
