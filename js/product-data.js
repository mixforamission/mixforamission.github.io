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
    ingredients: "Vegan butter (oil blend (palm fruit, canola, soybean, flax, and olive)), water, salt, natural flavor (derived from corn), soy protein, soy lecithin, lactic acid (non-dairy), annatto extract (color), sugar, soy milk (organic soybase (filtered water, whole organic soybeans), tricalcium phosphate, sea salt, organic flavors, gellan gum, vitamin A palmitate, vitamin D2, riboflavin (B2), vitamin B12), enriched bleached flour (wheat flour, malted barley flour, niacin, iron, thiamine, riboflavin, folic acid), light corn syrup (corn syrup, salt, vanilla), almonds, powdered sugar, shortening (soybean oil, fully hydrogenated palm oil, palm oil, mono and diglycerides, TBHQ and citric acid (antioxidants)), water, flaxseed, apple cider vinegar, almond extract (water, alcohol, oil of bitter almond), vanilla extract (water, alcohol (35%), sugar, vanilla bean extractives), baking powder (sodium acid pyrophosphate, sodium bicarbonate, cornstarch, monocalcium phosphate), baking soda, salt.",
    sizeInfo: "3 layers, 7-inch diameter, serves 10\u201315 small slices; 8\u201310 large slices",
    gfAvailable: false,
    imageKey: "almond",
    allergens: "ALMOND, WHEAT, SOY"
  },

  "cake-chocolate-vanilla-buttercream": {
    name: "Chocolate Cake w/Vanilla Buttercream",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "chocolate"
    allergens: ""
  },
  "cake-chocolate-mint": {
    name: "Chocolate Mint Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "mint"
    allergens: ""
  },
  "cake-enchanted-tree-stump": {
    name: "Enchanted Tree Stump Cake (+$5)",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "chocolate"
    allergens: ""
  },
  "cake-chocolate-oreo-crunch": {
    name: "Chocolate Oreo Crunch Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "oreo"
    allergens: ""
  },
  "cake-chocolate-strawberry-crunch": {
    name: "Chocolate Strawberry Crunch Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "strawberry"
    allergens: ""
  },
  "cake-chocolate-caramel-peanut-butter": {
    name: "Chocolate Caramel Peanut Butter Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "peanut"
    allergens: ""
  },
  "cake-black-forest": {
    name: "Black Forest Cake",
    category: "cake",
    tagline: "Indulge in our exquisite Vegan Chocolate Cake, lovingly decorated to resemble a lush and enchanting forest. Savor every bite of this decadent dessert, made with only the finest plant-based ingredients.",
    ingredients: "Chocolate cake (enriched flour (wheat flour, niacin, reduced iron, thiamine, mononitrate, riboflavin, folic acid), organic sugar, water, organic soymilk (filtered water, organic soybeans, contains 2% or less of: vitamin and mineral blend (calcium carbonate, vitamin A palmitate, vitamin D2, riboflavin (B2), vitamin B12), sea salt, gellan gum, ascorbic acid (vitamin C to protect)), canola oil, cocoa (processed with alkali), instant coffee powder, baking powder, baking soda, vanilla extract (water, ethyl alcohol, vanilla extract)); buttercream (vegan butter (vegetable oil blend (palm oil, canola oil), water, salt, pea protein isolate, monoglycerides, diglycerides, sunflower lecithin, artificial flavors, vitamin A palmitate, beta carotene with potassium sorbate, lactic acid, and calcium disodium EDTA), shortening (canola oil, modified palm and palm kernel oils, mono and diglycerides), corn syrup (light corn syrup, salt, and vanilla), sugar, water, instant coffee powder, vanilla extract (water, ethyl alcohol, vanilla extract), chocolate shards (sugar, hydrogenated palm fat, cocoa, soy lecithin, flavorings), meringue mushrooms (aquafaba, organic sugar, vinegar, cocoa powder (processed with alkali), matcha powder)).",
    sizeInfo: "3 layers, 7-inch diameter, serves 10\u201315",
    gfAvailable: true,
    imageKey: "blackforest"
    allergens: ""
  },
  "cake-black-chocolate-gold": {
    name: "Black Chocolate Cake w/gold highlights",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "blackchoc"
    allergens: ""
  },
  "cake-vanilla-sprinkles": {
    name: "Vanilla Sprinkles Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "vanilla"
    allergens: ""
  },
  "cake-vanilla-coconut": {
    name: "Vanilla Coconut Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "vanilla"
    allergens: ""
  },
  "cake-cardamom-rose": {
    name: "Cardamom Rose Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "rose"
    allergens: ""
  },
  "cake-mango-vanilla": {
    name: "Mango Vanilla Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "mango"
    allergens: ""
  },
  "cake-vanilla-spice": {
    name: "Vanilla Spice Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "vanilla"
    allergens: ""
  },
  "cake-vanilla-lemon-curd": {
    name: "Vanilla with Lemon Curd Filling",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "lemon"
    allergens: ""
  },
  "cake-strawberry-crunch": {
    name: "Strawberry Crunch Cake",
    category: "cake",
    tagline: "Our Strawberry Crunch Cake follows on from our irresistible Almond Crunch Cake. This cake is a Vanilla sponge stuffed with our tangy strawberry buttercream flavored with real freeze-dried strawberries rolled in golden biscuits and freeze-dried strawberries. The strawberry flavor is aggressive without the taste being too sweet!",
    ingredients: "Soy milk (organic soybase (filtered water, whole organic soybeans), tricalcium phosphate, sea salt, organic flavors, gellan gum, vitamin A palmitate, vitamin D2, riboflavin (B2), vitamin B12), sugar, powdered sugar, enriched bleached flour (wheat flour, malted barley flour, niacin, iron, thiamine, riboflavin, folic acid), light corn syrup (corn syrup, salt, vanilla), vegan butter (oil blend (palm fruit, canola, soybean, flax, and olive), water, salt, natural flavor (plant derived from corn), soy protein, soy lecithin, lactic acid (non-dairy), annatto extract (color)), canola oil, shortening (soybean oil, fully hydrogenated palm oil, palm oil, mono and diglycerides, TBHQ and citric acid (antioxidants)), freeze dried strawberries, apple cider vinegar, vanilla extract (water, alcohol (35%), sugar, vanilla bean extractives), water, baking soda, salt.",
    sizeInfo: "3 layers, 7-inch diameter, serves 10\u201320 small slices; 8\u201310 large slices",
    gfAvailable: false,
    imageKey: "strawberry"
    allergens: "WHEAT, SOY"
  },
  "cake-vanilla-biscoff": {
    name: "Vanilla Biscoff Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "biscoff"
    allergens: ""
  },
  "cake-pandan-vanilla": {
    name: "Pandan Vanilla Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "pandan"
    allergens: ""
  },
  "cake-ube-vanilla": {
    name: "Ube Vanilla Cake",
    category: "cake",
    tagline: "Does this not look like a beautiful galaxy! The Ube cake is a mellow 3-layer beauty, filled with our smooth purple Ube buttercream. The flavor is light, but Ube is nonetheless very impressive!",
    ingredients: "Soy milk (organic soybase (filtered water, whole organic soybeans), tricalcium phosphate, sea salt, organic flavors, gellan gum, vitamin A palmitate, vitamin D2, riboflavin (B2), vitamin B12), sugar, powdered sugar, enriched bleached flour (wheat flour, malted barley flour, niacin, iron, thiamine, riboflavin, folic acid), light corn syrup (corn syrup, salt, vanilla), vegan butter (oil blend (palm fruit, canola, soybean, flax, and olive), water, salt, natural flavor (plant derived from corn), soy protein, soy lecithin, lactic acid (non-dairy), annatto extract (color)), canola oil, macapuno (coconut sport, young coconut, sugar, water, sodium carboxymethylcellulose, sodium metabisulfite (as preservative)), shortening (soybean oil, fully hydrogenated palm oil, palm oil, mono and diglycerides, TBHQ and citric acid (antioxidants)), apple cider vinegar, ube flavouring (glucose syrup, water, propylene glycol, sorbitol syrup, artificial sweet potato flavor, coloring (FD&C Red #3 & FD&C Blue #1), ethyl vanilla), vanilla extract (water, alcohol (35%), sugar, vanilla bean extractives), baking soda, salt.",
    sizeInfo: "3 layers, 7-inch diameter, serves 10\u201320 small slices; 8\u201310 large slices",
    gfAvailable: true,
    imageKey: "ube"
    allergens: "WHEAT, SOY, COCONUT"
  },
  "cake-white-forest": {
    name: "White Forest Cake",
    category: "cake",
    tagline: "Do you like chocolate cake? Vanilla cake? Cherries? Well then get this! Our Forest series is one of the most popular at Mix For A Mission \u2014 and our customers have good taste. The sweet sour cherries balance perfectly with our vanilla and chocolate taste, and with the chopped chocolate this is a match made in heaven!",
    ingredients: "Soy milk (organic soybase (filtered water, whole organic soybeans), tricalcium phosphate, sea salt, organic flavors, gellan gum, vitamin A palmitate, vitamin D2, riboflavin (B2), vitamin B12), sugar, powdered sugar (sugar, cornstarch), enriched bleached flour (wheat flour, malted barley flour, niacin, iron, thiamine, riboflavin, folic acid), light corn syrup (corn syrup, salt, vanilla), vegan butter (oil blend (palm fruit, canola, soybean, flax, and olive), water, salt, natural flavor (plant derived from corn), soy protein, soy lecithin, lactic acid (non-dairy), annatto extract (color)), canola oil, shortening (soybean oil, fully hydrogenated palm oil, palm oil, mono and diglycerides, TBHQ and citric acid (antioxidants)), cocoa, apple cider vinegar, strawberry syrup (high fructose corn syrup, corn syrup, water, artificial flavors, citric acid, sodium benzoate, xanthan gum, Red 40), vanilla extract (water, alcohol (35%), sugar, vanilla bean extractives), baking powder (sodium acid pyrophosphate, sodium bicarbonate, cornstarch, monocalcium phosphate), salt.",
    sizeInfo: "3 layers, 7-inch diameter, serves 10\u201320 small slices; 8\u201310 large slices",
    gfAvailable: true,
    imageKey: "whiteforest"
    allergens: "WHEAT, SOY"
  },
  "cake-gender-reveal-pink": {
    name: "Gender Reveal Cake (Pink)",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "strawberry"
    allergens: ""
  },
  "cake-gender-reveal-blue": {
    name: "Gender Reveal Cake (Blue)",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "blue"
    allergens: ""
  },
  "cake-red-velvet": {
    name: "Red Velvet Cake",
    category: "cake",
    tagline: "It's a red velvet cake. That's all that needs to be said about this beauty.",
    ingredients: "Soy milk (organic soybase (filtered water, whole organic soybeans), tricalcium phosphate, sea salt, organic flavors, gellan gum, vitamin A palmitate, vitamin D2, riboflavin (B2), vitamin B12), sugar, powdered sugar (sugar, cornstarch), enriched bleached flour (wheat flour, malted barley flour, niacin, iron, thiamine, riboflavin, folic acid), light corn syrup (corn syrup, salt, vanilla), vegan butter (oil blend (palm fruit, canola, soybean, flax, and olive), water, salt, natural flavor (plant derived from corn), soy protein, soy lecithin, lactic acid (non-dairy), annatto extract (color)), canola oil, shortening (soybean oil, fully hydrogenated palm oil, palm oil, mono and diglycerides, TBHQ and citric acid (antioxidants)), apple cider vinegar, cocoa, red gel food color (water, sugar, US certified Red 40 (E129), Red 3 (E127), Yellow 6 (E110), modified corn starch, vegetable gum, citric acid and 1/10 of sodium benzoate and potassium sorbate (as preservatives)), vanilla extract (water, alcohol (35%), sugar, vanilla bean extractives), baking powder (sodium acid pyrophosphate, sodium bicarbonate, cornstarch, monocalcium phosphate), salt.",
    sizeInfo: "3 layers, 7-inch diameter, serves 10\u201315 small slices; 8\u201310 large slices",
    gfAvailable: true,
    imageKey: "redvelvet"
    allergens: "WHEAT, SOY"
  },

  /* ======================================================
     CUPCAKES — 24 items
     ====================================================== */
  "cupcake-almond-crunch": {
    name: "Almond Crunch",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "almond"
    allergens: ""
  },
  "cupcake-chocolate-vanilla": {
    name: "Chocolate Vanilla",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "chocolate"
    allergens: ""
  },
  "cupcake-chocolate-candy-cane": {
    name: "Chocolate Candy Cane",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "candycane"
    allergens: ""
  },
  "cupcake-chocolate-mint": {
    name: "Chocolate Mint",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "mint"
    allergens: ""
  },
  "cupcake-chocolate-coffee": {
    name: "Chocolate Coffee",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "coffee"
    allergens: ""
  },
  "cupcake-chocolate-oreo-crunch": {
    name: "Chocolate Oreo Crunch",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "oreo"
    allergens: ""
  },
  "cupcake-chocolate-strawberry-crunch": {
    name: "Chocolate Strawberry Crunch",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "strawberry"
    allergens: ""
  },
  "cupcake-chocolate-peanut-butter": {
    name: "Chocolate Peanut Butter",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "peanut"
    allergens: ""
  },
  "cupcake-black-forest": {
    name: "Black Forest",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "blackforest"
    allergens: ""
  },
  "cupcake-black-chocolate": {
    name: "Black Chocolate",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "blackchoc"
    allergens: ""
  },
  "cupcake-toasted-smores": {
    name: "Toasted S'mores Cupcakes",
    category: "cupcake",
    tagline: "Our smore cupcake is a delicious treat that will satisfy your sweet cravings. It is made with a cookie cupcake base and torched meringue that gives you that creamy marshmallow feel to create a rich and indulgent flavor. The cupcake has a nice chocolatey flavor that feels moist and fluffy giving you that smore and cupcake experience at the same time. Every bite of our smoking smore cupcake is an explosion of flavors that will make you crave for more.",
    ingredients: "Chocolate cake (enriched flour (wheat flour, niacin, reduced iron, thiamine, mononitrate, riboflavin, folic acid), organic sugar, water, organic soymilk (filtered water, organic soybeans, contains 2% or less of: vitamin and mineral blend (calcium carbonate, vitamin A palmitate, vitamin D2, riboflavin (B2), vitamin B12), sea salt, gellan gum, ascorbic acid (vitamin C to protect)), canola oil, cocoa (processed with alkali), instant coffee powder, baking powder, baking soda, vanilla extract (water, ethyl alcohol, vanilla extract)); meringue (sugar, aquafaba, water, vinegar).",
    sizeInfo: "Sold in sets of 6 or 12",
    gfAvailable: false,
    imageKey: "smores"
    allergens: ""
  },
  "cupcake-vanilla-sprinkle": {
    name: "Vanilla Sprinkle",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "vanilla"
    allergens: ""
  },
  "cupcake-matcha": {
    name: "Matcha",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "matcha"
    allergens: ""
  },
  "cupcake-cardamom-rose": {
    name: "Cardamom Rose",
    category: "cupcake",
    tagline: "Indulge in the delicate and fragrant flavors of our irresistible rose buttercream cupcake! Our moist and fluffy cupcake is infused with the sweet aroma of roses, giving you a taste of pure elegance in every bite. Topped with a swirl of velvety rose buttercream, each bite is a delightful balance of floral and creamy flavors that will make you not regret your cheat day.",
    ingredients: "All-purpose flour, sugar, vegan butter (vegetable oil blend (palm oil, canola oil), water, salt, pea protein isolate, monoglycerides, diglycerides, sunflower lecithin, artificial flavors, vitamin A palmitate, beta carotene with potassium sorbate, lactic acid, and calcium disodium EDTA), shortening, soy milk (soybeans, water, and artificial flavors), baking soda, salt, rose extract, and vanilla flavor (water, propylene glycol, vanillin, caramel color, sodium benzoate, phosphoric acid, and ethyl vanillin).",
    sizeInfo: "Sold in sets of 6 or 12",
    gfAvailable: true,
    imageKey: "rose"
    allergens: ""
  },
  "cupcake-mango-vanilla": {
    name: "Mango Vanilla",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "mango"
    allergens: ""
  },
  "cupcake-lemon-curd-vanilla": {
    name: "Lemon Curd Vanilla",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "lemon"
    allergens: ""
  },
  "cupcake-strawberry-crunch": {
    name: "Strawberry Crunch",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "strawberry"
    allergens: ""
  },
  "cupcake-vanilla-biscoff": {
    name: "Vanilla Biscoff",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "biscoff"
    allergens: ""
  },
  "cupcake-pandan-vanilla": {
    name: "Pandan Vanilla",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "pandan"
    allergens: ""
  },
  "cupcake-ube-vanilla": {
    name: "Ube Vanilla",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "ube"
    allergens: ""
  },
  "cupcake-milk-tea-boba": {
    name: "Milk Tea Boba",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "milktea"
    allergens: ""
  },
  "cupcake-red-velvet": {
    name: "Red Velvet",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "redvelvet"
    allergens: ""
  },
  "cupcake-vanilla-chocolate-swirl": {
    name: "Vanilla Chocolate Swirl",
    category: "cupcake",
    tagline: "Indulge in our heavenly Vanilla Chocolate Swirl Cupcake, a delectable treat that perfectly balances the classic flavors of vanilla and chocolate. We have skillfully crafted a moist and fluffy cupcake, with a rich and decadent chocolatey swirl that is sure to please your taste buds.",
    ingredients: "Soy milk (organic soybase (filtered water, whole organic soybeans), tricalcium phosphate, sea salt, organic flavors, gellan gum, vitamin A palmitate, vitamin D2, riboflavin (B2), vitamin B12), sugar, powdered sugar (sugar, cornstarch), enriched bleached flour (wheat flour, malted barley flour, niacin, iron, thiamine, riboflavin, folic acid), light corn syrup (corn syrup, salt, vanilla), vegan butter (oil blend (palm fruit, soybean, canola, flax, and olive), water, salt, natural flavor (plant derived from corn), soy protein, soy lecithin, lactic acid (non-dairy), annatto extract (color)), canola oil, shortening (soybean oil, fully hydrogenated palm oil, palm oil, mono and diglycerides, TBHQ and citric acid (antioxidants)), cocoa, apple cider vinegar, vanilla extract (water, alcohol (35%), sugar, vanilla bean extractives), baking powder (sodium acid pyrophosphate, sodium bicarbonate, cornstarch, monocalcium phosphate), salt.",
    sizeInfo: "Sold in sets of 6 or 12",
    gfAvailable: true,
    imageKey: "swirl"
    allergens: ""
  },
  "cupcake-pumpkin-cranberry-bliss": {
    name: "Pumpkin Cranberry Bliss",
    category: "cupcake",
    tagline: "Indulge in the perfect blend of autumnal flavors with our irresistible pumpkin cranberry cupcake! Our moist and fluffy pumpkin cupcake gives you a warm and cozy taste that will instantly transport you to your favorite fall memories. Topped with juicy cranberries, each bite is a delightful balance of sweet and tangy flavors that will leave you wanting to be ordering more.",
    ingredients: "Flour, sugar, vegan butter (vegetable oil blend (palm oil, canola oil), water, salt, pea protein isolate, monoglycerides, diglycerides, sunflower lecithin, artificial flavors, vitamin A palmitate, beta carotene with potassium sorbate, lactic acid, and calcium disodium EDTA), soy milk (soybeans, water, and artificial flavors), baking soda, salt, shortening, cinnamon, nutmeg, allspice, cranberries, pumpkin, and vanilla flavor (water, propylene glycol, vanillin, caramel color, sodium benzoate, phosphoric acid, and ethyl vanillin).",
    sizeInfo: "Sold in sets of 6 or 12",
    gfAvailable: false,
    imageKey: "cranberry"
    allergens: ""
  },

  /* ======================================================
     COOKIES — 8 items
     ====================================================== */
  "cookie-biscoff-stuff": {
    name: "Biscoff Stuff",
    category: "cookie",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "biscoff"
    allergens: ""
  },
  "cookie-blue-monster": {
    name: "Blue Cookie Monster",
    category: "cookie",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "blue"
    allergens: ""
  },
  "cookie-ube": {
    name: "Ube",
    category: "cookie",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "ube"
    allergens: ""
  },
  "cookie-party-sprinkles": {
    name: "Party Sprinkles",
    category: "cookie",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "sprinkle"
    allergens: ""
  },
  "cookie-toasted-smores": {
    name: "Toasted S'mores",
    category: "cookie",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "smores"
    allergens: ""
  },
  "cookie-chocolate-chip": {
    name: "Chocolate Chip",
    category: "cookie",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "chocolate"
    allergens: ""
  },
  "cookie-pumpkin-spice-latte": {
    name: "Pumpkin Spice Latte",
    category: "cookie",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "pumpkin"
    allergens: ""
  },
  "cookie-strawberry-crunch": {
    name: "Strawberry Crunch",
    category: "cookie",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "strawberry"
    allergens: ""
  },

  /* ======================================================
     CAKE POPS — 3 items
     ====================================================== */
  "cakepop-red-velvet": {
    name: "Red Velvet (White Chocolate)",
    category: "cakepop",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "redvelvet"
    allergens: ""
  },
  "cakepop-double-dough-biscoff": {
    name: "Double Dough Biscoff (White Chocolate)",
    category: "cakepop",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "dough"
    allergens: ""
  },
  "cakepop-chocolate-lovers": {
    name: "Chocolate Lovers (White Chocolate)",
    category: "cakepop",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "chocolate"
    allergens: ""
  },

  /* ======================================================
     CAKE JARS — 23 items (same as cupcakes minus Smores)
     ====================================================== */
  "cakejar-almond-crunch": {
    name: "Almond Crunch",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "almond"
    allergens: ""
  },
  "cakejar-chocolate-vanilla": {
    name: "Chocolate Vanilla",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "chocolate"
    allergens: ""
  },
  "cakejar-chocolate-candy-cane": {
    name: "Chocolate Candy Cane",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "candycane"
    allergens: ""
  },
  "cakejar-chocolate-mint": {
    name: "Chocolate Mint",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "mint"
    allergens: ""
  },
  "cakejar-chocolate-coffee": {
    name: "Chocolate Coffee",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "coffee"
    allergens: ""
  },
  "cakejar-chocolate-oreo-crunch": {
    name: "Chocolate Oreo Crunch",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "oreo"
    allergens: ""
  },
  "cakejar-chocolate-strawberry-crunch": {
    name: "Chocolate Strawberry Crunch",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "strawberry"
    allergens: ""
  },
  "cakejar-chocolate-peanut-butter": {
    name: "Chocolate Peanut Butter",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "peanut"
    allergens: ""
  },
  "cakejar-black-forest": {
    name: "Black Forest",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "blackforest"
    allergens: ""
  },
  "cakejar-black-chocolate": {
    name: "Black Chocolate",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "blackchoc"
    allergens: ""
  },
  "cakejar-vanilla-sprinkle": {
    name: "Vanilla Sprinkle",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "vanilla"
    allergens: ""
  },
  "cakejar-matcha": {
    name: "Matcha",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "matcha"
    allergens: ""
  },
  "cakejar-cardamom-rose": {
    name: "Cardamom Rose",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "rose"
    allergens: ""
  },
  "cakejar-mango-vanilla": {
    name: "Mango Vanilla",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "mango"
    allergens: ""
  },
  "cakejar-lemon-curd-vanilla": {
    name: "Lemon Curd Vanilla",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "lemon"
    allergens: ""
  },
  "cakejar-strawberry-crunch": {
    name: "Strawberry Crunch",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "strawberry"
    allergens: ""
  },
  "cakejar-vanilla-biscoff": {
    name: "Vanilla Biscoff",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "biscoff"
    allergens: ""
  },
  "cakejar-pandan-vanilla": {
    name: "Pandan Vanilla",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "pandan"
    allergens: ""
  },
  "cakejar-ube-vanilla": {
    name: "Ube Vanilla",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "ube"
    allergens: ""
  },
  "cakejar-milk-tea-boba": {
    name: "Milk Tea Boba",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "milktea"
    allergens: ""
  },
  "cakejar-red-velvet": {
    name: "Red Velvet",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "redvelvet"
    allergens: ""
  },
  "cakejar-vanilla-chocolate-swirl": {
    name: "Vanilla Chocolate Swirl",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "swirl"
    allergens: ""
  },
  "cakejar-pumpkin-cranberry-bliss": {
    name: "Pumpkin Cranberry Bliss",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "cranberry"
    allergens: ""
  }
};
