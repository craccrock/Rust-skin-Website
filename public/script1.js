var navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}
    window.addEventListener('scroll', () => { 
        const scrollable = 300 
        const scrolled = window.scrollY
        if (Math.ceil(scrolled >= scrollable)){
            navLinks.style.right = "-200px";
      }
      
      })


const userCardTemplate = document.querySelector("[data-user-template]")
const SearchInput = document.querySelector("[data-search]")
const form = document.querySelector("[form-form]");
const submitButton = form.querySelector('[type=Submit]');
let skins = []
const loadmore = document.querySelector('#loadmore');
const allSkinsButton = document.querySelector("[all-skins-button]")
const searchbutton = document.querySelector("[searchbutton]")
const Customizable = document.querySelector("[Customizable-skins]")
const Stockless = document.querySelector("[Stockless-skins]")
const GlowingSights = document.querySelector("[Glowing-Sights]")
const GlowingItems = document.querySelector("[Glowing-Items]")
const Misc = document.querySelector("[Random-Items]")
const AK47 = document.querySelector("[AK-47]")
const Bolties = document.querySelector("[Bolt-Action]")
const Boneclub = document.querySelector("[Bone-Club]")
const Boneknife = document.querySelector("[Bone-knife]")
const CombatKnife = document.querySelector("[Combat-Knife]")
const CrossBow = document.querySelector("[Cross-Bow]")
const SMG = document.querySelector("[S-M-G]")
const DB= document.querySelector("[D-B]")
const EOKA= document.querySelector("[EOKA]")
const Grenade= document.querySelector("[Grenade]")
const Bow = document.querySelector("[Bow]")
const L96 = document.querySelector("[Rifle-L96]")
const LR300 = document.querySelector("[LR-300]")
const LongSword= document.querySelector("[Long-sword]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const loader = document.querySelector('.loader')
const footer = document.querySelector("[footer-footer]")
const MP5A4 = document.querySelector("[MP5A4]")
const M249 = document.querySelector("[M249]")
const M39 = document.querySelector("[M39]")
const PUMPY = document.querySelector("[PUMPY]")
const PYTHON = document.querySelector("[PYTHON]")
const REVO = document.querySelector("[REVO]")
const TOMMY = document.querySelector("[TOMMY]")
const PIPE = document.querySelector("[PIPE]")
const WOODDOOR = document.querySelector("[WOODDOOR]")
const DOUBLEWOODDOOR = document.querySelector("[DOUBLEWOODDOOR]")
const SMALLBOX = document.querySelector("[SMALLBOX]")
const WATERP = document.querySelector("[WATERP]")
const VENDING = document.querySelector("[VENDING]")
const TABLE = document.querySelector("[TABLE]")
const SLEEPINGB = document.querySelector("[SLEEPINGB]")
const DOUBLEMETALDOOR = document.querySelector("[DOUBLEMETALDOOR]")
const METALDOOR = document.querySelector("[METALDOOR]")
const SAR = document.querySelector("[SAR]")
const SANDBAG = document.querySelector("[SANDBAG]")
const FURNACE = document.querySelector("[FURNACE]")
const FRIDGE = document.querySelector("[FRIDGE]")
const CONCRETE = document.querySelector("[CONCRETE]")
const ARMOUREDDOOR = document.querySelector("[ARMOUREDDOOR]")
const ARMOUREDDOUBLE= document.querySelector("[ARMOUREDDOUBLE]")
const BEARSKIN = document.querySelector("[BEARSKIN]")
const LARGEWOODBOX = document.querySelector("[LARGEWOODBOX]")
const BONEHELM= document.querySelector("[BONEHELM]")
const BUCKETHAT= document.querySelector("[BUCKETHAT]")
const BANDANA= document.querySelector("[BANDANA]")
const CAP = document.querySelector("[CAP]")
const BEANIE = document.querySelector("[BEANIE]")
const BOONIE = document.querySelector("[BOONIE]")
const BOOTS = document.querySelector("[BOOTS]")
const BURLAPHEAD = document.querySelector("[BURLAPHEAD]")
const BURLAPSHIRT= document.querySelector("[BURLAPSHIRT]")
const BURLAPSHOES= document.querySelector("[BURLAPSHOES]")
const BURLAPTROUSERS= document.querySelector("[BURLAPTROUSERS]")
const COFFEEHELM= document.querySelector("[COFFEEHELM]")
const HIDEBOOTS= document.querySelector("[HIDEBOOTS]")
const HIDEHALTER= document.querySelector("[HIDEHALTER]")
const HIDEPANTS= document.querySelector("[HIDEPANTS]")
const HIDEPONCHO= document.querySelector("[HIDEPONCHO]")
const HIDESKIRT= document.querySelector("[HIDESKIRT]")
const HIDEVEST= document.querySelector("[HIDEVEST]")
const HOODIE= document.querySelector("[HOODIE]")
const BALACLAVA= document.querySelector("[BALACLAVA]")
const JACKET= document.querySelector("[JACKET]")
const LEATHERGLOVE= document.querySelector("[LEATHERGLOVE]")
const LONGSLEEVE= document.querySelector("[LONGSLEEVE]")
const METALCHESTPLATE= document.querySelector("[METALCHESTPLATE]")
const METALFACEMASK = document.querySelector("[METALFACEMASK]")
const MINERSHAT= document.querySelector("[MINERSHAT]")
const PANTS= document.querySelector("[PANTS]")
const RIOTHELM= document.querySelector("[RIOTHELM]")
const ROADSIGNVEST= document.querySelector("[ROADSIGNVEST]")
const ROADSIGNKILT= document.querySelector("[ROADSIGNKILT]")
const ROADSIGNGLOVES = document.querySelector("[ROADSIGNGLOVES]")
const SHIRT = document.querySelector("[SHIRT]")
const SHORTS = document.querySelector("[SHORTS]")
const SNOWJACKET = document.querySelector("[SNOWJACKET]")
const TSHIRT = document.querySelector("[TSHIRT]")
const TANKTOP = document.querySelector("[TANKTOP]")
const REACTIVETARGET = document.querySelector("[REACTIVETARGET]")
const RUG= document.querySelector("[RUG]")















function init() {
  setTimeout(() => {
    setTimeout(() => (loader.style.opacity = 0), 100  );
    loader.style.display = 'none';

    userCardContainer.style.display = 'grid';
    setTimeout(() => (userCardContainer.style.opacity = 1), 50  );
    setTimeout(() => (footer.style.display = 'flex'), 50);
  }, 1750);
  
    
}

init()

const bats = document.querySelector("[THREE-BARS]")

document.addEventListener("click", e => {
  const isDropdownButton = e.target.matches("[data-dropdown-button]")
  if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

  let currentDropdown
  if (isDropdownButton) {
    currentDropdown = e.target.closest("[data-dropdown]")
    currentDropdown.classList.toggle("active")
  }

  document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
    if (dropdown === currentDropdown) return
    dropdown.classList.remove("active")
  })
})





async function price2() { 
  const response2 = await fetch("/route2");
  const data1 = await response2.json();
  console.log(data1.documents);

  for (let i = 0; i <= data1.documents.length - 1; i++) {

    const card = userCardTemplate.content.cloneNode(true).children[0]
    const price = card.querySelector(`#price`)
    const name = card.querySelector(`#name`)
    const a1 = card.querySelector(`#link`)
    const img = card.querySelector(`#skinimage`)



    name.textContent = data1.documents[i].value.market_name;
    price.textContent = "$ " + data1.documents[i].value.prices.latest
    a1.href =
      "https://steamcommunity.com/market/listings/252490/" + data1.documents[i].value.market_name;
    img.src = data1.documents[i].value.image;
    userCardContainer.append(card)
    skins.push({name: data1.documents[i].value.market_name, 
      price: data1.documents[i].value.prices.latest,
      link: "https://steamcommunity.com/market/listings/252490/" + data1.documents[i].value.market_name, 
      image: data1.documents[i].value.image, element: card})
  }
}





  let currentItems = 100;
window.addEventListener('scroll', () => { 
  const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
  const scrollable = document.documentElement.scrollHeight - window.innerHeight - 300; 
  const scrolled = window.scrollY
  if (Math.ceil(scrolled >= scrollable)){

  for (let i = currentItems; i < currentItems + 100; i++) { 
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
    }
  }
  currentItems += 100;
}

})


allSkinsButton.addEventListener("click", () => {
  form.reset()
  form.value = "";
  form.submit()
})

Customizable.addEventListener("click", () => {
    const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
    form.addEventListener('submit', () => {
      for (let i = 0; i < 3379; i++) { 
        if (elementList[i]) {
          elementList[i].style.display = 'flex';
      }
    }
      skins.forEach(skin => {
      const isVisible = skin.name.includes("Two Sided Ornate Hanging Sign") 
      || skin.name.includes("Two Sided Town Sign Post") 
      || skin.name.includes("XXL Picture Frame") 
      || skin.name.includes("XL Picture Frame") 
      || skin.name.includes("Two Sided Hanging Sign") 
      || skin.name.includes("Industrial Lights") 
      || skin.name.includes("Carvable Pumpkin")  
      || skin.name.includes("Neon Sign Pack") 
      || skin.name.includes("Deluxe Christmas Lights") 
      || skin.name.includes("Single Sign Post")  
      || skin.name.includes("Double Sign Post")  
      || skin.name.includes("Landscape Picture Frame") 
      || skin.name.includes("Large Banner on pole")
      || skin.name.includes("Portrait Picture Frame")
      || skin.name.includes("Tall Picture Frame")
      || skin.name.includes("Large Banner Hanging")
      || skin.name.includes("One Sided Town Sign Post")
      || skin.name.includes("Industrial Lights")
      // skin.element.classList.toggle("show", isVisible)
      skin.element.classList.toggle("hide", !isVisible)
      })
    })
})



Stockless.addEventListener("click", () => {
  const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
  form.addEventListener('submit', () => {
    for (let i = 0; i < 3379; i++) { 
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
    }
  }
    skins.forEach(skin => {
    const isVisible = skin.name.includes("OPS SAR") 
    || skin.name.includes("Jungle Fighter LR-300 Stockless") 
    || skin.name.includes("Cardboard AR") 
    || skin.name.includes("Monument Memories AR") 
    || skin.name.includes("Rainbow AR") 
    || skin.name.includes("Cobalt Security AR") 
    || skin.name.includes("Imp SAR") 
    || skin.name.includes("Retrowave SAR") 
    || skin.name.includes("Retrowave AR") 
    || skin.name.includes("Porcelain AR") 
    || skin.name.includes("Shattered Mirror AR") 
    || skin.name.includes("Bombing Thompson") 
    || skin.name.includes("Tempered Thompson") 
    || skin.name.includes("Lost Soul AR") 
    || skin.name.includes("Bamboo SAR") 
    || skin.name.includes("Weather Thompson") 
    || skin.name.includes("Workcart AR") 
    || skin.name.includes("Blackout Thompson") 
    || skin.name.includes("Ox ARn") 
    || skin.name.includes("Chocolate Hunter Thompson") 
    || skin.name.includes("Safari AR") 
    || skin.name.includes("Cold Hunter Thompson") 
    || skin.name.includes("No Mercy Thompson") 
    || skin.name.includes("Lightweight AR") 
    || skin.name.includes("Zenlabs AR") 
    || skin.name.includes("Submarine SAR") 
    || skin.name.includes("SToxic Wolf Thompson") 
    || skin.name.includes("Comics AR") 
    || skin.name.includes("Desert Raiders Thompson") 
    || skin.name.includes("Pixel SAR") 
    || skin.name.includes("Fish AK") 
    || skin.name.includes("Slime Monster Tommy") 
    || skin.name.includes("Ghost Halloween AR") 
    || skin.name.includes("Festive Fighter AR") 
    || skin.name.includes("Huntsman AK47") 
    || skin.name.includes("Polymer AK47") 
    || skin.name.includes("Gearlord AK47") 
    || skin.name.includes("Battle-Scarred AKS47") 
    || skin.name.includes("BullDozer AK47") 
    || skin.name.includes("Playmaker AK47") 
    || skin.name.includes("Mysterious Cult Thompson") 
    || skin.name.includes("Azul Thompson") 
    || skin.name.includes("Diesel SAR") 
    || skin.name.includes("Sunken Treasure AK") 
    // skin.element.classList.toggle("show", isVisible)
    skin.element.classList.toggle("hide", !isVisible)
    })
  })
})

GlowingSights.addEventListener("click", () => {
  const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
  form.addEventListener('submit', () => {
    for (let i = 0; i < 3379; i++) { 
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
    }
  }
    skins.forEach(skin => {
    const isVisible = skin.name.includes("Hot-tempered Revolver") 
    || skin.name.includes("Glory AK47") 
    || skin.name.includes("Alien Red") 
    || skin.name.includes("Glorious AK") 
    || skin.name.includes("Daemon Strike") 
    || skin.name.includes("Polymer Pump Shotgun") 
    || skin.name.includes("Golden Leaf SAP") 
    || skin.name.includes("Alien Relic SMG") 
    || skin.name.includes("Direct Threat SAP") 
    || skin.name.includes("Polymer SMG") 
    || skin.name.includes("Blacksmith's Pipe") 
    || skin.name.includes("Glory BAR") 
    || skin.name.includes("Polymer BAR") 
    || skin.name.includes("LCD Marine Sidearm") 
    || skin.name.includes("Glory SAR") 
    || skin.name.includes("Anubis Ak47") 
    || skin.name.includes("Valentine MP5") 
    || skin.name.includes("Frostfire Shotgun") 

    // skin.element.classList.toggle("show", isVisible)
    skin.element.classList.toggle("hide", !isVisible)
    })
  })
})

