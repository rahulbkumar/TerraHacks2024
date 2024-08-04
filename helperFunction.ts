export function calculateCarbonEmissions(length: number, width: number, height: number, buildingType: string): number {
    const volume = length * width * height;
    let emissionFactor: number;

    switch (buildingType) {
        case 'Residential house':
            emissionFactor = 0.00015;
            break;
        case 'Condos':
            emissionFactor = 0.00008;
            break;
        case 'Corporate office':
            emissionFactor = 0.0003;
            break;
        case 'Retail shops':
            emissionFactor = 0.0004;
            break;
        case 'Large commercial buildings':
            emissionFactor = 0.0006;
            break;
        default:
            throw new Error('Invalid building type');
    }
    const carbonEmissions = volume * emissionFactor;
    return carbonEmissions;
}

export type Building = {
    longitude: number;
    latitude: number;
    length: number;
    width: number;
    height: number;
}
export function predictMarketValue(building: Building): number {
    const baseValue = 100000;
    const lengthCoefficient = 1000; 
    const widthCoefficient = 1000;
    const heightCoefficient = 500;
    const locationCoefficient = 2000; 

    const sizeValue = (building.length * lengthCoefficient) + 
                      (building.width * widthCoefficient) + 
                      (building.height * heightCoefficient);
    const locationValue = locationCoefficient * (Math.abs(building.longitude) + Math.abs(building.latitude));
    const marketValue = baseValue + sizeValue + locationValue;

    return marketValue;
}

export function ResourceRating(marketValue: number): { ResourceRating: number, ResourceRatingDescription: string } {
    const highThreshold = 1000000;
    const averageThreshold = 500000;

    let ResourceRating: number;
    let ResourceRatingDescription: string;

    if (marketValue > highThreshold) {
        ResourceRating = 46;
        ResourceRatingDescription = "Way too many natural resources are being used!";
    } else if (marketValue >= averageThreshold) {
        ResourceRating = 82;
        ResourceRatingDescription = "Bit too grand! You could do better!";
    } else {
        ResourceRating = 71;
        ResourceRatingDescription = "Amazing! Environmentally design!";
    }
    return { ResourceRating, ResourceRatingDescription };
}

export type CrimeRating = {
    rating: number;
    description: string;
}

// helper function to get crime rating based on randomized crime data
export function getCrimeRating(): CrimeRating {
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

// helper function to calculate treesDestroyed
export function calculateDestroyedTrees(length: number, width: number): number {
    const totalArea = length * width;
    const treesDestroyed = Math.floor(totalArea / 250);

    return treesDestroyed;
}
