const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date()  // Do not alter this line!
 
  const newDay = {};
  let test = new Date(today);
  let launch = new Date(launchDate);
  let final = launch.getDate() - test.getDate();
    newDay.missionName = missionName;
    newDay.daysRemaining = final;
  return newDay;
}
console.log(timeRemaining("2021-12-12", "Moon visit", "2021-12-01"));
