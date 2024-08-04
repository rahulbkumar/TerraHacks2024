type newCrimeRating = {
    rating: number;
    description: string;
  };
  
  function getCrimeRating(): CrimeRating {
    //randomizes from 0-6
    const crimes = Math.floor(Math.random() * 7);
    let rating: number;
    let description: string;
  
    switch (true) {
        // error handling
    case crimes < 0:
        rating = 0;
        description = "No data available";
        break;
        // 0
    case crimes === 0:
        rating = 10;
        description = "Very safe";
        break;
        // 1-2
    case crimes >= 1 && crimes <= 2:
        rating = 20;
        description = "Safe";
        break;
        // 3-5
    case crimes >= 3 && crimes <= 5:
        rating = 40;
        description = "Risky";
        break;
    default:
        // 5+
        rating = 60;
        description = "Very risky";
    }
  
    return { rating, description };
  }
  