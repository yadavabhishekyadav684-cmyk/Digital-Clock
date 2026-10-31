
const now = new Date(); // it will gives UTC time
console.log(now);   //  2026-10-31T07:11:32.007Z  T->is date and time seperator, Z-> (ZULU) UTC represent krta hai

// Creating a date from timeStamp
const T = Date.now();
console.log(T); // 1793431388509 --> timeStamp

const nows = new Date(1793431388509);   // using timeStamp we will create time
console.log(nows);  // 2026-10-31T07:23:08.509Z
console.log(nows.toString());   // Sat Oct 31 2026 12:53:08 GMT+0530 (India Standard Time) -> timeStamp ke throught
// indian Standard time nikalna using timeStamp .toString convert karta hai formatting deta hai


const y = new Date(0);  // unix epoch(it gives starting time when we pass argument as 0)
console.log(y);     // 1970-01-01T00:00:00.000Z
console.log(y.toString());  // Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
// GMT = Greenwich Mean Time 

// Creating a specific Date by providing specific Argument in order year, month, day, hr, min, sec, ms
const Times = new Date(2026,7,27,20,27,16,125);
console.log(Times); // 2026-08-27T14:57:16.125Z
console.log(Times.toString());  // Thu Aug 27 2026 20:27:16 GMT+0530 (India Standard Time)
*/
/*
* Major problem in this system
-> Month are 0 indexed 
-> local time and utc time always to be remembered
-> Mutable (setter method original date lo change ker deta hai (.setMonth()))

* Getting Date instanceof(using getters)
.getFullYear(), .getMonth(), .getDate(), .gatDay(), .gatHour(), ......so onabort

* Formatting for diaplay
.toString --> Local TimeZone
.toDateString() --> sirf date parent
.toISOString() --> UTC time
.toLocalString() --> user ki language, region ke hisaab se display krwane ke liye best 

*/

//      CODE

const a = new Date();
console.log(a); // 2026-10-31T08:14:25.852Z
console.log(a.toString());  // Sat Oct 31 2026 13:44:25 GMT+0530 (India Standard Time)
console.log(a.toISOString());   // 2026-10-31T08:14:25.852Z
console.log(a.toLocaleString());    // 10/31/2026, 1:44:25 PM
console.log(a.getDate(), a.getFullYear(), a.getHours());    // 31 2026 13
