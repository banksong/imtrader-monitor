module.exports = function(){
    switch(process.env.NODE_ENV){
        case 'dev':
            return {"metaTraderLog" : "C:\\Users\\banksong\\AppData\\Roaming\\MetaQuotes\\Terminal\\2C3F27196F93C5FB165D928AFE4DDA53\\MQL4\\Logs",
        			"crawlerLog" : "C:\\sandbox\\wallstreet\\crawler"};

        case 'production':
            return {};

        default:
            return {};
    }
};