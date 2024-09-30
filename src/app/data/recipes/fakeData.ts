import { Recipe } from "./interfaces/recipe";

export const fakeRecipes: Recipe[] = [
    {
        category: 'Antojitos mexicanos',
        description: 'Deliciosas quesadillas de ajo y cebolla, perfectas para gente que le gusta el ajo y la cebolla.',
        ingredients: [
            'cebolla',
            'ajo',
            'quesadillas',
            'toritllas'
        ],
        name: 'quesadillas de ajo y cebollla',
        image: './assets/images/recipe_example.png',
        id: 'ID-0001',
        steps: [
            'Agregar las tortillas a un comalito sin aceite',
            'Dejar que se tueste (tueste de tostar)',
            'En un sarten caliente, freir las cebollas y los ajos',
            'Juntar todo en un solo plato y moler a mordidas'
        ]
    },
    {
        category: 'Comida chiapaneca',
        description: 'Jaguar a la plancha, comida 100% chiapaneca, originaria de las selvas taraumaras mas reconditas. Esta comida aumenta 10% de aura.',
        ingredients: [
            'Carne de jaguar',
            'Ajo',
            'Cebolla',
            'Madera de rizol chiapaneco',
            'Petroleo gubernamental',
            'Zaza del zazero'
        ],
        name: 'Jaguar taraumaro',
        image: './assets/images/recipe_example.png',
        id: 'ID-0002',
        steps: [
            'Lavar al jaguar en sauna. la bañera debe estar hecha de madera de rizol',
            'Cantarle las mañanitas para que se sienta comodo y confiado',
            'Mocharle media pata izquierda delantera',
            'Echar a la hoya y hervir por 340min.',
        ]
    },
    {
        category: 'Postre',
        description: 'Las gorditas de nata son originarias del GDL, nacidas con el unico fin de satisfacer al rey Natanael Ruben Cano Monge del sigo XV.',
        ingredients: [
            'Leche',
            'Leche condensada',
            'Azucar morena',
            'Corridos tumbados',
            'Perico',
            'Carlos',
            'Warzone',
            'JavaScript',
            'React Native',
        ],
        name: 'Gorditas de Nata (CT)',
        image: './assets/images/recipe_example.png',
        id: 'ID-0003',
        steps: [
            'Hervir la leche hasta su punto de fusion cuantica.',
            'Vertir la leche condensada y dejar reducir por 30min.',
            'Echar la azucar.',
            'Menearle pa aca y pa alla por 10 minutos mientras suenan corridos tumbados!.',
        ]
    },
];