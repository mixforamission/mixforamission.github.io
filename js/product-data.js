/* ============================================================
   Mix for a Mission — product-data.js
   A single product data object covering every item across all
   five menu categories. Keyed by "category-flavor-slug" (e.g.
   "cake-black-forest", "cupcake-black-forest") so the same
   flavor name across categories doesn't collide.

   Ten items (6 cakes, 4 cupcakes) have real tagline/ingredients/
   sizeInfo data sourced from the old Google Sites product pages.
   All other entries have those fields as empty
   strings — the template handles the fallback display.

   Load this BEFORE main.js on pages that need it.
   ============================================================ */

var productData = {
  /* ======================================================
     CAKES — 23 items
     ====================================================== */
  "cake-almond-crunch-bar": {
    name: "Almond Crunch Bar Cake",
    category: "cake",
    tagline: "Introducing our irresistible Almond Crunch Ice Cream Bar-inspired Almond Cake. This delightful dessert is sure to be a crowd-pleaser with its delicate almond flavor and crunchy almond cake roast that is reminiscent of the classic ice cream bar. The buttercream is smooth, and not-too-sweet! This cake is perfect for any Almond lover.",
    ingredients: "VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE)), WATER, SALT, NATURAL FLAVOR (DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR), SUGAR, SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12, ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA), ALMONDS, POWDERED SUGAR, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), WATER, FLAXSEED, APPLE CIDER VINEGAR, ALMOND EXTRACT (WATER, ALCOHOL, OIL OF BITTER ALMOND), VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), BAKING POWDER (SODIUM ACID PYROPHOSPHATE, SODIUM BICARBONATE, CORNSTARCH, MONOCALCIUM PHOSPHATE), BAKING SODA, SALT",
    sizeInfo: "Net weight: 90 oz (2551g)",
    gfAvailable: false,
    imageKey: "almond",
    allergens: "ALMOND, WHEAT, SOY",
  },

  "cake-chocolate-vanilla-buttercream": {
    name: "Chocolate Cake w/Vanilla Buttercream",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "chocolate",
    allergens: ""
  },
  "cake-chocolate-mint": {
    name: "Chocolate Mint Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "mint",
    allergens: ""
  },
  "cake-enchanted-tree-stump": {
    name: "Enchanted Tree Stump Cake (+$5)",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "chocolate",
    allergens: ""
  },
  "cake-chocolate-oreo-crunch": {
    name: "Chocolate Oreo Crunch Cake",
    category: "cake",
    tagline: "",
    ingredients: "SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, POWDERED SUGAR (SUGAR, CORNSTARCH), ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA), VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)), CANOLA OIL, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), COCOA, SEMISWEET CHOCOLATE CHIPS (CHOCOLATE LIQUOR, SUGAR, SOY LECITHIN, VANILLA), APPLE CIDER VINEGAR, VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), PEPPERMINT EXTRACT (ALCOHOL, PEPPERMINT OIL), FOOD COLOR (CORN SYRUP, SUGAR, WATER, MODIFIED CORNSTARCH, REDSODIUM BENZOATE (PRESERVATIVE), CITRIC ACID), BAKING POWDER (CORN STARCH, SODIUM BICARBONATE, SODIUM ALUMINUM SULFATE, MONOCALCIUM PHOSPHATE), SALT,",
    sizeInfo: "Net weight: 84.66oz (2400g)",
    gfAvailable: false,
    imageKey: "oreo",
    allergens: "WHEAT, SOY",
  },
  "cake-chocolate-strawberry-crunch": {
    name: "Chocolate Strawberry Crunch Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "strawberry",
    allergens: ""
  },
  "cake-chocolate-caramel-peanut-butter": {
    name: "Chocolate Caramel Peanut Butter Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "peanut",
    allergens: ""
  },
  "cake-black-forest": {
    name: "Black Forest Cake",
    category: "cake",
    tagline: "Indulge in our exquisite Vegan Chocolate Cake, lovingly decorated to resemble a lush and enchanting forest. Savor every bite of this decadent dessert, made with only the finest plant-based ingredients.",
    ingredients: "Chocolate cake (enriched flour (wheat flour, niacin, reduced iron, thiamine, mononitrate, riboflavin, folic acid), organic sugar, water, organic soymilk (filtered water, organic soybeans, contains 2% or less of: vitamin and mineral blend (calcium carbonate, vitamin A palmitate, vitamin D2, riboflavin (B2), vitamin B12), sea salt, gellan gum, ascorbic acid (vitamin C to protect)), canola oil, cocoa (processed with alkali), instant coffee powder, baking powder, baking soda, vanilla extract (water, ethyl alcohol, vanilla extract)); buttercream (vegan butter (vegetable oil blend (palm oil, canola oil), water, salt, pea protein isolate, monoglycerides, diglycerides, sunflower lecithin, artificial flavors, vitamin A palmitate, beta carotene with potassium sorbate, lactic acid, and calcium disodium EDTA), shortening (canola oil, modified palm and palm kernel oils, mono and diglycerides), corn syrup (light corn syrup, salt, and vanilla), sugar, water, instant coffee powder, vanilla extract (water, ethyl alcohol, vanilla extract), chocolate shards (sugar, hydrogenated palm fat, cocoa, soy lecithin, flavorings), meringue mushrooms (aquafaba, organic sugar, vinegar, cocoa powder (processed with alkali), matcha powder)).",
    sizeInfo: "3 layers, 7-inch diameter, serves 10\u201315",
    gfAvailable: true,
    imageKey: "blackforest",
    allergens: ""
  },
  "cake-black-chocolate-gold": {
    name: "Black Chocolate Cake w/gold highlights",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "blackchoc",
    allergens: ""
  },
  "cake-vanilla-sprinkles": {
    name: "Vanilla Sprinkles Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "vanilla",
    allergens: ""
  },
  "cake-vanilla-coconut": {
    name: "Vanilla Coconut Cake",
    category: "cake",
    tagline: "",
    ingredients: "SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, POWDERED SUGAR, ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA), VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)), CANOLA OIL, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), UNSWEETENED COCONUT FLAKES, APPLE CIDER VINEGAR, COCONUT EXTRACT (ALCHOL, WATER, GLYCERIN, AND NATURAL COCONUT FLAVORS), VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), BAKING SODA, SALT",
    sizeInfo: "Net weight: 90oz (2551g)",
    gfAvailable: true,
    imageKey: "vanilla",
    allergens: "COCONUT, WHEAT, SOY, SULFITES",
  },
  "cake-cardamom-rose": {
    name: "Cardamom Rose Cake",
    category: "cake",
    tagline: "",
    ingredients: "SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, POWDERED SUGAR, ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA), VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)), CANOLA OIL, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), APPLE CIDER VINEGAR, ROSE EXTRACT (ALCHOL, GLYCERIN, NATURAL FLAVORS), VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), CARDAMOM POWDER, FOOD COLOR (CORN SYRUP, SUGAR, WATER, MODIFIED CORNSTARCH, RED 40, SODIUM BENZOATE (PRESERVATIVE), CITRIC ACID), BAKING SODA, SALT",
    sizeInfo: "Net weight: 84.66oz (2400g)",
    gfAvailable: true,
    imageKey: "rose",
    allergens: "WHEAT, SOY",
  },
  "cake-mango-vanilla": {
    name: "Mango Vanilla Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "mango",
    allergens: ""
  },
  "cake-vanilla-spice": {
    name: "Vanilla Spice Cake",
    category: "cake",
    tagline: "",
    ingredients: "SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, POWDERED SUGAR, ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA), VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)), CANOLA OIL, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), APPLE CIDER VINEGAR, CINNAMON, VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), GINGER, BAKING SODA, CLOVE, NUTMEG SALT",
    sizeInfo: "Net weight: 84.66oz (2400g)",
    gfAvailable: true,
    imageKey: "vanilla",
    allergens: "WHEAT, SOY",
  },
  "cake-vanilla-lemon-curd": {
    name: "Vanilla with Lemon Curd Filling",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "lemon",
    allergens: ""
  },
  "cake-strawberry-crunch": {
    name: "Strawberry Crunch Cake",
    category: "cake",
    tagline: "Our Strawberry Crunch Cake follows on from our irresistible Almond Crunch Cake. This cake is a Vanilla sponge stuffed with our tangy strawberry buttercream flavored with real freeze-dried strawberries rolled in golden biscuits and freeze-dried strawberries. The strawberry flavor is aggressive without the taste being too sweet!",
    ingredients: "Soy milk (organic soybase (filtered water, whole organic soybeans), tricalcium phosphate, sea salt, organic flavors, gellan gum, vitamin A palmitate, vitamin D2, riboflavin (B2), vitamin B12), sugar, powdered sugar, enriched bleached flour (wheat flour, malted barley flour, niacin, iron, thiamine, riboflavin, folic acid), light corn syrup (corn syrup, salt, vanilla), vegan butter (oil blend (palm fruit, canola, soybean, flax, and olive), water, salt, natural flavor (plant derived from corn), soy protein, soy lecithin, lactic acid (non-dairy), annatto extract (color)), canola oil, shortening (soybean oil, fully hydrogenated palm oil, palm oil, mono and diglycerides, TBHQ and citric acid (antioxidants)), freeze dried strawberries, apple cider vinegar, vanilla extract (water, alcohol (35%), sugar, vanilla bean extractives), water, baking soda, salt.",
    sizeInfo: "3 layers, 7-inch diameter, serves 10\u201320 small slices; 8\u201310 large slices",
    gfAvailable: false,
    imageKey: "strawberry",
    allergens: "WHEAT, SOY"
  },
  "cake-vanilla-biscoff": {
    name: "Vanilla Biscoff Cake",
    category: "cake",
    tagline: "",
    ingredients: "SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, POWDERED SUGAR, ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA), VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)), CANOLA OIL, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), COOKIE BUTTER (SPECULOOS COOKIES (WHEAT FLOUR [WHEAT FLOUR, MALTED WHEAT FLOUR], CARAMELIZED SUGAR, VEGETABLE OIL BLEND [PALM OIL, CANOLA OIL, CITRIC ACID AND LEMON JUICE CONCENTRATE {TO PRESERVE}], CANE SUGAR, SOY FLOUR, INVERT SUGAR SYRUP, WHEAT GLUTEN, SODIUM BICARBONATE, CINNAMON, NUTMEG)), BISCOFF COOKIES (WHEAT FLOUR, SUGAR, VEGETABLE OILS (SOYBEAN OIL, SUNFLOWER OIL, CANOLA OIL, PALM OIL), BROWN SUGAR SYRUP, SODIUM BICARBONATE (LEAVENING), SOY FLOUR, SALT, CINNAMON), APPLE CIDER VINEGAR, VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), BAKING SODA, SALT",
    sizeInfo: "Net weight: 12.7oz (360g)",
    gfAvailable: false,
    imageKey: "biscoff",
    allergens: "WHEAT, SOY",
  },
  "cake-pandan-vanilla": {
    name: "Pandan Vanilla Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "pandan",
    allergens: ""
  },
  "cake-ube-vanilla": {
    name: "Ube Vanilla Cake",
    category: "cake",
    tagline: "Does this not look like a beautiful galaxy! The Ube cake is a mellow 3-layer beauty, filled with our smooth purple Ube buttercream. The flavor is light, but Ube is nonetheless very impressive!",
    ingredients: "Soy milk (organic soybase (filtered water, whole organic soybeans), tricalcium phosphate, sea salt, organic flavors, gellan gum, vitamin A palmitate, vitamin D2, riboflavin (B2), vitamin B12), sugar, powdered sugar, enriched bleached flour (wheat flour, malted barley flour, niacin, iron, thiamine, riboflavin, folic acid), light corn syrup (corn syrup, salt, vanilla), vegan butter (oil blend (palm fruit, canola, soybean, flax, and olive), water, salt, natural flavor (plant derived from corn), soy protein, soy lecithin, lactic acid (non-dairy), annatto extract (color)), canola oil, macapuno (coconut sport, young coconut, sugar, water, sodium carboxymethylcellulose, sodium metabisulfite (as preservative)), shortening (soybean oil, fully hydrogenated palm oil, palm oil, mono and diglycerides, TBHQ and citric acid (antioxidants)), apple cider vinegar, ube flavouring (glucose syrup, water, propylene glycol, sorbitol syrup, artificial sweet potato flavor, coloring (FD&C Red #3 & FD&C Blue #1), ethyl vanilla), vanilla extract (water, alcohol (35%), sugar, vanilla bean extractives), baking soda, salt.",
    sizeInfo: "3 layers, 7-inch diameter, serves 10\u201320 small slices; 8\u201310 large slices",
    gfAvailable: true,
    imageKey: "ube",
    allergens: "WHEAT, SOY, COCONUT"
  },
  "cake-white-forest": {
    name: "White Forest Cake",
    category: "cake",
    tagline: "Do you like chocolate cake? Vanilla cake? Cherries? Well then get this! Our Forest series is one of the most popular at Mix For A Mission \u2014 and our customers have good taste. The sweet sour cherries balance perfectly with our vanilla and chocolate taste, and with the chopped chocolate this is a match made in heaven!",
    ingredients: "Soy milk (organic soybase (filtered water, whole organic soybeans), tricalcium phosphate, sea salt, organic flavors, gellan gum, vitamin A palmitate, vitamin D2, riboflavin (B2), vitamin B12), sugar, powdered sugar (sugar, cornstarch), enriched bleached flour (wheat flour, malted barley flour, niacin, iron, thiamine, riboflavin, folic acid), light corn syrup (corn syrup, salt, vanilla), vegan butter (oil blend (palm fruit, canola, soybean, flax, and olive), water, salt, natural flavor (plant derived from corn), soy protein, soy lecithin, lactic acid (non-dairy), annatto extract (color)), canola oil, shortening (soybean oil, fully hydrogenated palm oil, palm oil, mono and diglycerides, TBHQ and citric acid (antioxidants)), cocoa, apple cider vinegar, strawberry syrup (high fructose corn syrup, corn syrup, water, artificial flavors, citric acid, sodium benzoate, xanthan gum, Red 40), vanilla extract (water, alcohol (35%), sugar, vanilla bean extractives), baking powder (sodium acid pyrophosphate, sodium bicarbonate, cornstarch, monocalcium phosphate), salt.",
    sizeInfo: "3 layers, 7-inch diameter, serves 10\u201320 small slices; 8\u201310 large slices",
    gfAvailable: true,
    imageKey: "whiteforest",
    allergens: "WHEAT, SOY"
  },
  "cake-gender-reveal-pink": {
    name: "Gender Reveal Cake (Pink)",
    category: "cake",
    tagline: "",
    ingredients: "SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, POWDERED SUGAR, ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA), VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)), CANOLA OIL, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), APPLE CIDER VINEGAR, VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), BAKING SODA, COLORING (CORN SYRUP, SUGAR, WATER, MODIFIED CORNSTARCH, RED 40, SODIUM BENZOATE (PRESERVATIVE), CITRIC ACID), SALT",
    sizeInfo: "Net weight: 84.66oz (2400g)",
    gfAvailable: false,
    imageKey: "strawberry",
    allergens: "WHEAT, SOY",
  },
  "cake-gender-reveal-blue": {
    name: "Gender Reveal Cake (Blue)",
    category: "cake",
    tagline: "",
    ingredients: "SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, POWDERED SUGAR, ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA), VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)), CANOLA OIL, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), APPLE CIDER VINEGAR, VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), BAKING SODA, COLORING (CORN SYRUP, SUGAR, WATER, MODIFIED CORNSTARCH, CARRAGEENAN, BLUE 1, BENZOATE (PRESERVATIVE), CITRIC ACID) SALT",
    sizeInfo: "Net weight: 84.66oz (2400g)",
    gfAvailable: false,
    imageKey: "blue",
    allergens: "WHEAT, SOY",
  },
  "cake-red-velvet": {
    name: "Red Velvet Cake",
    category: "cake",
    tagline: "It's a red velvet cake. That's all that needs to be said about this beauty.",
    ingredients: "SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, POWDERED SUGAR (SUGAR, CORNSTARCH), ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA),VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)), CANOLA OIL, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), APPLE CIDER VINEGAR, COCOA, RED GEL FOOD COLOR (SOFT GEL PASTE FOOD COLOR (WATER, SUGAR, US CERTIFIED RED 40 (E129), RED 3 (E127), YELLOW 6 (E110), MODIFIED CORN STARCH, VEGTABLE GUM, CITRIC ACID AND 1/10 OF SODIUM BENZONATE AND POTASSIUM SORBATE (AS PRESERVATIVES)), VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), BAKING POWDER (SODIUM ACID PYROPHOSPHATE, SODIUM BICARBONATE, CORNSTARCH, MONOCALCIUM PHOSPHATE), BAKING POWDER (SODIUM ACID PYROPHOSPHATE, SODIUM BICARBONATE, CORNSTARCH, MONOCALCIUM PHOSPHATE), SALT",
    sizeInfo: "Net weight: 84.66oz (2400g)",
    gfAvailable: true,
    imageKey: "redvelvet",
    allergens: "WHEAT, SOY",
  },

  /* ======================================================
     CUPCAKES — 24 items
     ====================================================== */
  "cupcake-almond-crunch": {
    name: "Almond Crunch",
    category: "cupcake",
    tagline: "",
    ingredients: "VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE)), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR), SUGAR, SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12, ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA), ALMONDS, POWDERED SUGAR, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), WATER, \\FLAXSEED, APPLE CIDER VINEGAR, ALMOND EXTRACT (WATER, ALCOHOL, OIL OF BITTER ALMOND), VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), BAKING POWDER (SODIUM ACID PYROPHOSPHATE, SODIUM BICARBONATE, CORNSTARCH, MONOCALCIUM PHOSPHATE), BAKING SODA, SALT",
    sizeInfo: "Net weight: 44.45 oz (1260g)",
    gfAvailable: false,
    imageKey: "almond",
    allergens: "ALMOND, WHEAT, SOY",
  },
  "cupcake-chocolate-vanilla": {
    name: "Chocolate Vanilla",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "chocolate",
    allergens: ""
  },
  "cupcake-chocolate-candy-cane": {
    name: "Chocolate Candy Cane",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "candycane",
    allergens: ""
  },
  "cupcake-chocolate-mint": {
    name: "Chocolate Mint",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "mint",
    allergens: ""
  },
  "cupcake-chocolate-coffee": {
    name: "Chocolate Coffee",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "coffee",
    allergens: ""
  },
  "cupcake-chocolate-oreo-crunch": {
    name: "Chocolate Oreo Crunch",
    category: "cupcake",
    tagline: "",
    ingredients: "SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, POWDERED SUGAR (SUGAR, CORNSTARCH), ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA), VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)), CANOLA OIL, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), COCOA, SEMISWEET CHOCOLATE CHIPS (CHOCOLATE LIQUOR, SUGAR, SOY LECITHIN, VANILLA), APPLE CIDER VINEGAR, VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), PEPPERMINT EXTRACT (ALCOHOL, PEPPERMINT OIL), FOOD COLOR (CORN SYRUP, SUGAR, WATER, MODIFIED CORNSTARCH, REDSODIUM BENZOATE (PRESERVATIVE), CITRIC ACID), BAKING POWDER (CORN STARCH, SODIUM BICARBONATE, SODIUM ALUMINUM SULFATE, MONOCALCIUM PHOSPHATE), SALT,",
    sizeInfo: "Net weight: 33oz (1200g)",
    gfAvailable: false,
    imageKey: "oreo",
    allergens: "WHEAT, SOY",
  },
  "cupcake-chocolate-strawberry-crunch": {
    name: "Chocolate Strawberry Crunch",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "strawberry",
    allergens: ""
  },
  "cupcake-chocolate-peanut-butter": {
    name: "Chocolate Peanut Butter",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "peanut",
    allergens: ""
  },
  "cupcake-black-forest": {
    name: "Black Forest",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "blackforest",
    allergens: ""
  },
  "cupcake-black-chocolate": {
    name: "Black Chocolate",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "blackchoc",
    allergens: ""
  },
  "cupcake-toasted-smores": {
    name: "Toasted S'mores Cupcakes",
    category: "cupcake",
    tagline: "Our smore cupcake is a delicious treat that will satisfy your sweet cravings. It is made with a cookie cupcake base and torched meringue that gives you that creamy marshmallow feel to create a rich and indulgent flavor. The cupcake has a nice chocolatey flavor that feels moist and fluffy giving you that smore and cupcake experience at the same time. Every bite of our smoking smore cupcake is an explosion of flavors that will make you crave for more.",
    ingredients: "Chocolate cake (enriched flour (wheat flour, niacin, reduced iron, thiamine, mononitrate, riboflavin, folic acid), organic sugar, water, organic soymilk (filtered water, organic soybeans, contains 2% or less of: vitamin and mineral blend (calcium carbonate, vitamin A palmitate, vitamin D2, riboflavin (B2), vitamin B12), sea salt, gellan gum, ascorbic acid (vitamin C to protect)), canola oil, cocoa (processed with alkali), instant coffee powder, baking powder, baking soda, vanilla extract (water, ethyl alcohol, vanilla extract)); meringue (sugar, aquafaba, water, vinegar).",
    sizeInfo: "Sold in sets of 6 or 12",
    gfAvailable: false,
    imageKey: "smores",
    allergens: ""
  },
  "cupcake-vanilla-sprinkle": {
    name: "Vanilla Sprinkle",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "vanilla",
    allergens: ""
  },
  "cupcake-matcha": {
    name: "Matcha",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "matcha",
    allergens: ""
  },
  "cupcake-cardamom-rose": {
    name: "Cardamom Rose",
    category: "cupcake",
    tagline: "Indulge in the delicate and fragrant flavors of our irresistible rose buttercream cupcake! Our moist and fluffy cupcake is infused with the sweet aroma of roses, giving you a taste of pure elegance in every bite. Topped with a swirl of velvety rose buttercream, each bite is a delightful balance of floral and creamy flavors that will make you not regret your cheat day.",
    ingredients: "SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, POWDERED SUGAR, ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA), VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)), CANOLA OIL, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), APPLE CIDER VINEGAR, ROSE EXTRACT (ALCHOL, GLYCERIN, NATURAL FLAVORS), VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), CARDOMAM POWDER, FOOD COLOR (CORN SYRUP, SUGAR, WATER, MODIFIED CORNSTARCH, RED 40, SODIUM BENZOATE (PRESERVATIVE), CITRIC ACID), BAKING SODA, SALT",
    sizeInfo: "Net weight: 42.33oz (1200g)",
    gfAvailable: true,
    imageKey: "rose",
    allergens: "WHEAT, SOY",
  },
  "cupcake-mango-vanilla": {
    name: "Mango Vanilla",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "mango",
    allergens: ""
  },
  "cupcake-lemon-curd-vanilla": {
    name: "Lemon Curd Vanilla",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "lemon",
    allergens: ""
  },
  "cupcake-strawberry-crunch": {
    name: "Strawberry Crunch",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "strawberry",
    allergens: ""
  },
  "cupcake-vanilla-biscoff": {
    name: "Vanilla Biscoff",
    category: "cupcake",
    tagline: "",
    ingredients: "SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, POWDERED SUGAR, ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA), VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)), CANOLA OIL, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), COOKIE BUTTER (SPECULOOS COOKIES (WHEAT FLOUR [WHEAT FLOUR, MALTED WHEAT FLOUR], CARAMELIZED SUGAR, VEGETABLE OIL BLEND [PALM OIL, CANOLA OIL, CITRIC ACID AND LEMON JUICE CONCENTRATE {TO PRESERVE}], CANE SUGAR, SOY FLOUR, INVERT SUGAR SYRUP, WHEAT GLUTEN, SODIUM BICARBONATE, CINNAMON, NUTMEG)), BISCOFF COOKIES (WHEAT FLOUR, SUGAR, VEGETABLE OILS (SOYBEAN OIL, SUNFLOWER OIL, CANOLA OIL, PALM OIL), BROWN SUGAR SYRUP, SODIUM BICARBONATE (LEAVENING), SOY FLOUR, SALT, CINNAMON), APPLE CIDER VINEGAR, VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), BAKING SODA, SALT",
    sizeInfo: "Net weight: 44.45oz (1260g)",
    gfAvailable: false,
    imageKey: "biscoff",
    allergens: "WHEAT, SOY",
  },
  "cupcake-pandan-vanilla": {
    name: "Pandan Vanilla",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "pandan",
    allergens: ""
  },
  "cupcake-ube-vanilla": {
    name: "Ube Vanilla",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "ube",
    allergens: ""
  },
  "cupcake-milk-tea-boba": {
    name: "Milk Tea Boba",
    category: "cupcake",
    tagline: "",
    ingredients: "SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, POWDERED SUGAR, ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA), VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)), CANOLA OIL, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), WATER, BROWN SUGAR, TAPIOCA STARCH, MODIFIED TAPIOCA STARCH, CARAMEL COLOR, NATURAL FLAVOR, SODIUM CARBOXYMETHYLCELLULOSE, APPLE CIDER VINEGAR, BLACK TEA POWDER, VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), BAKING SODA, SALT",
    sizeInfo: "Net weight: 50.76oz (1020g)",
    gfAvailable: false,
    imageKey: "milktea",
    allergens: "WHEAT, SOY",
  },
  "cupcake-red-velvet": {
    name: "Red Velvet",
    category: "cupcake",
    tagline: "",
    ingredients: "SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, POWDERED SUGAR (SUGAR, CORNSTARCH), ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA),VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON- DAIRY), ANNATTO EXTRACT (COLOR)), CANOLA OIL, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), APPLE CIDER VINEGAR, COCOA, RED GEL FOOD COLOR (SOFT GEL PASTE FOOD COLOR (WATER, SUGAR, US CERTIFIED RED 40 (E129), RED 3 (E127), YELLOW 6 (E110), MODIFIED CORN STARCH, VEGTABLE GUM, CITRIC ACID AND 1/10 OF SODIUM BENZONATE AND POTASSIUM SORBATE (AS PRESERVATIVES)), VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), BAKING POWDER (SODIUM ACID PYROPHOSPHATE, SODIUM BICARBONATE, CORNSTARCH, MONOCALCIUM PHOSPHATE), BAKING POWDER (SODIUM ACID PYROPHOSPHATE, SODIUM BICARBONATE, CORNSTARCH, MONOCALCIUM PHOSPHATE), SALT",
    sizeInfo: "Net weight: 42.33oz (1200g)",
    gfAvailable: false,
    imageKey: "redvelvet",
    allergens: "WHEAT, SOY",
  },
  "cupcake-vanilla-chocolate-swirl": {
    name: "Vanilla Chocolate Swirl",
    category: "cupcake",
    tagline: "Indulge in our heavenly Vanilla Chocolate Swirl Cupcake, a delectable treat that perfectly balances the classic flavors of vanilla and chocolate. We have skillfully crafted a moist and fluffy cupcake, with a rich and decadent chocolatey swirl that is sure to please your taste buds.",
    ingredients: "SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, POWDERED SUGAR (SUGAR, CORNSTARCH), ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA), VEGAN BUTTER (OIL BLEND (PALM FRUIT, SOYBEAN, CANOLA, VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)) CANOLA OIL, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), COCOA, APPLE CIDER VINEGAR, VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), BAKING POWDER (SODIUM ACID PYROPHOSPHATE, SODIUM BICARBONATE, CORNSTARCH, MONOCALCIUM PHOSPHATE), SALT",
    sizeInfo: "Net weight: 38.8 oz (1110g)",
    gfAvailable: true,
    imageKey: "swirl",
    allergens: "WHEAT, SOY",
  },
  "cupcake-pumpkin-cranberry-bliss": {
    name: "Pumpkin Cranberry Bliss",
    category: "cupcake",
    tagline: "Indulge in the perfect blend of autumnal flavors with our irresistible pumpkin cranberry cupcake! Our moist and fluffy pumpkin cupcake gives you a warm and cozy taste that will instantly transport you to your favorite fall memories. Topped with juicy cranberries, each bite is a delightful balance of sweet and tangy flavors that will leave you wanting to be ordering more.",
    ingredients: "Flour, sugar, vegan butter (vegetable oil blend (palm oil, canola oil), water, salt, pea protein isolate, monoglycerides, diglycerides, sunflower lecithin, artificial flavors, vitamin A palmitate, beta carotene with potassium sorbate, lactic acid, and calcium disodium EDTA), soy milk (soybeans, water, and artificial flavors), baking soda, salt, shortening, cinnamon, nutmeg, allspice, cranberries, pumpkin, and vanilla flavor (water, propylene glycol, vanillin, caramel color, sodium benzoate, phosphoric acid, and ethyl vanillin).",
    sizeInfo: "Sold in sets of 6 or 12",
    gfAvailable: false,
    imageKey: "cranberry",
    allergens: ""
  },

  /* ======================================================
     COOKIES — 8 items
     ====================================================== */
  "cookie-biscoff-stuff": {
    name: "Biscoff Stuff",
    category: "cookie",
    tagline: "",
    ingredients: "ENRICHED UNBLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID),VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)) BROWN SUGAR, SUGAR, MAPLE SYRUP, SPECCULOUS COOKIES (WHEAT FLOUR, SUGAR, VEGETABLE OILS (SOY BEAN OIL, SUNFLOWER OIL, CANOLA OIL, PALM OIL), BROWN SUGAR, SODIUM BICARBONATE (LEAVENING), SOY FLOUR, SALT, CINNAMON), COOKIE BUTTER (SPECULOOS COOKIES (WHEAT FLOUR [WHEAT FLOUR, MALTED WHEAT FLOUR], CARAMELIZED SUGAR, VEGETABLE OIL BLEND [PALM OIL, CANOLA OIL, CITRIC ACID AND LEMON JUICE CONCENTRATE {TO PRESERVE}], CANE SUGAR, SOY FLOUR, INVERT SUGAR SYRUP, WHEAT GLUTEN, SODIUM BICARBONATE, CINNAMON, NUTMEG) VEGETABLE OIL BLEND (CANOLA OIL, PALM OIL, CITRIC ACID [TO PRESERVE]) SUGAR CANOLA LECITHIN), FLAXSEED, CINNAMON, BAKING SODA, VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), SALT, GROUND GINGER, NUTMEG, CLOVES",
    sizeInfo: "Net weight: 30oz (840g)",
    gfAvailable: false,
    imageKey: "biscoff",
    allergens: "WHEAT, SOY",
  },
  "cookie-blue-monster": {
    name: "Blue Cookie Monster",
    category: "cookie",
    tagline: "",
    ingredients: "ENRICHED UNBLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)), BROWN SUGAR, SUGAR, OREOS (SUGAR, UNBLEACHED ENRICHED FLOUR (WHEAT FLOUR, NIACIN, REDUCED IRON, THIAMINE MONONITRATE {VITAMIN B1}, RIBOFLAVIN {VITAMIN B2}, FOLIC ACID), PALM AND/OR CANOLA OIL, COCOA (PROCESSED WITH ALKALI), HIGH FRUCTOSE CORN SYRUP, CORNSTARCH, LEAVENING (BAKING SODA AND/OR CALCIUM PHOSPHATE), SALT, SOY LECITHIN, VANILLIN - AN ARTIFICIAL FLAVOR, CHOCOLATE), SEMI-SWEET CHOCOLATE CHIPS (CHOCOLATE LIQUOR, SUGAR, SOY LECITHIN, VANILLA), BISCOFF COOKIES (WHEAT FLOUR, SUGAR, VEGETABLE OILS (SOYBEAN OIL, SUNFLOWER OIL, CANOLA OIL, PALM OIL), BROWN SUGAR SYRUP, SODIUM BICARBONATE, SOY FLOUR, SALT, CINNAMON), FLAXSEED, BAKING SODA, SALT, VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), ARTIFICAL COLORING (CORN SYRUP, SUGAR, WATER, MODIFIED CORNSTARCH, CARRAGEENAN, BLUE 1, BENZOATE [PRESERVATIVE], CITRIC ACID)",
    sizeInfo: "Net weight: 30oz (840g)",
    gfAvailable: false,
    imageKey: "blue",
    allergens: "WHEAT, SOY",
  },
  "cookie-ube": {
    name: "Ube",
    category: "cookie",
    tagline: "",
    ingredients: "ENRICHED UNBLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), VEGAN BUTTER (OIL BLEND (PALM FRUIT, SOYBEAN, CANOLA, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)), BROWN SUGAR, SUGAR, OREOS (SUGAR, UNBLEACHED ENRICHED FLOUR (WHEAT FLOUR, NIACIN, REDUCED IRON, THIAMINE MONONITRATE {VITAMIN B1}, RIBOFLAVIN {VITAMIN B2}, FOLIC ACID), PALM AND/OR CANOLA OIL, HIGH FRUCTOSE CORN SYRUP, CORNSTARCH, LEAVENING (BAKING SODA AND/OR CALCIUM PHOSPHATE), SALT, SOY LECITHIN, VANILLIN - AN ARTIFICIAL FLAVOR, CHOCOLATE), BROWN SUGAR SYRUP, SODIUM BICARBONATE, SOY FLOUR, SALT, CINNAMON), FLAXSEED, BAKING SODA, SALT, VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), UBE FLAVOURING (GLUCOSE SYRUP, WATER, PROPYLENE GLYCOL, SORBITOL SYRUP, ARTIFICIAL SWEET POTATO FLAVOR, COLORING (FD&C RED #3 & FD&CBLUE #1), ETHYL VANILLA))",
    sizeInfo: "Net weight: 30oz (840g)",
    gfAvailable: true,
    imageKey: "ube",
    allergens: "WHEAT, SOY",
  },
  "cookie-party-sprinkles": {
    name: "Party Sprinkles",
    category: "cookie",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "sprinkle",
    allergens: ""
  },
  "cookie-toasted-smores": {
    name: "Toasted S'mores",
    category: "cookie",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "smores",
    allergens: ""
  },
  "cookie-chocolate-chip": {
    name: "Chocolate Chip",
    category: "cookie",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "chocolate",
    allergens: ""
  },
  "cookie-pumpkin-spice-latte": {
    name: "Pumpkin Spice Latte",
    category: "cookie",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "pumpkin",
    allergens: ""
  },
  "cookie-strawberry-crunch": {
    name: "Strawberry Crunch",
    category: "cookie",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "strawberry",
    allergens: ""
  },

  /* ======================================================
     CAKE POPS — 3 items
     ====================================================== */
  "cakepop-red-velvet": {
    name: "Red Velvet (White Chocolate)",
    category: "cakepop",
    tagline: "",
    ingredients: "NONDAIRY WHITE CHOCOLATE COINS (SUGAR, HYDROGENATED PALM FAT, MALTODEXTRINE, EMULSIFIERS (SOY LECITHIN, POLYGLYCEROL POLYRICONEATE), FLAVORINGS, SALT, FOOD COLORINGS ( TITANIUM DIOXIDE)), SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, POWDERED SUGAR (SUGAR, CORNSTARCH), ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA),VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)), CANOLA OIL, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), APPLE CIDER VINEGAR, COCOA, RED GEL FOOD COLOR (SOFT GEL PASTE FOOD COLOR (WATER, SUGAR, US CERTIFIED RED 40 (E129), RED 3 (E127), YELLOW 6 (E110), MODIFIED CORN STARCH, VEGTABLE GUM, CITRIC ACID AND 1/10 OF SODIUM BENZONATE AND POTASSIUM SORBATE (AS PRESERVATIVES)), VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), BAKING POWDER (SODIUM ACID PYROPHOSPHATE, SODIUM BICARBONATE, CORNSTARCH, MONOCALCIUM PHOSPHATE), BAKING POWDER (SODIUM ACID PYROPHOSPHATE, SODIUM BICARBONATE, CORNSTARCH, MONOCALCIUM PHOSPHATE), SALT",
    sizeInfo: "Net weight: 16.93oz (480g)",
    gfAvailable: false,
    imageKey: "redvelvet",
    allergens: "WHEAT, SOY",
  },
  "cakepop-double-dough-biscoff": {
    name: "Double Dough Biscoff (White Chocolate)",
    category: "cakepop",
    tagline: "",
    ingredients: "SEMISWEET CHOCOLATE CHIPS (CHOCOLATE LIQUOR, SUGAR, SOY LECITHIN, VANILLA), SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), CANOLA OIL, POWDERED SUGAR, LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA), VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)), SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), CARABUNA WAX), COOKIE BUTTER (SPECULOOS COOKIES (WHEAT FLOUR [WHEAT FLOUR, MALTED WHEAT FLOUR], CARAMELIZED SUGAR, VEGETABLE OIL BLEND [PALM OIL, CANOLA OIL, CITRIC ACID AND LEMON JUICE CONCENTRATE {TO PRESERVE}], APPLE CIDER VINEGAR, VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), BAKING SODA, SALT",
    sizeInfo: "Net weight: 16.93oz (480g)",
    gfAvailable: false,
    imageKey: "dough",
    allergens: "WHEAT, SOY",
  },
  "cakepop-chocolate-lovers": {
    name: "Chocolate Lovers (White Chocolate)",
    category: "cakepop",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "chocolate",
    allergens: ""
  },

  /* ======================================================
     CAKE JARS — 23 items (same as cupcakes minus Smores)
     ====================================================== */
  "cakejar-almond-crunch": {
    name: "Almond Crunch",
    category: "cakejar",
    tagline: "",
    ingredients: "VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE)), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR), SUGAR, SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12, ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA), ALMONDS, POWDERED SUGAR, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), WATER, \\FLAXSEED, APPLE CIDER VINEGAR, ALMOND EXTRACT (WATER, ALCOHOL, OIL OF BITTER ALMOND), VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), BAKING POWDER (SODIUM ACID PYROPHOSPHATE, SODIUM BICARBONATE, CORNSTARCH, MONOCALCIUM PHOSPHATE), BAKING SODA, SALT",
    sizeInfo: "Same recipe as the cupcake, jarred — net weight per jar not separately labeled",
    gfAvailable: false,
    imageKey: "almond",
    allergens: "ALMOND, WHEAT, SOY",
  },
  "cakejar-chocolate-vanilla": {
    name: "Chocolate Vanilla",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "chocolate",
    allergens: ""
  },
  "cakejar-chocolate-candy-cane": {
    name: "Chocolate Candy Cane",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "candycane",
    allergens: ""
  },
  "cakejar-chocolate-mint": {
    name: "Chocolate Mint",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "mint",
    allergens: ""
  },
  "cakejar-chocolate-coffee": {
    name: "Chocolate Coffee",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "coffee",
    allergens: ""
  },
  "cakejar-chocolate-oreo-crunch": {
    name: "Chocolate Oreo Crunch",
    category: "cakejar",
    tagline: "",
    ingredients: "SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, POWDERED SUGAR (SUGAR, CORNSTARCH), ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA), VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)), CANOLA OIL, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), COCOA, SEMISWEET CHOCOLATE CHIPS (CHOCOLATE LIQUOR, SUGAR, SOY LECITHIN, VANILLA), APPLE CIDER VINEGAR, VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), PEPPERMINT EXTRACT (ALCOHOL, PEPPERMINT OIL), FOOD COLOR (CORN SYRUP, SUGAR, WATER, MODIFIED CORNSTARCH, REDSODIUM BENZOATE (PRESERVATIVE), CITRIC ACID), BAKING POWDER (CORN STARCH, SODIUM BICARBONATE, SODIUM ALUMINUM SULFATE, MONOCALCIUM PHOSPHATE), SALT,",
    sizeInfo: "Same recipe as the cupcake, jarred — net weight per jar not separately labeled",
    gfAvailable: false,
    imageKey: "oreo",
    allergens: "WHEAT, SOY",
  },
  "cakejar-chocolate-strawberry-crunch": {
    name: "Chocolate Strawberry Crunch",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "strawberry",
    allergens: ""
  },
  "cakejar-chocolate-peanut-butter": {
    name: "Chocolate Peanut Butter",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "peanut",
    allergens: ""
  },
  "cakejar-black-forest": {
    name: "Black Forest",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "blackforest",
    allergens: ""
  },
  "cakejar-black-chocolate": {
    name: "Black Chocolate",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "blackchoc",
    allergens: ""
  },
  "cakejar-vanilla-sprinkle": {
    name: "Vanilla Sprinkle",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "vanilla",
    allergens: ""
  },
  "cakejar-matcha": {
    name: "Matcha",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "matcha",
    allergens: ""
  },
  "cakejar-cardamom-rose": {
    name: "Cardamom Rose",
    category: "cakejar",
    tagline: "",
    ingredients: "SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, POWDERED SUGAR, ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA), VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)), CANOLA OIL, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), APPLE CIDER VINEGAR, ROSE EXTRACT (ALCHOL, GLYCERIN, NATURAL FLAVORS), VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), CARDOMAM POWDER, FOOD COLOR (CORN SYRUP, SUGAR, WATER, MODIFIED CORNSTARCH, RED 40, SODIUM BENZOATE (PRESERVATIVE), CITRIC ACID), BAKING SODA, SALT",
    sizeInfo: "Same recipe as the cupcake, jarred — net weight per jar not separately labeled",
    gfAvailable: true,
    imageKey: "rose",
    allergens: "WHEAT, SOY",
  },
  "cakejar-mango-vanilla": {
    name: "Mango Vanilla",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "mango",
    allergens: ""
  },
  "cakejar-lemon-curd-vanilla": {
    name: "Lemon Curd Vanilla",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "lemon",
    allergens: ""
  },
  "cakejar-strawberry-crunch": {
    name: "Strawberry Crunch",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "strawberry",
    allergens: ""
  },
  "cakejar-vanilla-biscoff": {
    name: "Vanilla Biscoff",
    category: "cakejar",
    tagline: "",
    ingredients: "SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, POWDERED SUGAR, ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA), VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)), CANOLA OIL, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), COOKIE BUTTER (SPECULOOS COOKIES (WHEAT FLOUR [WHEAT FLOUR, MALTED WHEAT FLOUR], CARAMELIZED SUGAR, VEGETABLE OIL BLEND [PALM OIL, CANOLA OIL, CITRIC ACID AND LEMON JUICE CONCENTRATE {TO PRESERVE}], CANE SUGAR, SOY FLOUR, INVERT SUGAR SYRUP, WHEAT GLUTEN, SODIUM BICARBONATE, CINNAMON, NUTMEG)), BISCOFF COOKIES (WHEAT FLOUR, SUGAR, VEGETABLE OILS (SOYBEAN OIL, SUNFLOWER OIL, CANOLA OIL, PALM OIL), BROWN SUGAR SYRUP, SODIUM BICARBONATE (LEAVENING), SOY FLOUR, SALT, CINNAMON), APPLE CIDER VINEGAR, VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), BAKING SODA, SALT",
    sizeInfo: "Same recipe as the cupcake, jarred — net weight per jar not separately labeled",
    gfAvailable: false,
    imageKey: "biscoff",
    allergens: "WHEAT, SOY",
  },
  "cakejar-pandan-vanilla": {
    name: "Pandan Vanilla",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "pandan",
    allergens: ""
  },
  "cakejar-ube-vanilla": {
    name: "Ube Vanilla",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "ube",
    allergens: ""
  },
  "cakejar-milk-tea-boba": {
    name: "Milk Tea Boba",
    category: "cakejar",
    tagline: "",
    ingredients: "SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, POWDERED SUGAR, ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA), VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)), CANOLA OIL, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), WATER, BROWN SUGAR, TAPIOCA STARCH, MODIFIED TAPIOCA STARCH, CARAMEL COLOR, NATURAL FLAVOR, SODIUM CARBOXYMETHYLCELLULOSE, APPLE CIDER VINEGAR, BLACK TEA POWDER, VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), BAKING SODA, SALT",
    sizeInfo: "Same recipe as the cupcake, jarred — net weight per jar not separately labeled",
    gfAvailable: false,
    imageKey: "milktea",
    allergens: "WHEAT, SOY",
  },
  "cakejar-red-velvet": {
    name: "Red Velvet",
    category: "cakejar",
    tagline: "",
    ingredients: "SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, POWDERED SUGAR (SUGAR, CORNSTARCH), ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA),VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON- DAIRY), ANNATTO EXTRACT (COLOR)), CANOLA OIL, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), APPLE CIDER VINEGAR, COCOA, RED GEL FOOD COLOR (SOFT GEL PASTE FOOD COLOR (WATER, SUGAR, US CERTIFIED RED 40 (E129), RED 3 (E127), YELLOW 6 (E110), MODIFIED CORN STARCH, VEGTABLE GUM, CITRIC ACID AND 1/10 OF SODIUM BENZONATE AND POTASSIUM SORBATE (AS PRESERVATIVES)), VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), BAKING POWDER (SODIUM ACID PYROPHOSPHATE, SODIUM BICARBONATE, CORNSTARCH, MONOCALCIUM PHOSPHATE), BAKING POWDER (SODIUM ACID PYROPHOSPHATE, SODIUM BICARBONATE, CORNSTARCH, MONOCALCIUM PHOSPHATE), SALT",
    sizeInfo: "Same recipe as the cupcake, jarred — net weight per jar not separately labeled",
    gfAvailable: false,
    imageKey: "redvelvet",
    allergens: "WHEAT, SOY",
  },
  "cakejar-vanilla-chocolate-swirl": {
    name: "Vanilla Chocolate Swirl",
    category: "cakejar",
    tagline: "",
    ingredients: "SOY MILK (ORGANIC SOYBASE (FILTERED WATER, WHOLE ORGANIC SOYBEANS), TRICALCIUM PHOSPHATE, SEA SALT, ORGANIC FLAVORS, GELLAN GUM, BITAMIN A PALMITATE, VITAMIN D2, RIBOFLAVIN (B2), VITAMIN B12), SUGAR, POWDERED SUGAR (SUGAR, CORNSTARCH), ENRICHED BLEACHED FLOUR (WHEAT FLOUR, MALTED BARLEY FLOUR, NIACIN, IRON, THIAMINE, RIBOFLAVIN, FOLIC ACID), LIGHT CORN SYRUP (CORN SYRUP, SALT, VANILLA), VEGAN BUTTER (OIL BLEND (PALM FRUIT, SOYBEAN, CANOLA, VEGAN BUTTER (OIL BLEND (PALM FRUIT, CANOLA, SOYBEAN, FLAX, AND OLIVE), WATER, SALT, NATURAL FLAVOR (PLANT DERIVED FROM CORN), SOY PROTEIN, SOY LECITHIN, LACTIC ACID (NON-DAIRY), ANNATTO EXTRACT (COLOR)) CANOLA OIL, SHORTENING (SOYBEAN OIL, FULLY HYDROGENATED PALM OIL, PALM OIL, MONO AND DIGLYCERIDES, TBHQ AND CITRIC ACID (ANTIOXIDANTS)), COCOA, APPLE CIDER VINEGAR, VANILLA EXTRACT (WATER, ALCOHOL (35%), SUGAR, VANILLA BEAN EXTRACTIVES), BAKING POWDER (SODIUM ACID PYROPHOSPHATE, SODIUM BICARBONATE, CORNSTARCH, MONOCALCIUM PHOSPHATE), SALT",
    sizeInfo: "Same recipe as the cupcake, jarred — net weight per jar not separately labeled",
    gfAvailable: true,
    imageKey: "swirl",
    allergens: "WHEAT, SOY",
  },
  "cakejar-pumpkin-cranberry-bliss": {
    name: "Pumpkin Cranberry Bliss",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "cranberry",
    allergens: ""
  }
};
