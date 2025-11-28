// Base de datos de recetas
const recetas = {
    "pan de buey": {
        nombre: "Ojo de Buey",
        ingredientes: [
            "500g de harina de trigo",
            "10g de levadura fresca",
            "100g de azúcar",
            "2 huevos",
            "200ml de leche tibia",
            "100g de mantequilla derretida",
            "1 cucharadita de sal",
            "1 cucharadita de esencia de vainilla",
            "100g de azúcar glass para decorar",
            "Colorante rojo vegetal"
        ],
        instrucciones: [
            "Disuelve la levadura en la leche tibia y deja reposar 10 minutos.",
            "En un bowl, mezcla la harina, azúcar y sal.",
            "Agrega los huevos, la esencia de vainilla y la mezcla de levadura. Amasa hasta integrar.",
            "Incorpora la mantequilla derretida y sigue amasando hasta obtener una masa elástica.",
            "Deja reposar la masa hasta que duplique su tamaño (aproximadamente 1 hora).",
            "Divide la masa en porciones pequeñas y forma bolitas.",
            "Aplana cada bolita y colócalas en un molde redondo.",
            "Deja reposar nuevamente 30 minutos.",
            "Mezcla el azúcar glass con unas gotas de colorante rojo.",
            "Con un pincel, haz un círculo en el centro de cada pan con la mezcla de azúcar.",
            "Hornea a 180°C por 15-20 minutos o hasta que estén dorados."
        ]
    },
    "pan de yoyo": {
        nombre: "Pan de Yoyo",
        ingredientes: [
            "400g de harina de trigo",
            "8g de levadura fresca",
            "80g de azúcar",
            "2 huevos",
            "150ml de leche tibia",
            "80g de mantequilla",
            "1 cucharadita de sal",
            "1 cucharadita de esencia de vainilla",
            "Dulce de leche para el relleno",
            "Coco rallado para decorar"
        ],
        instrucciones: [
            "Disuelve la levadura en la leche tibia y deja reposar 10 minutos.",
            "En un bowl, mezcla la harina, azúcar y sal.",
            "Agrega los huevos, la esencia de vainilla y la mezcla de levadura. Amasa hasta integrar.",
            "Incorpora la mantequilla y sigue amasando hasta obtener una masa elástica.",
            "Deja reposar la masa hasta que duplique su tamaño (aproximadamente 1 hora).",
            "Estira la masa con un rodillo y corta círculos con el cortador.",
            "Coloca los círculos en una bandeja para horno y deja reposar 30 minutos.",
            "Hornea a 180°C por 12-15 minutos.",
            "Una vez fríos, une dos círculos con dulce de leche en el medio.",
            "Pasa los bordes por coco rallado."
        ]
    },
    "puerco de piloncillo": {
        nombre: "Puerquito de Piloncillo",
        ingredientes: [
            "500g de harina de trigo",
            "200g de piloncillo",
            "150g de mantequilla",
            "2 huevos",
            "100ml de leche",
            "1 cucharadita de polvo de hornear",
            "1 cucharadita de canela en polvo",
            "1/2 cucharadita de jengibre en polvo",
            "1/2 cucharadita de clavo molido",
            "1 pizca de sal",
            "Chocolate para decorar los ojos"
        ],
        instrucciones: [
            "Derrite el piloncillo en la leche caliente y deja enfriar.",
            "En un bowl, mezcla la harina, polvo de hornear, canela, jengibre, clavo y sal.",
            "Agrega la mantequilla y mezcla hasta obtener una textura arenosa.",
            "Incorpora los huevos y la mezcla de piloncillo. Amasa hasta formar una masa homogénea.",
            "Refrigera la masa por 30 minutos.",
            "Estira la masa y corta con el molde en forma de puerquito.",
            "Coloca los puerquitos en una bandeja para horno.",
            "Hornea a 180°C por 15-20 minutos.",
            "Una vez fríos, decora los ojos con chocolate derretido."
        ]
    },
    "rosca de sal": {
        nombre: "Rosca de Sal",
        ingredientes: [
            "500g de harina de trigo",
            "10g de levadura fresca",
            "10g de sal",
            "300ml de agua tibia",
            "30ml de aceite de oliva",
            "1 cucharadita de azúcar",
            "Semillas de ajonjolí o amapola para decorar"
        ],
        instrucciones: [
            "Disuelve la levadura y el azúcar en el agua tibia. Deja reposar 10 minutos.",
            "En un bowl, mezcla la harina y la sal.",
            "Agrega la mezcla de levadura y el aceite de oliva. Amasa hasta obtener una masa elástica.",
            "Deja reposar la masa hasta que duplique su tamaño (aproximadamente 1 hora).",
            "Divide la masa en 3 partes y forma rollos largos.",
            "Une los rollos por un extremo y trenza.",
            "Une los extremos para formar una rosca.",
            "Coloca en una bandeja para horno y deja reposar 30 minutos.",
            "Pinta con agua y espolvorea las semillas.",
            "Hornea a 200°C por 25-30 minutos hasta que esté dorada."
        ]
    },
    "chilindrina": {
        nombre: "Chilindrina",
        ingredientes: [
            "500g de harina de trigo",
            "10g de levadura fresca",
            "100g de azúcar",
            "2 huevos",
            "200ml de leche tibia",
            "100g de mantequilla derretida",
            "1 cucharadita de sal",
            "1 cucharadita de esencia de vainilla",
            "Azúcar glass para decorar",
            "Ajonjolí para decorar"
        ],
        instrucciones: [
            "Disuelve la levadura en la leche tibia y deja reposar 10 minutos.",
            "En un bowl, mezcla la harina, azúcar y sal.",
            "Agrega los huevos, la esencia de vainilla y la mezcla de levadura. Amasa hasta integrar.",
            "Incorpora la mantequilla derretida y sigue amasando hasta obtener una masa elástica.",
            "Deja reposar la masa hasta que duplique su tamaño (aproximadamente 1 hora).",
            "Estira la masa con un rodillo y corta círculos.",
            "Coloca los círculos en una bandeja para horno y deja reposar 30 minutos.",
            "Hornea a 180°C por 15 minutos.",
            "Una vez fríos, pinta con un poco de mantequilla derretida y espolvorea azúcar glass y ajonjolí."
        ]
    },
    "concha": {
        nombre: "Concha",
        ingredientes: [
            "500g de harina de trigo",
            "10g de levadura fresca",
            "100g de azúcar",
            "2 huevos",
            "200ml de leche tibia",
            "100g de mantequilla derretida",
            "1 cucharadita de sal",
            "1 cucharadita de esencia de vainilla",
            "100g de mantequilla",
            "100g de azúcar glass",
            "100g de harina",
            "1 cucharadita de esencia de vainilla",
            "Colorante vegetal (rosa, amarillo o chocolate)"
        ],
        instrucciones: [
            "Disuelve la levadura en la leche tibia y deja reposar 10 minutos.",
            "En un bowl, mezcla la harina, azúcar y sal.",
            "Agrega los huevos, la esencia de vainilla y la mezcla de levadura. Amasa hasta integrar.",
            "Incorpora la mantequilla derretida y sigue amasando hasta obtener una masa elástica.",
            "Deja reposar la masa hasta que duplique su tamaño (aproximadamente 1 hora).",
            "Mientras, prepara la cobertura: bate la mantequilla con el azúcar glass hasta obtener una crema.",
            "Agrega la harina y la esencia de vainilla. Divide la mezcla y añade colorante a cada porción.",
            "Forma bolitas con la masa y colócalas en una bandeja para horno.",
            "Deja reposar 30 minutos.",
            "Aplasta ligeramente cada bolita y coloca porciones de la cobertura encima.",
            "Con un cuchillo, marca la cobertura con un patrón de concha.",
            "Hornea a 180°C por 20 minutos."
        ]
    },
    "donas": {
        nombre: "Donas",
        ingredientes: [
            "500g de harina de trigo",
            "10g de levadura fresca",
            "100g de azúcar",
            "2 huevos",
            "200ml de leche tibia",
            "80g de mantequilla derretida",
            "1 cucharadita de sal",
            "1 cucharadita de esencia de vainilla",
            "Aceite para freír",
            "Azúcar glass o glaseado para decorar"
        ],
        instrucciones: [
            "Disuelve la levadura en la leche tibia y deja reposar 10 minutos.",
            "En un bowl, mezcla la harina, azúcar y sal.",
            "Agrega los huevos, la esencia de vainilla y la mezcla de levadura. Amasa hasta integrar.",
            "Incorpora la mantequilla derretida y sigue amasando hasta obtener una masa elástica.",
            "Deja reposar la masa hasta que duplique su tamaño (aproximadamente 1 hora).",
            "Estira la masa con un rodillo y corta las donas con el cortador.",
            "Coloca las donas en una bandeja enharinada y deja reposar 30 minutos.",
            "Calienta el aceite a 180°C.",
            "Fríe las donas por ambos lados hasta que estén doradas.",
            "Escurre el exceso de aceite en papel absorbente.",
            "Decora con azúcar glass o glaseado una vez frías."
        ]
    },
    "champechana": {
        nombre: "Campechana",
        ingredientes: [
            "400g de harina de trigo",
            "8g de levadura fresca",
            "80g de azúcar",
            "2 huevos",
            "150ml de leche tibia",
            "80g de mantequilla",
            "1 cucharadita de sal",
            "1 cucharadita de esencia de vainilla",
            "1/2 taza de frutas confitadas",
            "1/4 taza de nueces picadas"
        ],
        instrucciones: [
            "Disuelve la levadura en la leche tibia y deja reposar 10 minutos.",
            "En un bowl, mezcla la harina, azúcar y sal.",
            "Agrega los huevos, la esencia de vainilla y la mezcla de levadura. Amasa hasta integrar.",
            "Incorpora la mantequilla y sigue amasando hasta obtener una masa elástica.",
            "Agrega las frutas confitadas y las nueces. Amasa hasta distribuir uniformemente.",
            "Deja reposar la masa hasta que duplique su tamaño (aproximadamente 1 hora).",
            "Coloca la masa en un molde para pan.",
            "Deja reposar nuevamente 30 minutos.",
            "Hornea a 180°C por 30-35 minutos."
        ]
    },
    "rebanada de mantequilla": {
        nombre: "Rebanada de Mantequilla",
        ingredientes: [
            "500g de harina de trigo",
            "10g de levadura fresca",
            "80g de azúcar",
            "2 huevos",
            "200ml de leche tibia",
            "150g de mantequilla",
            "1 cucharadita de sal",
            "1 cucharadita de esencia de vainilla",
            "100g de mantequilla extra para la cobertura",
            "50g de azúcar glass para espolvorear"
        ],
        instrucciones: [
            "Disuelve la levadura en la leche tibia y deja reposar 10 minutos.",
            "En un bowl, mezcla la harina, azúcar y sal.",
            "Agrega los huevos, la esencia de vainilla y la mezcla de levadura. Amasa hasta integrar.",
            "Incorpora 150g de mantequilla y sigue amasando hasta obtener una masa elástica.",
            "Deja reposar la masa hasta que duplique su tamaño (aproximadamente 1 hora).",
            "Estira la masa con un rodillo y colócala en un molde rectangular.",
            "Deja reposar nuevamente 30 minutos.",
            "Hornea a 180°C por 20-25 minutos.",
            "Una vez horneado, unta la superficie con mantequilla derretida.",
            "Espolvorea con azúcar glass antes de servir."
        ]
    },
    "garibaldi": {
        nombre: "Garibaldi",
        ingredientes: [
            "500g de harina de trigo",
            "10g de levadura fresca",
            "100g de azúcar",
            "2 huevos",
            "200ml de leche tibia",
            "100g de mantequilla derretida",
            "1 cucharadita de sal",
            "1 cucharadita de esencia de vainilla",
            "200g de mermelada de fresa",
            "100g de coco rallado"
        ],
        instrucciones: [
            "Disuelve la levadura en la leche tibia y deja reposar 10 minutos.",
            "En un bowl, mezcla la harina, azúcar y sal.",
            "Agrega los huevos, la esencia de vainilla y la mezcla de levadura. Amasa hasta integrar.",
            "Incorpora la mantequilla derretida y sigue amasando hasta obtener una masa elástica.",
            "Deja reposar la masa hasta que duplique su tamaño (aproximadamente 1 hora).",
            "Forma bolitas pequeñas con la masa y colócalas en una bandeja para horno.",
            "Deja reposar 30 minutos.",
            "Hornea a 180°C por 15 minutos.",
            "Una vez fríos, unta cada panecillo con mermelada de fresa.",
            "Pasa los panecillos por coco rallado para cubrirlos."
        ]
    },
    "orejas": {
        nombre: "Orejas",
        ingredientes: [
            "500g de hojaldre (comprado o casero)",
            "100g de azúcar glass",
            "1 cucharadita de canela en polvo"
        ],
        instrucciones: [
            "Estira el hojaldre con un rodillo hasta que quede muy delgado.",
            "Espolvorea generosamente con azúcar glass y canela.",
            "Dobla el hojaldre por la mitad y vuelve a estirar.",
            "Repite el proceso de espolvorear y doblar 3 veces más.",
            "Corta tiras de aproximadamente 2cm de ancho.",
            "Coloca las tiras en una bandeja para horno cubierta con papel pergamino.",
            "Hornea a 200°C por 10-12 minutos o hasta que estén doradas y crujientes.",
            "Deja enfriar antes de servir."
        ]
    },
    "birote": {
        nombre: "Birote",
        ingredientes: [
            "500g de harina de trigo",
            "10g de levadura fresca",
            "10g de sal",
            "300ml de agua tibia",
            "1 cucharadita de azúcar",
            "1 cucharadita de vinagre blanco",
            "Agua con cal para la corteza (opcional)"
        ],
        instrucciones: [
            "Disuelve la levadura y el azúcar en el agua tibia. Deja reposar 10 minutos.",
            "En un bowl, mezcla la harina y la sal.",
            "Agrega la mezcla de levadura y el vinagre. Amasa hasta obtener una masa elástica.",
            "Deja reposar la masa hasta que duplique su tamaño (aproximadamente 1 hora).",
            "Divide la masa en porciones alargadas.",
            "Coloca las porciones en una bandeja para horno y haz cortes diagonales en la superficie.",
            "Deja reposar 30 minutos.",
            "Opcional: pinta la superficie con agua con cal para obtener una corteza más crujiente.",
            "Hornea a 220°C con vapor durante los primeros 10 minutos.",
            "Continúa horneando por otros 15-20 minutos hasta que estén dorados."
        ]
    },
    "bolillo": {
        nombre: "Bolillo",
        ingredientes: [
            "500g de harina de trigo",
            "10g de levadura fresca",
            "10g de sal",
            "300ml de agua tibia",
            "1 cucharadita de azúcar"
        ],
        instrucciones: [
            "Disuelve la levadura y el azúcar en el agua tibia. Deja reposar 10 minutos.",
            "En un bowl, mezcla la harina y la sal.",
            "Agrega la mezcla de levadura. Amasa hasta obtener una masa elástica.",
            "Deja reposar la masa hasta que duplique su tamaño (aproximadamente 1 hora).",
            "Divide la masa en porciones alargadas con forma ovalada.",
            "Coloca las porciones en una bandeja para horno.",
            "Deja reposar 30 minutos.",
            "Haz un corte longitudinal en la superficie de cada pan.",
            "Hornea a 220°C por 20-25 minutos hasta que estén dorados."
        ]
    },
    "telera": {
        nombre: "Telera",
        ingredientes: [
            "500g de harina de trigo",
            "10g de levadura fresca",
            "10g de sal",
            "300ml de agua tibia",
            "1 cucharadita de azúcar",
            "30ml de aceite vegetal"
        ],
        instrucciones: [
            "Disuelve la levadura y el azúcar en el agua tibia. Deja reposar 10 minutos.",
            "En un bowl, mezcla la harina y la sal.",
            "Agrega la mezcla de levadura y el aceite. Amasa hasta obtener una masa elástica.",
            "Deja reposar la masa hasta que duplique su tamaño (aproximadamente 1 hora).",
            "Divide la masa en porciones y forma bolas aplanadas.",
            "Coloca las bolas en una bandeja para horno y presiona ligeramente.",
            "Deja reposar 30 minutos.",
            "Haz dos cortes longitudinales en la superficie de cada pan.",
            "Hornea a 200°C por 20-25 minutos hasta que estén dorados."
        ]
    },
    "moño": {
        nombre: "Pan de Moño",
        ingredientes: [
            "500g de harina de trigo",
            "10g de levadura fresca",
            "100g de azúcar",
            "2 huevos",
            "200ml de leche tibia",
            "100g de mantequilla derretida",
            "1 cucharadita de sal",
            "1 cucharadita de esencia de vainilla",
            "Azúcar glass para decorar"
        ],
        instrucciones: [
            "Disuelve la levadura en la leche tibia y deja reposar 10 minutos.",
            "En un bowl, mezcla la harina, azúcar y sal.",
            "Agrega los huevos, la esencia de vainilla y la mezcla de levadura. Amasa hasta integrar.",
            "Incorpora la mantequilla derretida y sigue amasando hasta obtener una masa elástica.",
            "Deja reposar la masa hasta que duplique su tamaño (aproximadamente 1 hora).",
            "Divide la masa en porciones y forma rollos largos.",
            "Haz un nudo con cada rollo para formar un moño.",
            "Coloca los moños en una bandeja para horno y deja reposar 30 minutos.",
            "Hornea a 180°C por 15-20 minutos.",
            "Una vez fríos, espolvorea con azúcar glass."
        ]
    },
    "mantecada": {
        nombre: "Mantecada",
        ingredientes: [
            "250g de harina de trigo",
            "200g de mantequilla",
            "200g de azúcar",
            "4 huevos",
            "1 cucharadita de polvo de hornear",
            "1 cucharadita de esencia de vainilla",
            "1 pizca de sal"
        ],
        instrucciones: [
            "Bate la mantequilla con el azúcar hasta obtener una crema suave.",
            "Agrega los huevos uno por uno, batiendo bien después de cada adición.",
            "Incorpora la esencia de vainilla.",
            "En otro bowl, mezcla la harina, el polvo de hornear y la sal.",
            "Agrega los ingredientes secos a la mezcla de mantequilla, alternando con un poco de leche si es necesario.",
            "Vierte la masa en los moldes para mantecadas, llenando hasta 3/4 de su capacidad.",
            "Hornea a 180°C por 20-25 minutos o hasta que al insertar un palillo salga limpio.",
            "Deja enfriar antes de desmoldar."
        ]
    },
    "niño envuelto": {
        nombre: "Niño Envuelto",
        ingredientes: [
            "500g de harina de trigo",
            "10g de levadura fresca",
            "100g de azúcar",
            "2 huevos",
            "200ml de leche tibia",
            "100g de mantequilla derretida",
            "1 cucharadita de sal",
            "1 cucharadita de esencia de vainilla",
            "200g de coco rallado",
            "100g de leche condensada"
        ],
        instrucciones: [
            "Disuelve la levadura en la leche tibia y deja reposar 10 minutos.",
            "En un bowl, mezcla la harina, azúcar y sal.",
            "Agrega los huevos, la esencia de vainilla y la mezcla de levadura. Amasa hasta integrar.",
            "Incorpora la mantequilla derretida y sigue amasando hasta obtener una masa elástica.",
            "Deja reposar la masa hasta que duplique su tamaño (aproximadamente 1 hora).",
            "Mezcla el coco rallado con la leche condensada para el relleno.",
            "Estira la masa con un rodillo y corta rectángulos.",
            "Coloca una porción del relleno de coco en cada rectángulo.",
            "Enrolla la masa formando un niño envuelto.",
            "Coloca en una bandeja para horno y deja reposar 30 minutos.",
            "Hornea a 180°C por 20 minutos."
        ]
    },
    "empanada": {
        nombre: "Empanada",
        ingredientes: [
            "300g de harina de trigo",
            "150g de mantequilla fría",
            "1 huevo",
            "50ml de agua fría",
            "1 pizca de sal",
            "200g de leche condensada",
            "100g de coco rallado",
            "1 cucharadita de esencia de vainilla"
        ],
        instrucciones: [
            "Para la masa, mezcla la harina y la sal.",
            "Agrega la mantequilla fría en cubos y mezcla con las yemas de los dedos hasta obtener una textura arenosa.",
            "Agrega el huevo y el agua fría. Amasa hasta formar una bola.",
            "Refrigera la masa por 30 minutos.",
            "Para el relleno, mezcla la leche condensada, el coco rallado y la esencia de vainilla.",
            "Estira la masa con un rodillo y corta círculos.",
            "Coloca una porción del relleno en el centro de cada círculo.",
            "Dobla la masa por la mitad y sella los bordes con un tenedor.",
            "Coloca las empanadas en una bandeja para horno.",
            "Hornea a 180°C por 20-25 minutos hasta que estén doradas."
        ]
    },
    "Polvoron": {
        nombre: "Polvoron",
        ingredientes: [
            "250g de harina de trigo",
            "150g de manteca vegetal",
            "100g de azúcar glass",
            "50g de almendras molidas",
            "1 cucharadita de canela en polvo",
            "1 pizca de sal"
        ],
        instrucciones: [
            "Tuesta ligeramente la harina en un sartén a fuego medio, removiendo constantemente.",
            "Deja enfriar la harina tostada.",
            "En un bowl, mezcla la harina tostada con la manteca vegetal.",
            "Agrega el azúcar glass, las almendras molidas, la canela y la sal.",
            "Amasa con las manos hasta obtener una masa homogénea.",
            "Forma pequeñas bolas con la masa y colócalas en un molde para polvorones.",
            "Presiona ligeramente para darles forma.",
            "Coloca los polvorones en una bandeja para horno.",
            "Hornea a 150°C por 20-25 minutos, cuidando que no se doren demasiado.",
            "Deja enfriar antes de manipular, ya que son muy frágiles."
        ]
    },
    "Torcido": {
        nombre: "Torcido",
        ingredientes: [
            "500g de harina de trigo",
            "10g de levadura fresca",
            "100g de azúcar",
            "2 huevos",
            "200ml de leche tibia",
            "100g de mantequilla derretida",
            "1 cucharadita de sal",
            "1 cucharadita de esencia de vainilla",
            "Canela en polvo para decorar",
            "Azúcar glass para decorar"
        ],
        instrucciones: [
            "Disuelve la levadura en la leche tibia y deja reposar 10 minutos.",
            "En un bowl, mezcla la harina, azúcar y sal.",
            "Agrega los huevos, la esencia de vainilla y la mezcla de levadura. Amasa hasta integrar.",
            "Incorpora la mantequilla derretida y sigue amasando hasta obtener una masa elástica.",
            "Deja reposar la masa hasta que duplique su tamaño (aproximadamente 1 hora).",
            "Divide la masa en porciones y forma rollos largos y delgados.",
            "Tuerce cada rollo sobre sí mismo.",
            "Coloca los torcidos en una bandeja para horno y deja reposar 30 minutos.",
            "Hornea a 180°C por 15-20 minutos.",
            "Una vez fríos, espolvorea con una mezcla de canela y azúcar glass."
        ]
    },
    "Borracho": {
        nombre: "Pan Borracho",
        ingredientes: [
            "500g de harina de trigo",
            "10g de levadura fresca",
            "100g de azúcar",
            "2 huevos",
            "200ml de leche tibia",
            "100g de mantequilla derretida",
            "1 cucharadita de sal",
            "1 cucharadita de esencia de vainilla",
            "200ml de ron o brandy",
            "100g de azúcar para el jarabe",
            "Ralladura de 1 naranja",
            "Ralladura de 1 limón"
        ],
        instrucciones: [
            "Disuelve la levadura en la leche tibia y deja reposar 10 minutos.",
            "En un bowl, mezcla la harina, azúcar y sal.",
            "Agrega los huevos, la esencia de vainilla y la mezcla de levadura. Amasa hasta integrar.",
            "Incorpora la mantequilla derretida y sigue amasando hasta obtener una masa elástica.",
            "Deja reposar la masa hasta que duplique su tamaño (aproximadamente 1 hora).",
            "Coloca la masa en un molde para pan y deja reposar 30 minutos.",
            "Hornea a 180°C por 30-35 minutos.",
            "Mientras, prepara el jarabe: calienta el azúcar con 100ml de agua hasta que se disuelva.",
            "Agrega el ron o brandy y las ralladuras de naranja y limón.",
            "Una vez horneado, desmolda el pan y bañarlo con el jarabe caliente.",
            "Deja enfriar antes de servir."
        ]
    },
    "Canasta": {
        nombre: "Canasta",
        ingredientes: [
            "500g de harina de trigo",
            "10g de levadura fresca",
            "100g de azúcar",
            "2 huevos",
            "200ml de leche tibia",
            "100g de mantequilla derretida",
            "1 cucharadita de sal",
            "1 cucharadita de esencia de vainilla",
            "200g de cajeta o dulce de leche para rellenar",
            "Nueces picadas para decorar"
        ],
        instrucciones: [
            "Disuelve la levadura en la leche tibia y deja reposar 10 minutos.",
            "En un bowl, mezcla la harina, azúcar y sal.",
            "Agrega los huevos, la esencia de vainilla y la mezcla de levadura. Amasa hasta integrar.",
            "Incorpora la mantequilla derretida y sigue amasando hasta obtener una masa elástica.",
            "Deja reposar la masa hasta que duplique su tamaño (aproximadamente 1 hora).",
            "Coloca la masa en los moldes con forma de canasta.",
            "Deja reposar 30 minutos.",
            "Hornea a 180°C por 20 minutos.",
            "Una vez fríos, rellena con cajeta o dulce de leche.",
            "Decora con nueces picadas."
        ]
    },
    "pinguino": {
        nombre: "Pinguino",
        ingredientes: [
            "500g de harina de trigo",
            "10g de levadura fresca",
            "100g de azúcar",
            "2 huevos",
            "200ml de leche tibia",
            "100g de mantequilla derretida",
            "1 cucharadita de sal",
            "1 cucharadita de esencia de vainilla",
            "200g de chocolate para fundir",
            "50g de mantequilla para el relleno",
            "100ml de leche condensada"
        ],
        instrucciones: [
            "Disuelve la levadura en la leche tibia y deja reposar 10 minutos.",
            "En un bowl, mezcla la harina, azúcar y sal.",
            "Agrega los huevos, la esencia de vainilla y la mezcla de levadura. Amasa hasta integrar.",
            "Incorpora la mantequilla derretida y sigue amasando hasta obtener una masa elástica.",
            "Deja reposar la masa hasta que duplique su tamaño (aproximadamente 1 hora).",
            "Coloca la masa en un molde rectangular.",
            "Deja reposar 30 minutos.",
            "Hornea a 180°C por 20-25 minutos.",
            "Una vez frío, corta el pan en rectángulos.",
            "Para el relleno, bate la mantequilla con la leche condensada hasta obtener una crema.",
            "Unta el relleno en la mitad de los rectángulos y cúbrelos con la otra mitad.",
            "Funde el chocolate y baña los panes.",
            "Deja enfriar hasta que el chocolate se solidifique."
        ]
    },
    "piedra": {
        nombre: "Piedra",
        ingredientes: [
            "500g de harina de trigo",
            "10g de levadura fresca",
            "50g de azúcar",
            "200ml de agua tibia",
            "100g de mantequilla derretida",
            "1 cucharadita de sal",
            "1 huevo",
            "100g de frutas secas picadas (nueces, almendras, pasas)"
        ],
        instrucciones: [
            "Disuelve la levadura y el azúcar en el agua tibia. Deja reposar 10 minutos.",
            "En un bowl, mezcla la harina y la sal.",
            "Agrega el huevo, la mezcla de levadura y la mantequilla derretida. Amasa hasta integrar.",
            "Incorpora las frutas secas picadas y sigue amasando hasta obtener una masa homogénea.",
            "Deja reposar la masa hasta que duplique su tamaño (aproximadamente 1 hora).",
            "Forma una bola grande con la masa y colócala en una bandeja para horno.",
            "Deja reposar 30 minutos.",
            "Hornea a 200°C por 30-35 minutos hasta que la corteza esté muy dorada y dura.",
            "Deja enfriar completamente antes de cortar, ya que es un pan muy denso."
        ]
    },
    "brownie": {
        nombre: "Brownie",
        ingredientes: [
            "200g de chocolate semiamargo",
            "200g de mantequilla",
            "200g de azúcar",
            "4 huevos",
            "100g de harina de trigo",
            "30g de cacao en polvo",
            "1 pizca de sal",
            "1 cucharadita de esencia de vainilla",
            "100g de nueces picadas (opcional)"
        ],
        instrucciones: [
            "Precalienta el horno a 180°C.",
            "En un bowl, derrite el chocolate con la mantequilla a baño María o en el microondas.",
            "Agrega el azúcar y mezcla bien.",
            "Incorpora los huevos uno por uno, batiendo bien después de cada adición.",
            "Agrega la esencia de vainilla.",
            "En otro bowl, mezcla la harina, el cacao en polvo y la sal.",
            "Incorpora los ingredientes secos a la mezcla de chocolate.",
            "Agrega las nueces picadas si las usas.",
            "Vierte la masa en un molde rectangular forrado con papel encerado.",
            "Hornea durante 25-30 minutos.",
            "Deja enfriar antes de cortar en cuadrados."
        ]
    }
};