GlowingItems.addEventListener("click", () => {
  const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
  form.addEventListener('submit', () => {
    for (let i = 0; i < 3379; i++) { 
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
    }
  }
    skins.forEach(skin => {
    const isVisible = skin.name.includes("Neon Meds Storage") 
    || skin.name.includes("Neon Cactus Metal Door") 
    || skin.name.includes("Neon Gun Storage") 
    || skin.name.includes("Neon Food Storage") 
    || skin.name.includes("Neon Ore Storage") 
    || skin.name.includes("Neon Boom Storage") 
    || skin.name.includes("Neon Ammo Storage") 
    || skin.name.includes("Neon Frags Storage") 
    || skin.name.includes("Neon Sulfur Storage") 
    || skin.name.includes("Neon Wood Storage") 
    || skin.name.includes("Neon Armor Storage") 
    || skin.name.includes("Neon Stone Storage") 
    || skin.name.includes("Neon Clothes Storage") 
    || skin.name.includes("Glacial Visage Garage Door") 
    || skin.name.includes("Neon Drop Box Storage") 
    || skin.name.includes("Neon Charcoal Storage") 
    || skin.name.includes("Neon Tools Storage") 
    || skin.name.includes("Neon Comps Storage") 
    || skin.name.includes("Neon Elec Storage") 
    || skin.name.includes("Molten Visage Garage Door") 
    || skin.name.includes("Sheet Metal Door from Hell") 
    || skin.name.includes("Neon Pumpkin Metal Double Door") 
    || skin.name.includes("Molten Visage Small Box") 
    || skin.name.includes("Gingerbread Double Door") 
    || skin.name.includes("Gingerbread Candy Shop") 
    || skin.name.includes("Festive Stickered Storage Box") 
    || skin.name.includes("Hellgate Armored Door") 
    || skin.name.includes("Tiger Garage Door") 
    || skin.name.includes("Danger Zone Wooden Door") 
    || skin.name.includes("Valentine's Box") 
    || skin.name.includes("Cargo Heli Armored Door") 
    || skin.name.includes("Ruin Garage Door") 
    || skin.name.includes("Toxic Hammer") 
    || skin.name.includes("Art Deco Door") 
    || skin.name.includes("Evil Heart Door") 
    || skin.name.includes("Immortal Angel Bag") 
    || skin.name.includes("Christmas Tree Garage Door") 
    || skin.name.includes("Cargo Heli Storage") 
    || skin.name.includes("Molten Visage Armored Door") 
    || skin.name.includes("Creepy Bandana") 
    || skin.name.includes("uMod Fundraiser Garage Door") 
    || skin.name.includes("Stickered Toy Car") 
    || skin.name.includes("Ice Cream Freezer") 
    || skin.name.includes("Large Stickered Toy Car") 
    || skin.name.includes("Toxic Garage Door") 
    || skin.name.includes("Molten Visage Metal Door") 
    || skin.name.includes("Garage Door from Hell") 
    || skin.name.includes("Glacial Visage Large Box") 
    || skin.name.includes("Rusteratu Hoodie") 
    || skin.name.includes("SAR from Hell") 
    || skin.name.includes("Chained Spirits AR") 
    || skin.name.includes("Crypt Armored Double Door") 
    || skin.name.includes("Death Mask") 
    || skin.name.includes("Jinx Wooden Door") 
    || skin.name.includes("Neon Pumpkin Garage Door") 
    || skin.name.includes("Little Nightmare") 
    || skin.name.includes("Neon Sign Pack") 
    || skin.name.includes("Christmas Bunker Double Door") 
    || skin.name.includes("Advent Calendar Garage Door") 
    || skin.name.includes("Dead Moroz") 
    || skin.name.includes("Glacial Visage Small Box") 
    || skin.name.includes("Corrupted Garage Door") 
    || skin.name.includes("Glacial Visage Metal Door") 
    || skin.name.includes("Neon Scrap Storage") 
    || skin.name.includes("Concert Curtains") 
    || skin.name.includes("Molten Visage Large Box") 
    || skin.name.includes("Metal Zombie Helmet") 
    || skin.name.includes("Metal Zombie Kilt") 
    || skin.name.includes("Metal Zombie Vest") 
    || skin.name.includes("Double Door from Hell") 
    || skin.name.includes("Toxic Hazard Box") 
    || skin.name.includes("Night Sky Hammer") 
    || skin.name.includes("The Growth Of Evil") 
    || skin.name.includes("Spooky Large Box") 
    || skin.name.includes("Jack O Lantern - AK47") 
    || skin.name.includes("Hunting Bow from Hell") 
    || skin.name.includes("Cobalt Cola Fridge") 
    || skin.name.includes("Furnace from Hell") 
    || skin.name.includes("Combat Knife from Hell") 
    || skin.name.includes("Mystic Hammer") 
    || skin.name.includes("Box from Hell") 
    || skin.name.includes("Toxic Door") 
    || skin.name.includes("Midnight Dream") 
    || skin.name.includes("Scary Helmet") 
    || skin.name.includes("Nightmare AK47") 
    || skin.name.includes("House of Horror") 
    || skin.name.includes("Hell-o-ween Wooden Door") 
    || skin.name.includes("X-RAY AK47") 
    || skin.name.includes("Reactor Room 3 of 10") 
    || skin.name.includes("AK-47 From Hell") 
    || skin.name.includes("Anubis Ak47") 
    || skin.name.includes("Christmas Furnace") 
    || skin.name.includes("Polymer SMG") 
    || skin.name.includes("Scudpunk Hoodie") 
    || skin.name.includes("Glory AK47") 
    || skin.name.includes("Glory BAR") 
    || skin.name.includes("Glorious AK") 
    || skin.name.includes("Trick Or Treat Door") 
    || skin.name.includes("Rotten Scalp") 
    || skin.name.includes("Aircraft Parts Fridge") 
    || skin.name.includes("Alien Red") 
    || skin.name.includes("Heat Double Shotgun") 
    || skin.name.includes("Fire and Brimstone Grenade") 
    || skin.name.includes("Polymer BAR") 
    || skin.name.includes("Scorched Hammer") 
    || skin.name.includes("Alien Relic SMG") 
    || skin.name.includes("Christmas Tree Door") 

    // skin.element.classList.toggle("show", isVisible)
    skin.element.classList.toggle("hide", !isVisible)
    })
  })
})

Misc.addEventListener("click", () => {
  const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
  form.addEventListener('submit', () => {
    for (let i = 0; i < 3379; i++) { 
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
    }
  }
    skins.forEach(skin => {
    const isVisible = skin.name.includes("Strobe Light") 
    || skin.name.includes("Sky Lantern") 
    || skin.name.includes("Small Fireworks Pack") 
    || skin.name.includes("Spooky Speaker") 
    || skin.name.includes("Snow Machine") 
    || skin.name.includes("Skull Trophy") 
    || skin.name.includes("Skull Spikes") 
    || skin.name.includes("Rustigé Egg - Blue") 
    || skin.name.includes("Rustigé Egg - Green") 
    || skin.name.includes("Rustigé Egg - Ivory") 
    || skin.name.includes("Rustigé Egg - Purple") 
    || skin.name.includes("Rustigé Egg - Red") 
    || skin.name.includes("Large Fireworks Pack") 
    || skin.name.includes("Giant Candy Decor") 
    || skin.name.includes("Fogger-3000") 
    || skin.name.includes("Cursed Cauldron") 
    || skin.name.includes("Black Acoustic Guitar") 
    || skin.name.includes("Army Acoustic Guitar") 
    || skin.name.includes("Addicted Guitarist") 
    || skin.name.includes("Large Candle Set")
    || skin.name.includes("New Year Gong")
    || skin.name.includes("Neon Sign Pack")
    || skin.name.includes("No War Guitar")


    // skin.element.classList.toggle("show", isVisible)
    skin.element.classList.toggle("hide", !isVisible)
    })
  })
})

AK47.addEventListener("click", () => {
  const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
  form.addEventListener('submit', () => {
    for (let i = 0; i < 3379; i++) { 
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
    }
  }
    skins.forEach(skin => {
    const isVisible = skin.name.includes("Velocity AR") 
    || skin.name.includes("Noir AR") 
    || skin.name.includes("Kevlar AR") 
    || skin.name.includes("Dragon Rage AR") 
    || skin.name.includes("Zebra AR") 
    || skin.name.includes("Berserker AR") 
    || skin.name.includes("Bunny Blast AR") 
    || skin.name.includes("Black Gold AR") 
    || skin.name.includes("Skullkiller AR") 
    || skin.name.includes("Love Mashine AR") 
    || skin.name.includes("Tiger AR") 
    || skin.name.includes("Neo Soul AR") 
    || skin.name.includes("Festive Fighter AR") 
    || skin.name.includes("Toy AR") 
    || skin.name.includes("Wasteland AR") 
    || skin.name.includes("Ghost Halloween AR") 
    || skin.name.includes("Quarantine AR") 
    || skin.name.includes("Corrupted AR") 
    || skin.name.includes("Fish AK") 
    || skin.name.includes("Shadowstrike AR")
    || skin.name.includes("Necro Machine")
    || skin.name.includes("Frosty AR")
    || skin.name.includes("Zenlabs AR")
    || skin.name.includes("Shark AR")
    || skin.name.includes("War-Torn AR") 
    || skin.name.includes("Comics AR") 
    || skin.name.includes("Atomic AR") 
    || skin.name.includes("Lightweight AR ") 
    || skin.name.includes("RUIN AR") 
    || skin.name.includes("Bombing AR") 
    || skin.name.includes("Toxic Wolf AR") 
    || skin.name.includes("Ox AR") 
    || skin.name.includes("Workcart AR") 
    || skin.name.includes("Light Prism AR") 
    || skin.name.includes("Lost Soul AR") 
    || skin.name.includes("Egg Hunter AR") 
    || skin.name.includes("Safari AR") 
    || skin.name.includes("Shattered Mirror AR") 
    || skin.name.includes("Trust In Rust 3 AR") 
    || skin.name.includes("Evil Snowman AR") 
    || skin.name.includes("Porcelain AR") 
    || skin.name.includes("Wild Spirit AR") 
    || skin.name.includes("Capitan's AR")
    || skin.name.includes("PulsAR")
    || skin.name.includes("Underworld AR")
    || skin.name.includes("Basebreaker AR")
    || skin.name.includes("Chained Spirits AR")
    || skin.name.includes("Candy Hunter AR") 
    || skin.name.includes("Retrowave AR") 
    || skin.name.includes("Neanderthal AR") 
    || skin.name.includes("Blackout AR") 
    || skin.name.includes("Sweet Poison AR") 
    || skin.name.includes("Raptor AR") 
    || skin.name.includes("Cardboard AR") 
    || skin.name.includes("Monument Memories AR") 
    || skin.name.includes("Dreamland AR") 
    || skin.name.includes("Desert Hawk AK47") 
    || skin.name.includes("Memories AR") 
    || skin.name.includes("Heartbreaker AR") 
    || skin.name.includes("Training AR") 
    || skin.name.includes("Rainbow AR") 
    || skin.name.includes("Doodle AK47") 
    || skin.name.includes("Rainbow Pony AR") 
    || skin.name.includes("Cobalt Security AR") 
    || skin.name.includes("Poseidon - AK47") 
    || skin.name.includes("Jack O Lantern - AK47")
    || skin.name.includes("Sticker Pack AK47")
    || skin.name.includes("Punkish AK47")
    || skin.name.includes("Sunken Treasure AK")
    || skin.name.includes("Apocalyptic Knight AK")
    || skin.name.includes("BullDozer AK47") 
    || skin.name.includes("Playmaker AK47") 
    || skin.name.includes("Royal AK47") 
    || skin.name.includes("Azul AK47") 
    || skin.name.includes("No Mercy AK47") 
    || skin.name.includes("Dynasty AK47") 
    || skin.name.includes("Rebellion Assault Rifle") 
    || skin.name.includes("Troll Daddy AK") 
    || skin.name.includes("Hell's Dogs") 
    || skin.name.includes("Gingerbread AK") 
    || skin.name.includes("Cold Hunter AK") 
    || skin.name.includes("Huntsman AK47") 
    || skin.name.includes("Polymer AK47") 
    || skin.name.includes("T-Bone AK47") 
    || skin.name.includes("Trophy Pirate AK47") 
    || skin.name.includes("Gold Rush AK") 
    || skin.name.includes("Beast of Industry") 
    || skin.name.includes("Gearlord AK47") 
    || skin.name.includes("Phantom AK")
    || skin.name.includes("Nightmare AK47")
    || skin.name.includes("Scarecrow AK47")
    || skin.name.includes("Midnight Dream")
    || skin.name.includes("Etherya AK47") 
    || skin.name.includes("Last Phoenix") 
    || skin.name.includes("Marrakesh") 
    || skin.name.includes("REX") 
    || skin.name.includes("Green Dragon AK47") 
    || skin.name.includes("Demonic AK47") 
    || skin.name.includes("AK Royale") 
    || skin.name.includes("AK-47 Victoria") 
    || skin.name.includes("Brass Lion") 
    || skin.name.includes("Scorpion AK47") 
    || skin.name.includes("Smolder") 
    || skin.name.includes("Battle Scarred AK47") 
    || skin.name.includes("Caution AK47") 
    || skin.name.includes("Mystic AK47") 
    || skin.name.includes("X-RAY AK47") 
    || skin.name.includes("Urban Ice AK47") 
    || skin.name.includes("Crypt of Death AK47") 
    || skin.name.includes("Rumble AK47") 
    || skin.name.includes("King of the Jungle AK47")
    || skin.name.includes("Mandrill")
    || skin.name.includes("Talon AK47")
    || skin.name.includes("Death in Spades AK47")
    || skin.name.includes("Anubis Ak47") 
    || skin.name.includes("Golden Drake AK47") 
    || skin.name.includes("Scrapper AK47") 
    || skin.name.includes("AK-47 From Hell") 
    || skin.name.includes("Chivalry AK47") 
    || skin.name.includes("Piranha AK47") 
    || skin.name.includes("Cobra") 
    || skin.name.includes("Wyrm Rifle") 
    || skin.name.includes("Santa Muerte") 
    || skin.name.includes("Glorious AK") 
    || skin.name.includes("Panther AK47") 
    || skin.name.includes("Conquerer AK47") 
    || skin.name.includes("The Reptile") 
    || skin.name.includes("Betty Lou AK47") 
    || skin.name.includes("The Beast Of The East") 
    || skin.name.includes("Dead Pirate Rifle") 
    || skin.name.includes("Night Howler AK47") 
    || skin.name.includes("War Machine AK47") 
    || skin.name.includes("The Beast AK47")
    || skin.name.includes("Diesel AK47")
    || skin.name.includes("Soul Taker AK47")
    || skin.name.includes("Sandstorm AK47")
    || skin.name.includes("Farseer AK47") 
    || skin.name.includes("Jaws AK47") 
    || skin.name.includes("Checkpoint AK47") 
    || skin.name.includes("Lonewolf AK47 - Blue") 
    || skin.name.includes("Doombringer AK47") 
    || skin.name.includes("Rabble Rouser AK47") 
    || skin.name.includes("Cartagena AK47") 
    || skin.name.includes("Epidemic AK47") 
    || skin.name.includes("Frost Wolf") 
    || skin.name.includes("Fate Destroyer") 
    || skin.name.includes("Glory AK47") 
    || skin.name.includes("Retro Car Parts AK47") 
    || skin.name.includes("Aircraft Parts AK47") 
    || skin.name.includes("Dark Flames") 
    || skin.name.includes("Claw AK47") 
    || skin.name.includes("Alien Red") 
    || skin.name.includes("Agony Yellow") 
    || skin.name.includes("Digital Camo AK47") 
    || skin.name.includes("Military Camo AK47")
    || skin.name.includes("Tempered AK47")
    || skin.name.includes("Battle-Scarred AKS47")
    || skin.name.includes("Rustpunk AK47")
    || skin.name.includes("Crimson King")
    // skin.element.classList.toggle("show", isVisible)
    skin.element.classList.toggle("hide", !isVisible)
    })
  })
})

Bolties.addEventListener("click", () => {
  const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
  form.addEventListener('submit', () => {
    for (let i = 0; i < 3379; i++) { 
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
    }
  }
    skins.forEach(skin => {
    const isVisible = skin.name.includes("Poseidon Bolt Rifle") 
    || skin.name.includes("Cold Hunter BAR") 
    || skin.name.includes("Tempered BAR") 
    || skin.name.includes("Blackout BAR") 
    || skin.name.includes("No Mercy Bolt Rifle") 
    || skin.name.includes("Beauty Kills") 
    || skin.name.includes("Granny's Bolt") 
    || skin.name.includes("Shark Rifle") 
    || skin.name.includes("Glory Rifle") 
    || skin.name.includes("Azul Bolt Rifle") 
    || skin.name.includes("Caution Bolt Rifle") 
    || skin.name.includes("Apocalyptic Knight Rifle") 
    || skin.name.includes("Bolt From Hell") 
    || skin.name.includes("Survivor BAR") 
    || skin.name.includes("Steel and Brass BAR") 
    || skin.name.includes("Sandwar BAR") 
    || skin.name.includes("Glory BAR") 
    || skin.name.includes("Smuggler's BAR") 
    || skin.name.includes("Hunter's Bolt") 
    || skin.name.includes("Tundra Bolt Rifle")
    || skin.name.includes("Rustpunk Rifle ")
    || skin.name.includes("Army Bolt Rifle")
    || skin.name.includes("Polymer BAR")
    || skin.name.includes("Great War Service Rifle")
    || skin.name.includes("Deadly Rose BAR")
    || skin.name.includes("Ghost Bolt Rifle")

   
    // skin.element.classList.toggle("show", isVisible)
    skin.element.classList.toggle("hide", !isVisible)
    })
  })
})

Boneclub.addEventListener("click", () => {
  const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
  form.addEventListener('submit', () => {
    for (let i = 0; i < 3379; i++) { 
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
    }
  }
    skins.forEach(skin => {
    const isVisible = skin.name.includes("Maracas Bone Club") 
    || skin.name.includes("Little Friend") 
    || skin.name.includes("Broccoli Club") 
    || skin.name.includes("Little Nightmare") 
    || skin.name.includes("Ice Cream Club") 
    || skin.name.includes("Bone Scepter") 
    || skin.name.includes("Carved Club") 
    || skin.name.includes("Sacrificial Club") 
    // skin.element.classList.toggle("show", isVisible)
    skin.element.classList.toggle("hide", !isVisible)
    })
  })
})


Boneknife.addEventListener("click", () => {
  const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
  form.addEventListener('submit', () => {
    for (let i = 0; i < 3379; i++) { 
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
    }
  }
    skins.forEach(skin => {
    const isVisible = skin.name.includes("Rebar Knife") 
    || skin.name.includes("Carrot Knife") 
    || skin.name.includes("Flesh Knife") 
    || skin.name.includes("Sacrificial Knife") 
    || skin.name.includes("Studded Bone Knife") 
    || skin.name.includes("Paititi Bone Knife") 
    || skin.name.includes("Etched Edge Bone Knife") 
     // skin.element.classList.toggle("show", isVisible)
    skin.element.classList.toggle("hide", !isVisible)
    })
  })
})

