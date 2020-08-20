function GetDatesBetween12(date1, date2, day) {

    var range1 = new Date(date1),
        range2 = new Date(date2),
        date1 = setDate(date1, day),
        date2 = setDate(date2, day),
        dates = [],
        temp = null;

    while (date1 <= date2) {

        if (date1.getDate() != day) {

            temp = setDate(date1, 0);

            if (temp >= range1 && temp <= range2) dates.push(temp);

            date1 = setDate(date1, day);

        } else {

            temp = new Date(date1);

            if (temp >= range1 && temp <= range2) dates.push(temp);

            date1.setMonth(date1.getMonth() + 1);
        }
    }
    return dates;
}

function GetDatesBetween(startDate, endDate) {

    var dates = [],
        currentDate = startDate,
        addDays = function (days) {
            var date = new Date(this.valueOf());
            date.setDate(date.getDate() + days);
            return date;
        };
    while (currentDate <= endDate) {
        dates.push(currentDate);
        currentDate = addDays.call(currentDate, 1);
    }
    return dates;
}

function setDate(date, day) {

    date = new Date(date);
    date.setDate(day);
    date.setHours(23);

    return date;
}

(function(){
    console.log("Start");
    var startDate = "2020-08-20";
    var numDays = 2;
    var endDate = "2020-08-21";

    var arrDate = GetDatesBetween(new Date(startDate), new Date(endDate));

    console.log(arrDate);

    (arrDate).forEach(element => {
        console.log(element);
    });
})();