// Variables globales

let model, webcam, labelContainer, maxPredictions;
let isModelLoaded = false;
let isWebcamActive = false;
let timerInterval;
let countdown = 10;
let topPrediction = "";
let sortedPredictions = [];

// Inicializar cuando se carga la página
window.addEventListener('DOMContentLoaded', init);

async function init() {
    // Obtener referencias a elementos del DOM
    const startButton = document.getElementById('startButton');
    const cameraOption = document.getElementById('camera-option');
    const recipeOption = document.getElementById('recipe-option');
    const startCameraButton = document.getElementById('start-camera');
    const stopCameraButton = document.getElementById('stop-camera');
    const closeRecipeButton = document.getElementById('close-recipe');
    const modelStatus = document.getElementById('model-status');
    labelContainer = document.getElementById('label-container');
    
    // Configurar event listeners
    startButton.addEventListener('click', showOptions);
    cameraOption.addEventListener('click', showCamera);
    recipeOption.addEventListener('click', showRecipe);
    startCameraButton.addEventListener('click', startWebcam);
    stopCameraButton.addEventListener('click', stopWebcam);
    closeRecipeButton.addEventListener('click', closeRecipe);
    
    // Verificar si la biblioteca Teachable Machine está cargada
    if (typeof tmImage === 'undefined') {
        console.error('La biblioteca Teachable Machine no se cargó correctamente');
        modelStatus.className = 'model-status model-error';
        modelStatus.innerHTML = '✗ Error: La biblioteca Teachable Machine no se cargó. Recarga la página.';
        return;
    }
    
    // Cargar el modelo
    try {
        console.log("Intentando cargar el modelo...");
        
        // Intentar desde la carpeta modelos
        const modelURL = './modelos/model.json';
        const metadataURL = './modelos/metadata.json';
        
        console.log("Ruta del modelo:", modelURL);
        console.log("Ruta del metadata:", metadataURL);
        
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();
        isModelLoaded = true;
        
        // Actualizar estado del modelo
        modelStatus.className = 'model-status model-ready';
        modelStatus.innerHTML = '✓ Modelo de IA cargado correctamente';
        
        console.log('Modelo cargado correctamente');
    } catch (error) {
        console.error('Error al cargar el modelo:', error);
        
        // Actualizar estado del modelo
        modelStatus.className = 'model-status model-error';
        modelStatus.innerHTML = '✗ Error al cargar el modelo. Verifica que los archivos estén en la ubicación correcta.';
        
        alert('No se pudo cargar el modelo. Verifica que los archivos model.json, metadata.json y weights.bin estén en la carpeta correcta.');
    }
}

