/* ============================================================
   Mix for a Mission — product-data.js
   A single product data object covering every item across all
   five menu categories. Keyed by "category-flavor-slug" (e.g.
   "cake-black-forest", "cupcake-black-forest") so the same
   flavor name across categories doesn't collide.

   Only the Black Forest Cake entry has real tagline/ingredients/
   sizeInfo data. All other entries have those fields as empty
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
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "almond"
  },
  "cake-chocolate-vanilla-buttercream": {
    name: "Chocolate Cake w/Vanilla Buttercream",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "chocolate"
  },
  "cake-chocolate-mint": {
    name: "Chocolate Mint Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "mint"
  },
  "cake-enchanted-tree-stump": {
    name: "Enchanted Tree Stump Cake (+$5)",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "chocolate"
  },
  "cake-chocolate-oreo-crunch": {
    name: "Chocolate Oreo Crunch Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "oreo"
  },
  "cake-chocolate-strawberry-crunch": {
    name: "Chocolate Strawberry Crunch Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "strawberry"
  },
  "cake-chocolate-caramel-peanut-butter": {
    name: "Chocolate Caramel Peanut Butter Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "peanut"
  },
  "cake-black-forest": {
    name: "Black Forest Cake",
    category: "cake",
    tagline: "Indulge in our exquisite Vegan Chocolate Cake, lovingly decorated to resemble a lush and enchanting forest. Savor every bite of this decadent dessert, made with only the finest plant-based ingredients.",
    ingredients: "Chocolate cake (enriched wheat flour, niacin, reduced iron, thiamine mononitrate, riboflavin, folic acid, organic sugar, water, organic soymilk, vitamin/mineral blend, sea salt, gellan gum, ascorbic acid, canola oil, alkalized cocoa, instant coffee powder, baking powder, baking soda, vanilla extract); buttercream (vegan butter, shortening, light corn syrup, sugar, water, instant coffee powder, vanilla extract, chocolate shards, meringue mushrooms made from aquafaba, organic sugar, vinegar, cocoa powder, and matcha powder).",
    sizeInfo: "3 layers, 7-inch diameter, serves 10–15",
    gfAvailable: true,
    imageKey: "blackforest"
  },
  "cake-black-chocolate-gold": {
    name: "Black Chocolate Cake w/gold highlights",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "blackchoc"
  },
  "cake-vanilla-sprinkles": {
    name: "Vanilla Sprinkles Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "vanilla"
  },
  "cake-vanilla-coconut": {
    name: "Vanilla Coconut Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "vanilla"
  },
  "cake-cardamom-rose": {
    name: "Cardamom Rose Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "rose"
  },
  "cake-mango-vanilla": {
    name: "Mango Vanilla Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "mango"
  },
  "cake-vanilla-spice": {
    name: "Vanilla Spice Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "vanilla"
  },
  "cake-vanilla-lemon-curd": {
    name: "Vanilla with Lemon Curd Filling",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "lemon"
  },
  "cake-strawberry-crunch": {
    name: "Strawberry Crunch Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "strawberry"
  },
  "cake-vanilla-biscoff": {
    name: "Vanilla Biscoff Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "biscoff"
  },
  "cake-pandan-vanilla": {
    name: "Pandan Vanilla Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "pandan"
  },
  "cake-ube-vanilla": {
    name: "Ube Vanilla Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "ube"
  },
  "cake-white-forest": {
    name: "White Forest Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "whiteforest"
  },
  "cake-gender-reveal-pink": {
    name: "Gender Reveal Cake (Pink)",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "strawberry"
  },
  "cake-gender-reveal-blue": {
    name: "Gender Reveal Cake (Blue)",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "blue"
  },
  "cake-red-velvet": {
    name: "Red Velvet Cake",
    category: "cake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "redvelvet"
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
  },
  "cupcake-chocolate-vanilla": {
    name: "Chocolate Vanilla",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "chocolate"
  },
  "cupcake-chocolate-candy-cane": {
    name: "Chocolate Candy Cane",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "candycane"
  },
  "cupcake-chocolate-mint": {
    name: "Chocolate Mint",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "mint"
  },
  "cupcake-chocolate-coffee": {
    name: "Chocolate Coffee",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "coffee"
  },
  "cupcake-chocolate-oreo-crunch": {
    name: "Chocolate Oreo Crunch",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "oreo"
  },
  "cupcake-chocolate-strawberry-crunch": {
    name: "Chocolate Strawberry Crunch",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "strawberry"
  },
  "cupcake-chocolate-peanut-butter": {
    name: "Chocolate Peanut Butter",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "peanut"
  },
  "cupcake-black-forest": {
    name: "Black Forest",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "blackforest"
  },
  "cupcake-black-chocolate": {
    name: "Black Chocolate",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "blackchoc"
  },
  "cupcake-toasted-smores": {
    name: "Toasted S'mores Cupcakes",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "smores"
  },
  "cupcake-vanilla-sprinkle": {
    name: "Vanilla Sprinkle",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "vanilla"
  },
  "cupcake-matcha": {
    name: "Matcha",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "matcha"
  },
  "cupcake-cardamom-rose": {
    name: "Cardamom Rose",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "rose"
  },
  "cupcake-mango-vanilla": {
    name: "Mango Vanilla",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "mango"
  },
  "cupcake-lemon-curd-vanilla": {
    name: "Lemon Curd Vanilla",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "lemon"
  },
  "cupcake-strawberry-crunch": {
    name: "Strawberry Crunch",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "strawberry"
  },
  "cupcake-vanilla-biscoff": {
    name: "Vanilla Biscoff",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "biscoff"
  },
  "cupcake-pandan-vanilla": {
    name: "Pandan Vanilla",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "pandan"
  },
  "cupcake-ube-vanilla": {
    name: "Ube Vanilla",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "ube"
  },
  "cupcake-milk-tea-boba": {
    name: "Milk Tea Boba",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "milktea"
  },
  "cupcake-red-velvet": {
    name: "Red Velvet",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "redvelvet"
  },
  "cupcake-vanilla-chocolate-swirl": {
    name: "Vanilla Chocolate Swirl",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "swirl"
  },
  "cupcake-pumpkin-cranberry-bliss": {
    name: "Pumpkin Cranberry Bliss",
    category: "cupcake",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "cranberry"
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
  },
  "cookie-blue-monster": {
    name: "Blue Cookie Monster",
    category: "cookie",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "blue"
  },
  "cookie-ube": {
    name: "Ube",
    category: "cookie",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "ube"
  },
  "cookie-party-sprinkles": {
    name: "Party Sprinkles",
    category: "cookie",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "sprinkle"
  },
  "cookie-toasted-smores": {
    name: "Toasted S'mores",
    category: "cookie",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "smores"
  },
  "cookie-chocolate-chip": {
    name: "Chocolate Chip",
    category: "cookie",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "chocolate"
  },
  "cookie-pumpkin-spice-latte": {
    name: "Pumpkin Spice Latte",
    category: "cookie",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "pumpkin"
  },
  "cookie-strawberry-crunch": {
    name: "Strawberry Crunch",
    category: "cookie",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "strawberry"
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
  },
  "cakepop-double-dough-biscoff": {
    name: "Double Dough Biscoff (White Chocolate)",
    category: "cakepop",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "dough"
  },
  "cakepop-chocolate-lovers": {
    name: "Chocolate Lovers (White Chocolate)",
    category: "cakepop",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "chocolate"
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
  },
  "cakejar-chocolate-vanilla": {
    name: "Chocolate Vanilla",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "chocolate"
  },
  "cakejar-chocolate-candy-cane": {
    name: "Chocolate Candy Cane",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "candycane"
  },
  "cakejar-chocolate-mint": {
    name: "Chocolate Mint",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "mint"
  },
  "cakejar-chocolate-coffee": {
    name: "Chocolate Coffee",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "coffee"
  },
  "cakejar-chocolate-oreo-crunch": {
    name: "Chocolate Oreo Crunch",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "oreo"
  },
  "cakejar-chocolate-strawberry-crunch": {
    name: "Chocolate Strawberry Crunch",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "strawberry"
  },
  "cakejar-chocolate-peanut-butter": {
    name: "Chocolate Peanut Butter",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "peanut"
  },
  "cakejar-black-forest": {
    name: "Black Forest",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "blackforest"
  },
  "cakejar-black-chocolate": {
    name: "Black Chocolate",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "blackchoc"
  },
  "cakejar-vanilla-sprinkle": {
    name: "Vanilla Sprinkle",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "vanilla"
  },
  "cakejar-matcha": {
    name: "Matcha",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "matcha"
  },
  "cakejar-cardamom-rose": {
    name: "Cardamom Rose",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "rose"
  },
  "cakejar-mango-vanilla": {
    name: "Mango Vanilla",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "mango"
  },
  "cakejar-lemon-curd-vanilla": {
    name: "Lemon Curd Vanilla",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "lemon"
  },
  "cakejar-strawberry-crunch": {
    name: "Strawberry Crunch",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "strawberry"
  },
  "cakejar-vanilla-biscoff": {
    name: "Vanilla Biscoff",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "biscoff"
  },
  "cakejar-pandan-vanilla": {
    name: "Pandan Vanilla",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "pandan"
  },
  "cakejar-ube-vanilla": {
    name: "Ube Vanilla",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "ube"
  },
  "cakejar-milk-tea-boba": {
    name: "Milk Tea Boba",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "milktea"
  },
  "cakejar-red-velvet": {
    name: "Red Velvet",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "redvelvet"
  },
  "cakejar-vanilla-chocolate-swirl": {
    name: "Vanilla Chocolate Swirl",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: true,
    imageKey: "swirl"
  },
  "cakejar-pumpkin-cranberry-bliss": {
    name: "Pumpkin Cranberry Bliss",
    category: "cakejar",
    tagline: "",
    ingredients: "",
    sizeInfo: "",
    gfAvailable: false,
    imageKey: "cranberry"
  }
};
