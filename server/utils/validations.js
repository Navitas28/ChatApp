let isRealString = (str) => {
    console.log('Fire up the validations');
    return typeof str === 'string' && str.trim().length > 0;
};

module.exports = {isRealString};