function showOptions() {
    const options = document.getElementById('options');
    options.style.display = 'flex';
    options.scrollIntoView({ behavior: 'smooth' });
}

function showCamera() {
    if (!isModelLoaded) {
        alert('El modelo aún no se ha cargado. Por favor, espere.');
        return;
    }
    
    const cameraContainer = document.getElementById('camera-container');
    cameraContainer.style.display = 'block';
    cameraContainer.scrollIntoView({ behavior: 'smooth' });
}

function showRecipe() {
    const recipeContainer = document.getElementById('recipe-container');
    recipeContainer.style.display = 'block';
    recipeContainer.scrollIntoView({ behavior: 'smooth' });
}

function closeRecipe() {
    const recipeContainer = document.getElementById('recipe-container');
    recipeContainer.style.display = 'none';
}

async function startWebcam() {
    if (!isModelLoaded) {
        alert('El modelo aún no se ha cargado. Por favor, espere.');
        return;
    }
    
    if (isWebcamActive) {
        return; // La cámara ya está activa
    }
    
    try {
        // Configurar la webcam
        const flip = true; // whether to flip the webcam
        webcam = new tmImage.Webcam(400, 400, flip);
        await webcam.setup();
        
        // Agregar el elemento de webcam al contenedor
        const webcamContainer = document.getElementById('webcam-container');
        webcamContainer.innerHTML = ''; // Limpiar contenedor
        webcamContainer.appendChild(webcam.canvas);
        
        await webcam.play();
        isWebcamActive = true;
        
        // Actualizar botones
        document.getElementById('start-camera').disabled = true;
        document.getElementById('stop-camera').disabled = false;
        
        // Mostrar temporizador
        const timerContainer = document.getElementById('timer-container');
        timerContainer.style.display = 'block';
        
        // Iniciar el temporizador
        countdown = 10;
        updateTimer();
        timerInterval = setInterval(updateTimer, 1000);
        
        // Iniciar el bucle de predicción
        window.requestAnimationFrame(loop);
        
        console.log('Cámara iniciada correctamente');
    } catch (error) {
        console.error('Error al iniciar la cámara:', error);
        alert('No se pudo acceder a la cámara. Asegúrate de tener una cámara conectada y de haber dado los permisos necesarios.');
    }
}

