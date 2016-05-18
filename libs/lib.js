/*
* @Author: RayLin
* @Date:   2016-05-17 17:47:11
* @Last Modified by:   RayLin
* @Last Modified time: 2016-05-17 18:17:49
*/


function getToday () {
    let currentDate = new Date();
    return currentDate.toISOString().slice(0, 10).replace(/-/g, "/");
}

module.exports = {
    getToday
};
