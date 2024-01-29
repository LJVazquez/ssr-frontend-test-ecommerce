const labelsByTag: Record<string, string> = {
	smartphones: 'Smartphones',
	laptops: 'Laptops',
	fragrances: 'Fragancias',
	skincare: 'Skin Care',
	groceries: 'Comestibles',
	'home-decoration': 'Decoración',
	furniture: 'Muebles',
	tops: 'Tops',
	'womens-dresses': 'Vestidos',
	'womens-shoes': 'Zapatos de mujer',
	'mens-shirts': 'Remeras',
	'mens-shoes': 'Zapatos de hombre',
	'mens-watches': 'Relojes de hombre',
	'womens-watches': 'Relojes de mujer',
	'womens-bags': 'Bolsos de mujer',
	'womens-jewellery': 'Joyería de mujer',
	sunglasses: 'Anteojos de sol',
	automotive: 'Automotriz',
	motorcycle: 'Motocicletas',
	lighting: 'Iluminación',
};

export const getLabelFromTag = (tag: string) => {
	return labelsByTag[tag] || tag;
};
