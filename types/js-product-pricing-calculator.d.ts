declare module 'js-product-pricing-calculator' {
  export function calculatePricing(
	item: any,
	pricing: any,
	size: any,
  diamondType: any,
  karatOfGold: number
  ): { finalPrice: number; [key: string]: any };

  export type CentralPricing = { [key: string]: number };
}
