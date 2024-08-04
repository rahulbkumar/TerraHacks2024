type Building = {
    longitude: number;
    latitude: number;
    length: number;
    width: number;
    height: number;
}

function predictMarketValue(building: Building): number {
    // hypothetical coefficients for the model
    const baseValue = 100000;
    const lengthCoefficient = 1000; 
    const widthCoefficient = 1000;
    const heightCoefficient = 500;
    const locationCoefficient = 2000; 

    // calculating the market value
    const sizeValue = (building.length * lengthCoefficient) + 
                      (building.width * widthCoefficient) + 
                      (building.height * heightCoefficient);
    const locationValue = locationCoefficient * (Math.abs(building.longitude) + Math.abs(building.latitude));
    const marketValue = baseValue + sizeValue + locationValue;

    return marketValue;
}

function ResourceRating(marketValue: number): { ResourceRating: number, ResourceRatingDescription: string } {
    // hypothetical thresholds for market value
    const highThreshold = 1000000;
    const averageThreshold = 500000;

    let ResourceRating: number;
    let ResourceRatingDescription: string;

    if (marketValue > highThreshold) {
        ResourceRating = 46;
        ResourceRatingDescription = "Way too many natural resources are being used!";
    } else if (marketValue >= averageThreshold) {
        ResourceRating = 82;
        ResourceRatingDescription = "Bit too grand! You could do better! ";
    } else {
        ResourceRating = 71;
        ResourceRatingDescription = "Amazing! Environmentally design!";
    }
    return { ResourceRating, ResourceRatingDescription };
}
