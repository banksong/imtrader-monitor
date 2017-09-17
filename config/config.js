module.exports = function(){
    var dateNow = new Date();
    var year = dateNow.getFullYear();
    var month = dateNow.getMonth() + 1;
    month = month <10 ? "0"+month : month
    var day = dateNow.getDate();
    var mtTraderLogName = year + month + day + ".log";
    switch(process.env.NODE_ENV){
        case 'dev':
            return {"metaTraderLog" : "C:\\Users\\banksong\\AppData\\Roaming\\MetaQuotes\\Terminal\\2C3F27196F93C5FB165D928AFE4DDA53\\MQL4\\Logs\\" + mtTraderLogName,
        			"crawlerLog" : "C:\\sandbox\\wallstreet\\crawler"};

        case 'prod':
            return {"crawlerLog" : "C:\\sandbox\\project\\imtrader-crawler\\crawler",
        			"metaTraderLog" : "C:\\Users\\Administrator\\AppData\\Roaming\\MetaQuotes\\Terminal\\2C3F27196F93C5FB165D928AFE4DDA53\\MQL4\\Logs\\" + mtTraderLogName
                    };

        default:
            return {};
    }
};