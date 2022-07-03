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
      for (let i = 0; i < 3160; i++) { 
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
    for (let i = 0; i < 3160; i++) { 
      if (elementList[i]) {
        elementList[i].style.display = 'flex';
    }
  }
    skins.forEach(skin => {
    const isVisible = skin.name.includes("OPS SAR") 
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
    for (let i = 0; i < 3160; i++) { 
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
    for (let i = 0; i < 3160; i++) { 
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
    || skin.name.includes("Small Box from Hell") 
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
    for (let i = 0; i < 3160; i++) { 
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
    for (let i = 0; i < 3160; i++) { 
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
    for (let i = 0; i < 3160; i++) { 
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
    for (let i = 0; i < 3160; i++) { 
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
    for (let i = 0; i < 3160; i++) { 
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
    for (let i = 0; i < 3160; i++) { 
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
    for (let i = 0; i < 3160; i++) { 
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
    for (let i = 0; i < 3160; i++) { 
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
    for (let i = 0; i < 3160; i++) { 
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
    || skin.name.includes("Last Blast Twins")
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
    for (let i = 0; i < 3160; i++) { 
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
    for (let i = 0; i < 3160; i++) { 
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
    for (let i = 0; i < 3160; i++) { 
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
    for (let i = 0; i < 3160; i++) { 
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
    for (let i = 0; i < 3160; i++) { 
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
    for (let i = 0; i < 3160; i++) { 
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
        for (let i = 0; i < 3160; i++) { 

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
        for (let i = 0; i < 3160; i++) { 
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
        // || skin.name.includes("Batteries Not Included")
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
        || skin.name.includes("Wild Flame MP5")    
        // skin.element.classList.toggle("show", isVisible)
        skin.element.classList.toggle("hide", !isVisible)
        })
      })
    })




    
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
price2();










// OLD


  // data1.documents[101].length
  // for (let i = 0; i <= 200; i++) {
  //   document.querySelector(`#price${i}`).textContent = "$ " + data1.documents[i].value.prices.latest;
  //   document.querySelector(`#name${i}`).textContent = data1.documents[i].value.market_name;
  //   document.querySelector(`#img${i}`).src =
  //   data1.documents[i].value.image;
  //   var a1 = document.getElementById(`link${i}`);
  //   a1.href =
  //     "https://steamcommunity.com/market/listings/252490/" + data1.documents[i].value.market_name;
  // }


    //   return {name: data1.documents[i].value.market_name, 
    // price: data1.documents[i].value.prices.latest,
    // link: "https://steamcommunity.com/market/listings/252490/" + data1.documents[i].value.market_name, 
    // image: data1.documents[i].value.image, element: card}





    //LOAD MORE BUTTON 


    // let currentItems = 100;
    
    // loadmore.addEventListener('click', (e) => {
    //     const elementList = [...document.querySelectorAll(`body > div.user-cards > div:nth-child(n) > div`)];
    //     for (let i = currentItems; i < currentItems + 100; i++) {
          
            // if (elementList[i]) {
            //     elementList[i].style.display = 'flex';
            // }
    //     }
    //     currentItems += 100;

    //     // Load more button will be hidden after list fully loaded
    //     if (currentItems >= elementList.length) {
    //         event.target.style.display = 'none';
    //     }
    // })