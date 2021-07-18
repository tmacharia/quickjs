const { test, expect } = require('@jest/globals');
const { formatDecimals, formatBytes, truncate, getNameInitials } = require('../modules/formatting/formats');

test('format 35.61845 to 35.62',()=>{
    expect(formatDecimals(35.61845)).toBe('35.62');
});

test('format 56783 to 55.45 KB',()=>{
    expect(formatBytes(56783)).toBe('55.45 KB');
});

test('truncate',()=>{
    expect(truncate('Quick brown fox',5)).toBe('Quick..');
});

test('getNameInitials',()=>{
    expect(getNameInitials('Quick brown')).toBe('Q.B');
});