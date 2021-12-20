const averageWindSpeed = (weatherEntries) => { 
  let wind = 0;
  for(let i = 0; i < weatherEntries.length; i++) {
     wind += weatherEntries[i].windSpeed;
    }
    return Math.round(wind / weatherEntries.length);
  };
  