CombatKnife.addEventListener("click", () => {
  const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
  form.addEventListener('submit', () => {
    for (let i = 0; i < 3379; i++) { 
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
    }
  }
    skins.forEach(skin => {
    const isVisible = skin.name.includes("Emerald Knife") 
    || skin.name.includes("Tea Ceremony Knife") 
    || skin.name.includes("Toothed Knife") 
    || skin.name.includes("Dread Lord Knife") 
    || skin.name.includes("Razor Knife") 
    || skin.name.includes("Glory Knife") 
    || skin.name.includes("Carbon Elite") 
    || skin.name.includes("Emperor's Knife") 
    || skin.name.includes("Thug Knife") 
    || skin.name.includes("Combat Knife from Hell") 
    || skin.name.includes("Nuke Combat Knife") 
    || skin.name.includes("Bronze Raven Knife") 
    || skin.name.includes("Phantom Knife") 
    // skin.element.classList.toggle("show", isVisible)
    skin.element.classList.toggle("hide", !isVisible)
    })
  })
})

CrossBow.addEventListener("click", () => {
  const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
  form.addEventListener('submit', () => {
    for (let i = 0; i < 3379; i++) { 
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
    }
  }
    skins.forEach(skin => {
    const isVisible = skin.name.includes("HazardCross") 
    || skin.name.includes("Engraved Crossbow") 
    || skin.name.includes("Chrome Crossbow") 
    || skin.name.includes("Doomwing Crossbow") 
    || skin.name.includes("Tank Crossbow") 
    || skin.name.includes("Ancient Artifact Crossbow") 
    || skin.name.includes("POP Crossbow") 
    || skin.name.includes("Northwind Crossbow") 
    || skin.name.includes("Mad Crossbow") 
    || skin.name.includes("Hawk Crossbow") 
    || skin.name.includes("Phoenix Crossbow") 
    || skin.name.includes("Dead Man Crossbow") 
    || skin.name.includes("Primal Crossbow") 
    || skin.name.includes("Gurkha Crossbow") 
    || skin.name.includes("Marauder") 
    || skin.name.includes("Lone Wulf Crossbow") 
    || skin.name.includes("Ronin") 
    || skin.name.includes("Gold Spirit Crossbow") 
    || skin.name.includes("Tribal Crossbow") 
    || skin.name.includes("Deep Water Crossbow")
    || skin.name.includes("Victoria Crossbow")
    || skin.name.includes("Huntsman Crossbow")
    || skin.name.includes("Makeshift Crossbow")
    || skin.name.includes("Holy Trapper Crossbow")
    || skin.name.includes("Scrapper Crossbow")
    || skin.name.includes("Caution Crossbow")

    || skin.name.includes("Tooth Monster Crossbow") 
    || skin.name.includes("Trophy Pirate Crossbow") 
    || skin.name.includes("Heart Shot") 
    || skin.name.includes("Hunter's crossbow") 
    || skin.name.includes("Metal Lord Crossbow") 
    || skin.name.includes("Cold Hunter Crossbow") 
    || skin.name.includes("Vampire Crossbow") 
    || skin.name.includes("Tiki Crossbow") 
    || skin.name.includes("Mad Rider Crossbow") 
    || skin.name.includes("Cloud Shot Crossbow") 
    || skin.name.includes("Rainbow Pony Crossbow") 
    || skin.name.includes("Jade Crossbow") 
    || skin.name.includes("Xmas Candy Crossbow") 
    || skin.name.includes("Phantom Crossbow") 
    || skin.name.includes("Abyss Crossbow") 
    || skin.name.includes("Retrowave Crossbow") 
    || skin.name.includes("Blackout Crossbow") 
    || skin.name.includes("One Shot Crossbow") 
    || skin.name.includes("Porcelain Crossbow")
    || skin.name.includes("Lunar Ox Crossbow")
    || skin.name.includes("No Mercy Crossbow")
    || skin.name.includes("Lightweight Crossbow")
    || skin.name.includes("Toxic Wolf Crossbow")
    || skin.name.includes("Tempered Crossbow")
    || skin.name.includes("Shadowstrike Crossbow")

    || skin.name.includes("Military Crossbow") 
    || skin.name.includes("Pixel Crossbow") 
    || skin.name.includes("Heart Strings Crossbow") 
    || skin.name.includes("Cargo Heli Crossbow") 
    || skin.name.includes("Quarantine Crossbow") 
    || skin.name.includes("Notebook Crossbow") 
    // skin.element.classList.toggle("show", isVisible)
    skin.element.classList.toggle("hide", !isVisible)
    })
  })
})


SMG.addEventListener("click", () => {
  const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
  form.addEventListener('submit', () => {
    for (let i = 0; i < 3379; i++) { 
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
    }
  }
    skins.forEach(skin => {
    const isVisible = skin.name.includes("smg") 
    || skin.name.includes("SMG") 
    || skin.name.includes("Pathogenesis") 
    || skin.name.includes("tRUSTy Friend") 
    // skin.element.classList.toggle("show", isVisible)
    skin.element.classList.toggle("hide", !isVisible)
    })
  })
})

DB.addEventListener("click", () => {
  const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
  form.addEventListener('submit', () => {
    for (let i = 0; i < 3379; i++) { 
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
    }
  }
    skins.forEach(skin => {
    const isVisible = skin.name.includes("DB") 
    || skin.name.includes("DBS") 
    || skin.name.includes("Toy Blaster") 
    || skin.name.includes("Double Oil Pipe")
    || skin.name.includes("СМЭРТЬ") 
    || skin.name.includes("Santa's Blaster")
    || skin.name.includes("Hippie Blaster")
    || skin.name.includes("Raider's Shotgun") 
    || skin.name.includes("Blunderbuss")
    || skin.name.includes("Santa's Boomstick")
    || skin.name.includes("Military Boomstick") 
    || skin.name.includes("Heat Double Shotgun")
    || skin.name.includes("Last Blast Twins")
    // skin.element.classList.toggle("show", isVisible)
    skin.element.classList.toggle("hide", !isVisible)
    })
  })
})

EOKA.addEventListener("click", () => {
  const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
  form.addEventListener('submit', () => {
    for (let i = 0; i < 3379; i++) { 
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
    }
  }
    skins.forEach(skin => {
    const isVisible = skin.name.includes("Pixel Eoka") 
    || skin.name.includes("Cucumber Eoka") 
    || skin.name.includes("Sweet Surprise") 
    || skin.name.includes("Firecracker Eoka")
    || skin.name.includes("Flare Eoka") 
    || skin.name.includes("Last Blast")
    || skin.name.includes("Flintlock")
    || skin.name.includes("Banana Eoka") 
    || skin.name.includes("Primal Gun")
    || skin.name.includes("Birch Eoka")
    || skin.name.includes("Nordic Relic")
    || skin.name.includes("Japanese Tanegashima") 
    || skin.name.includes("Gurkha Eoka")
    // skin.element.classList.toggle("show", isVisible)
    skin.element.classList.toggle("hide", !isVisible)
    })
  })
})

Grenade.addEventListener("click", () => {
  const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
  form.addEventListener('submit', () => {
    for (let i = 0; i < 3379; i++) { 
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
    }
  }
    skins.forEach(skin => {
    const isVisible = skin.name.includes("Grenade") 

    // skin.element.classList.toggle("show", isVisible)
    skin.element.classList.toggle("hide", !isVisible)
    })
  })
})


Bow.addEventListener("click", () => {
  const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
  form.addEventListener('submit', () => {
    for (let i = 0; i < 3379; i++) { 
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
    }
  }
    skins.forEach(skin => {
    const isVisible = skin.name.includes("Headhunter Bow") 
    || skin.name.includes("Heart Hunter Bow") 
    || skin.name.includes("No Mercy Bow") 
    || skin.name.includes("Star Hunting Bow")
    || skin.name.includes("Comics Bow") 
    || skin.name.includes("Shadowstrike Bow")
    || skin.name.includes("Fish Bow")
    || skin.name.includes("Tempered Bow") 
    || skin.name.includes("Obsidian Bow")
    || skin.name.includes("Cold Hunter Bow")
    || skin.name.includes("Metal Waves Bow")
    || skin.name.includes("Lightweight Bow") 
    || skin.name.includes("Rainbow Pony Hunting Bow")
    || skin.name.includes("Totem Bow")
    || skin.name.includes("Heart Strings Bow") 
    || skin.name.includes("Nuke Bow") 
    || skin.name.includes("Pharaoh's Bow")
    || skin.name.includes("Tribe Hunting Bow") 
    || skin.name.includes("Venomous Bow")
    || skin.name.includes("Blackout Bow")
    || skin.name.includes("Retrowave Bow") 
    || skin.name.includes("Dragon Bow")
    || skin.name.includes("Rising Moon Bow")
    || skin.name.includes("Jade Bow")
    || skin.name.includes("Heavy Machinery Bow") 
    || skin.name.includes("Abyss Bow")
    || skin.name.includes("Seafarer Hunting Bow")
    || skin.name.includes("Chocolate Hunter Bow") 
    || skin.name.includes("One Shot Bow") 
    || skin.name.includes("Cloud Shot Bow")
    || skin.name.includes("Pink Death Bow") 
    || skin.name.includes("Hunting Bow from Hell")
    || skin.name.includes("Golden Leaf Bow")
    || skin.name.includes("Vampire Bow") 
    || skin.name.includes("Sunken Treasure Bow")
    || skin.name.includes("The Bone Bow")
    || skin.name.includes("Dread Lord Hunting Bow")
    || skin.name.includes("Triumph Bow") 
    || skin.name.includes("War Story Bow")
    || skin.name.includes("Bushi Zhe Hunting Bow")
    || skin.name.includes("Northwind Bowmaster") 
    || skin.name.includes("Metalhead Bow") 
    || skin.name.includes("Resin Bow")
    || skin.name.includes("Scrapper Bow") 
    || skin.name.includes("Native Hunting Bow")
    || skin.name.includes("Phantom Bow")

    // skin.element.classList.toggle("show", isVisible)
    skin.element.classList.toggle("hide", !isVisible)
    })
  })
})

L96.addEventListener("click", () => {
  const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
  form.addEventListener('submit', () => {
    for (let i = 0; i < 3379; i++) { 
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
    }
  }
    skins.forEach(skin => {
    const isVisible = skin.name.includes("Polar Bear L96") 
    || skin.name.includes("Evil Snowman L96") 
    || skin.name.includes("Ghost Flame L96") 
    || skin.name.includes("Training L96")
    || skin.name.includes("Hunting Rifle") 
    || skin.name.includes("Blackout L96")
    || skin.name.includes("Collector L96")
    || skin.name.includes("Bombshell L96") 
    || skin.name.includes("No Mercy L96")
    // skin.element.classList.toggle("show", isVisible)
    skin.element.classList.toggle("hide", !isVisible)
    })
  })
})

LR300.addEventListener("click", () => {
  const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
  form.addEventListener('submit', () => {
    for (let i = 0; i < 3379; i++) { 
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
    }
  }
    skins.forEach(skin => {
    const isVisible = skin.name.includes("Dragon Rage LR") 
    || skin.name.includes("Vortex LR") 
    || skin.name.includes("Zebra LR") 
    || skin.name.includes("Skullkiller LR")
    || skin.name.includes("Black Gold LR") 
    || skin.name.includes("Azul LR300")
    || skin.name.includes("Space LR")
    || skin.name.includes("Desert Storm LR") 
    || skin.name.includes("Glister LR")
    || skin.name.includes("Bombshell LR") 
    || skin.name.includes("Caution LR") 
    || skin.name.includes("Shimmering LR")
    || skin.name.includes("Obsidian LR") 
    || skin.name.includes("Atomic LR")
    || skin.name.includes("Beast Eater LR")
    || skin.name.includes("Sweet Gift LR") 
    || skin.name.includes("OVERDRIVE LR")
    || skin.name.includes("Blackout LR") 
    || skin.name.includes("Tween LR") 
    || skin.name.includes("Monster LR")
    || skin.name.includes("Winter Ops LR") 
    || skin.name.includes("Paintball LR")
    || skin.name.includes("Doodle LR")
    || skin.name.includes("Optimist LR") 
    || skin.name.includes("Basebreaker LR")
    || skin.name.includes("Talon LR") 
    || skin.name.includes("Uproar LR300") 
    || skin.name.includes("Toy Blast LR")
    || skin.name.includes("No Mercy LR300") 
    || skin.name.includes("Holographic LR300")
    || skin.name.includes("Prancing Pony LR-300")
    || skin.name.includes("Dynasty LR300") 
    || skin.name.includes("Black Pearl LR300")
    || skin.name.includes("Cutesy LR300") 
    || skin.name.includes("Poseidon LR300") 
    || skin.name.includes("Project White Light")
    || skin.name.includes("Flyboy LR") 
    || skin.name.includes("Phantom LR-300")
    || skin.name.includes("Jungle Fighter LR-300 Stockless")
    || skin.name.includes("Pink Death LR300") 
    || skin.name.includes("Marked for Death")
    || skin.name.includes("Badlands LR-300") 
    || skin.name.includes("Icarus LR300") 
    || skin.name.includes("Dead Ringer LR300")
    || skin.name.includes("Fury Ex Red") 
    || skin.name.includes("Tempered Steel LR300")
    || skin.name.includes("Deathcore LR300")
    || skin.name.includes("Bogeyman LR300") 
    || skin.name.includes("Cold Hunter LR 300")
    || skin.name.includes("BullDozer LR300") 
    || skin.name.includes("Ice Marine LR300") 
    || skin.name.includes("Polymer LR300")
    || skin.name.includes("Warhead LR300") 
    || skin.name.includes("Midway LR300")
    || skin.name.includes("Bone Grinder LR-300")
    || skin.name.includes("Wildfire LR-300") 
    || skin.name.includes("Survivor LR-300")
    || skin.name.includes("Mercenary Rifle") 
    || skin.name.includes("Daemon Strike")
    || skin.name.includes("LR300 - Wild")
    || skin.name.includes("Bulletstorm") 
    // skin.element.classList.toggle("show", isVisible)
    skin.element.classList.toggle("hide", !isVisible)
    })
  })
})


LongSword.addEventListener("click", () => {
  const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
  form.addEventListener('submit', () => {
    for (let i = 0; i < 3379; i++) { 
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
    }
  }
    skins.forEach(skin => {
    const isVisible = skin.name.includes("Aztec Macuahuitl") 
    || skin.name.includes("Kryss Longsword") 
    || skin.name.includes("Wakizashi") 
    || skin.name.includes("Xtreme Sword")
    || skin.name.includes("Danger Fork") 
    || skin.name.includes("Hot-tempered Longsword")
    // skin.element.classList.toggle("show", isVisible)
    skin.element.classList.toggle("hide", !isVisible)
    })
  })
})



