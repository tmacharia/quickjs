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