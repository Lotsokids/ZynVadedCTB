// Zynvaded Stat Sheets - app logic
(function(){
  const FACTIONS = [
    { id:'zyn', name:'Zyn', desc:'United Zyn Forces', cls:'faction-zn', img: 'resources/factions/Zyn.png' },
    { id:'kyllal', name:"Kyll'al Specific", desc:"Kill 'em all, let Zred'Gaz sort 'em out!", cls:'faction-zn', img: "resources/factions/Kyll'al.png" },
    { id:'savm', name:"Sav'm Specific", desc:"Want no part of an invasion as in Savin' our butts.", cls:'faction-zn', img: 'resources/factions/Sav\'m.png' },
    { id:'terra', name:'Terra', desc:'This is our planet - BUGGER OFF!', cls:'faction-tr', img: 'resources/factions/Terra.png' },
    { id:'skaylz', name:"Skayl'z", desc:'Warlike tribe of many different species of reptile.', cls:'faction-sk', img: "resources/factions/Skayl'z.png" },
    { id:'zedz', name:'Zedz', desc:'Dead Zyn and Terra warriors + Pesticides = Zedz', cls:'faction-zd', img: 'resources/factions/Zedz.png' },
    { id:'mercz', name:'Mercz', desc:'Flexible mercenaries. Versatile contracts.', cls:'faction-mc', img: 'resources/factions/Mercz.png' },
    { id:'attachments', name:'Attachments', desc:'Small support grub attachments (Ammo, Medic, etc.)', cls:'faction-at', img: 'resources/factions/Attachments.png' },
    { id:'other', name:'Other', desc:'Other models and accessories', cls:'faction-zn', img: 'resources/factions/Rulebook.png' },
    { id:'tournamentmodels', name:'Tournament Models', desc:'Special tournament and competition models', cls:'faction-mc', img: 'resources/factions/TournamentModels.png' },
    { id:'zedbydaylight', name:'Zed By Daylight', desc:'Survival horror game expansion', cls:'faction-zd', img: 'resources/factions/ZedByDaylight.png' },
    { id:'escapefromhouscatraz', name:'Escape From Houscatraz', desc:'Prison break adventure game', cls:'faction-tr', img: 'resources/factions/EscapeFromHouscatraz.png' },
  ];

  // Copy of UNITS data from checklist.js (importing the same structure)
  const UNITS = {
    zyn:[
      {id:'zyn-l1', name:'Captain (M)', slot:'LEADER', art:'', img:'resources/models/Zyn/Captain.png'},
      {id:'zyn-l4', name:'Captain (F)', slot:'LEADER', art:'', img:'resources/models/Zyn/Captain2.png'},
      {id:'zyn-l2', name:'Sergeant (Dice)', slot:'LEADER', art:'', img:'resources/models/Zyn/Sergeant.png'},
      {id:'zyn-l5', name:'Sergeant (Bottle Cap)', slot:'LEADER', art:'', img:'resources/models/Zyn/Sergeant2.png'},
      {id:'zyn-l3', name:"Kla'Tu", slot:'LEADER', art:'', img:'resources/models/Zyn/Klatu.png'},
      {id:'zyn-l6', name:"Shotgunner (Shotgun)", slot:'LEADER', art:'', img:'resources/models/Zyn/Shotgunner1.png'},
      {id:'zyn-l7', name:"Shotgunner (Sword)", slot:'LEADER', art:'', img:'resources/models/Zyn/Shotgunner2.png'},
      {id:'zyn-l8', name:"Shotgunner (Event 2023)", slot:'LEADER', art:'', img:'resources/models/Zyn/ShotgunnerEvent.png'},
      {id:'zyn-l9', name:"Shotgunner (Convention 2023)", slot:'LEADER', art:'', img:'resources/models/Zyn/ShotgunnerConvention.png'},
      {id:'zyn-l10', name:"Shotgunner (Running)", slot:'LEADER', art:'', img:'resources/models/Zyn/Shotgunner5.png'},
      {id:'zyn-s1', name:'Brawler', slot:'SUPPORT', art:'', img:'resources/models/Zyn/Brawler.png'},
      {id:'zyn-s2', name:'Heavy Gunner (F)', slot:'SUPPORT', art:'', img:'resources/models/Zyn/Heavy Gunner.png'},
      {id:'zyn-s6', name:'Heavy Gunner (M)', slot:'SUPPORT', art:'', img:'resources/models/Zyn/Heavy Gunner2.png'},
      {id:'zyn-s3', name:'Medic', slot:'SUPPORT', art:'', img:'resources/models/Zyn/Medic.png'},
      {id:'zyn-s4', name:'Rocket Trooper', slot:'SUPPORT', art:'', img:'resources/models/Zyn/Rocket Trooper.png'},
      {id:'zyn-s5', name:"Ve'Rata", slot:'SUPPORT', art:'', img:'resources/models/Zyn/Verata.png'},
      {id:'zyn-c1', name:'Recon (Standing)', slot:'SCOUT', art:'', img:'resources/models/Zyn/Recon2.png'},
      {id:'zyn-c8', name:'Recon (Kneeling)', slot:'SCOUT', art:'', img:'resources/models/Zyn/Recon1.png'},
      {id:'zyn-c6', name:'Recon Variant 3', slot:'SCOUT', art:'', img:'resources/models/Zyn/Recon3.png'},
      {id:'zyn-c2', name:'Sniper (F)', slot:'SCOUT', art:'', img:'resources/models/Zyn/Sniper.png'},
      {id:'zyn-c7', name:'Sniper (M)', slot:'SCOUT', art:'', img:'resources/models/Zyn/Sniper2.png'},
      {id:'zyn-c3', name:'Swordz Master', slot:'SCOUT', art:'', img:'resources/models/Zyn/SwordzMaster.png'},
      {id:'zyn-c4', name:'W.A.S.P.', slot:'SCOUT', art:'', img:'resources/models/Zyn/WASP.png'},
      {id:'zyn-c5', name:"Nik'To", slot:'SCOUT', art:'', img:'resources/models/Zyn/Nikto.png'},
    ],
    kyllal:[
      // Empty for now, inherit from Zyn
    ],
    savm:[
      // Empty for now, inherit from Zyn
    ],
    terra:[
      {id:'terra-l1', name:'Fyre Fly', slot:'LEADER', art:'', img:'resources/models/Terra/Fyre Fly.png'},
      {id:'terra-l2', name:'Sorceress', slot:'LEADER', art:'', img:'resources/models/Terra/Sorceress.png'},
      {id:'terra-l3', name:"Light'Nin Bugg", slot:'LEADER', art:'', img:'resources/models/Terra/Lightninbugg.png'},
      {id:'terra-s1', name:'Gunsmith', slot:'SUPPORT', art:'', img:'resources/models/Terra/Gunsmith.png'},
      {id:'terra-s2', name:'Hooligan', slot:'SUPPORT', art:'', img:'resources/models/Terra/Hooligan.png'},
      {id:'terra-s3', name:"Tank'Rantula", slot:'SUPPORT', art:'', img:'resources/models/Terra/Tankrantula.png'},
      {id:'terra-c1', name:'Assassin', slot:'SCOUT', art:'', img:'resources/models/Terra/Assassin.png'},
      {id:'terra-c2', name:'Huntsmen', slot:'SCOUT', art:'', img:'resources/models/Terra/Huntsman.png'},
      {id:'terra-c4', name:'Huntsmen (Event 2024)', slot:'SCOUT', art:'', img:'resources/models/Terra/HuntsmanConvention2024.png'},
      {id:'terra-c3', name:'Wingnut', slot:'SCOUT', art:'', img:'resources/models/Terra/Wingnut.png'},
    ],
    skaylz:[
      {id:'skaylz-l1', name:"Stry'kr", slot:'LEADER', art:'', img:'resources/models/Skaylz/Strykr.png'},
      {id:'skaylz-s1', name:"F'rug", slot:'SUPPORT', art:'', img:'resources/models/Skaylz/Frug.png'},
      {id:'skaylz-c1', name:"Snay'k", slot:'SCOUT', art:'', img:'resources/models/Skaylz/Snayk.png'},
    ],
    zedz:[
      {id:'zedz-l1', name:'Necromancer', slot:'LEADER', art:'', img:'resources/models/Zedz/Necromancer.png', cbp: 15},
      {id:'zedz-s1', name:"B'Rserk'R", slot:'SUPPORT', art:'', img:'resources/models/Zedz/BRserkR.png', bp: 9},
      {id:'zedz-s2', name:"Grubadier", slot:'SUPPORT', art:'', img:'resources/models/Zedz/Grubadier.png', bp: 9},
      {id:'zedz-c1', name:'Zed Bugz', slot:'SCOUT', art:'', img:'resources/models/Zedz/ZedBugz.png', bp: 3},
      {id:'zedz-c2', name:'Zed Grubz', slot:'SCOUT', art:'', img:'resources/models/Zedz/ZedGrubz.png', bp: 1},
      {id:'zedz-c3', name:'Burst Grubz', slot:'SCOUT', art:'', img:'resources/models/Zedz/BurstGrubz.png', bp: 1},
      {id:'zedz-c4', name:'Grub Chukz', slot:'SCOUT', art:'', img:'resources/models/Zedz/GrubChukz.png', bp: 1},
      {id:'zedz-c5', name:'Grubhemoth', slot:'SCOUT', art:'', img:'resources/models/Zedz/Grubhemoth.png', bp: 5},
    ],
    mercz:[
      {id:'mercz-alyse', name:"Al'Yse", slot:'LEADER', img:'resources/models/Mercz/AlYse.png', type: 'both', cbp: 12},
      {id:'mercz-amus', name:'Amus the Hunter', slot:'LEADER/SUPPORT', img:'resources/models/Mercz/Amus.png', type: 'mercz'},
      {id:'mercz-amus2', name:'Amus the Hunter (Event 2023)', slot:'LEADER/SUPPORT', img:'resources/models/Mercz/AmusConvention.png', type: 'mercz'},
      {id:'mercz-amus3', name:'Amus the Hunter (Event 2025)', slot:'LEADER/SUPPORT', img:'resources/models/Mercz/AmusRunningConvention2025.png', type: 'mercz'},
      {id:'mercz-balodek', name:"Balo'Dek", slot:'SUPPORT', img:'resources/models/Mercz/Balodek.png', type: 'mercz'},
      {id:'mercz-capzmerica', name:"Cap Z'Merica", slot:'LEADER', img:'resources/models/Mercz/CapZMerica.png', type: 'mercz'},
      {id:'mercz-capzmerica2', name:"Cap Z'Merica (Event 2026)", slot:'LEADER', img:'resources/models/Mercz/CapZMericaEvent2026.png', type: 'mercz'},
      {id:'mercz-dash', name:"D'Ash", slot:'LEADER', img:'resources/models/Mercz/DAsh.png', type: 'mercz'},
      {id:'mercz-deviant', name:"Devi'Ant", slot:'SCOUT', img:'resources/models/Mercz/DeviAnt.png', type: 'mercz'},
      {id:'mercz-dezell', name:"De'Zell", slot:'ANY SLOT', img:'resources/models/Mercz/DeZell.png', type: 'mercz'},
      {id:'mercz-hobehorze', name:"Hob'EHorze", slot:'SCOUT', img:'resources/models/Mercz/Hobehorze.png', type: 'mercz'},
      {id:'mercz-komobai', name:"Ko'Mo'Bai", slot:'LEADER', img:'resources/models/Mercz/KoMoBai.png', type: 'mercz'},
      {id:'mercz-kopekat', name:"Kop'Ekat", slot:'SCOUT', img:'resources/models/Mercz/KopEkat.png', type: 'mercz'},
      {id:'mercz-logaan', name:"Lo'gaan", slot:'SUPPORT', img:'resources/models/Mercz/Logaan.png', type: 'mercz'},
      {id:'mercz-z800', name:'Z-800', slot:'SUPPORT', img:'resources/models/Mercz/Z800.png', type: 'mercz'},
      {id:'mercz-zautja', name:"Zaut'Ja", slot:'NONE', img:'resources/models/Mercz/Zautja.png', type: 'mercz'},
      {id:'mercz-zautja2', name:"Zaut'Ja (Stealth)", slot:'NONE', img:'resources/models/Mercz/ZautjaClear.png', type: 'mercz'},
      {id:'mercz-zedpul', name:"Zed'Pul", slot:'SCOUT', img:'resources/models/Mercz/ZedPul.png', type: 'mercz'},
      {id:'mercz-zobafezz', name:'Zoba Fezz', slot:'NONE', img:'resources/models/Mercz/ZobaFezz.png', type: 'mercz'},
      {id:'mercz-jazon', name:"Ja'Zon", slot:'SUPPORT', img:'resources/models/Mercz/Jazon.png', type: 'zed-mercz', bp: 10},
      {id:'mercz-pinzed', name:'Pin-Zed', slot:'LEADER', img:'resources/models/Mercz/PinZed.png', type: 'zed-mercz', cbp: 15},
      {id:'mercz-tex', name:'Tex', slot:'SUPPORT', img:'resources/models/Mercz/Tex.png', type: 'zed-mercz', bp: 10},
      {id:'mercz-zennywise', name:"Zenny'Wise", slot:'LEADER', img:'resources/models/Mercz/ZennyWise.png', type: 'zed-mercz', cbp: 13},
    ],
    attachments:[
      {id:'attachments-ammo', name:'Ammo Grub', slot:'ATTACHMENT', type:'Support Grub', art:'', img:'resources/models/Attachments/AmmoGrub.png'},
      {id:'attachments-buzz', name:'Buzz Grub', slot:'ATTACHMENT', type:'Support Grub', art:'', img:'resources/models/Attachments/BuzzGrub.png'},
      {id:'attachments-covid', name:'Covid Grub', slot:'ATTACHMENT', type:'Support Grub', art:'', img:'resources/models/Attachments/CovidGrub.png'},
      {id:'attachments-marker', name:'Marker Grub', slot:'ATTACHMENT', type:'Support Grub', art:'', img:'resources/models/Attachments/MarkerGrub.png'},
      {id:'attachments-medic', name:'Medic Grub', slot:'ATTACHMENT', type:'Support Grub', art:'', img:'resources/models/Attachments/MedicGrub.png'},
      {id:'attachments-minigun', name:'Minigun Grub', slot:'ATTACHMENT', type:'Support Grub', art:'', img:'resources/models/Attachments/MinigunGrub.png'},
      {id:'attachments-rocket', name:'Rocket Grub', slot:'ATTACHMENT', type:'Support Grub', art:'', img:'resources/models/Attachments/RocketGrub.png'},
      {id:'attachments-shield', name:'Shield Grub', slot:'ATTACHMENT', type:'Support Grub', art:'', img:'resources/models/Attachments/ShieldGrub.png'},
      {id:'attachments-lbwtank', name:'LBW Tank Grub', slot:'ATTACHMENT', type:'Support Grub', art:'', img:'resources/models/Attachments/LBWTankGrub.png'},
    ],
    other:[
      {id:'other-tokens', name:'Cry Baby', slot:'OTHER', img:'resources/models/Other/CryBaby.png'},
      {id:'other-markers', name:'Supply Tokens', slot:'OTHER', img:'resources/models/Other/SupplyTokens.png'},
      {id:'other-santagrub', name:'Santa Grub', slot:'OTHER', img:'resources/models/Other/SantaGrub.png'},
    ],
    tournamentmodels:[
      //{id:'tournamentmodels-ftv', name:'From The Vault', slot:'SPECIAL', art:'', img:'resources/models/TournamentModels/FromTheVault.png'},
      //{id:'tournamentmodels-streamers', name:'Streamers Prize', slot:'SPECIAL', art:'', img:'resources/models/TournamentModels/StreamersPrize.png'},
      //{id:'tournamentmodels-winners', name:'Winners Trophy', slot:'SPECIAL', art:'', img:'resources/models/TournamentModels/WinnersTrophy.png'},
    ],
    zedbydaylight:[
      {id:'zbd-player1', name:'Shotgunner Gun Front', slot:'PLAYER', img:'resources/models/ZedByDaylight/ZBDShotgunnerGunFront.png'},
      {id:'zbd-player2', name:'Shotgunner Pointing', slot:'PLAYER', img:'resources/models/ZedByDaylight/ZBDShotgunnerPointing.png'},
      {id:'zbd-player3', name:'Shotgunner Sword Back', slot:'PLAYER', img:'resources/models/ZedByDaylight/ZBDShotgunnerSwordBack.png'},
      {id:'zbd-player4', name:'Shotgunner Sword Down', slot:'PLAYER', img:'resources/models/ZedByDaylight/ZBDShotgunnerSwordDown.png'},
      {id:'zbd-player5', name:'Shotgunner Sword Front', slot:'PLAYER', img:'resources/models/ZedByDaylight/ZBDShotgunnerSwordFront.png'},
      {id:'zbd-killer1', name:'The Killa', slot:'KILLER', img:'resources/models/ZedByDaylight/ZBDTheKilla.png'},
      {id:'zbd-killer2', name:'The Killa Alternate Version', slot:'KILLER', img:'resources/models/ZedByDaylight/ZBDTheKillaAlternate.png'},
    ],
    escapefromhouscatraz:[
      {id:'efh-boss', name:'Grubzilla', slot:'BOSS', img:'resources/models/EscapeFromHouscatraz/Grubzilla.png'},
    ],

  };

  // Copy PDF_MAP structure from app.js
  const PDF_MAP = (function(){
    const m = {};
    // default mapping: encoded display name
    for(const k in UNITS){
      UNITS[k].forEach(u => { m[u.id] = encodeURIComponent(u.name) + '.pdf'; });
    }

    // Explicit overrides matching files in resources/pdf
    // Zyn (for both kyllal and savm)
    m['zyn-l1'] = 'Captain.pdf';
    m['zyn-l4'] = 'Captain.pdf';
    m['zyn-l2'] = 'Sergeant.pdf';
    m['zyn-l5'] = 'Sergeant.pdf';
    m['zyn-l3'] = 'Klatu.pdf';
    m['zyn-l6'] = 'shotgunner.pdf';
    m['zyn-l7'] = 'shotgunner.pdf';
    m['zyn-l8'] = 'shotgunner.pdf';
    m['zyn-l9'] = 'shotgunner.pdf';
    m['zyn-l10'] = 'shotgunner.pdf';
    m['zyn-s1'] = 'Brawlr.pdf';
    m['zyn-s2'] = 'Heavy Gunner.pdf';
    m['zyn-s6'] = 'Heavy Gunner.pdf';
    m['zyn-s3'] = 'Medic.pdf';
    m['zyn-s4'] = 'Rocket Trooper.pdf';
    m['zyn-s5'] = 'Verata.pdf';
    m['zyn-c1'] = 'Recon.pdf';
    m['zyn-c8'] = 'Recon.pdf';
    m['zyn-c6'] = 'Recon.pdf';
    m['zyn-c2'] = 'Sniper.pdf';
    m['zyn-c7'] = 'Sniper.pdf';
    m['zyn-c3'] = 'Swordzmaster.pdf';
    m['zyn-c4'] = 'WASP.pdf';
    m['zyn-c5'] = 'Nikto.pdf';

    // Terra
    m['terra-l1'] = 'Fyrefly.pdf';
    m['terra-l2'] = 'Sorceress.pdf';
    m['terra-l3'] = 'Lightninbugg.pdf';
    m['terra-s1'] = 'Gunsmith.pdf';
    m['terra-s2'] = 'Hooligan.pdf';
    m['terra-s3'] = 'Tankrantula.pdf';
    m['terra-c1'] = 'Assassin.pdf';
    m['terra-c2'] = 'Huntsmen.pdf';
    m['terra-c4'] = 'Huntsmen.pdf';
    m['terra-c3'] = 'Wingnut.pdf';

    // Skaylz
    m['skaylz-l1'] = 'Strykr.pdf';
    m['skaylz-s1'] = 'Frug.pdf';
    m['skaylz-c1'] = 'Snayk.pdf';

    // Zedz
    m['zedz-l1'] = 'Nercomancer.pdf';
    m['zedz-s1'] = 'Brserkr.pdf';
    m['zedz-s2'] = 'Grubadier.pdf';
    m['zedz-c1'] = 'Zed Bugz.pdf';
    m['zedz-c2'] = 'Zed Grubz.pdf';
    m['zedz-c3'] = 'BurstGrubz.pdf';
    m['zedz-c4'] = 'Grub Chukz.pdf';
    m['zedz-c5'] = 'GrubHemoth.pdf';

    // Mercz (standard)
    m['mercz-alyse'] = 'Alyse.pdf';
    m['mercz-amus'] = 'Amusthehunter.pdf';
    m['mercz-amus2'] = 'Amusthehunter.pdf';
    m['mercz-amus3'] = 'Amusthehunter.pdf';
    m['mercz-balodek'] = 'Balodek.pdf';
    m['mercz-capzmerica'] = 'Capzmerica.pdf';
    m['mercz-capzmerica2'] = 'Capzmerica.pdf';
    m['mercz-dash'] = 'Dash.pdf';
    m['mercz-deviant'] = 'Deviant.pdf';
    m['mercz-dezell'] = 'Dezell.pdf';
    m['mercz-hobehorze'] = 'Hobehorze.pdf';
    m['mercz-komobai'] = 'Komabai.pdf';
    m['mercz-kopekat'] = 'Kopekat.pdf';
    m['mercz-logaan'] = 'Logaan.pdf';
    m['mercz-z800'] = 'Z800.pdf';
    m['mercz-zautja'] = 'Zautja.pdf';
    m['mercz-zautja2'] = 'Zautja.pdf';
    m['mercz-zedpul'] = 'Zedpul.pdf';
    m['mercz-zobafezz'] = 'Zobafezz.pdf';

    // Mercz (zed-flavored)
    m['mercz-jazon'] = 'Jazon.pdf';
    m['mercz-pinzed'] = 'Pinzed.pdf';
    m['mercz-tex'] = 'Tex.pdf';
    m['mercz-zennywise'] = 'Zennywize.pdf';

    // Attachments
    m['attachments-ammo'] = 'Ammogrub.pdf';
    m['attachments-buzz'] = 'Buzzgrub.pdf';
    m['attachments-covid'] = 'Covidgrub.pdf';
    m['attachments-marker'] = 'Markergrub.pdf';
    m['attachments-medic'] = 'Medicgrub.pdf';
    m['attachments-minigun'] = 'Minigungrub.pdf';
    m['attachments-rocket'] = 'Rocketgrub.pdf';
    m['attachments-shield'] = 'Shieldgrub.pdf';
    m['attachments-lbwtank'] = 'LBWtankgrub.pdf';

    // Other
    m['other-tokens'] = 'Crybaby.pdf';
    m['other-markers'] = 'SupplyTokens.pdf';
    m['other-santagrub'] = 'SantaGrub.pdf';

    // Zed By Daylight
    m['zbd-player1'] = 'Shotgunner.pdf';
    m['zbd-player2'] = 'Shotgunner.pdf';
    m['zbd-player3'] = 'Shotgunner.pdf';
    m['zbd-player4'] = 'Shotgunner.pdf';
    m['zbd-player5'] = 'Shotgunner.pdf';
    m['zbd-killer1'] = 'Killa.pdf';
    m['zbd-killer2'] = 'Killa.pdf';
    return m;
  })();

  // Get PDF path for a unit
  function getPdfPath(unit){
    if(!unit) return '';
    const fname = PDF_MAP[unit.id] || (encodeURIComponent(unit.name) + '.pdf');
    const base = `resources/pdf/${fname}`;
    return base + '?_cb=' + Date.now();
  }

  // Faction display order
  const FACTION_ORDER = ['zyn', 'kyllal', 'savm', 'terra', 'skaylz', 'zedz', 'mercz', 'attachments', 'other', 'tournamentmodels', 'zedbydaylight', 'escapefromhouscatraz'];

  // State management
  let selectedStatsheets = new Set(); // Set of unit IDs

  // DOM elements
  const statsheetGrid = document.getElementById('statsheetGrid');
  const progressText = document.getElementById('progressText');
  const clearAllBtn = document.getElementById('clearAllBtn');
  const checkAllBtn = document.getElementById('checkAllBtn');
  const printStatsBtn = document.getElementById('printStatsBtn');

  // Save state to localStorage
  function saveState() {
    try {
      localStorage.setItem('zynvaded-statsheets', JSON.stringify(Array.from(selectedStatsheets)));
    } catch (e) {
      console.warn('Could not save statsheets to localStorage:', e);
    }
  }

  // Load saved state from localStorage
  function loadState() {
    try {
      const saved = localStorage.getItem('zynvaded-statsheets');
      if (saved) {
        selectedStatsheets = new Set(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Could not load statsheets from localStorage:', e);
      selectedStatsheets = new Set();
    }
  }

  // Toggle a unit's statsheet selection
  function toggleStatsheet(unitId) {
    if (selectedStatsheets.has(unitId)) {
      selectedStatsheets.delete(unitId);
    } else {
      selectedStatsheets.add(unitId);
    }
    saveState();
    renderStatsheetGrid();
    updateProgress();
  }

  // Get all units across all factions
  function getAllUnits() {
    const allUnits = [];
    for (const factionId of FACTION_ORDER) {
      const units = UNITS[factionId] || [];
      allUnits.push(...units);
    }
    return allUnits;
  }

  // Update progress display
  function updateProgress() {
    const totalUnits = getAllUnits().length;
    const selectedCount = selectedStatsheets.size;
    progressText.textContent = `${selectedCount} of ${totalUnits} stat sheets selected`;
  }

  // Render the statsheet grid
  function renderStatsheetGrid() {
    statsheetGrid.innerHTML = '';

    FACTION_ORDER.forEach(factionId => {
      const faction = FACTIONS.find(f => f.id === factionId);
      const units = UNITS[factionId] || [];

      if (units.length === 0) return;

      // Create faction section
      const factionSection = document.createElement('div');
      factionSection.className = 'faction-section';

      // Faction header
      const factionHeader = document.createElement('div');
      factionHeader.className = 'faction-header';
      factionHeader.innerHTML = `
        <div class="faction-icon ${faction.cls}">
          <img src="${encodeURI(faction.img)}" alt="${faction.name}"/>
        </div>
        <div class="faction-info">
          <h3 class="faction-name">${faction.name}</h3>
          <div class="faction-desc">${faction.desc}</div>
        </div>
      `;

      factionSection.appendChild(factionHeader);

      // Group units by slot
      const unitsBySlot = {};
      units.forEach(unit => {
        const slot = unit.slot;
        if (!unitsBySlot[slot]) {
          unitsBySlot[slot] = [];
        }
        unitsBySlot[slot].push(unit);
      });

      // Render each slot as a separate row
      Object.keys(unitsBySlot).forEach(slot => {
        // Slot header
        const slotHeader = document.createElement('div');
        slotHeader.className = 'slot-header';
        slotHeader.innerHTML = `<h4>${slot}</h4>`;
        factionSection.appendChild(slotHeader);

        // Units grid for this slot
        const slotUnitsGrid = document.createElement('div');
        slotUnitsGrid.className = 'units-grid';

        unitsBySlot[slot].forEach(unit => {
          const unitCard = document.createElement('div');
          unitCard.className = 'model-card';
          unitCard.dataset.unitId = unit.id;
          
          if (selectedStatsheets.has(unit.id)) {
            unitCard.classList.add('checked');
          }

          // For mercz units, include type in display
          let slotDisplay = unit.slot;
          if (unit.type && factionId === 'mercz') {
            slotDisplay += ` (${unit.type === 'zed-mercz' ? 'ZED-MERCZ' : 'MERCZ'})`;
          }

          unitCard.innerHTML = `
            <div class="model-checkbox">
              <input type="checkbox" id="check-${unit.id}" ${selectedStatsheets.has(unit.id) ? 'checked' : ''}>
              <label for="check-${unit.id}" class="checkbox-label"></label>
            </div>
            <div class="model-art">
              ${unit.img ? `<img src="${encodeURI(unit.img)}" alt="${unit.name}"/>` : unit.art}
            </div>
            <div class="model-info">
              <div class="model-name">${unit.name}</div>
              <div class="model-slot">${slotDisplay}</div>
            </div>
          `;

          // Add click handler
          unitCard.addEventListener('click', (e) => {
            // Don't trigger if clicking the checkbox itself
            if (e.target.type !== 'checkbox') {
              toggleStatsheet(unit.id);
              const checkbox = unitCard.querySelector('input[type="checkbox"]');
              if (checkbox) {
                checkbox.checked = selectedStatsheets.has(unit.id);
              }
            }
          });

          // Add checkbox change handler
          const checkbox = unitCard.querySelector('input[type="checkbox"]');
          checkbox.addEventListener('change', () => {
            toggleStatsheet(unit.id);
          });

          slotUnitsGrid.appendChild(unitCard);
        });

        factionSection.appendChild(slotUnitsGrid);
      });

      statsheetGrid.appendChild(factionSection);
    });

    updateProgress();
  }

  // Clear all selections
  function clearAll() {
    selectedStatsheets.clear();
    saveState();
    renderStatsheetGrid();
  }

  // Select all statsheets
  function checkAll() {
    getAllUnits().forEach(unit => {
      selectedStatsheets.add(unit.id);
    });
    saveState();
    renderStatsheetGrid();
  }

  // Load external script
  function loadScript(src){
    return new Promise((resolve, reject)=>{
      if(document.querySelector(`script[src="${src}"]`)) return resolve();
      const s = document.createElement('script'); s.src = src; s.onload = ()=>resolve(); s.onerror = (e)=>reject(e); document.head.appendChild(s);
    });
  }

  // Render PDF to PNG function (copied from app.js)
  async function renderPdfToPng(url){
    const DPI = 200;
    const POINTS_PER_INCH = 72;
    const pixelScale = DPI / POINTS_PER_INCH;

    const fetchUrl = url.replace(/\?.*$/, '') + '?_nocache=' + Date.now();
    const arrayBuffer = await fetch(fetchUrl).then(r=>r.arrayBuffer());
    const pdf = await window.pdfjsLib.getDocument({data:arrayBuffer}).promise;
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({scale:1});

    const widthInches = viewport.width / POINTS_PER_INCH;
    const heightInches = viewport.height / POINTS_PER_INCH;
    const pageWidthPts = widthInches * POINTS_PER_INCH;
    const pageHeightPts = heightInches * POINTS_PER_INCH;

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = Math.round(pageWidthPts * pixelScale);
    canvas.height = Math.round(pageHeightPts * pixelScale);

    const renderContext = {
      canvasContext: context,
      viewport: page.getViewport({scale: pixelScale})
    };

    await page.render(renderContext).promise;

    try{ console.debug('renderPdfToPng fetched', fetchUrl, '=>', {widthInches, heightInches, pageWidthPts, pageHeightPts, pixelWidth: canvas.width, pixelHeight: canvas.height}); }catch(e){}

    return {
      canvas: canvas,
      widthInches: widthInches,
      heightInches: heightInches
    };
  }

  // Generate stat sheets PDF
  async function generateStatsheetsPDF() {
    // Create and show progress overlay
    const progressOverlay = document.createElement('div');
    progressOverlay.id = 'pdfProgress';
    progressOverlay.innerHTML = `
      <div class="pdf-progress-box">
        <div class="pdf-progress-title">Generating Stat Sheets PDF</div>
        <div class="pdf-progress-bar">
          <div class="pdf-progress-fill" id="pdfProgressFill"></div>
        </div>
        <div class="pdf-progress-pct" id="pdfProgressText">0%</div>
      </div>
    `;
    document.body.appendChild(progressOverlay);
    
    const progressFill = document.getElementById('pdfProgressFill');
    const progressTextElement = document.getElementById('pdfProgressText');
    
    function updateProgress(percentage, text = '') {
      progressFill.style.width = percentage + '%';
      progressTextElement.textContent = text || `${Math.round(percentage)}%`;
    }
    
    try {
      updateProgress(5, 'Loading libraries...');

      // Load pdf.js and jsPDF if not already loaded
      if(!window.pdfjsLib){
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js');
        if(window.pdfjsLib) window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
      }
      if(!window.jspdf){
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
        if(window.jspdf && window.jspdf.jsPDF) window.jsPDF = window.jspdf.jsPDF; else if(window.jspdf) window.jsPDF = window.jspdf;
      }

      updateProgress(15, 'Organizing selected units...');

      const { jsPDF } = window;

      // Get selected units and organize by faction and slot
      const selectedUnits = getAllUnits().filter(unit => selectedStatsheets.has(unit.id));
      
      if (selectedUnits.length === 0) {
        alert('No stat sheets selected. Please select some units first.');
        document.body.removeChild(progressOverlay);
        return;
      }

      // Group by faction first, then by slot within each faction
      const unitsByFactionAndSlot = {};
      selectedUnits.forEach(unit => {
        const factionId = FACTION_ORDER.find(f => UNITS[f] && UNITS[f].some(u => u.id === unit.id));
        if (!factionId) return;
        
        if (!unitsByFactionAndSlot[factionId]) {
          unitsByFactionAndSlot[factionId] = {};
        }
        
        const slot = unit.slot;
        if (!unitsByFactionAndSlot[factionId][slot]) {
          unitsByFactionAndSlot[factionId][slot] = [];
        }
        
        unitsByFactionAndSlot[factionId][slot].push(unit);
      });

      updateProgress(25, 'Processing stat sheets...');

      // Create ordered list: faction -> slot -> units
      const orderedUnits = [];
      for (const factionId of FACTION_ORDER) {
        if (unitsByFactionAndSlot[factionId]) {
          const slotOrder = ['LEADER', 'SUPPORT', 'SCOUT', 'ATTACHMENT', 'SPECIAL', 'ANY SLOT', 'NONE', 'LEADER/SUPPORT'];
          for (const slot of slotOrder) {
            if (unitsByFactionAndSlot[factionId][slot]) {
              orderedUnits.push(...unitsByFactionAndSlot[factionId][slot]);
            }
          }
          // Add any other slots that weren't in our standard order
          Object.keys(unitsByFactionAndSlot[factionId]).forEach(slot => {
            if (!slotOrder.includes(slot) && unitsByFactionAndSlot[factionId][slot]) {
              orderedUnits.push(...unitsByFactionAndSlot[factionId][slot]);
            }
          });
        }
      }

      // Render each unit's PDF to PNG
      const images = [];
      const totalUnits = orderedUnits.length;
      
      for (let i = 0; i < orderedUnits.length; i++) {
        const unit = orderedUnits[i];
        const progressPercent = 25 + (i / totalUnits) * 60; // 25% to 85%
        updateProgress(progressPercent, `Processing ${unit.name}...`);
        
        try {
          const pdfPath = getPdfPath(unit);
          const rendered = await renderPdfToPng(pdfPath);
          images.push(rendered);
        } catch (error) {
          console.warn(`Could not load PDF for ${unit.name}:`, error);
          // Continue with other units even if one fails
        }
      }

      updateProgress(90, 'Creating final PDF...');

      // Create jsPDF document (landscape 11" x 8.5") using inches as units
      const doc = new jsPDF({orientation:'landscape', unit:'in', format:[11,8.5]});
      const pageWidth = 11;
      const pageHeight = 8.5;
      
      // 3-slot grid system
      const slotWidth = pageWidth / 3; // Each slot is 11/3 = 3.67 inches wide
      const slots = [false, false, false]; // Track which slots are occupied in current row
      let currentY = 0;
      let maxHeightInRow = 0;

      // Add each image to the PDF with 3-slot grid layout
      for (let i = 0; i < images.length; i++) {
        const img = images[i];
        const imgData = img.canvas.toDataURL('image/png');
        
        let imgWidth = img.widthInches;
        let imgHeight = img.heightInches;
        
        // Keep original dimensions, don't scale to fit slot width
        // Determine how many slots this image needs based on its original width
        let slotsNeeded = 1;
        if (imgWidth > slotWidth * 2.5) {
          slotsNeeded = 3; // Takes full width
        } else if (imgWidth > slotWidth * 1.5) {
          slotsNeeded = 2; // Takes 2/3 width
        } else {
          slotsNeeded = 1; // Takes 1/3 width
        }
        
        // Scale down proportionally if image height is too large for page
        if (imgHeight > pageHeight) {
          const scale = pageHeight / imgHeight;
          imgHeight = pageHeight;
          imgWidth *= scale;
          
          // Recalculate slots needed after scaling
          if (imgWidth > slotWidth * 2.5) {
            slotsNeeded = 3;
          } else if (imgWidth > slotWidth * 1.5) {
            slotsNeeded = 2;
          } else {
            slotsNeeded = 1;
          }
        }
        
        // Find available slot position for this image
        let slotPosition = -1;
        
        // Check if we can fit the image in current row
        for (let slot = 0; slot <= 3 - slotsNeeded; slot++) {
          let canFit = true;
          for (let j = 0; j < slotsNeeded; j++) {
            if (slots[slot + j]) {
              canFit = false;
              break;
            }
          }
          if (canFit) {
            slotPosition = slot;
            break;
          }
        }
        
        // If no space in current row, move to next row
        if (slotPosition === -1) {
          currentY += maxHeightInRow;
          slots.fill(false); // Reset slots for new row
          maxHeightInRow = 0;
          slotPosition = 0; // Start at beginning of new row
          
          // Check if we need a new page
          if (currentY + imgHeight > pageHeight) {
            doc.addPage();
            currentY = 0;
            maxHeightInRow = 0;
          }
        }
        
        // Mark slots as occupied
        for (let j = 0; j < slotsNeeded; j++) {
          slots[slotPosition + j] = true;
        }
        
        // Calculate X position based on slot
        const currentX = slotPosition * slotWidth;
        
        // Add the image at calculated position
        doc.addImage(imgData, 'PNG', currentX, currentY, imgWidth, imgHeight);
        
        // Update row height
        maxHeightInRow = Math.max(maxHeightInRow, imgHeight);
      }

      updateProgress(95, 'Opening PDF...');

      // Open PDF in new window
      const pdfBlob = doc.output('blob');
      const pdfUrl = URL.createObjectURL(pdfBlob);
      
      updateProgress(100, 'Complete!');
      
      // Small delay to show completion, then remove overlay and open PDF
      setTimeout(() => {
        document.body.removeChild(progressOverlay);
        window.open(pdfUrl, '_blank');
      }, 500);
      
    } catch (error) {
      console.error('Error generating stat sheets PDF:', error);
      // Remove overlay on error
      if (document.body.contains(progressOverlay)) {
        document.body.removeChild(progressOverlay);
      }
      alert('Error generating PDF. Please try again.');
    }
  }

  // Event listeners
  if (clearAllBtn) {
    clearAllBtn.addEventListener('click', clearAll);
  }

  if (checkAllBtn) {
    checkAllBtn.addEventListener('click', checkAll);
  }

  if (printStatsBtn) {
    printStatsBtn.addEventListener('click', generateStatsheetsPDF);
  }

  // Initialize
  loadState();
  renderStatsheetGrid();

})();