let searchedItems = 0;
    SearchInput.addEventListener("input", (e) => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      const value = e.target.value.toLowerCase()
      
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 

          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const isVisible = skin.name.toLowerCase().includes(value)
        // skin.element.classList.toggle("show", isVisible)
        skin.element.classList.toggle("hide", !isVisible)
        })
      })
      console.log(skins)
    })



    MP5A4.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }

        skins.forEach(skin => {
        
        const isVisible = skin.name.includes("Digital Carbon MP5")
        || skin.name.includes("Zebra MP5") 
        || skin.name.includes("Berserker MP5") 
        || skin.name.includes("Skullkiller MP5")
        || skin.name.includes("Vortex MP5") 
        || skin.name.includes("Neo Soul MP5")
        || skin.name.includes("Venomous MP5")
        || skin.name.includes("Black Gold MP5") 
        || skin.name.includes("Solar MP5")
        || skin.name.includes("Glister MP5") 
        || skin.name.includes("Banger MP5") 
        || skin.name.includes("Quarantine MP5")
        || skin.name.includes("Frosty MP5") 
        || skin.name.includes("Poseidon MP5")
        || skin.name.includes("Comics MP5")
        || skin.name.includes("Bombshell Mp5") 
        || skin.name.includes("BURNOUT")
        || skin.name.includes("No Mercy MP5") 
        || skin.name.includes("Cold Hunter MP5") 
        || skin.name.includes("Arctic Wolf MP5")
        || skin.name.includes("Wasp MP5") 

        || skin.name.includes("Icarus MP5")
        || skin.name.includes("Valentine MP5") 
        || skin.name.includes("Phantom MP5")
        || skin.name.includes("Tank MP5") 
        || skin.name.includes("Elite Mp5") 
        || skin.name.includes("Polymer MP5")
        || skin.name.includes("Tempered Mp5") 
        || skin.name.includes("Military Camo MP5")
        || skin.name.includes("Digital Camo MP5")
        || skin.name.includes("Spitfire MP5") 
        || skin.name.includes("Dead Fish MP5")
        || skin.name.includes("Urban Camo MP5") 
        || skin.name.includes("Nomad MP5") 
        && skin.name.includes("Wild Flame MP5")

        skin.element.classList.toggle("hide", !isVisible)
        })
      })
    })


  M249.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }

        skins.forEach(skin => {
        
        const isVisible = skin.name.includes("Black Gold M249")
        || skin.name.includes("Glister M249") 
        || skin.name.includes("Rainbow Pony M249") 
        || skin.name.includes("Toy Machine Gun")
        || skin.name.includes("Poseidon LMG") 
        || skin.name.includes("No Mercy LMG")
        || skin.name.includes("CHROMA FLAIR")
        || skin.name.includes("Love Machine") 
        || skin.name.includes("Playmaker M249")
        || skin.name.includes("The Beast M249") 
        || skin.name.includes("Bombshell M249") 
        || skin.name.includes("Guerilla M249")

        skin.element.classList.toggle("hide", !isVisible)
        
       
        
        
        })
      })
    })


    M39.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }

        skins.forEach(skin => {
        
        const isVisible = skin.name.includes("Bombshell M39")
        || skin.name.includes("Tempered M39") 
        || skin.name.includes("Metalhead M39") 
        || skin.name.includes("Devourer M39")
        || skin.name.includes("Ornate M39") 
        || skin.name.includes("Desert Warrior")


        skin.element.classList.toggle("hide", !isVisible)
        })
      })
    })

    PUMPY.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }

        skins.forEach(skin => {
        
        const isVisible = skin.name.includes("Toxic Wolf Pump Shotgun")
        || skin.name.includes("Lightweight Pump Shotgun") 
        // || skin.name.includes("Pegasus") 
        || skin.name.includes("Troll Daddy Pump Shotgun")
        || skin.name.includes("Spitfire Pump Shotgun") 
        || skin.name.includes("Metalhead Pump Shotgun")
        || skin.name.includes("Problem Solver Stick")
        || skin.name.includes("Loot Leader Shotgun") 
        || skin.name.includes("Royalty Pump Shotgun") 
        || skin.name.includes("Dead Ringer Pump Shotgunn")
        || skin.name.includes("Psychosis Pump") 
        || skin.name.includes("Sweet Shot")
        || skin.name.includes("Head Hunter Shotgun")
        || skin.name.includes("Rebel Shotgun") 
        || skin.name.includes("Conquerer Shotgun") 
        || skin.name.includes("Modern Knight Shotgun")
        || skin.name.includes("Frostfire Shotgun") 
        || skin.name.includes("Polymer Pump Shotgun")
        || skin.name.includes("The Swampmaster")
        || skin.name.includes("Urban Afterburn Pump Shotgun") 
        || skin.name.includes("Native Gold") 
        || skin.name.includes("Native Yellow")
        || skin.name.includes("The Billy Baroo") 
        || skin.name.includes("Tank Pump Shotgun")
        || skin.name.includes("Chieftain Pump Shotgun")

        skin.element.classList.toggle("hide", !isVisible)
        })
      })
    })


   PYTHON.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }

        skins.forEach(skin => {
        
        const isVisible = skin.name.includes("Venomous Shot")
        || skin.name.includes("Dragon's Spit")
        || skin.name.includes("Slaughter")
        || skin.name.includes("Python")
        || skin.name.includes("python") 
        || skin.name.includes("PYTHON") 
        skin.element.classList.toggle("hide", !isVisible)
        })
      })
    })

    REVO.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }

        skins.forEach(skin => {
        
        const isVisible = skin.name.includes("Nuke Pistol")
        || skin.name.includes("Party Pooper")
        || skin.name.includes("Death Viper")
        || skin.name.includes("Pink Grunge")
        || skin.name.includes("Revolver") 
        || skin.name.includes("revolver") 
        skin.element.classList.toggle("hide", !isVisible)
        })
      })
    })


   TOMMY.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }

        skins.forEach(skin => {
        
        const isVisible = skin.name.includes("Santa's Little Helper")
        || skin.name.includes("Tommy")
        || skin.name.includes("Thompson")

        skin.element.classList.toggle("hide", !isVisible)
        })
      })
    })

    PIPE.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }

        skins.forEach(skin => {
        
        const isVisible = skin.name.includes("Tiger Pipe")
        || skin.name.includes("waterpipe")
        || skin.name.includes("Toy Shotgun")
        || skin.name.includes("Garden Pipe Shotgun")
        || skin.name.includes("Pirate Pipe") 
        || skin.name.includes("Industrial Pipe Shotgun") 
        || skin.name.includes("KOI")
        || skin.name.includes("Cannibal Tribe Musket")
        || skin.name.includes("Blacksmith's Pipe")
        || skin.name.includes("Apostate") 
        || skin.name.includes("Junkyard Pipe") 
        || skin.name.includes("Sea Hunter Shotgun")
        || skin.name.includes("Twisted Pipe")
        || skin.name.includes("Flaming Pipe")
        || skin.name.includes("Luxuria") 
        || skin.name.includes("Riveted Pipe Shotgun") 
        || skin.name.includes("Rustpunk Scattergun")
        || skin.name.includes("The Peace Pipe")
        skin.element.classList.toggle("hide", !isVisible)

        })
      })
    })



    WOODDOOR.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const isVisible = skin.name.includes("Molotov Wooden Door")
        || skin.name.includes("Dead Souls Wooden Door")
        || skin.name.includes("Friendly Wooden Door")
        || skin.name.includes("Smouldering Door")
        || skin.name.includes("Spraycan Wooden Door") 
        || skin.name.includes("Danger Zone Wooden Door") 
        || skin.name.includes("Brothers of Fire Wooden Door")
        || skin.name.includes("Honest Wooden Door")
        || skin.name.includes("Panamanian Wooden Door")
        || skin.name.includes("Ice Door") 
        || skin.name.includes("Evolved Wooden Door") 
        || skin.name.includes("Military Storage Wooden Door")
        || skin.name.includes("Eye Scream Door")
        || skin.name.includes("Weather Wood Door")
        || skin.name.includes("The Hunter and his Dog") 
        || skin.name.includes("Big Dreams Door") 
        || skin.name.includes("Wolf Den Wooden Door")
        || skin.name.includes("Eco Door")
        || skin.name.includes("Pixel Wooden Door")
        || skin.name.includes("Midgard Door") 
        || skin.name.includes("Jinx Wooden Door") 
        || skin.name.includes("Pirate Hut Door")
        || skin.name.includes("The Growth Of Evil")
        || skin.name.includes("Archer Door")
        || skin.name.includes("Hut Door") 
        || skin.name.includes("Cobalt Wooden Door") 
        || skin.name.includes("Hell-o-ween Wooden Door")
        || skin.name.includes("Alchemist Door")
        || skin.name.includes("Artisan Wooden Door")
        || skin.name.includes("Cursed Wooden Door") 
        || skin.name.includes("Viking Door") 
        || skin.name.includes("Pirate Wooden Door")
        || skin.name.includes("Metal Tree Door")
        || skin.name.includes("Vandal's Peace Door")
        || skin.name.includes("Fortified Castle Door") 
        || skin.name.includes("Bone Collector Door") 
        || skin.name.includes("Dreamcatcher Door")
        || skin.name.includes("Wisdom Door")
        || skin.name.includes("Forgotten Temple Door")
        || skin.name.includes("Red Decorative Wood Door") 
        || skin.name.includes("Barricaded Door") 
        || skin.name.includes("Sacrificial door")
        || skin.name.includes("Ornate Wooden Door")
        || skin.name.includes("Lone Wolf Door")
        || skin.name.includes("Trick Or Treat Door") 
        || skin.name.includes("Black Decorative Wood Door") 
        || skin.name.includes("Wise Door")
        || skin.name.includes("Riveted Wooden Door")
        || skin.name.includes("Bleached Ebony Door")
        || skin.name.includes("Porthole Door") 
        || skin.name.includes("Christmas Tree Door") 
        || skin.name.includes("Old Heavy Wooden Door")
        || skin.name.includes("Door to Heaven")
        skin.element.classList.toggle("hide", !isVisible)

        })
      })
    })


    DOUBLEWOODDOOR.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const isVisible = skin.name.includes("Fireflies Double Wooden Doors")
        || skin.name.includes("Rainbow Doors")
        || skin.name.includes("Pirate Ship Wooden Double Door")
        || skin.name.includes("Wind King Wooden Double Door")
        skin.element.classList.toggle("hide", !isVisible)

        })
      })
    })


    SMALLBOX.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const isVisible = skin.name.includes("Smouldering Box")
        || skin.name.includes("Neon Hearts Box")
        || skin.name.includes("Small Tiger Box")
        || skin.name.includes("Pizza Box Storage")
        || skin.name.includes("Festive Stickered Storage Box")
        || skin.name.includes("Molten Visage Small Box")
        || skin.name.includes("Desert Supply Box")
        || skin.name.includes("Small Box")
        || skin.name.includes("Outer Planets Small Storage")
        || skin.name.includes("Bone Cage Box")
        || skin.name.includes("Woodenstein")
        || skin.name.includes("Little Cloud Box")
        || skin.name.includes("Sea Supply Box")
        || skin.name.includes("Ox Box")
        || skin.name.includes("Cobalt Supply Box")
        || skin.name.includes("Organic Berry Box")
        || skin.name.includes("Stickered Toy Car")
        || skin.name.includes("MILTAN Storage Box")
        || skin.name.includes("GMO Free Seed Box")
        || skin.name.includes("High Voltage Box")
        || skin.name.includes("Oil Rig Storage Box")
        || skin.name.includes("Toxic Hazard Box")
        || skin.name.includes("Army Supply Box")
        || skin.name.includes("Cargo Heli Storage")
        || skin.name.includes("Duelist's Wood Box")
        || skin.name.includes("Treasure Crate")
        || skin.name.includes("Small Medical Box")

        || skin.name.includes("Seed Box")
        || skin.name.includes("Medieval Small Wooden Box")
        || skin.name.includes("First Aid Box")


        skin.element.classList.toggle("hide", !isVisible)

        })
      })
    })


    WATERP.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const isVisible = skin.name.includes("Distillery")
        || skin.name.includes("Radioactive Water Purifier")
        || skin.name.includes("Wooden Purifier")
        skin.element.classList.toggle("hide", !isVisible)

        })
      })
    })

    VENDING.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const isVisible = skin.name.includes("Vending Machine")
        || skin.name.includes("Gingerbread Candy Shop")
        || skin.name.includes("Oxums Gas Pump")
        || skin.name.includes("Cobalt Coffee")
        || skin.name.includes("Music Box")
        || skin.name.includes("Cobalt Ice Cream")
        || skin.name.includes("RustyCola Machine")
        skin.element.classList.toggle("hide", !isVisible)
        })
      })
    })

    TABLE.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const isVisible = skin.name.includes("Antique Dining Table")
        || skin.name.includes("Off The Grid")
        || skin.name.includes("Parquet Table")

        skin.element.classList.toggle("hide", !isVisible)
        })
      })
    })

    SLEEPINGB.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const isVisible = skin.name.includes("Fish Bag")
        || skin.name.includes("Immortal Angel Bag")
        || skin.name.includes("Pitstop Bag")
        || skin.name.includes("Desert Scout")
        || skin.name.includes("Tea Bag")
        || skin.name.includes("Winter Scout")
        || skin.name.includes("Forest Camo Bag")
        || skin.name.includes("Salvaged Hazmat Bag")
        || skin.name.includes("Santa's Bag")
        || skin.name.includes("Comfortable Coffin")
        || skin.name.includes("Comfortable Cardboard")
        || skin.name.includes("Frostwulf Bed")
        || skin.name.includes("Cozy Bunny Bag")
        || skin.name.includes("Regeneration Program")
        || skin.name.includes("Seasons Beatings")
        || skin.name.includes("Sleepover Bag")
        || skin.name.includes("Captain's Bed")
        || skin.name.includes("Crime Bag")
        || skin.name.includes("Survivor Bag")
        || skin.name.includes("Spooky Pumpkin Bed")
        || skin.name.includes("Nuke Bag")
        || skin.name.includes("Brony Bag")
        || skin.name.includes("Seasons Beatings")
        || skin.name.includes("Cannibal Survival Bag")
        || skin.name.includes("Sleep Catcher")
        || skin.name.includes("Cobalt Survival Bag")
        || skin.name.includes("Freefolk Bedroll")
        || skin.name.includes("Star Bedroll")
        || skin.name.includes("Christmas Holiday Bag")
        || skin.name.includes("Caravanner Bedroll")
        || skin.name.includes("Ranger Bedroll")
        || skin.name.includes("Undead Bedroll")
        || skin.name.includes("Bear Bag")
        || skin.name.includes("Aston Christmas")
        || skin.name.includes("Christmas Bag")
        || skin.name.includes("Freshly Dug Grave")
        || skin.name.includes("Horror Bag")
        || skin.name.includes("Sleeping Bag")
        skin.element.classList.toggle("hide", !isVisible)
        })
      })
    })

    DOUBLEMETALDOOR.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const isVisible = skin.name.includes("Gingerbread Double Door")
        || skin.name.includes("Neon Pumpkin Metal Double Door")
        || skin.name.includes("Outer Planets Double Door")
        || skin.name.includes("Old Subway Doors")
        || skin.name.includes("Horsemen of the Apocalypse Door")
        || skin.name.includes("Lab Elevator Double Door")
        || skin.name.includes("Pumpkin Jail Double Door")
        || skin.name.includes("Pixel Metal Double Door ")
        || skin.name.includes("Toxic Double Door")
        || skin.name.includes("Eviction Double Door")
        || skin.name.includes("Red Barn Double Door")
        || skin.name.includes("Doors to a Fairy Tale")
        || skin.name.includes("Shippy & Friends Double Door")
        || skin.name.includes("Earblaster Doors")
        || skin.name.includes("Howling Double Door")
        || skin.name.includes("Double Door from Hell")
        || skin.name.includes("Green Labs Door")
        || skin.name.includes("Oil Rig Double Door")
        || skin.name.includes("Monster Double Door")
        || skin.name.includes("Jack Sheet Metal Double Door")
        || skin.name.includes("Military Double Door")
        || skin.name.includes("Ambulance Double Door")
        || skin.name.includes("Global Freight Double Door")
        skin.element.classList.toggle("hide", !isVisible)
        })
      })
    })

   METALDOOR.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const isVisible = skin.name.includes("Fire Phoenix Metal Door")
        || skin.name.includes("Toxic Dragon Metal Door")
        || skin.name.includes("Fireflies Metal Door")
        || skin.name.includes("Blueprint Metal Door")
        || skin.name.includes("Evil Heart Door")
        || skin.name.includes("Art Deco Door")
        || skin.name.includes("Chocolate Sheet Metal Door")
        || skin.name.includes("Spraycan Sheet Metal Door")
        || skin.name.includes("Cheese Sheet Metal Door")
        || skin.name.includes("Gold Lunar Tiger Door")
        || skin.name.includes("Jade Lunar Tiger Door")
        || skin.name.includes("Ice Sheet Metal Door")
        || skin.name.includes("Quarantine Sheet Metal Door")
        || skin.name.includes("Viking Sheet Metal Door")
        || skin.name.includes("Ghostly Flame Door")
        || skin.name.includes("Chain Gate")
        || skin.name.includes("Bombing Sheet Metal Door")
        || skin.name.includes("Charitable Rust 2021 Door")
        || skin.name.includes("Puzzle Sheet Metal Door")
        || skin.name.includes("House of Horrors")
        || skin.name.includes("No Mercy Sheet Metal Door")
        || skin.name.includes("Sheet Metal Door from Hell")
        || skin.name.includes("Rainbow Pony Metal Door")
        || skin.name.includes("Going Deep Sheet Metal Door")
        || skin.name.includes("Yellow Submarine Door")
        || skin.name.includes("Neon Cactus Metal Door")
        || skin.name.includes("Death Metal Door")
        || skin.name.includes("Control Room Door")
        || skin.name.includes("Domino Door")
        || skin.name.includes("Outer Planets Metal Door")
        || skin.name.includes("Hypnotic Steel Door")
        || skin.name.includes("Dragon Horn Door")
        || skin.name.includes("King Metal Door")
        || skin.name.includes("Space Foil Door")
        || skin.name.includes("Glacial Visage Metal Door")
        || skin.name.includes("Lovers Sheet Metal Door")
        || skin.name.includes("Corrupted Metal Door")
        || skin.name.includes("Metal Monster Door")
        || skin.name.includes("Lunar Ox Door")
        || skin.name.includes("Santa's Door")
        || skin.name.includes("Freedom Door")
        || skin.name.includes("Melted Blast Door")
        || skin.name.includes("Halloween House Door")
        || skin.name.includes("Eagle Sheet Metal Door")
        || skin.name.includes("Molten Visage Metal Door")
        || skin.name.includes("Monitored Door")
        || skin.name.includes("Wealthy Farmer Door")
        || skin.name.includes("Ancient Lore Door")
        || skin.name.includes("Mechanic Door")
        || skin.name.includes("Riveted Summer Door")
        || skin.name.includes("MeowMeow Sheet Metal Door")
        || skin.name.includes("Hieroglyphic Metal Door")
        || skin.name.includes("Happy Rabbit Door")
        || skin.name.includes("Pixel Metal Door")
        || skin.name.includes("Old Fighters Door")
        || skin.name.includes("Guardians of the Heart")
        || skin.name.includes("Bio Integrity Door")
        || skin.name.includes("Mummy Door")
        || skin.name.includes("Winged Guardian Door")
        || skin.name.includes("Musical Notes Door")
        || skin.name.includes("Gingerbread Door")
        || skin.name.includes("Bull Rage Door")
        || skin.name.includes("Year of the Rat Door")
        || skin.name.includes("Midnight Door")
        || skin.name.includes("Excavator Door")
        || skin.name.includes("Ace Door")
        || skin.name.includes("Pirate Treasures Door")
        || skin.name.includes("Shippy & Friends Door")
        || skin.name.includes("Wild Owl Door")
        || skin.name.includes("El Dorado Door")
        || skin.name.includes("Rocket Door")
        || skin.name.includes("Sunrise Door")  
        || skin.name.includes("Mosaic Door")
        || skin.name.includes("Broken Mirror Door")
        || skin.name.includes("Royal Door")
        || skin.name.includes("Oil Rig Door")
        || skin.name.includes("Deep Sea Door")
        || skin.name.includes("Fallen Emperor Door")
        || skin.name.includes("Dead Valentine Door")
        || skin.name.includes("Evil Within")
        || skin.name.includes("Egiptu Door")
        || skin.name.includes("Snowman Door")
        || skin.name.includes("Santa's Front Door")
        || skin.name.includes("Power Door")
        || skin.name.includes("Dreamer's Door")
        || skin.name.includes("Lost Hope Door")
        || skin.name.includes("Labyrinth Door")
        || skin.name.includes("Potty Door")
        || skin.name.includes("Door of Flesh")
        || skin.name.includes("Quarantine Area")  
        || skin.name.includes("Emergency Exit Door")
        || skin.name.includes("Guardian Door")
        || skin.name.includes("Toxic Door")
        || skin.name.includes("Divinity Door")
        || skin.name.includes("Ancient Totem Door")
        || skin.name.includes("Night Sky Door")
        || skin.name.includes("Flower Power Door")
        || skin.name.includes("Defender Door")
        || skin.name.includes("Bandit Sheet Metal Door")
        || skin.name.includes("Corinthian Door")
        || skin.name.includes("Pug Tower Door")
        || skin.name.includes("Trophy Pirate Door")
        || skin.name.includes("Red Skull Door")
        || skin.name.includes("Test Room Door")
        || skin.name.includes("Caution Door")  
        || skin.name.includes("Chinook Fuselage Door")
        || skin.name.includes("Meltdown Metal Door")
        || skin.name.includes("Boat House Door")
        || skin.name.includes("Steel Pirate Door")
        || skin.name.includes("Railway Door")
        || skin.name.includes("Artist's Door")
        || skin.name.includes("Urban Night Door")
        || skin.name.includes("Aztec Gold Door")
        || skin.name.includes("Blacksmith's Door")
        || skin.name.includes("Submarine Door")
        || skin.name.includes("Scrap Robot Door")
        || skin.name.includes("Red Skull Door")
        || skin.name.includes("Brutal Door")
        || skin.name.includes("Lost Treasure Door")
        || skin.name.includes("Engineer's Door")  
        || skin.name.includes("Fretwork Door")
        || skin.name.includes("Dragon Relic Door")
        || skin.name.includes("Lost Metal Door")
        || skin.name.includes("Eisensheet Door")
        || skin.name.includes("Death Crypt Door")
        || skin.name.includes("Aztec Door")
        || skin.name.includes("Antique Metal Door")
        || skin.name.includes("Halloween Door")
        || skin.name.includes("KEEP OUT")
        || skin.name.includes("Dead Room Door")
        || skin.name.includes("Salvaged APC Door")
        || skin.name.includes("Hideout Door")
        || skin.name.includes("Scrap Tanker Door")
        || skin.name.includes("Blue Puzzle Door")
        || skin.name.includes("Brass Sentinel Door")  
        || skin.name.includes("Polar Station Door")
        || skin.name.includes("Salvation Door")
        || skin.name.includes("Metalshop Scrap Door")
        || skin.name.includes("Quarantine Door")
        || skin.name.includes("Military Vehicle Door")
        || skin.name.includes("Truck Door")
        || skin.name.includes("Roadsign Door")
        || skin.name.includes("Jeweler's Security Door")
        || skin.name.includes("Grey Fire Door")
        || skin.name.includes("Door to Death")
        || skin.name.includes("Laboratory Door")
        || skin.name.includes("Locomotive Door")
        || skin.name.includes("Fire Truck Door")
        || skin.name.includes("Ambulance Door")
        || skin.name.includes("School Bus Door")  
        || skin.name.includes("Shipping Container Door")
        || skin.name.includes("Doomsday Door")
        || skin.name.includes("Metal Shutter Door")
        || skin.name.includes("Recycled Garage Door")
        || skin.name.includes("Hazard Metal Door")
        || skin.name.includes("Prison Door")
        || skin.name.includes("Army Metal Door")
        skin.element.classList.toggle("hide", !isVisible)
        })
      })
    })

  // SAR.addEventListener("click", () => {
  //     const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
  //     form.addEventListener('submit', () => {
  //       for (let i = 0; i < 3379; i++) { 
  //         if (elementList[i]) {
  //           elementList[i].style.display = 'flex';
  //       }
  //     }
  //       skins.forEach(skin => {
  //       const isVisible = skin.name.includes("SAR")
  //       skin.element.classList.toggle("hide", !isVisible)
  //       })
  //     })
  //   })

    SAR.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("SAR")
        || skin.name.includes("Azul Sar")
        || skin.name.includes("Cupidon")
        || skin.name.includes("Blood Dragon Rifle")
        || skin.name.includes("To Hell And Back")
        || skin.name.includes("Hazard Semi Auto Rifle")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })


    SANDBAG.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const isVisible = skin.name.includes("Grandmother's Gift Barricade")
        skin.element.classList.toggle("hide", !isVisible)
        })
      })
    })
  
    FURNACE.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const isVisible = skin.name.includes("Primordial Forge")
        || skin.name.includes("Spring Carrot House")
        || skin.name.includes("Silent Night")
        || skin.name.includes("Bee Hive")
        || skin.name.includes("Hell Forge")
        || skin.name.includes("Last Friend")
        || skin.name.includes("Home Sweet Home")
        || skin.name.includes("Furious Volcano")
        || skin.name.includes("Personal Lighthouse")
        || skin.name.includes("Iron Calamity")
        || skin.name.includes("Soul Burner")
        || skin.name.includes("Iron Forge")
        || skin.name.includes("Snowboy")
        || skin.name.includes("Furnace")


        skin.element.classList.toggle("hide", !isVisible)
        })
      })
    })

    FRIDGE.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const isVisible = skin.name.includes("Fridge")
        || skin.name.includes("Ice Cream Freezer")
        || skin.name.includes("Portable Toilet")
        || skin.name.includes("Victorian Food Vault")


        skin.element.classList.toggle("hide", !isVisible)
        })
      })
    })

    CONCRETE.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const isVisible = skin.name.includes("Road Barrier")
        || skin.name.includes("Metal Barricade")
        || skin.name.includes("Military Barricade")
        || skin.name.includes("Outpost Concrete Barricade")
        || skin.name.includes("Railway Barricade")


        skin.element.classList.toggle("hide", !isVisible)
        })
      })
    })

    

    ARMOUREDDOOR.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const isVisible = skin.name.includes("Arctic Base Door")
        || skin.name.includes("HellBunker Door")
        || skin.name.includes("Mainframe Door ")
        || skin.name.includes("Cargo Ship Security Door")
        || skin.name.includes("Armored Door")
        || skin.name.includes("Armored Scrapper Door")
        || skin.name.includes("Armored Mason Door ")
        || skin.name.includes("Hellfire Portal")
        || skin.name.includes("Cobalt Graffiti Door")
        || skin.name.includes("TacCom Security Door")
        || skin.name.includes("Green Armored Container Door")
        || skin.name.includes("Armored Vault Door")
        || skin.name.includes("Safe Room Door")
        || skin.name.includes("Armored Concrete")
        || skin.name.includes("Armored Mason Door ")
        || skin.name.includes("Clockwork Portal")
        || skin.name.includes("No Escape")
        // || skin.name.includes("High Voltage")
        || skin.name.includes("Corroded Bronze Door")
        || skin.name.includes("Armored Door")



        skin.element.classList.toggle("hide", !isVisible)
        })
      })
    })


    ARMOUREDDOUBLE.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const isVisible = skin.name.includes("Outer Planets Armored Double Door")
        || skin.name.includes("Christmas Bunker Double Door")
        || skin.name.includes("Crypt Armored Double Door")
        || skin.name.includes("Jester Armoured Double Door")
        || skin.name.includes("Hell Walker Double Armored Door")

        skin.element.classList.toggle("hide", !isVisible)
        })
      })
    })


    
    BEARSKIN.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const isVisible = skin.name.includes("Werewolf Rug")
        || skin.name.includes("Teddy Bear Rug")
        || skin.name.includes("Panda Rug")
        || skin.name.includes("Jester Armoured Double Door")
        || skin.name.includes("Hell Walker Double Armored Door")

        skin.element.classList.toggle("hide", !isVisible)
        })
      })
    })

        
    LARGEWOODBOX.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const isVisible = skin.name.includes("Graffiti Meds Storage")
        || skin.name.includes("Graffiti Boom Storage")
        || skin.name.includes("Graffiti Scrap Storage")
        || skin.name.includes("Graffiti Wood Storage")
        || skin.name.includes("Graffiti Guns Storage")
        || skin.name.includes("Graffiti Ammo Storage")
        || skin.name.includes("Graffiti Component Storage")
        || skin.name.includes("Graffiti Drop Storage")
        || skin.name.includes("Graffiti Armor Storage")
        || skin.name.includes("Graffiti Stone Storage")
        || skin.name.includes("Graffiti Metal Storage")
        || skin.name.includes("Graffiti Sulfur Storage")
        || skin.name.includes("Smouldering Large Box")
        || skin.name.includes("Scientific Scrap Storage")
        || skin.name.includes("Scientific Wood Storage")
        || skin.name.includes("Scientific Charcoal Storage")
        || skin.name.includes("Easter Carrot Storage")
        || skin.name.includes("Scientific Fuel Storage")
        || skin.name.includes("Scientific Car Parts Storage")
        || skin.name.includes("Scientific Components Storage")
        || skin.name.includes("Scientific Electrical Storage")
        || skin.name.includes("Scientific Metal Storage")
        || skin.name.includes("Valentine's Box")
        || skin.name.includes("Scientific Tools Storage")
        || skin.name.includes("Scientific Medicine Storage")
        || skin.name.includes("Large Tiger Box")
        || skin.name.includes("Scientific Stone Storage")
        || skin.name.includes("Scientific Armor Storage")
        || skin.name.includes("Components Supply Container")
        || skin.name.includes("Scientific Explosive Storage")
        || skin.name.includes("Scientific Ammo Storage")
        || skin.name.includes("Scientific Guns Storage")
        || skin.name.includes("Charitable Rust 2021 Box")
        || skin.name.includes("Armor Supply Container")
        || skin.name.includes("Outer Planets Large Box")
        || skin.name.includes("Resources Supply Container")
        || skin.name.includes("Tools Supply Container")
        || skin.name.includes("Skull Sarcophagus")
        || skin.name.includes("Scientific Sulfur Storage")
        || skin.name.includes("Neon Elec Storage")
        || skin.name.includes("Neon Clothes Storage")
        || skin.name.includes("Meds Supply Container")
        || skin.name.includes("Neon Drop Box Storage")
        || skin.name.includes("Neon Charcoal Storage")
        || skin.name.includes("Neon Stone Storage")
        || skin.name.includes("Neon Comps Storage")
        || skin.name.includes("Neon Tools Storage")
        || skin.name.includes("Ammo Supply Container")
        || skin.name.includes("Guns Supply Container")
        || skin.name.includes("Neon Armor Storage")
        || skin.name.includes("Neon Wood Storage")
        || skin.name.includes("Neon Sulfur Storage")
        || skin.name.includes("Neon Frags Storage")
        || skin.name.includes("Neon Ammo Storage")
        || skin.name.includes("Neon Meds Storage")
        || skin.name.includes("Steel Devil Box")
        || skin.name.includes("Dragon Horn Box")
        || skin.name.includes("Neon Boom Storage")
        || skin.name.includes("Neon Ore Storage")
        || skin.name.includes("Neon Food Storage")
        || skin.name.includes("Neon Gun Storage")
        || skin.name.includes("Neon Scrap Storage")
        || skin.name.includes("Retrowave Large Box")
        || skin.name.includes("Large Ox Box")
        || skin.name.includes("Lost Soul Crate")
        || skin.name.includes("Weather Large Wood Box")
        || skin.name.includes("Fairy Tale Box")
        || skin.name.includes("Trust In Rust 3 Box")
        || skin.name.includes("Nuclear Box")
        || skin.name.includes("Ghostly Flame Box")
        || skin.name.includes("Spirit Board Box")
        || skin.name.includes("Glacial Visage Large Box")
        || skin.name.includes("XPOINT")
        || skin.name.includes("Doodle Large Wooden Box")
        || skin.name.includes("Nautical Storage Box")
        || skin.name.includes("Tea Cargo Box")
        || skin.name.includes("Reprocessing Box")
        || skin.name.includes("Cargo Heli Large Box")
        || skin.name.includes("Hieroglyphic Large Box")
        || skin.name.includes("Mechanic Tool Box")
        || skin.name.includes("Beach Crate")
        || skin.name.includes("Large Stickered Toy Car")
        || skin.name.includes("Supplies Box")
        || skin.name.includes("Farming Storage Box")
        || skin.name.includes("CCTV Storage")
        || skin.name.includes("Rat Chest")
        || skin.name.includes("Spooky Large Box")
        || skin.name.includes("Molten Visage Large Box")
        || skin.name.includes("Ammo Crate")
        || skin.name.includes("Turntable Box")
        || skin.name.includes("Toy Box")
        || skin.name.includes("Midnight Box")
        || skin.name.includes("Shippy Crate")
        || skin.name.includes("Scrap Heli Box")
        || skin.name.includes("Sunrise Box")
        || skin.name.includes("Morexo Tool Box")
        || skin.name.includes("Night Sky Large Box")
        || skin.name.includes("Leprechaun's Loot")
        || skin.name.includes("Freight Crate")
        || skin.name.includes("Royal Loot")
        || skin.name.includes("Cursed Soul Chest")
        || skin.name.includes("Deep Sea Storage")
        || skin.name.includes("Horseshoe Box")
        || skin.name.includes("Dead Man's Chest")
        || skin.name.includes("Box of Hearts")
        || skin.name.includes("Digital Security Box")
        || skin.name.includes("Monster Box")
        || skin.name.includes("Egiptu Box")
        || skin.name.includes("Gingerbread Box")
        || skin.name.includes("Creepy Box")
        || skin.name.includes("Box from Hell")
        || skin.name.includes("Varangian Chest")
        || skin.name.includes("Open Stone Box")
        || skin.name.includes("Large Suitcase")
        || skin.name.includes("Peacemaker Box")
        || skin.name.includes("Labyrinth Box")
        || skin.name.includes("Oathbreaker Box")
        || skin.name.includes("Divinity Chest")
        || skin.name.includes("Pharaoh Mummy Box")
        || skin.name.includes("Toxic Box")
        || skin.name.includes("Ragnarok Trunk")
        || skin.name.includes("Ordnance Box")
        || skin.name.includes("Caution Crate")
        || skin.name.includes("Trophy Pirate Chest")
        || skin.name.includes("Cursed Pirate Treasure Chest")
        || skin.name.includes("Defender Box")
        || skin.name.includes("Railway Box")
        || skin.name.includes("Bone Collector Box")
        || skin.name.includes("Carpenter's Chest")
        || skin.name.includes("Ichtaca Treasure Box")
        || skin.name.includes("Pandora's box")
        || skin.name.includes("Aztec Gold Chest")
        || skin.name.includes("Muertos Chest")
        || skin.name.includes("Eisensheet Box")
        || skin.name.includes("Captain's Treasure")
        || skin.name.includes("Scrapper Storage Chest")
        || skin.name.includes("Childhood Toolbox")
        || skin.name.includes("Lone Wolf Chest")
        || skin.name.includes("Aztec Trunk")
        || skin.name.includes("Danger Box")
        || skin.name.includes("Idolized Toolbox")
        || skin.name.includes("Salvaged Cargo Box")
        || skin.name.includes("Wyrm Chest")
        || skin.name.includes("Trash Box")
        || skin.name.includes("Forgotten Temple Box")
        || skin.name.includes("Hazard Crate")
        || skin.name.includes("Dead Pirates Chest")
        || skin.name.includes("Vaccine box")
        || skin.name.includes("Loot Coffer")
        || skin.name.includes("Leather Bound Trunk")
        || skin.name.includes("Fire Hose Box")
        || skin.name.includes("Mini Nuke Case")
        || skin.name.includes("Padded Armor Trunk")
        || skin.name.includes("Metropolitan Trunk")
        || skin.name.includes("Food Box Large")
        || skin.name.includes("Medieval Box")
        || skin.name.includes("First Aid Large Box")
        || skin.name.includes("Royal Wooden Box")
        || skin.name.includes("Urban Large Wood Storage")
        || skin.name.includes("Cabin Chest")
        || skin.name.includes("Long Hauler's Trunk")
        || skin.name.includes("Recyclables Box")
        || skin.name.includes("Weapons Box")
        || skin.name.includes("Components Storage")
        || skin.name.includes("Military Crate")
        || skin.name.includes("Ammo Box")
        || skin.name.includes("Christmas Holiday LWB")
        || skin.name.includes("Christmas Storage")
        || skin.name.includes("Ammo Wooden Box")
        || skin.name.includes("Gun Box")
        || skin.name.includes("Large Stone Box")
        || skin.name.includes("Explosives Box")
        || skin.name.includes("D.O.A Trunk")
        || skin.name.includes("First Aid Green")
        skin.element.classList.toggle("hide", !isVisible)
        })
      })
    })


     BONEHELM.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Rudolph Skull Mask")
        || skin.name.includes("The Plague Doctor")
        || skin.name.includes("Uprising Deer Skull Mask")
        || skin.name.includes("Demonic Deer Skull")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    BUCKETHAT.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Secret Recipe Bucket Helmet")
        || skin.name.includes("Punk Bucket")
        || skin.name.includes("Roasted Bucket Helmet")
        || skin.name.includes("Sunrise Bucket Helmet")
        || skin.name.includes("Road Cone Helmet")
        || skin.name.includes("Green Riveted Bucket Helmet")
        || skin.name.includes("Wooden Bucket")
        || skin.name.includes("Smilin' Jack")
        || skin.name.includes("Rusty Bucket Helmet")
        || skin.name.includes("Graffiti Bucket Helmet")
        || skin.name.includes("Super Happy Bucket")
        || skin.name.includes("The King's Bucket")
        || skin.name.includes("Medic Helmet")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })


    BANDANA.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Snow Camo Bandana")
        || skin.name.includes("Skull Bandana")
        || skin.name.includes("Red Skull Bandana")
        || skin.name.includes("Forest Camo Bandana")
        || skin.name.includes("Desert Camo Bandana")
        || skin.name.includes("Checkered Bandana")
        || skin.name.includes("Blue Bandana")
        || skin.name.includes("Black Bandana")
        || skin.name.includes("Road Raider Bandana")
        || skin.name.includes("Santa Bandana")
        || skin.name.includes("Jawboy")
        || skin.name.includes("Creepy Clown Bandana")
        || skin.name.includes("Wizard Bandana")
        || skin.name.includes("Green Bandana")
        || skin.name.includes("Burlap Bandit Bandana")
        || skin.name.includes("Beast Bandana")
        || skin.name.includes("Salvaged Hazmat Bandana")
        || skin.name.includes("Egg Thief")
        || skin.name.includes("Easter Bandit")
        || skin.name.includes("Creepy Bandana")
        || skin.name.includes("Dragon Rage Bandana")
        || skin.name.includes("Rainbow Pony Bandana")
        || skin.name.includes("Corrupted Bandana")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })


    CAP.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Red Cap")
        || skin.name.includes("Grey Cap")
        || skin.name.includes("Green Cap")
        || skin.name.includes("Forest Camo Cap")
        || skin.name.includes("Blue Cap")
        || skin.name.includes("Rescue Cap")
        || skin.name.includes("Friendly Cap")
        || skin.name.includes("Toothy Hat")
        || skin.name.includes("Top Cap")
        || skin.name.includes("Oxums Employee Cap")
        || skin.name.includes("Jockey Cap")
        || skin.name.includes("Taxi Cap")
        || skin.name.includes("Poker Player Cap")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })


    BEANIE.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Gunner Beanie")
        || skin.name.includes("Winter Deers")
        || skin.name.includes("Rasta Beenie")
        || skin.name.includes("Black Beenie Hat")
        || skin.name.includes("Blue Beenie Hat")
        || skin.name.includes("Green Beenie Hat")
        || skin.name.includes("Red Beenie Hat")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    BOONIE.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Fisherman Hat")
        || skin.name.includes("Gentleman's Fedora")
        || skin.name.includes("Farmer Straw Hat")
        || skin.name.includes("Cowboy Sheriff Hat")
        || skin.name.includes("Flower Hat")
        || skin.name.includes("PVC Hat")
        || skin.name.includes("Leather Boonie Hat")
        || skin.name.includes("Hunted Hat")
        || skin.name.includes("Burlap Bandit Hat")
        || skin.name.includes("Cowboy Hat")
        || skin.name.includes("Fisherman Boonie Hat")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    BOOTS.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Dragon Rage Boots")
        || skin.name.includes("Tempered Boots")
        || skin.name.includes("Lightweight Boots")
        || skin.name.includes("Forest Raiders Boots")
        || skin.name.includes("Bombshell Boots")
        || skin.name.includes("Rainbow Pony Boots")
        || skin.name.includes("Blackout Boots")
        || skin.name.includes("Bee Cosplay Boots")
        || skin.name.includes("No Mercy Boots")
        || skin.name.includes("Bombing Boots")
        || skin.name.includes("Desert Raiders Boots")
        || skin.name.includes("Corrupted Boots")
        || skin.name.includes("Cow Moo Flage Boots")
        || skin.name.includes("Bio Integrity Boots")
        || skin.name.includes("Road Romeo Boots")
        || skin.name.includes("Doodle Boots")
        || skin.name.includes("Loot Leader Boots")
        || skin.name.includes("Tactical Combat Boots")
        || skin.name.includes("Brony Boots")
        || skin.name.includes("Marsh Lurker Boots")
        || skin.name.includes("Glory Boots")
        || skin.name.includes("Apocalyptic Knight Boots")
        || skin.name.includes("Punkish Boots")
        || skin.name.includes("Training Boots")
        || skin.name.includes("Cajun Boots")
        || skin.name.includes("Badboy Boots")
        || skin.name.includes("Sky Seal Boots")
        || skin.name.includes("Metalhunter Boots")
        || skin.name.includes("Arctic Wolf Boots")
        || skin.name.includes("Stalker Boots")
        || skin.name.includes("Explorer Boots")
        || skin.name.includes("Army Black Boots")
        || skin.name.includes("Yellow Race Boots")
        || skin.name.includes("Wasteland Hunter Boots")
        || skin.name.includes("Muddy Boots")
        || skin.name.includes("Tailgunner Boots")
        || skin.name.includes("Caravanner Boots")
        || skin.name.includes("Armored Boots")
        || skin.name.includes("Army Armored Boots")
        || skin.name.includes("Combat Boots")
        || skin.name.includes("Tactical Boots")
        || skin.name.includes("Hazard Move Boots")
        || skin.name.includes("Black Boots")
        || skin.name.includes("Scavenged Sneaker Boots")
        || skin.name.includes("Punk Boots")
        || skin.name.includes("Bloody Boots")
        || skin.name.includes("Army Boots")
        || skin.name.includes("Rock Star Boots")
        || skin.name.includes("Tan Boots")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    BURLAPHEAD.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Wrapped Brain")
        || skin.name.includes("Freak Headwrap")
        || skin.name.includes("Shark Headwrap")
        || skin.name.includes("Fish Head")
        || skin.name.includes("Death Mask")
        || skin.name.includes("Outlaw Headwrap")
        || skin.name.includes("Brotherhood Headwrap")
        || skin.name.includes("Shinobi Cowl")
        || skin.name.includes("Bandit Headwrap")
        || skin.name.includes("Minicopter Pilot Helmet")
        || skin.name.includes("SandPrince")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    BURLAPSHIRT.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Pirate Vest & Shirt")
        || skin.name.includes("Captain's Vest and Shirt")
        || skin.name.includes("Burlap and Leather Vest")
        || skin.name.includes("Biker Dad")
        || skin.name.includes("Sleazy Rider")
        || skin.name.includes("Desert Outlaw Burlap Shirt")
        || skin.name.includes("Caravanner Shirt")
        || skin.name.includes("Blacksmith Shirt")
        || skin.name.includes("Rioter's Jacket")
        || skin.name.includes("Santa's Helper Shirt")
        || skin.name.includes("Whens Whip?")
        || skin.name.includes("It is Wednesday, my dudes")
        || skin.name.includes("Road Raider Shirt")
        || skin.name.includes("Leopard Skin Shirt")
        || skin.name.includes("Pirate Shirt")
        || skin.name.includes("Junkyard King Shirt")
        || skin.name.includes("Burlap Bandit Shirt")
        || skin.name.includes("Cowboy Shirt")
        || skin.name.includes("Farmer Overalls Top")
        || skin.name.includes("Gentleman's Shirt")
        || skin.name.includes("Fish Shirt")
        || skin.name.includes("Burlap Disco Shirt")
        || skin.name.includes("Fisherman Burlap Shirt")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    BURLAPSHOES.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Burlap Ninja Slippers")
        || skin.name.includes("Broken Ankles Cast")
        || skin.name.includes("Fish Shoes")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    BURLAPTROUSERS.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Fisherman Burlap Pants")
        || skin.name.includes("Burlap Disco Pants")
        || skin.name.includes("Fish Pants")
        || skin.name.includes("Gentleman's Pants")
        || skin.name.includes("Farmer Overalls Bottom")
        || skin.name.includes("Cowboy Pants")
        || skin.name.includes("Rioter's Pants")
        || skin.name.includes("Road Raider Pants")
        || skin.name.includes("Leopard Skin Pants")
        || skin.name.includes("Pirate Pants")
        || skin.name.includes("Junkyard King Pants")
        || skin.name.includes("Burlap Bandit Pants")
        || skin.name.includes("Blacksmith Pants")
        || skin.name.includes("Desert Outlaw Burlap Pants")
        || skin.name.includes("Recycled Tarp Pants")

        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    COFFEEHELM.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Low Poly Helmet")
        || skin.name.includes("Berserker Helmet")
        || skin.name.includes("Target Helmet")
        || skin.name.includes("Copper Helmet")
        || skin.name.includes("Dragon Rage Helmet")
        || skin.name.includes("Chocolate Easter Helmet")
        || skin.name.includes("Knights Templar Helmet")
        || skin.name.includes("Nutcracker Helmet")
        || skin.name.includes("Frosty Helmet")
        || skin.name.includes("Military Helmet")
        || skin.name.includes("Toy Helmet")
        || skin.name.includes("Glister Helmet")
        || skin.name.includes("Tempered Helmet")
        || skin.name.includes("Fish Helmet")
        || skin.name.includes("Forest Raiders Helmet")
        || skin.name.includes("Rainbow Pony Helmet")
        || skin.name.includes("Lightweight Helmet")
        || skin.name.includes("Desert Raiders Helmet")
        || skin.name.includes("Bombing Helmet")
        || skin.name.includes("Porcelain Helmet")
        || skin.name.includes("Opulent Helmet")
        || skin.name.includes("No Mercy Helmet")
        || skin.name.includes("Cardboard Helmet")
        || skin.name.includes("Mr. Gingerbread Helmet")
        || skin.name.includes("Blackout Helmet")
        || skin.name.includes("Doodle Helmet")
        || skin.name.includes("Lunar Armor Helmet")
        || skin.name.includes("Iceman Helmet")
        || skin.name.includes("Training Helmet")
        || skin.name.includes("Metal Zombie Helmet")
        || skin.name.includes("Bombshell Helmet")
        || skin.name.includes("Heavy Machinery Helmet")
        || skin.name.includes("Solar Panel Helmet")
        || skin.name.includes("Apocalyptic Knight Helmet")
        || skin.name.includes("Azul Helmet")
        || skin.name.includes("Phantom Helmet")
        || skin.name.includes("Peacemaker Helmet")
        || skin.name.includes("Viking Helmet")
        || skin.name.includes("Chaos Helmet")
        || skin.name.includes("Ornate Helmet")
        || skin.name.includes("Scary Helmet")
        || skin.name.includes("Night Stalker Helmet")
        || skin.name.includes("Snap Turtle Helmet")
        || skin.name.includes("Vandal Graffiti Helmet")
        || skin.name.includes("Heavenly Legion Helmet")
        || skin.name.includes("Dwarf Helmet")
        || skin.name.includes("Full Metal Helmet")
        || skin.name.includes("Dominator Helmet")
        || skin.name.includes("Scrapper Helmet")
        || skin.name.includes("Scrap Hazard Helmet")
        || skin.name.includes("Utilizer Helmet")
        || skin.name.includes("Metalhunter Can Helmet")
        || skin.name.includes("Mad Helmet")
        || skin.name.includes("Saboteur's Can Helmet")
        || skin.name.includes("Plywood Helmet")
        || skin.name.includes("Epidemic Helmet")
        || skin.name.includes("Junkyard Samurai Helmet")
        || skin.name.includes("Roadsign Warrior Helmet")
        || skin.name.includes("Desert Patrol Helmet")
        || skin.name.includes("Nordic Beast Helmet")
        || skin.name.includes("Sunrise Helmet")
        || skin.name.includes("Army Armored Helmet")
        || skin.name.includes("Warboy Helmet")
        || skin.name.includes("Welding Helmet")
        || skin.name.includes("Apocalypse Helmet")
        || skin.name.includes("Lizard Skull")
        || skin.name.includes("Skull Hazard")
        || skin.name.includes("Rusty Coffee Can Helmet")
        || skin.name.includes("Spare Parts")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    HIDEBOOTS.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Rudolph Slippers")
        || skin.name.includes("Uprising Hide Shoes")
        || skin.name.includes("Native American Hide Shoes")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    HIDEHALTER.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Leopard Top")
        || skin.name.includes("Caution Tape Top")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    HIDEPANTS.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Uprising Hide Pants")
        || skin.name.includes("Tribesman Hide Pants")

        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    HIDEPONCHO.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Fish Poncho")
        || skin.name.includes("Tribesman Poncho")
        || skin.name.includes("Camo Netting")
        || skin.name.includes("Uprising Hide Poncho")
        || skin.name.includes("Toymaker Poncho")
        || skin.name.includes("Grey Wolf Hide Poncho")


        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })


    HIDESKIRT.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Irish Kilt")
        || skin.name.includes("Blue Tarp Skirt")


        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })



    HIDEVEST.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Tribesman Hide Shirt")
        || skin.name.includes("Celtic Hide Shirt")

        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })


    HOODIE.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Black Gold Hoodie")
        || skin.name.includes("Berserker Hoodie")
        || skin.name.includes("Low Poly Hoodie")
        || skin.name.includes("Copper Hoodie")
        || skin.name.includes("Festive Costume Hoodie")
        || skin.name.includes("Glister Hoodie")
        || skin.name.includes("Dragon Rage Hoodie")
        || skin.name.includes("Renegade Hoodie")
        || skin.name.includes("Charitable Rust 2021 Hoodie")
        || skin.name.includes("Tempered Hoodie")
        || skin.name.includes("Nuclear Fanatic Hoodie")
        || skin.name.includes("Yeti Hoodie")
        || skin.name.includes("Wings Of Love Hoodie")
        || skin.name.includes("Zombie Costume Hoodie")
        || skin.name.includes("Knights Templar Hoodie")
        || skin.name.includes("Forest Raiders Hoodie")
        || skin.name.includes("Desert Raiders Hoodie")
        || skin.name.includes("Shattered Mirror Hoodie")
        || skin.name.includes("Rust Vibes Hoodie")
        || skin.name.includes("Rainbow Pony Hoodie")
        || skin.name.includes("Corrupted Hoodie")
        || skin.name.includes("Whiteout Hoodie")
        || skin.name.includes("Ladybug Cosplay Hoodie")
        || skin.name.includes("Nitrogen Hoodie")
        || skin.name.includes("Lovestruck Hoodie")
        || skin.name.includes("Space Raider Hoodie")
        || skin.name.includes("Winter Hoodie")
        || skin.name.includes("Trust in Rust Hoodie")
        || skin.name.includes("Opulent Hoodie")
        || skin.name.includes("Rusteratu Hoodie")
        || skin.name.includes("Base Invaders Hoodie")
        || skin.name.includes("Bombshell Hoodie")
        || skin.name.includes("Bombing Hoodie")
        || skin.name.includes("Poison Hoodie")
        || skin.name.includes("Azul Hoodie")
        || skin.name.includes("Kayak Hoodie")
        || skin.name.includes("Dragon Hoodie")
        || skin.name.includes("Bee Cosplay Hoodie")
        || skin.name.includes("Hobo Hoodie")
        || skin.name.includes("Uproar Hoodie")
        || skin.name.includes("Blackout Hoodie")
        || skin.name.includes("Conspiracy Nut Hoodie")
        || skin.name.includes("Elite Forest Camo Hoodie")
        || skin.name.includes("Snow Warrior Hoodie")
        || skin.name.includes("Garage Master Hoodie")
        || skin.name.includes("Cow Moo Flage Hoodie")
        || skin.name.includes("Phantom Hoodie")
        || skin.name.includes("Bio Integrity Hoodie")
        || skin.name.includes("Caution Hoodie")
        || skin.name.includes("Road Romeo Jacket")
        || skin.name.includes("Buscador Hoodie")
        || skin.name.includes("Tactical Hoodie")
        || skin.name.includes("Maniac Hoodie")
        || skin.name.includes("Rocker Jacker")
        || skin.name.includes("Rustmas PJ Hoodie")
        || skin.name.includes("Doodle Hoodie")
        || skin.name.includes("Punkish Hoodie")
        || skin.name.includes("Loot Leader Hoodie")
        || skin.name.includes("Operator Hoodie")
        || skin.name.includes("Playmaker Hoodie")
        || skin.name.includes("Apocalyptic Knight Hoodie")
        || skin.name.includes("Cowboy Sheriff Hoodie")
        || skin.name.includes("Airman Hoodie")
        || skin.name.includes("Minicopter Pilot Jacket")
        || skin.name.includes("Tough Bunny Hoodie")
        || skin.name.includes("Training Hoodie")
        || skin.name.includes("No Mercy Hoodie")
        || skin.name.includes("Jockey Hoodie")
        || skin.name.includes("Railway Engineer Hoodie")

        || skin.name.includes("Low Poly Hoodie")
        || skin.name.includes("Scrapper Hoodie")
        || skin.name.includes("Survivor Jacket")
        || skin.name.includes("Christmas Gang Hoodie")
        || skin.name.includes("Electrician Hoodie")
        || skin.name.includes("CCSC Hoodie")
        || skin.name.includes("Checkpoint Hoodie")
        || skin.name.includes("Badboy Hoodie")
        || skin.name.includes("Cajun Hoodie")
        || skin.name.includes("Mad Rider Hoodie")
        || skin.name.includes("Marsh Lurker Hoodie")
        || skin.name.includes("Outlaws Hoodie")
        || skin.name.includes("Brony Hoodie")
        || skin.name.includes("Lumberjack Hoodie")
        || skin.name.includes("Seaman Hoodie")
        || skin.name.includes("Northern Forester Hoodie")
        || skin.name.includes("Urban Ice Hoodie")
        || skin.name.includes("Explorer Hoodie")
        || skin.name.includes("Prospector's Hoodie")
        || skin.name.includes("Revolution Hoodie")
        || skin.name.includes("Chekist's Hoodie")
        || skin.name.includes("Savage Jacket")
        || skin.name.includes("Predator Hoodie")
        || skin.name.includes("Conquistador Hoodie")
        || skin.name.includes("Sky Seal Hoodie")
        || skin.name.includes("Metalhunter Hoodie")
        || skin.name.includes("Arctic Wolf Hoodie")
        || skin.name.includes("Gang Leader Hoodie")
        || skin.name.includes("Wasteland Hunter Hoodie")
        || skin.name.includes("Rocket Factory Crew Hoodie")
        || skin.name.includes("Huntsman Hoodie")
        || skin.name.includes("Tailgunner Hoodie")
        || skin.name.includes("Stalker Hoodie")
        || skin.name.includes("Worker Hoodie")
        || skin.name.includes("Denim Studded Hoodie")
        || skin.name.includes("Nordic Beast Hoodie")
        || skin.name.includes("Yellow Police Jacket")
        || skin.name.includes("Yellow Racer Hoodie")
        || skin.name.includes("Regulator's Hoodie")
        || skin.name.includes("Tank Crew Hoodie")
        || skin.name.includes("Desert Conqueror Hoodie")
        || skin.name.includes("Scudpunk Hoodie")
        || skin.name.includes("Leather Strapped Hoodie")
        || skin.name.includes("Army Armored Hoodie")
        || skin.name.includes("Unknown Territory Hoodie")
        || skin.name.includes("Official Vertiigo Hoodie")
        || skin.name.includes("Ranger's Vest")
        || skin.name.includes("BCHILLZ! Hoodie")
        || skin.name.includes("Safety Crew")
        || skin.name.includes("Cuda87 Hoodie")
        || skin.name.includes("Green Hoodie")
        || skin.name.includes("Blue Hoodie")
        || skin.name.includes("Black Hoodie")
        || skin.name.includes("Bloody Hoodie")
        || skin.name.includes("Skeleton Hoodie")
        || skin.name.includes("Rhinocrunch Hoodie")

        

        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })



   BALACLAVA.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Frankenstein Mask")
        || skin.name.includes("Rotten Scalp")
        || skin.name.includes("Executioner Latex")
        || skin.name.includes("Meat Mask")
        || skin.name.includes("Nerd Glasses")
        || skin.name.includes("Toupee")
        || skin.name.includes("Burlap Brains Balaclava")
        || skin.name.includes("Zipper Face")
        || skin.name.includes("Valentine Balaclava")
        || skin.name.includes("Santa Balaclava")
        || skin.name.includes("Knitted Balaclava")
        || skin.name.includes("Burglar Mask")
        || skin.name.includes("Stitched Skin")
        || skin.name.includes("Skin Balaclava")
        || skin.name.includes("The Rust Knight")
        || skin.name.includes("Nightmare Balaclava")
        || skin.name.includes("Desert Camo Balaclava")
        || skin.name.includes("Double Yellow Balaclava")
        || skin.name.includes("Rorschach Skull")
        || skin.name.includes("Murica Balaclava")
        || skin.name.includes("Red Check Balaclava")
        || skin.name.includes("Forest Camo Balaclava")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })


 JACKET.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Urban Camo Jacket")
        || skin.name.includes("Snowcamo Jacket")
        || skin.name.includes("Red Jacket")
        || skin.name.includes("Multicam Jacket")
        || skin.name.includes("Hunting Jacket")
        || skin.name.includes("Green Jacket")
        || skin.name.includes("Desert Jacket")
        || skin.name.includes("No Mercy Jacket")
        || skin.name.includes("Blackout Jacket")
        || skin.name.includes("Urban Ice Jacket")
        || skin.name.includes("Fire jacket")
        || skin.name.includes("Provocateur Jacket")
        || skin.name.includes("Blue Jacket")
        || skin.name.includes("Bombing Jacket")
        || skin.name.includes("Tempered Jacket")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    LEATHERGLOVE.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Fish Gloves")
        || skin.name.includes("No Mercy Gloves")
        || skin.name.includes("Bee Cosplay Gloves")
        || skin.name.includes("Blackout Gloves")
        || skin.name.includes("Cow Moo Flage Gloves")
        || skin.name.includes("Bio Integrity Gloves")
        || skin.name.includes("Tactical Leather Gloves")
        || skin.name.includes("Training Gloves")
        || skin.name.includes("Playmaker Gloves")
        || skin.name.includes("Loot Leader Gloves")
        || skin.name.includes("Doodle Gloves")
        || skin.name.includes("Road Romeo Gloves")
        || skin.name.includes("Punkish Gloves")
        || skin.name.includes("Apocalyptic Knight Leather Gloves")
        || skin.name.includes("Glory Gloves")
        || skin.name.includes("Survivor Gloves")
        || skin.name.includes("CCSC Gloves")
        || skin.name.includes("Marsh Lurker Gloves")
        || skin.name.includes("Firefighter Gloves")
        || skin.name.includes("Lumberjack Gloves")
        || skin.name.includes("Junkyard King Gloves")
        || skin.name.includes("Badboy Gloves")
        || skin.name.includes("Cajun Gloves")
        || skin.name.includes("Mad Rider Gloves")
        || skin.name.includes("Metalhunter Gloves")
        || skin.name.includes("Sky Seal Gloves")
        || skin.name.includes("Arctic Wolf Gloves")
        || skin.name.includes("Stalker Gloves")
        || skin.name.includes("Tailgunner Gloves")
        || skin.name.includes("Space Rocket Work Gloves")
        || skin.name.includes("Army Armored Gloves")
        || skin.name.includes("Bruiser Gloves")
        || skin.name.includes("Caravanner Gloves")
        || skin.name.includes("Wasteland Hunter Gloves")
        || skin.name.includes("Merciless Gloves")
        || skin.name.includes("Junklord Gloves")
        || skin.name.includes("Black Alligator")
        || skin.name.includes("Duelist Gloves")
        || skin.name.includes("Motorcycle Gloves")
        || skin.name.includes("Boxer's Bandages")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

   LONGSLEEVE.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Rust Goalkeeper Shirt")
        || skin.name.includes("Christmas Elf")
        || skin.name.includes("Battle Worn Long TShirt")
        || skin.name.includes("Merry Reindeer")
        || skin.name.includes("Lawman")
        || skin.name.includes("Nightmare Sweater")
        || skin.name.includes("Green Checkered Shirt")
        || skin.name.includes("Frankensteins Sweater")
        || skin.name.includes("Aztec Long T-Shirt")
        || skin.name.includes("Christmas Jumper")
        || skin.name.includes("Creepy Jack")
        || skin.name.includes("Sign Painter")
        || skin.name.includes("Varsity Jacket")
        || skin.name.includes("Black Longsleeve T-Shirt")
        || skin.name.includes("Grey Longsleeve T-Shirt")
        || skin.name.includes("Orange Longsleeve T-Shirt")
        || skin.name.includes("Yellow Longsleeve T-Shirt")
        
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })


    METALCHESTPLATE.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("ChestPlate")
        || skin.name.includes("Chest Plate")
        || skin.name.includes("Kayak Vest")
        || skin.name.includes("Tribe Warrior Armor")
        || skin.name.includes("Poison Armor Plate")
        || skin.name.includes("Frostwulf Armor")
        || skin.name.includes("Glory Armor Chest")
        || skin.name.includes("Santa Chest Plate")
        || skin.name.includes("Samurai Kozane Do")
        || skin.name.includes("Flyer Vest")
        || skin.name.includes("Salvaged Plating Armor")
        || skin.name.includes("Looter's Chain and Plate")
        || skin.name.includes("Press Vest")
        || skin.name.includes("Chest Resistance")
        || skin.name.includes("Chainmail")
        || skin.name.includes("Machina Plate")
        || skin.name.includes("Flak Vest - Green")
        || skin.name.includes("Plate Carrier - Black")
        
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    METALFACEMASK.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Facemask")
        || skin.name.includes("Rainbow Pony Mask")
        || skin.name.includes("Dread Mask")
        || skin.name.includes("Kayak Helmet")
        || skin.name.includes("Opulent Mask")
        || skin.name.includes("Poison Mask")
        || skin.name.includes("Test Dummy Mask")
        || skin.name.includes("Tribe Warrior Mask")
        || skin.name.includes("Forsaken Era Mask")
        || skin.name.includes("Northwind Mask")
        || skin.name.includes("Frostwulf Mask")
        || skin.name.includes("Glory Mask")
        || skin.name.includes("Vandal Face Mask")
        || skin.name.includes("Troll Daddy Mask")
        || skin.name.includes("Flyer Mask")
        || skin.name.includes("Samurai Somen")
        || skin.name.includes("Glowing Metal Pumpkin Mask")
        || skin.name.includes("War Machine Mask")
        || skin.name.includes("Heavy Industry")
        || skin.name.includes("Clan Leader Mask")
        || skin.name.includes("Warface Mask")
        || skin.name.includes("Red Dead Jester")
        || skin.name.includes("Overlord Mask")
        || skin.name.includes("Looter's Mask")
        || skin.name.includes("Juggernaut Mask")
        || skin.name.includes("Mosaic Mask")
        || skin.name.includes("Scrapyard Curse")
        || skin.name.includes("Hunter Mask")
        || skin.name.includes("Bronze War Mask")
        || skin.name.includes("Mask of Sacrifice")
        || skin.name.includes("Where Eagles Dare")
        || skin.name.includes("Frostbite")
        || skin.name.includes("Steampunk Leather Mask")
        || skin.name.includes("Human Sacrifice Mask")
        || skin.name.includes("Machina Mask")
        || skin.name.includes("Industrial Protection Mask")
        || skin.name.includes("Punishment Mask")
        || skin.name.includes("Tempered Mask")
        || skin.name.includes("Aztek Night Hunter")
        || skin.name.includes("Blingin Grill")
        || skin.name.includes("Big Grin")
        || skin.name.includes("Glowing Skull")
        || skin.name.includes("Sacrificial Mask")
        || skin.name.includes("Rusted Smile")
        || skin.name.includes("face mask")
        
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    MINERSHAT.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Workman's Safety Hat")
        || skin.name.includes("Army Miner Hat")
        || skin.name.includes("Train Conductor Miner's Hat")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    PANTS.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Black Gold Pants")
        || skin.name.includes("Berserker Pants")
        || skin.name.includes("Low Poly Pants")
        || skin.name.includes("Copper Pants")
        || skin.name.includes("Wings Of Love Pants")
        || skin.name.includes("Renegade Pants")
        || skin.name.includes("Dragon Rage Pants")
        || skin.name.includes("Glister Pants")
        || skin.name.includes("Festive Costume Pants")
        || skin.name.includes("Yeti Pants")
        || skin.name.includes("Nuclear Fanatic Pants")
        || skin.name.includes("Tempered Pants")
        || skin.name.includes("Zombie Costume Pants")
        || skin.name.includes("Knights Templar Pants")
        || skin.name.includes("Corrupted Pants")
        || skin.name.includes("Rainbow Pony Pants")
        || skin.name.includes("Rust Vibes Pants")
        || skin.name.includes("Shattered Mirror Pants")
        || skin.name.includes("Desert Raiders Pants")
        || skin.name.includes("Forest Raiders Pants")
        || skin.name.includes("Whiteout Pants")
        || skin.name.includes("Space Raider Pants")
        || skin.name.includes("Lovestruck Pants")
        || skin.name.includes("Nitrogen Pants")
        || skin.name.includes("Bombshell Pants")
        || skin.name.includes("Bombing Pants")
        || skin.name.includes("Winter Pants")
        || skin.name.includes("Ladybug Cosplay Pants")
        || skin.name.includes("Base Invaders Pants")
        || skin.name.includes("Rusteratu Pants")
        || skin.name.includes("Opulent Pants")
        || skin.name.includes("Poison Pants")
        || skin.name.includes("Azul Pants")
        || skin.name.includes("Kayak Pants")
        || skin.name.includes("Elite Forest Camo Pants")
        || skin.name.includes("Snow Warrior Pants")
        || skin.name.includes("Garage Master Pants")
        || skin.name.includes("Hobo Pants")
        || skin.name.includes("Bee Cosplay Pants")
        || skin.name.includes("Dragon Pants")
        || skin.name.includes("Conspiracy Nut Pants")
        || skin.name.includes("Blackout Pants")
        || skin.name.includes("Uproar Pants")
        || skin.name.includes("Cow Moo Flage Pants")
        || skin.name.includes("Phantom Pants")
        || skin.name.includes("Bio Integrity Pants")
        
        || skin.name.includes("Rocker Pants")
        || skin.name.includes("Rustmas PJ Pants")
        || skin.name.includes("Doodle Pants")
        || skin.name.includes("Buscador Pants")
        || skin.name.includes("Road Romeo Pants")
        || skin.name.includes("Caution Workpants")
        || skin.name.includes("Maniac Pants")
        || skin.name.includes("Tactical Pants")
        || skin.name.includes("Punkish Pants")
        || skin.name.includes("Loot Leader Trousers")
        || skin.name.includes("Operator Pants")
        || skin.name.includes("Training Pants")
        || skin.name.includes("No Mercy Pants")
        || skin.name.includes("Jockey Pants")
        || skin.name.includes("Cowboy Sheriff Pants")
        || skin.name.includes("Apocalyptic Knight Pants")
        || skin.name.includes("Playmaker Pants")
        || skin.name.includes("Tough Bunny Pants")
        || skin.name.includes("Minicopter Pilot Pants")
        || skin.name.includes("Airman Pants")
        || skin.name.includes("Railway Engineer Pants")
        || skin.name.includes("Survivor Pants")
        || skin.name.includes("Christmas Gang Pants")
        || skin.name.includes("Cajun Pants")
        || skin.name.includes("Brony Pants")
        || skin.name.includes("Mad Rider Pants")
        || skin.name.includes("Marsh Lurker Pants")
        || skin.name.includes("CCSC Pants")
        || skin.name.includes("Electrician Pants")
        || skin.name.includes("Badboy Pants")
        || skin.name.includes("Checkpoint Pants")
        || skin.name.includes("Outlaws Pants")
        || skin.name.includes("Lumberjack Pants")
        || skin.name.includes("Seaman Pants")
        || skin.name.includes("Northern Forester Pants")
        || skin.name.includes("Explorer Pants")
        || skin.name.includes("Prospector's Pants")
        || skin.name.includes("Revolution Jeans")
        || skin.name.includes("Firefighter Pants")
        || skin.name.includes("Chekist's Pants")
        || skin.name.includes("Urban Ice Pants")
        || skin.name.includes("Santa's Helper Pants")
        || skin.name.includes("Scrapper Pants")
        || skin.name.includes("Savage Pants")
        || skin.name.includes("Predator Pants")

        || skin.name.includes("Conquistador Pants")
        || skin.name.includes("Tank Crew Pants")
        || skin.name.includes("Huntsman Pants")
        || skin.name.includes("Tailgunner Pants")
        || skin.name.includes("Stalker Pants")
        || skin.name.includes("Arctic Wolf Pants")
        || skin.name.includes("Metalhunter Pants")
        || skin.name.includes("Sky Seal Pants")
        || skin.name.includes("Wasteland Hunter Pants")
        || skin.name.includes("Worker Pants")
        || skin.name.includes("Nordic Beast Pants")
        || skin.name.includes("Yellow Racer Pants")
        || skin.name.includes("Caravanner Pants")
        || skin.name.includes("Army Armored Pants")
        || skin.name.includes("Punk Rock Pants")
        || skin.name.includes("Blue Track Pants")
        || skin.name.includes("Old Prisoner Pants")
        || skin.name.includes("Steppe Camo Pants")
        || skin.name.includes("One Percenter Chaps")
        || skin.name.includes("Desert Conqueror Pants")
        || skin.name.includes("Forest Camo Pants")
        || skin.name.includes("Snow Camo Pants")
        || skin.name.includes("Urban Camo Pants")
        || skin.name.includes("Blue Jeans")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })


    RIOTHELM.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Captain's Helmet")
        || skin.name.includes("Born To Loot")
        || skin.name.includes("Ruthless Riot Helmet")
        || skin.name.includes("Biker Goth Helmet")
        || skin.name.includes("Hardline Helmet")
        || skin.name.includes("Digger Helmet")
        || skin.name.includes("Medical Riot Helmet")
        || skin.name.includes("Blast Shield Helmet")
        || skin.name.includes("Checkpoint Riot Helmet")
        || skin.name.includes("Yellow Racer Helmet")
        || skin.name.includes("Raider Helmet")
        || skin.name.includes("Furious Raider Riot Helmet")
        || skin.name.includes("Bumble Bee Helmet")
        || skin.name.includes("Operator Helmet")
        || skin.name.includes("Road Romeo Helmet")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    ROADSIGNVEST.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Low Poly Vest")
        || skin.name.includes("Roadsign Vest")
        || skin.name.includes("Copper Vest")
        || skin.name.includes("Dragon Rage Vest")
        || skin.name.includes("Chocolate Easter Vest")
        || skin.name.includes("Knights Templar Vest")
        || skin.name.includes("Nutcracker Vest")
        || skin.name.includes("Frosty Vest")
        || skin.name.includes("Military Vest")
        || skin.name.includes("Toy Vest")
        || skin.name.includes("Glister Vest")
        || skin.name.includes("Fish Vest")
        || skin.name.includes("Rainbow Pony Vest")
        || skin.name.includes("Lightweight Vest")
        || skin.name.includes("Corrupted Vest")
        || skin.name.includes("Shattered Mirror Vest")
        || skin.name.includes("Whiteout Vest")
        || skin.name.includes("Mr. Gingerbread Vest")
        || skin.name.includes("Cardboard Vest")
        || skin.name.includes("No Mercy Vest")
        || skin.name.includes("Centurion Vest")
        || skin.name.includes("Oxums Racing Team Vest")
        || skin.name.includes("Metal Zombie Vest")
        || skin.name.includes("Training Vest")
        || skin.name.includes("Iceman Armor")
        || skin.name.includes("Lunar Armor Vest")
        || skin.name.includes("Doodle Vest")
        || skin.name.includes("Blackout Vest")
        || skin.name.includes("Bombshell Vest")
        || skin.name.includes("Solar Panel Vest")
        || skin.name.includes("Apocalyptic Knight Vest")
        || skin.name.includes("Phantom Vest")
        || skin.name.includes("Viking Armor Vest")
        || skin.name.includes("Chaos Armored Vest")
        || skin.name.includes("Ornate Vest")
        || skin.name.includes("Scary Vest")
        || skin.name.includes("Night Stalker Vest")
        || skin.name.includes("Peacemaker Vest")
        || skin.name.includes("Snap Turtle Vest")
        || skin.name.includes("Vandal Graffiti Vest")
        || skin.name.includes("Heavenly Legion Vest")
        || skin.name.includes("Full Metal Vest")
        || skin.name.includes("Defender Vest")
        || skin.name.includes("Samurai Dou")
        || skin.name.includes("Loot Leader Vest")
        || skin.name.includes("The Last Viking Vest")
        || skin.name.includes("Caution Vest")
        || skin.name.includes("Dominator Vest")
        || skin.name.includes("Scrap Hazard Vest")
        || skin.name.includes("Scrapper Vest")
        || skin.name.includes("Saboteur's Vest")
        || skin.name.includes("Mad Vest")
        || skin.name.includes("Heavy Alloy Vest")
        || skin.name.includes("Deathwing Vest")
        || skin.name.includes("Plywood Vest")
        || skin.name.includes("Cobalt Armor Vest")
        || skin.name.includes("Utilizer Vest")
        || skin.name.includes("Apocalypse Vest")
        || skin.name.includes("Freebooter Vest")
        || skin.name.includes("Desert Patrol Vest")
        || skin.name.includes("Patchwork Cuirass")
        || skin.name.includes("Spiked Metal Vest")
        || skin.name.includes("Army Sign Vest")
        || skin.name.includes("Junker's Vest")
        || skin.name.includes("Nordic Beast Vest")
        || skin.name.includes("Wasteland Legionnaire")
        || skin.name.includes("Junkyard Samurai Vest")
        || skin.name.includes("Chopshop Body Armor")
        || skin.name.includes("British Sign Vest")
        || skin.name.includes("Hazard Protection Vest")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    ROADSIGNKILT.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Roadsign Kilt")
        || skin.name.includes("Roadsign Pants")
        || skin.name.includes("Low Poly Kilt")
        || skin.name.includes("Copper Kilt")
        || skin.name.includes("Dragon Rage Kilt")
        || skin.name.includes("Chocolate Easter Kilt")
        || skin.name.includes("Knight Templar Kilt")
        || skin.name.includes("Military Kilt")
        || skin.name.includes("Nutcracker Kilt")
        || skin.name.includes("Frosty Kilt")
        || skin.name.includes("Glister Kilt")
        || skin.name.includes("Toy Kilt")
        || skin.name.includes("Lightweight Kilt")
        || skin.name.includes("Mr. Gingerbread Kilt")
        || skin.name.includes("Bombing Kilt")
        || skin.name.includes("Shattered Mirror Kilt")
        || skin.name.includes("Whiteout Kilt")
        || skin.name.includes("Cardboard Kilt")
        || skin.name.includes("No Mercy Kilt")
        || skin.name.includes("Centurion Kilt")
        || skin.name.includes("Oxums Racing Team Pants")
        || skin.name.includes("Blackout Kilt")
        || skin.name.includes("Metal Zombie Kilt")
        || skin.name.includes("Training Kilt")
        || skin.name.includes("Tactical Kilt")
        || skin.name.includes("Iceman Kilt")
        || skin.name.includes("Lunar Armor Pants")
        || skin.name.includes("Doodle Kilt")
        || skin.name.includes("Bombshell Vest")
        || skin.name.includes("Solar Panel Vest")
        || skin.name.includes("Bombshell Kilt")
        || skin.name.includes("Playmaker Kilt")
        || skin.name.includes("Scrapper Kilt")
        || skin.name.includes("Solar Panel Pants")
        || skin.name.includes("Apocalyptic Knight Kilt")
        || skin.name.includes("Scary Kilt")
        || skin.name.includes("Night Stalker Kilt")
        || skin.name.includes("Glory Kilt")
        || skin.name.includes("Phantom Kilt")
        || skin.name.includes("Ornate Pants")
        || skin.name.includes("Chaos Armored Pants")
        || skin.name.includes("Viking Armor Pants")
        || skin.name.includes("Peacemaker Pants")
        || skin.name.includes("Snap Turtle Pants")
        || skin.name.includes("Vandal Graffiti Pants")
        || skin.name.includes("Caution Pants")
        || skin.name.includes("Dominator Pants")
        || skin.name.includes("Full Metal Kilt")
        || skin.name.includes("Samurai Kusazuri")
        || skin.name.includes("Heavenly Legion Kilt")
        || skin.name.includes("Loot Leader Pants")
        || skin.name.includes("Samurai Haidate")
        || skin.name.includes("Defender Pants")
        || skin.name.includes("Scrap Hazard Kilt")
        || skin.name.includes("Saboteur's Pants")
        || skin.name.includes("Mad Pants")
        || skin.name.includes("Plywood Kilt")
        || skin.name.includes("Cobalt Armor Pants")
        || skin.name.includes("Utilizer Pants")
        || skin.name.includes("Heavy Alloy Pants")
        || skin.name.includes("Deathwing Pants")
        || skin.name.includes("Apocalypse Kilt")
        || skin.name.includes("Freebooter Pants")
        || skin.name.includes("Desert Patrol Pants")
        || skin.name.includes("Army Sign Kilt")
        || skin.name.includes("Junker's Kilt")
        || skin.name.includes("Nordic Beast Kilt")
        || skin.name.includes("Junkyard Samurai Pants")
        || skin.name.includes("Patchwork War Kilt")
        || skin.name.includes("Spiked Metal Kilt")
        || skin.name.includes("Chopshop Kilt")
        || skin.name.includes("British Sign Pants")
        || skin.name.includes("Hazard Cover Pants")

        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    ROADSIGNGLOVES.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Roadsign Gloves")
        || skin.name.includes("Dragon Rage Gloves")
        || skin.name.includes("Desert Raiders Gloves")


        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    SHIRT.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Autumn Hunter's Shirt")
        || skin.name.includes("Sergeant Shirt")
        || skin.name.includes("Survival Shirt")
        || skin.name.includes("Green Lumberjack")
        || skin.name.includes("Red Lumberjack")
        || skin.name.includes("The Blue Death")
  

        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    
    SHORTS.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Shorts")
  

        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })



    SNOWJACKET.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Fireman's Jacket")
        || skin.name.includes("Telogreika Jacket")
        || skin.name.includes("Woodland")
        || skin.name.includes("60's Army Jacket")
        || skin.name.includes("Salvaged Shirt, Coat and Tie")
  

        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })






    SHORTS.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Shorts")
  

        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })


    TSHIRT.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Rust Footballer Shirt")
        || skin.name.includes("Crossbone Crew")
        || skin.name.includes("Shadowfrax TShirt")
        || skin.name.includes("Ser Winter TShirt")
        || skin.name.includes("Argyle Scavenger")
        || skin.name.includes("Missing Textures TShirt")
        || skin.name.includes("Hacker Valley Veteran")
        || skin.name.includes("Facepunch TShirt")
        || skin.name.includes("Vyshyvanka Shirt")
        || skin.name.includes("Skull & Bones TShirt")
        || skin.name.includes("Baseball Tshirt")
        || skin.name.includes("Murderer T-Shirt")
        || skin.name.includes("Smile T-Shirt")
        || skin.name.includes("Target Practice T-Shirt")
        || skin.name.includes("Forest Camo Tshirt")
        || skin.name.includes("German Tshirt")
        || skin.name.includes("Russia Tshirt")
        || skin.name.includes("Black Tshirt")
        || skin.name.includes("Blue Tshirt")
        || skin.name.includes("Red Tshirt")
        || skin.name.includes("Urban Camo")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })


    TANKTOP.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Black Mesh Crop Top")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    REACTIVETARGET.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("On Target")
        || skin.name.includes("Led Light Target")
        || skin.name.includes("Decoy Target")
        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })

    RUG.addEventListener("click", () => {
      const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
      form.addEventListener('submit', () => {
        for (let i = 0; i < 3379; i++) { 
          if (elementList[i]) {
            elementList[i].style.display = 'flex';
        }
      }
        skins.forEach(skin => {
        const Remove1 = skin.name.includes("Easter Rug")
        || skin.name.includes("Camouflage Net")
        || skin.name.includes("Panamanian Rug")
        || skin.name.includes("Rustmas Rug")
        || skin.name.includes("Rust Island Car Rug")
        || skin.name.includes("Bandit Rug")
        || skin.name.includes("Blood & Fire")
        || skin.name.includes("Summer Rug")
        || skin.name.includes("Scientist Rug")
        || skin.name.includes("Tarp Rug")
        || skin.name.includes("Rubber Hazard Mat")
        || skin.name.includes("Tailor`s Carpet")
        || skin.name.includes("Soviet Carpet")

        skin.element.classList.toggle("hide", !Remove1)
        })
      })
    })
price2();

    
// async function price1() {
//   const response1 = await fetch("/route1");
//   const data = await response1.json();
//   for (let i = 0; i < 100; i++) {
//     document.querySelector(`#price${i}`).textContent = data[i].sell_price_text;
//     document.querySelector(`#name${i}`).textContent = data[i].name;
//     document.querySelector(`#img${i}`).src =
//       "https://community.cloudflare.steamstatic.com/economy/image/" +
//       data[i].asset_description.icon_url +
//       "/360fx360f";
//     var a1 = document.getElementById(`link${i}`);
//     a1.href =
//       "https://steamcommunity.com/market/listings/252490/" + data[i].name;
//   }
//   console.log(data);
// }

// data1.forEach(skin => {
//   const card = userCardTemplate.content.cloneNode(true).children[0]
//   console.log(card)

// });

// price1();
