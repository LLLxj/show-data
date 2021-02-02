// var Mock = require('mockjs')

class MockApi {
  static list (params) {
    const monthList = [ // 30天数据
      {
        pgTotalNum: 3504,
        liveScene: 42416,
        totalNum: 148667770,
        anchorQuantity: 35827,
        visitNum: 308293774,
        pgVisitNum: 7268,
        liveDay: '2020-12-30'
      },
      {
        pgTotalNum: 3371,
        liveScene: 39458,
        totalNum: 133048860,
        anchorQuantity: 33273,
        visitNum: 253568789,
        pgVisitNum: 6426,
        liveDay: '2020-12-31'
      },
      {
        pgTotalNum: 3967,
        liveScene: 29938,
        totalNum: 118778221,
        anchorQuantity: 25456,
        visitNum: 228139948,
        pgVisitNum: 7620,
        liveDay: '2021-01-01'
      },
      {
        pgTotalNum: 3902,
        liveScene: 33835,
        totalNum: 132025942,
        anchorQuantity: 28748,
        visitNum: 255445607,
        pgVisitNum: 7549,
        liveDay: '2021-01-02'
      },
      {
        pgTotalNum: 4104,
        liveScene: 35774,
        totalNum: 146840280,
        anchorQuantity: 30567,
        visitNum: 301236416,
        pgVisitNum: 8420,
        liveDay: '2021-01-03'
      },
      {
        pgTotalNum: 3604,
        liveScene: 40661,
        totalNum: 146577244,
        anchorQuantity: 34373,
        visitNum: 304341197,
        pgVisitNum: 7484,
        liveDay: '2021-01-04'
      },
      {
        pgTotalNum: 3919,
        liveScene: 41715,
        totalNum: 163492915,
        anchorQuantity: 35294,
        visitNum: 323064363,
        pgVisitNum: 7744,
        liveDay: '2021-01-05'
      },
      {
        pgTotalNum: 3994,
        liveScene: 41466,
        totalNum: 165635740,
        anchorQuantity: 35012,
        visitNum: 334814929,
        pgVisitNum: 8074,
        liveDay: '2021-01-06'
      },
      {
        pgTotalNum: 4023,
        liveScene: 40596,
        totalNum: 163356457,
        anchorQuantity: 34294,
        visitNum: 328044090,
        pgVisitNum: 8080,
        liveDay: '2021-01-07'
      },
      {
        pgTotalNum: 4170,
        liveScene: 40107,
        totalNum: 167270594,
        anchorQuantity: 33844,
        visitNum: 343186442,
        pgVisitNum: 8556,
        liveDay: '2021-01-08'
      },
      {
        pgTotalNum: 4577,
        liveScene: 36897,
        totalNum: 168891866,
        anchorQuantity: 31297,
        visitNum: 352322763,
        pgVisitNum: 9548,
        liveDay: '2021-01-09'
      },
      {
        pgTotalNum: 5213,
        liveScene: 33884,
        totalNum: 176650052,
        anchorQuantity: 28903,
        visitNum: 359761966,
        pgVisitNum: 10617,
        liveDay: '2021-01-10'
      },
      {
        pgTotalNum: 4151,
        liveScene: 38652,
        totalNum: 160465982,
        anchorQuantity: 32684,
        visitNum: 312824068,
        pgVisitNum: 8093,
        liveDay: '2021-01-11'
      },
      {
        pgTotalNum: 3974,
        liveScene: 39495,
        totalNum: 156986788,
        anchorQuantity: 33351,
        visitNum: 314366047,
        pgVisitNum: 7959,
        liveDay: '2021-01-12'
      },
      {
        pgTotalNum: 4078,
        liveScene: 39788,
        totalNum: 162266625,
        anchorQuantity: 33550,
        visitNum: 316923616,
        pgVisitNum: 7965,
        liveDay: '2021-01-13'
      },
      {
        pgTotalNum: 3563,
        liveScene: 39364,
        totalNum: 140282419,
        anchorQuantity: 33231,
        visitNum: 295812806,
        pgVisitNum: 7514,
        liveDay: '2021-01-14'
      },
      {
        pgTotalNum: 3501,
        liveScene: 39101,
        totalNum: 136903012,
        anchorQuantity: 32991,
        visitNum: 270837939,
        pgVisitNum: 6926,
        liveDay: '2021-01-15'
      },
      {
        pgTotalNum: 4110,
        liveScene: 35747,
        totalNum: 146954056,
        anchorQuantity: 30410,
        visitNum: 282221771,
        pgVisitNum: 7894,
        liveDay: '2021-01-16'
      },
      {
        pgTotalNum: 4684,
        liveScene: 33630,
        totalNum: 157548101,
        anchorQuantity: 28608,
        visitNum: 308680886,
        pgVisitNum: 9178,
        liveDay: '2021-01-17'
      },
      {
        pgTotalNum: 3822,
        liveScene: 37510,
        totalNum: 143377500,
        anchorQuantity: 31895,
        visitNum: 274504015,
        pgVisitNum: 7318,
        liveDay: '2021-01-18'
      },
      {
        pgTotalNum: 4130,
        liveScene: 39962,
        totalNum: 165061285,
        anchorQuantity: 33683,
        visitNum: 331068359,
        pgVisitNum: 8284,
        liveDay: '2021-01-19'
      },
      {
        pgTotalNum: 5092,
        liveScene: 40432,
        totalNum: 205886167,
        anchorQuantity: 34106,
        visitNum: 432320870,
        pgVisitNum: 10692,
        liveDay: '2021-01-20'
      },
      {
        pgTotalNum: 4248,
        liveScene: 38953,
        totalNum: 165497520,
        anchorQuantity: 32950,
        visitNum: 336837662,
        pgVisitNum: 8647,
        liveDay: '2021-01-21'
      },
      {
        pgTotalNum: 4280,
        liveScene: 38103,
        totalNum: 163102300,
        anchorQuantity: 32333,
        visitNum: 331848457,
        pgVisitNum: 8709,
        liveDay: '2021-01-22'
      },
      {
        pgTotalNum: 4627,
        liveScene: 35674,
        totalNum: 165072009,
        anchorQuantity: 30341,
        visitNum: 327258618,
        pgVisitNum: 9173,
        liveDay: '2021-01-23'
      },
      {
        pgTotalNum: 4610,
        liveScene: 33117,
        totalNum: 152684966,
        anchorQuantity: 28218,
        visitNum: 315289248,
        pgVisitNum: 9520,
        liveDay: '2021-01-24'
      },
      {
        pgTotalNum: 4239,
        liveScene: 36595,
        totalNum: 155137967,
        anchorQuantity: 31157,
        visitNum: 317071454,
        pgVisitNum: 8664,
        liveDay: '2021-01-25'
      },
      {
        pgTotalNum: 3712,
        liveScene: 35526,
        totalNum: 131876604,
        anchorQuantity: 29946,
        visitNum: 254658136,
        pgVisitNum: 7168,
        liveDay: '2021-01-26'
      },
      {
        pgTotalNum: 3879,
        liveScene: 36183,
        totalNum: 140372822,
        anchorQuantity: 30152,
        visitNum: 300282227,
        pgVisitNum: 8298,
        liveDay: '2021-01-27'
      },
      {
        pgTotalNum: 4048,
        liveScene: 31737,
        totalNum: 128473298,
        anchorQuantity: 26766,
        visitNum: 238911856,
        pgVisitNum: 7527,
        liveDay: '2021-01-28'
      }
    ]
    const halfMonList = [ // 15天数据
      {
        pgTotalNum: 3563,
        liveScene: 39364,
        totalNum: 140282419,
        anchorQuantity: 33231,
        visitNum: 295812806,
        pgVisitNum: 7514,
        liveDay: '2021-01-14'
      },
      {
        pgTotalNum: 3501,
        liveScene: 39101,
        totalNum: 136903012,
        anchorQuantity: 32991,
        visitNum: 270837939,
        pgVisitNum: 6926,
        liveDay: '2021-01-15'
      },
      {
        pgTotalNum: 4110,
        liveScene: 35747,
        totalNum: 146954056,
        anchorQuantity: 30410,
        visitNum: 282221771,
        pgVisitNum: 7894,
        liveDay: '2021-01-16'
      },
      {
        pgTotalNum: 4684,
        liveScene: 33630,
        totalNum: 157548101,
        anchorQuantity: 28608,
        visitNum: 308680886,
        pgVisitNum: 9178,
        liveDay: '2021-01-17'
      },
      {
        pgTotalNum: 3822,
        liveScene: 37510,
        totalNum: 143377500,
        anchorQuantity: 31895,
        visitNum: 274504015,
        pgVisitNum: 7318,
        liveDay: '2021-01-18'
      },
      {
        pgTotalNum: 4130,
        liveScene: 39962,
        totalNum: 165061285,
        anchorQuantity: 33683,
        visitNum: 331068359,
        pgVisitNum: 8284,
        liveDay: '2021-01-19'
      },
      {
        pgTotalNum: 5092,
        liveScene: 40432,
        totalNum: 205886167,
        anchorQuantity: 34106,
        visitNum: 432320870,
        pgVisitNum: 10692,
        liveDay: '2021-01-20'
      },
      {
        pgTotalNum: 4248,
        liveScene: 38953,
        totalNum: 165497520,
        anchorQuantity: 32950,
        visitNum: 336837662,
        pgVisitNum: 8647,
        liveDay: '2021-01-21'
      },
      {
        pgTotalNum: 4280,
        liveScene: 38103,
        totalNum: 163102300,
        anchorQuantity: 32333,
        visitNum: 331848457,
        pgVisitNum: 8709,
        liveDay: '2021-01-22'
      },
      {
        pgTotalNum: 4627,
        liveScene: 35674,
        totalNum: 165072009,
        anchorQuantity: 30341,
        visitNum: 327258618,
        pgVisitNum: 9173,
        liveDay: '2021-01-23'
      },
      {
        pgTotalNum: 4610,
        liveScene: 33117,
        totalNum: 152684966,
        anchorQuantity: 28218,
        visitNum: 315289248,
        pgVisitNum: 9520,
        liveDay: '2021-01-24'
      },
      {
        pgTotalNum: 4239,
        liveScene: 36595,
        totalNum: 155137967,
        anchorQuantity: 31157,
        visitNum: 317071454,
        pgVisitNum: 8664,
        liveDay: '2021-01-25'
      },
      {
        pgTotalNum: 3712,
        liveScene: 35526,
        totalNum: 131876604,
        anchorQuantity: 29946,
        visitNum: 254658136,
        pgVisitNum: 7168,
        liveDay: '2021-01-26'
      },
      {
        pgTotalNum: 3879,
        liveScene: 36183,
        totalNum: 140372822,
        anchorQuantity: 30152,
        visitNum: 300282227,
        pgVisitNum: 8298,
        liveDay: '2021-01-27'
      },
      {
        pgTotalNum: 4048,
        liveScene: 31737,
        totalNum: 128473298,
        anchorQuantity: 26766,
        visitNum: 238911856,
        pgVisitNum: 7527,
        liveDay: '2021-01-28'
      }
    ]
    const weekList = [ // 7天数据
      {
        pgTotalNum: 4280,
        liveScene: 38103,
        totalNum: 163102300,
        anchorQuantity: 32333,
        visitNum: 331848457,
        pgVisitNum: 8709,
        liveDay: '2021-01-22'
      },
      {
        pgTotalNum: 4627,
        liveScene: 35674,
        totalNum: 165072009,
        anchorQuantity: 30341,
        visitNum: 327258618,
        pgVisitNum: 9173,
        liveDay: '2021-01-23'
      },
      {
        pgTotalNum: 4610,
        liveScene: 33117,
        totalNum: 152684966,
        anchorQuantity: 28218,
        visitNum: 315289248,
        pgVisitNum: 9520,
        liveDay: '2021-01-24'
      },
      {
        pgTotalNum: 4239,
        liveScene: 36595,
        totalNum: 155137967,
        anchorQuantity: 31157,
        visitNum: 317071454,
        pgVisitNum: 8664,
        liveDay: '2021-01-25'
      },
      {
        pgTotalNum: 3712,
        liveScene: 35526,
        totalNum: 131876604,
        anchorQuantity: 29946,
        visitNum: 254658136,
        pgVisitNum: 7168,
        liveDay: '2021-01-26'
      },
      {
        pgTotalNum: 3879,
        liveScene: 36183,
        totalNum: 140372822,
        anchorQuantity: 30152,
        visitNum: 300282227,
        pgVisitNum: 8298,
        liveDay: '2021-01-27'
      },
      {
        pgTotalNum: 4048,
        liveScene: 31737,
        totalNum: 128473298,
        anchorQuantity: 26766,
        visitNum: 238911856,
        pgVisitNum: 7527,
        liveDay: '2021-01-28'
      }
    ]
    const threeDayList = [ // 3天数据
      {
        pgTotalNum: 3712,
        liveScene: 35526,
        totalNum: 131876604,
        anchorQuantity: 29946,
        visitNum: 254658136,
        pgVisitNum: 7168,
        liveDay: '2021-01-26'
      },
      {
        pgTotalNum: 3879,
        liveScene: 36183,
        totalNum: 140372822,
        anchorQuantity: 30152,
        visitNum: 300282227,
        pgVisitNum: 8298,
        liveDay: '2021-01-27'
      },
      {
        pgTotalNum: 4048,
        liveScene: 31737,
        totalNum: 128473298,
        anchorQuantity: 26766,
        visitNum: 238911856,
        pgVisitNum: 7527,
        liveDay: '2021-01-28'
      }
    ]
    const dayList = [ // 1天数据
      {
        pgTotalNum: 4048,
        liveScene: 31737,
        totalNum: 128473298,
        anchorQuantity: 26766,
        visitNum: 238911856,
        pgVisitNum: 7527,
        liveDay: '2021-01-28'
      }
    ]
    const days = params.days
    var data = []
    switch (days) {
      case 1:
        data = dayList
        break
      case 3:
        data = threeDayList
        break
      case 7:
        data = weekList
        break
      case 15:
        data = halfMonList
        break
      case 30:
        data = monthList
        break
      default:
        data = monthList
        break
    }
    return data
  }

