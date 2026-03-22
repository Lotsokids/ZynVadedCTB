// Zynvaded Model Checklist - app logic
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

  // Copy of UNITS data from app.js
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
    //  {id:'kyllal-c4', name:'W.A.S.P.', slot:'SCOUT', art:'', img:'resources/models/Kyllal/WASP.png'},
    ],
    savm:[
    //  {id:'savm-c4', name:'W.A.S.P.', slot:'SCOUT', art:'', img:'resources/models/Savm/WASP.png'},
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
      {id:'mercz-zennywise', name:'Zenny-Wise', slot:'SCOUT', img:'resources/models/Mercz/ZennyWise.png', type: 'zed-mercz', bp: 6},
    ],
    attachments:[
      {id:'attachments-ammo', name:'Ammo Grub', slot:'ATTACHMENT', img:'resources/models/Attachments/Ammogrub.png'},
      {id:'attachments-buzz', name:'Buzz Grub', slot:'ATTACHMENT', img:'resources/models/Attachments/Buzzgrub.png', requiresFaction: 'zedz'},
      {id:'attachments-covid', name:'Covid Grub', slot:'ATTACHMENT', img:'resources/models/Attachments/Covidgrub.png'},
      {id:'attachments-marker', name:'Marker Grub', slot:'ATTACHMENT', img:'resources/models/Attachments/Markergrub.png'},
      {id:'attachments-medic', name:'Medic Grub', slot:'ATTACHMENT', img:'resources/models/Attachments/Medicgrub.png'},
      {id:'attachments-minigun', name:'Mini-gun Grub', slot:'ATTACHMENT', img:'resources/models/Attachments/Minigungrub.png'},
      {id:'attachments-rocket', name:'Rocket Grub', slot:'ATTACHMENT', img:'resources/models/Attachments/Rocketgrub.png'},
      {id:'attachments-shield', name:'Shield Grub', slot:'ATTACHMENT', img:'resources/models/Attachments/Shieldgrub.png'},
      {id:'attachments-lbwtank', name:'LBW Tank Grub', slot:'ATTACHMENT', img:'resources/models/Attachments/LBWtank.png'},
      {id:'attachments-grubitor', name:'Grub-itor', slot:'ATTACHMENT', img:'resources/models/Attachments/Grubitor.png'},
    ],
    other:[
      {id:'other-grubz', name:'Grub Objectives', slot:'OTHER', img:'resources/models/Other/Grubz.png'},
      {id:'other-dice', name:'Faction Dice Set', slot:'OTHER', img:'resources/models/Other/Dice.png'},
      {id:'other-tokens', name:'Cry Baby', slot:'OTHER', img:'resources/models/Other/CryBaby.png'},
      {id:'other-markers', name:'Supply Tokens', slot:'OTHER', img:'resources/models/Other/SupplyTokens.png'},
      {id:'other-rulebook', name:'Hardback Rulebook', slot:'OTHER', img:'resources/models/Other/RulebookCover.png'},
      {id:'other-santagrub', name:'Santa Grub', slot:'OTHER', img:'resources/models/Other/SantaGrub.png'},
    ],
    tournamentmodels:[
      {id:'tournament-rocket', name:'Rocket Trooper Friendliest', slot:'TOURNAMENT', img:'resources/models/TournamentModels/RocketTrooperFriendliest.png'},
      {id:'tournament-sniper1', name:'Sniper Painted', slot:'TOURNAMENT', img:'resources/models/TournamentModels/SniperPainted.png'},
      {id:'tournament-sniper2', name:'Sniper Tournament Winner', slot:'TOURNAMENT', img:'resources/models/TournamentModels/SniperTournament.png'},
    ],
    zedbydaylight:[
      {id:'zbd-player1', name:'Shotgunner Gun Front', slot:'PLAYER', img:'resources/models/ZedByDaylight/ZBDShotgunnerGunFront.png'},
      {id:'zbd-player2', name:'Shotgunner Pointing', slot:'PLAYER', img:'resources/models/ZedByDaylight/ZBDShotgunnerPointing.png'},
      {id:'zbd-player3', name:'Shotgunner Sword Back', slot:'PLAYER', img:'resources/models/ZedByDaylight/ZBDShotgunnerSwordBack.png'},
      {id:'zbd-player4', name:'Shotgunner Sword Down', slot:'PLAYER', img:'resources/models/ZedByDaylight/ZBDShotgunnerSwordDown.png'},
      {id:'zbd-player5', name:'Shotgunner Sword Front', slot:'PLAYER', img:'resources/models/ZedByDaylight/ZBDShotgunnerSwordFront.png'},
      {id:'zbd-killer1', name:'The Killa', slot:'KILLER', img:'resources/models/ZedByDaylight/ZBDTheKilla.png'},
      {id:'zbd-killer2', name:'The Killa Alternate Version', slot:'KILLER', img:'resources/models/ZedByDaylight/ZBDTheKillaAlternate.png'},
      {id:'zbd-terrain1', name:'4 Generators & 4 Components', slot:'TERRAIN', img:'resources/models/ZedByDaylight/ZBDComponentsAndGenerator.png'},
    ],
    escapefromhouscatraz:[
      {id:'efh-boss', name:'Grubzilla', slot:'BOSS', img:'resources/models/EscapeFromHouscatraz/Grubzilla.png'},
      {id:'efh-terrain1', name:'Objectives', slot:'OBJECTIVE', img:'resources/models/EscapeFromHouscatraz/Objectives.png'},
    ],
  };

  // Faction order as requested
  const FACTION_ORDER = ['zyn', 'kyllal', 'savm', 'terra', 'skaylz', 'zedz', 'mercz', 'attachments', 'other', 'tournamentmodels', 'zedbydaylight', 'escapefromhouscatraz'];

  // State for checklist
  let checkedModels = new Set();

  // DOM refs
  const checklistGrid = document.getElementById('checklistGrid');
  const progressText = document.getElementById('progressText');
  const clearAllBtn = document.getElementById('clearAllBtn');
  const checkAllBtn = document.getElementById('checkAllBtn');
  const printChecklistBtn = document.getElementById('printChecklistBtn');

  // Load saved state from localStorage
  function loadState() {
    try {
      const saved = localStorage.getItem('zynvaded-checklist');
      if (saved) {
        checkedModels = new Set(JSON.parse(saved));
      }
    } catch (e) {
      console.warn('Could not load checklist state:', e);
    }
  }

  // Save state to localStorage
  function saveState() {
    try {
      localStorage.setItem('zynvaded-checklist', JSON.stringify([...checkedModels]));
    } catch (e) {
      console.warn('Could not save checklist state:', e);
    }
  }

  // Toggle model checked state
  function toggleModel(modelId) {
    if (checkedModels.has(modelId)) {
      checkedModels.delete(modelId);
    } else {
      checkedModels.add(modelId);
    }
    saveState();
    updateProgress();
    updateModelCard(modelId);
  }

  // Update a single model card's visual state
  function updateModelCard(modelId) {
    const card = document.querySelector(`[data-model-id="${modelId}"]`);
    if (card) {
      card.classList.toggle('checked', checkedModels.has(modelId));
    }
  }

  // Update progress display
  function updateProgress() {
    const totalModels = getAllModels().length;
    const checkedCount = checkedModels.size;
    progressText.textContent = `${checkedCount} of ${totalModels} models completed`;
  }

  // Get all models in a flat array
  function getAllModels() {
    const allModels = [];
    FACTION_ORDER.forEach(factionId => {
      if (UNITS[factionId]) {
        UNITS[factionId].forEach(unit => {
          allModels.push({ ...unit, factionId });
        });
      }
    });
    return allModels;
  }

  // Render the checklist
  function renderChecklist() {
    checklistGrid.innerHTML = '';

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
          ${faction.img ? `<img src="${encodeURI(faction.img)}" alt="${faction.name}"/>` : faction.name.slice(0,2).toUpperCase()}
        </div>
        <div class="faction-info">
          <div class="faction-name">${faction.name}</div>
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
          const modelCard = document.createElement('div');
          modelCard.className = 'model-card';
          modelCard.dataset.modelId = unit.id;
          
          if (checkedModels.has(unit.id)) {
            modelCard.classList.add('checked');
          }

          // For mercz units, include type in display
          let slotDisplay = unit.slot;
          if (unit.type && factionId === 'mercz') {
            slotDisplay += ` (${unit.type === 'zed-mercz' ? 'ZED-MERCZ' : 'MERCZ'})`;
          }

          modelCard.innerHTML = `
            <div class="model-checkbox">
              <input type="checkbox" id="check-${unit.id}" ${checkedModels.has(unit.id) ? 'checked' : ''}>
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
          modelCard.addEventListener('click', (e) => {
            // Don't trigger if clicking the checkbox itself
            if (e.target.type !== 'checkbox') {
              toggleModel(unit.id);
              const checkbox = modelCard.querySelector('input[type="checkbox"]');
              if (checkbox) {
                checkbox.checked = checkedModels.has(unit.id);
              }
            }
          });

          // Add checkbox change handler
          const checkbox = modelCard.querySelector('input[type="checkbox"]');
          checkbox.addEventListener('change', () => {
            toggleModel(unit.id);
          });

          slotUnitsGrid.appendChild(modelCard);
        });

        factionSection.appendChild(slotUnitsGrid);
      });
      checklistGrid.appendChild(factionSection);
    });

    updateProgress();
  }

  // Clear all checkboxes
  function clearAll() {
    checkedModels.clear();
    saveState();
    renderChecklist();
  }

  // Check all checkboxes
  function checkAll() {
    getAllModels().forEach(model => {
      checkedModels.add(model.id);
    });
    saveState();
    renderChecklist();
  }

  // Load external script
  function loadScript(src){
    return new Promise((resolve, reject)=>{
      if(document.querySelector(`script[src="${src}"]`)) return resolve();
      const s = document.createElement('script'); s.src = src; s.onload = ()=>resolve(); s.onerror = (e)=>reject(e); document.head.appendChild(s);
    });
  }

  // Convert image to base64 for PDF
  function imageToBase64(imgSrc) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = function() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = this.width;
        canvas.height = this.height;
        ctx.drawImage(this, 0, 0);
        try {
          const dataURL = canvas.toDataURL('image/png');
          resolve(dataURL);
        } catch (e) {
          reject(e);
        }
      };
      img.onerror = reject;
      img.src = imgSrc;
    });
  }

  // Generate PDF checklist
  async function generateChecklistPDF() {
    // Create and show progress overlay
    const progressOverlay = document.createElement('div');
    progressOverlay.id = 'pdfProgress';
    progressOverlay.innerHTML = `
      <div class="pdf-progress-box">
        <div class="pdf-progress-title">Generating Checklist PDF</div>
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
      updateProgress(10, 'Loading PDF library...');
      
      // Load jsPDF if not already loaded
      if(!window.jspdf){
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
        if(window.jspdf && window.jspdf.jsPDF) window.jsPDF = window.jspdf.jsPDF; else if(window.jspdf) window.jsPDF = window.jspdf;
      }
      
      updateProgress(20, 'Initializing document...');

      const { jsPDF } = window;
      
      // Create PDF document (portrait letter size)
      const doc = new jsPDF({orientation:'portrait', unit:'mm', format:'a4'});
      
      // Set up positioning
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const margin = 10;
      const columnWidth = (pageWidth - (3 * margin)) / 2; // Two columns with margin between
      const leftColumnX = margin;
      const rightColumnX = margin + columnWidth + margin;
      
      let currentY = margin;
      const lineHeight = 8;
      const imageSize = 12; // Slightly smaller for two-column layout
      const checkboxSize = 4; // Increased from 3 to 4 for better checkmark visibility
      
      updateProgress(30, 'Setting up layout...');
      
      // Title
      doc.setFontSize(16);
      doc.setFont(undefined, 'bold');
      doc.text('Zynvaded Model Checklist', pageWidth / 2, currentY + 6, { align: 'center' });
      currentY += 20;
      
      // Count total factions for progress tracking
      const totalFactions = FACTION_ORDER.filter(factionId => {
        const units = UNITS[factionId] || [];
        return units.length > 0;
      }).length;
      let processedFactions = 0;
      
      // Process each faction
      for (const factionId of FACTION_ORDER) {
        const faction = FACTIONS.find(f => f.id === factionId);
        const units = UNITS[factionId] || [];
        if (!units || units.length === 0) continue;
        
        // Group units by slot first to calculate space needed
        const unitsBySlot = {};
        units.forEach(unit => {
          const slot = unit.slot;
          if (!unitsBySlot[slot]) {
            unitsBySlot[slot] = [];
          }
          unitsBySlot[slot].push(unit);
        });
        
        // Calculate approximate height needed for this faction in two-column layout
        const slotCount = Object.keys(unitsBySlot).length;
        const unitCount = units.length;
        
        // Estimate height more accurately for two-column layout
        // Faction header + estimated slots per column + estimated units per column + spacing
        const averageUnitsPerSlot = unitCount / slotCount;
        const estimatedSlotsPerColumn = Math.ceil(slotCount / 2);
        const estimatedUnitsPerColumn = Math.ceil(unitCount / 2);
        const estimatedColumnHeight = (estimatedSlotsPerColumn * 15) + (estimatedUnitsPerColumn * (imageSize + 2)) + 10;
        const factionHeight = 15 + estimatedColumnHeight + 10; // Header + column content + spacing
        
        // Check if faction fits beneath current position on the page
        if (currentY + factionHeight > pageHeight - margin) {
          doc.addPage();
          currentY = margin;
        }
        
        // Update progress for this faction
        const factionProgress = 40 + (processedFactions / totalFactions) * 50; // 40-90% range
        updateProgress(factionProgress, `Processing ${faction.name}...`);
        
        // Faction header (spans full width)
        doc.setFontSize(14);
        doc.setFont(undefined, 'bold');
        doc.text(faction.name, margin, currentY + 5);
        currentY += 15;
        
        // Track column positions
        let leftColumnY = currentY;
        let rightColumnY = currentY;
        let currentColumn = 'left'; // Start with left column
        
        // Process each slot in two-column layout
        for (const [slot, slotUnits] of Object.entries(unitsBySlot)) {
          // Choose column with less content
          const useLeftColumn = leftColumnY <= rightColumnY;
          let columnX = useLeftColumn ? leftColumnX : rightColumnX;
          let columnY = useLeftColumn ? leftColumnY : rightColumnY;
          
          // Check if slot fits in current column
          const slotHeight = 15 + (slotUnits.length * (imageSize + 3)) + 5;
          if (columnY + slotHeight > pageHeight - margin) {
            // Try other column
            if (useLeftColumn && rightColumnY + slotHeight <= pageHeight - margin) {
              columnX = rightColumnX;
              columnY = rightColumnY;
            } else if (!useLeftColumn && leftColumnY + slotHeight <= pageHeight - margin) {
              columnX = leftColumnX;
              columnY = leftColumnY;
            } else {
              // Neither column has space, start new page
              doc.addPage();
              currentY = margin;
              leftColumnY = currentY;
              rightColumnY = currentY;
              columnX = leftColumnX;
              columnY = currentY;
            }
          }
          
          // Slot header
          doc.setFontSize(12);
          doc.setFont(undefined, 'bold');
          doc.text(slot, columnX + 5, columnY + 4);
          columnY += 10;
          
          // Process units in this slot
          for (const unit of slotUnits) {
            const isChecked = checkedModels.has(unit.id);
            
            // Draw checkbox (align top with image)
            doc.setDrawColor(0);
            doc.setFillColor(255, 255, 255);
            doc.rect(columnX + 5, columnY, checkboxSize, checkboxSize, 'FD');
            
            if (isChecked) {
              doc.setFont(undefined, 'bold');
              doc.setFontSize(10); // Increased from 6 to 10 for better visibility
              doc.setTextColor(0, 0, 0); // Ensure black color
              doc.text('X', columnX + 5 + (checkboxSize/2), columnY + (checkboxSize/2) + 1.5, { align: 'center' });
              doc.setTextColor(0, 0, 0); // Reset text color for subsequent text
            }
            
            // Add unit image if available (aligned with checkbox top)
            let imageX = columnX + 5 + checkboxSize + 3;
            if (unit.img) {
              try {
                const imgData = await imageToBase64(unit.img);
                doc.addImage(imgData, 'PNG', imageX, columnY, imageSize, imageSize);
              } catch (e) {
                console.warn('Could not load image for', unit.name, e);
              }
            }
            
            // Add unit name (vertically centered with image)
            doc.setFont(undefined, 'normal');
            doc.setFontSize(8);
            const textX = imageX + imageSize + 3;
            const textY = columnY + (imageSize / 2) + 1;
            
            // Ensure text doesn't exceed column width
            const maxTextWidth = columnWidth - (textX - columnX);
            const lines = doc.splitTextToSize(unit.name, maxTextWidth);
            doc.text(lines[0], textX, textY); // Only show first line to keep compact
            
            columnY += imageSize + 2;
          }
          
          columnY += 5; // Extra space after slot
          
          // Update the appropriate column position
          if (columnX === leftColumnX) {
            leftColumnY = columnY;
          } else {
            rightColumnY = columnY;
          }
        }
        
        // Move to next position after both columns
        currentY = Math.max(leftColumnY, rightColumnY) + 10;
        
        // Increment processed factions counter
        processedFactions++;
      }
      
      updateProgress(90, 'Finalizing PDF...');
      
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
      console.error('Error generating PDF:', error);
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

  if (printChecklistBtn) {
    printChecklistBtn.addEventListener('click', generateChecklistPDF);
  }

  // Initialize
  loadState();
  renderChecklist();

})();
