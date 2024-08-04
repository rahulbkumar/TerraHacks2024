function calculateCarbonEmissions(length: number, width: number, height: number, buildingType: string): number {
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