  static tradeList (params) {
    const monthList = {
      pgTotalNum: 4123,
      overallAnchorTypeDTO: {
        shopQuantity: 33968,
        darenShopTotalNumPercent: '0.4520',
        darenPercent: '0.0761',
        darenShopPercent: '0.3474',
        darenTotalNum: 1060454862,
        shopTotalNum: 1441942520,
        darenShopTotalNum: 2064462633,
        shopPercent: '0.5729',
        shopTotalNumPercent: '0.3157',
        darenTotalNumPercent: '0.2322',
        darenQuantity: 4511,
        darenShopQuantity: 20599
      },
      pgVisitNumPercent: '-0.13',
      itemQuantity: 5794294,
      newAnchorQuantityPercent: '-1.65',
      anchorQuantity: 59287,
      avgTotalNum: 612,
      visitNum: 9160892900,
      avgVisitNumPercent: '0.00',
      pgVisitNum: 8271,
      totalNumPercent: '-0.03',
      avgTotalNumPercent: '0.00',
      pgTotalNumPercent: '-0.07',
      liveScenePercent: '0.04',
      liveScene: 1107558,
      totalNum: 4567247921,
      avgVisitNum: 1227,
      newAnchorQuantity: 1013,
      itemQuantityPercent: '0.01',
      visitNumPercent: '-0.10',
      anchorQuantityPercent: '-0.42'
    }
    const dayList = {
      pgTotalNum: 3913,
      overallAnchorTypeDTO: {
        shopQuantity: 14072,
        darenShopTotalNumPercent: '0.4082',
        darenPercent: '0.0597',
        darenShopPercent: '0.3534',
        darenTotalNum: 24737137,
        shopTotalNum: 41430777,
        darenShopTotalNum: 45674940,
        shopPercent: '0.5847',
        shopTotalNumPercent: '0.3703',
        darenTotalNumPercent: '0.2211',
        darenQuantity: 1438,
        darenShopQuantity: 8505
      },
      pgVisitNumPercent: '-2.48',
      itemQuantity: 877673,
      newAnchorQuantityPercent: '5.88',
      anchorQuantity: 24067,
      avgTotalNum: 672,
      visitNum: 209317468,
      avgVisitNumPercent: '-1.87',
      pgVisitNum: 7320,
      totalNumPercent: '-0.07',
      avgTotalNumPercent: '-1.90',
      pgTotalNumPercent: '-2.54',
      liveScenePercent: '2.54',
      liveScene: 28592,
      totalNum: 111892713,
      avgVisitNum: 1257,
      newAnchorQuantity: 180,
      itemQuantityPercent: '-3.75',
      visitNumPercent: '0.00',
      anchorQuantityPercent: '0.75'
    }
    const threeDayList = {
      pgTotalNum: 3893,
      overallAnchorTypeDTO: {
        shopQuantity: 19656,
        darenShopTotalNumPercent: '0.4281',
        darenPercent: '0.0732',
        darenShopPercent: '0.3448',
        darenTotalNum: 79559365,
        shopTotalNum: 121672181,
        darenShopTotalNum: 150789676,
        shopPercent: '0.5784',
        shopTotalNumPercent: '0.3455',
        darenTotalNumPercent: '0.2259',
        darenQuantity: 2488,
        darenShopQuantity: 11720
      },
      pgVisitNumPercent: '-0.62',
      itemQuantity: 1530200,
      newAnchorQuantityPercent: '2.79',
      anchorQuantity: 33986,
      avgTotalNum: 610,
      visitNum: 684621046,
      avgVisitNumPercent: '-2.55',
      pgVisitNum: 7568,
      totalNumPercent: '-4.46',
      avgTotalNumPercent: '-2.87',
      pgTotalNumPercent: '-0.97',
      liveScenePercent: '-3.54',
      liveScene: 90454,
      totalNum: 352211581,
      avgVisitNum: 1186,
      newAnchorQuantity: 368,
      itemQuantityPercent: '-3.99',
      visitNumPercent: '-4.13',
      anchorQuantityPercent: '-0.84'
    }

    const weekList = {
      pgTotalNum: 3926,
      overallAnchorTypeDTO: {
        shopQuantity: 24150,
        darenShopTotalNumPercent: '0.4259',
        darenPercent: '0.0735',
        darenShopPercent: '0.3446',
        darenTotalNum: 221374748,
        shopTotalNum: 303256502,
        darenShopTotalNum: 389483864,
        shopPercent: '0.5773',
        shopTotalNumPercent: '0.3316',
        darenTotalNumPercent: '0.2421',
        darenQuantity: 3075,
        darenShopQuantity: 14418
      },
      pgVisitNumPercent: '-3.91',
      itemQuantity: 2398280,
      newAnchorQuantityPercent: '-3.53',
      anchorQuantity: 41836,
      avgTotalNum: 600,
      visitNum: 1807842087,
      avgVisitNumPercent: '-3.65',
      pgVisitNum: 7762,
      totalNumPercent: '-3.73',
      avgTotalNumPercent: '-2.28',
      pgTotalNumPercent: '-2.58',
      liveScenePercent: '-1.19',
      liveScene: 232882,
      totalNum: 914395547,
      avgVisitNum: 1187,
      newAnchorQuantity: 492,
      itemQuantityPercent: '-1.87',
      visitNumPercent: '-5.05',
      anchorQuantityPercent: '-1.26'
    }

    const halfMonList = {
      pgTotalNum: 4209,
      overallAnchorTypeDTO: {
        shopQuantity: 28639,
        darenShopTotalNumPercent: '0.4348',
        darenPercent: '0.0746',
        darenShopPercent: '0.3477',
        darenTotalNum: 524847843,
        shopTotalNum: 736608297,
        darenShopTotalNum: 970814693,
        shopPercent: '0.5736',
        shopTotalNumPercent: '0.3299',
        darenTotalNumPercent: '0.2351',
        darenQuantity: 3726,
        darenShopQuantity: 17358
      },
      pgVisitNumPercent: '-0.38',
      itemQuantity: 3728898,
      newAnchorQuantityPercent: '-2.33',
      anchorQuantity: 49929,
      avgTotalNum: 628,
      visitNum: 4465668429,
      avgVisitNumPercent: '-0.40',
      pgVisitNum: 8420,
      totalNumPercent: '-1.31',
      avgTotalNumPercent: '-0.32',
      pgTotalNumPercent: '-0.31',
      liveScenePercent: '-1.01',
      liveScene: 530350,
      totalNum: 2232636028,
      avgVisitNum: 1257,
      newAnchorQuantity: 713,
      itemQuantityPercent: '-1.00',
      visitNumPercent: '-1.39',
      anchorQuantityPercent: '-0.76'
    }
    const days = params.days
    var data = []
    switch (days) {
      case 1:
        data = dayList
        break
      case 3:
        data = threeDayList
        break
      case 7:
        data = weekList
        break
      case 15:
        data = halfMonList
        break
      case 30:
        data = monthList
        break
      default:
        data = monthList
        break
    }
    return data
  }