function updateTimer() {
    const timerText = document.getElementById('timer-text');
    const timerProgress = document.getElementById('timer-progress');
    
    timerText.textContent = countdown;
    timerProgress.style.width = `${(10 - countdown) * 10}%`;
    
    if (countdown <= 0) {
        clearInterval(timerInterval);
        stopWebcam();

        // Mostrar la receta del pan con mayor porcentaje que tenga receta
        let foundRecipe = false;
        for (let pred of sortedPredictions) {
            const panName = pred.className.toLowerCase().trim();
            if (recetas[panName]) {
                showPanRecipe(panName);
                foundRecipe = true;
                break;
            }
        }
        if (!foundRecipe) {
            alert('No se encontró receta para ninguno de los panes detectados.');
        }
    } else {
        countdown--;
    }
}

function stopWebcam() {
    if (!isWebcamActive) {
        return; // La cámara ya está detenida
    }
    
    if (webcam) {
        webcam.stop();
        isWebcamActive = false;
        
        // Actualizar botones
        document.getElementById('start-camera').disabled = false;
        document.getElementById('stop-camera').disabled = true;
        
        // Ocultar temporizador
        document.getElementById('timer-container').style.display = 'none';
        
        console.log('Cámara detenida');
    }
}

async function loop() {
    if (!isWebcamActive) return;
    
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
}

