/**
 * Parses and formats byte length into human readable format
 * using the known unit of measures for Data. e.g KB, GB
 * 
 * @param {Number} bytes Byte length
 * @param {Number} decimals Number of decimal places. Defaults to 2
 * @returns {String} Formatted text e.g 35 MB
 */
export const formatBytes =(bytes, decimals = 2)=>{
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  
    const i = Math.floor(Math.log(bytes) / Math.log(k));
  
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}
/**
 * Formats a decimals number or text to the specified number
 * of decimal places using the specified locale/culture.
 * 
 * @param {String|Number} val 
 * @param {Number} decimals Number of decimal places. Defaults to 2.
 * @param {String|String[]} locale Localization or culture info. Defaults to 'en-US'
 * @returns {Number}
 */
export const formatDecimals = (val, decimals = 2, locale = 'en-US') => {
    val = val === undefined ? 0 : parseFloat(val);
    if (isNaN(val)) {
      return 0;
    } else {
      var formatter = new Intl.NumberFormat(locale, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      });
      return formatter.format(val);
    }
  };

  export const truncate = (val, count) => {
    if (!val) return "-.-";
    if (!count) return val;
    if (val.length <= count) return val;
    return val.substr(0, count) + "..";
  }

  export const maskPhoneNumber = (ph) => {
    if (!ph) return "";
    const max = 7;
    if (ph.length >= max) {
      let k = 3;
      let arr = ph.split("");
      while (k < max) {
        arr[k] = "*";
        k++;
      }
      ph = arr.join("");
    }
    return ph;
  }

  export const getNameInitials = (val, limit = 2) => {
    if (!val) return "-";
    var initials = val
      .replace(/[^a-zA-Z- ]/g, "")
      .match(/\b\w/g)
      .splice(0, limit);
    return initials.join(".");
  }