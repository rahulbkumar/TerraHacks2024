function calculateDestroyedTrees(length: number, width: number): number {
    const totalArea = length * width;
    const treesDestroyed = Math.floor(totalArea / 250);

    return treesDestroyed;
}