async function predict() {
    if (!model || !isWebcamActive) return;

    try {
        // Predecir con el modelo
        const prediction = await model.predict(webcam.canvas);

        // Ordenar predicciones por probabilidad descendente
        prediction.sort((a, b) => b.probability - a.probability);
        sortedPredictions = prediction;

        // Guardar la predicción con mayor probabilidad
        topPrediction = prediction[0].className.toLowerCase();

        // Limpiar contenedor de etiquetas
        labelContainer.innerHTML = '';

        // Mostrar solo las top 3 predicciones
        const topPredictions = prediction.slice(0, 3);
        for (let i = 0; i < topPredictions.length; i++) {
            const classPrediction = topPredictions[i];

            // Crear elementos para la predicción
            const predictionItem = document.createElement('div');
            predictionItem.className = 'prediction-item';

            const labelElement = document.createElement('div');
            labelElement.className = 'prediction-label';

            const progressBar = document.createElement('div');
            progressBar.className = 'prediction-bar';

            const percentageBar = document.createElement('div');
            percentageBar.className = 'prediction-percentage';

            progressBar.appendChild(percentageBar);
            predictionItem.appendChild(labelElement);
            predictionItem.appendChild(progressBar);

            labelContainer.appendChild(predictionItem);

            // Actualizar etiqueta y porcentaje
            labelElement.textContent = `${classPrediction.className}:`;
            const percentage = Math.round(classPrediction.probability * 100);
            percentageBar.style.width = `${percentage}%`;
            percentageBar.textContent = `${percentage}%`;
        }
    } catch (error) {
        console.error('Error durante la predicción:', error);
    }
}

function showPanRecipe(panName) {
    // Buscar la receta en la base de datos
    const recipe = recetas[panName];
    
    if (recipe) {
        // Actualizar título de la receta
        document.getElementById('recipe-title').textContent = `RECETA DEL ${recipe.nombre.toUpperCase()}`;
        
        // Actualizar ingredientes
        const ingredientsList = document.getElementById('ingredients-list');
        ingredientsList.innerHTML = '';
        recipe.ingredientes.forEach(ingrediente => {
            const li = document.createElement('li');
            li.textContent = ingrediente;
            ingredientsList.appendChild(li);
        });
        
        // Actualizar pasos
        const stepsList = document.getElementById('steps-list');
        stepsList.innerHTML = '';
        recipe.instrucciones.forEach(paso => {
            const li = document.createElement('li');
            li.textContent = paso;
            stepsList.appendChild(li);
        });
        
        // Mostrar la receta
        const recipeContainer = document.getElementById('recipe-container');
        recipeContainer.style.display = 'block';
        recipeContainer.scrollIntoView({ behavior: 'smooth' });
    } else {
        alert('No se encontró la receta para este pan.');
    }
}