  static uvList (params) {
    const monthList = [
      {
        avgTotalNum: 578,
        liveDay: '2021-01-03',
        avgVisitNum: 1186
      },
      {
        avgTotalNum: 520,
        liveDay: '2021-01-04',
        avgVisitNum: 1080
      },
      {
        avgTotalNum: 593,
        liveDay: '2021-01-05',
        avgVisitNum: 1173
      },
      {
        avgTotalNum: 601,
        liveDay: '2021-01-06',
        avgVisitNum: 1215
      },
      {
        avgTotalNum: 606,
        liveDay: '2021-01-07',
        avgVisitNum: 1218
      },
      {
        avgTotalNum: 628,
        liveDay: '2021-01-08',
        avgVisitNum: 1289
      },
      {
        avgTotalNum: 663,
        liveDay: '2021-01-09',
        avgVisitNum: 1383
      },
      {
        avgTotalNum: 752,
        liveDay: '2021-01-10',
        avgVisitNum: 1531
      },
      {
        avgTotalNum: 614,
        liveDay: '2021-01-11',
        avgVisitNum: 1198
      },
      {
        avgTotalNum: 600,
        liveDay: '2021-01-12',
        avgVisitNum: 1203
      },
      {
        avgTotalNum: 621,
        liveDay: '2021-01-13',
        avgVisitNum: 1213
      },
      {
        avgTotalNum: 536,
        liveDay: '2021-01-14',
        avgVisitNum: 1131
      },
      {
        avgTotalNum: 524,
        liveDay: '2021-01-15',
        avgVisitNum: 1037
      },
      {
        avgTotalNum: 595,
        liveDay: '2021-01-16',
        avgVisitNum: 1143
      },
      {
        avgTotalNum: 673,
        liveDay: '2021-01-17',
        avgVisitNum: 1320
      },
      {
        avgTotalNum: 564,
        liveDay: '2021-01-18',
        avgVisitNum: 1080
      },
      {
        avgTotalNum: 610,
        liveDay: '2021-01-19',
        avgVisitNum: 1224
      },
      {
        avgTotalNum: 757,
        liveDay: '2021-01-20',
        avgVisitNum: 1590
      },
      {
        avgTotalNum: 635,
        liveDay: '2021-01-21',
        avgVisitNum: 1293
      },
      {
        avgTotalNum: 639,
        liveDay: '2021-01-22',
        avgVisitNum: 1301
      },
      {
        avgTotalNum: 658,
        liveDay: '2021-01-23',
        avgVisitNum: 1306
      },
      {
        avgTotalNum: 655,
        liveDay: '2021-01-24',
        avgVisitNum: 1353
      },
      {
        avgTotalNum: 618,
        liveDay: '2021-01-25',
        avgVisitNum: 1265
      },
      {
        avgTotalNum: 555,
        liveDay: '2021-01-26',
        avgVisitNum: 1074
      },
      {
        avgTotalNum: 596,
        liveDay: '2021-01-27',
        avgVisitNum: 1274
      },
      {
        avgTotalNum: 606,
        liveDay: '2021-01-28',
        avgVisitNum: 1127
      },
      {
        avgTotalNum: 572,
        liveDay: '2021-01-29',
        avgVisitNum: 1190
      },
      {
        avgTotalNum: 568,
        liveDay: '2021-01-30',
        avgVisitNum: 1062
      },
      {
        avgTotalNum: 591,
        liveDay: '2021-01-31',
        avgVisitNum: 1104
      },
      {
        avgTotalNum: 594,
        liveDay: '2021-02-01',
        avgVisitNum: 1168
      }
    ]

    const dayList = [
      {
        avgTotalNum: 594,
        liveDay: '2021-02-01',
        avgVisitNum: 1168
      }
    ]
    const threeDayList = [
      {
        avgTotalNum: 568,
        liveDay: '2021-01-30',
        avgVisitNum: 1062
      },
      {
        avgTotalNum: 591,
        liveDay: '2021-01-31',
        avgVisitNum: 1104
      },
      {
        avgTotalNum: 594,
        liveDay: '2021-02-01',
        avgVisitNum: 1168
      }
    ]

    const weekList = [
      {
        avgTotalNum: 555,
        liveDay: '2021-01-26',
        avgVisitNum: 1074
      },
      {
        avgTotalNum: 596,
        liveDay: '2021-01-27',
        avgVisitNum: 1274
      },
      {
        avgTotalNum: 606,
        liveDay: '2021-01-28',
        avgVisitNum: 1127
      },
      {
        avgTotalNum: 572,
        liveDay: '2021-01-29',
        avgVisitNum: 1190
      },
      {
        avgTotalNum: 568,
        liveDay: '2021-01-30',
        avgVisitNum: 1062
      },
      {
        avgTotalNum: 591,
        liveDay: '2021-01-31',
        avgVisitNum: 1104
      },
      {
        avgTotalNum: 594,
        liveDay: '2021-02-01',
        avgVisitNum: 1168
      }
    ]

    const halfMonList = [
      {
        avgTotalNum: 564,
        liveDay: '2021-01-18',
        avgVisitNum: 1080
      },
      {
        avgTotalNum: 610,
        liveDay: '2021-01-19',
        avgVisitNum: 1224
      },
      {
        avgTotalNum: 757,
        liveDay: '2021-01-20',
        avgVisitNum: 1590
      },
      {
        avgTotalNum: 635,
        liveDay: '2021-01-21',
        avgVisitNum: 1293
      },
      {
        avgTotalNum: 639,
        liveDay: '2021-01-22',
        avgVisitNum: 1301
      },
      {
        avgTotalNum: 658,
        liveDay: '2021-01-23',
        avgVisitNum: 1306
      },
      {
        avgTotalNum: 655,
        liveDay: '2021-01-24',
        avgVisitNum: 1353
      },
      {
        avgTotalNum: 618,
        liveDay: '2021-01-25',
        avgVisitNum: 1265
      },
      {
        avgTotalNum: 555,
        liveDay: '2021-01-26',
        avgVisitNum: 1074
      },
      {
        avgTotalNum: 596,
        liveDay: '2021-01-27',
        avgVisitNum: 1274
      },
      {
        avgTotalNum: 606,
        liveDay: '2021-01-28',
        avgVisitNum: 1127
      },
      {
        avgTotalNum: 572,
        liveDay: '2021-01-29',
        avgVisitNum: 1190
      },
      {
        avgTotalNum: 568,
        liveDay: '2021-01-30',
        avgVisitNum: 1062
      },
      {
        avgTotalNum: 591,
        liveDay: '2021-01-31',
        avgVisitNum: 1104
      },
      {
        avgTotalNum: 594,
        liveDay: '2021-02-01',
        avgVisitNum: 1168
      }
    ]
    const days = params.days
    var data = []
    switch (days) {
      case 1:
        data = dayList
        break
      case 3:
        data = threeDayList
        break
      case 7:
        data = weekList
        break
      case 15:
        data = halfMonList
        break
      case 30:
        data = monthList
        break
      default:
        data = monthList
        break
    }
    return data
  }
}

export default MockApi
