// Zynvaded Combat Team Builder - app logic
(function(){
  const FACTIONS = [
    { id:'kyllal', name:"Kyll'al", desc:"Kill 'em all, let Zred'Gaz sort 'em out!", cls:'faction-zn', img: "resources/factions/Kyll'al.png" },
    { id:'savm', name:"Sav'm", desc:"Want no part of an invasion as in Savin' our butts.", cls:'faction-zn', img: 'resources/factions/Sav\'m.png' },
    { id:'zedz', name:'Zedz', desc:'Dead Zyn and Terra warriors + Pesticides = Zedz', cls:'faction-zd', img: 'resources/factions/Zedz.png' },
    { id:'terra', name:'Terra', desc:'This is our planet - BUGGER OFF!', cls:'faction-tr', img: 'resources/factions/Terra.png' },
    { id:'skaylz', name:"Skayl'z", desc:'Warlike tribe of many different species of reptile.', cls:'faction-sk', img: "resources/factions/Skayl'z.png" },
    { id:'mercz', name:'Mercz', desc:'Flexible mercenaries. Versatile contracts.', cls:'faction-mc', img: 'resources/factions/Mercz.png' },
  ];

  const SLOTS = ['LEADER','SUPPORT','SCOUT'];

  // Sample units per faction (3-5 each). `img` fields point to artwork files under resources/models if available.
  const UNITS = {
    kyllal:[
      {id:'kyllal-l1', name:'Captain', slot:'LEADER', art:'', img:'resources/models/Kyllal/Captain.png'},
      {id:'kyllal-l2', name:'Sergeant', slot:'LEADER', art:'', img:'resources/models/Kyllal/Sergeant.png'},
      {id:'kyllal-l3', name:"Kla'Tu", slot:'LEADER', art:'', img:'resources/models/Kyllal/Klatu.png'},
      {id:'kyllal-s1', name:'Brawler', slot:'SUPPORT', art:'', img:'resources/models/Kyllal/Brawler.png'},
      {id:'kyllal-s2', name:'Heavy Gunner', slot:'SUPPORT', art:'', img:'resources/models/Kyllal/Heavy Gunner.png'},
      {id:'kyllal-s3', name:'Medic', slot:'SUPPORT', art:'', img:'resources/models/Kyllal/Medic.png'},
      {id:'kyllal-s4', name:'Rocket Trooper', slot:'SUPPORT', art:'', img:'resources/models/Kyllal/Rocket Trooper.png'},
      {id:'kyllal-s5', name:"Ve'Rata", slot:'SUPPORT', art:'', img:'resources/models/Kyllal/Verata.png'},
      {id:'kyllal-c1', name:'Recon', slot:'SCOUT', art:'', img:'resources/models/Kyllal/Recon.png'},
      {id:'kyllal-c2', name:'Sniper', slot:'SCOUT', art:'', img:'resources/models/Kyllal/Sniper.png'},
      {id:'kyllal-c3', name:'Swordz Master', slot:'SCOUT', art:'', img:'resources/models/Kyllal/SwordzMaster.png'},
      {id:'kyllal-c4', name:'W.A.S.P.', slot:'SCOUT', art:'', img:'resources/models/Kyllal/WASP.png'},
      {id:'kyllal-c5', name:"Nik'To", slot:'SCOUT', art:'', img:'resources/models/Kyllal/Nikto.png'},
    ],
    savm:[
      {id:'savm-l1', name:'Captain', slot:'LEADER', art:'', img:'resources/models/Savm/Captain.png'},
      {id:'savm-l2', name:'Sergeant', slot:'LEADER', art:'', img:'resources/models/Savm/Sergeant.png'},
      {id:'savm-l3', name:"Kla'Tu", slot:'LEADER', art:'', img:'resources/models/Savm/Klatu.png'},
      {id:'savm-s1', name:'Brawler', slot:'SUPPORT', art:'', img:'resources/models/Savm/Brawler.png'},
      {id:'savm-s2', name:'Heavy Gunner', slot:'SUPPORT', art:'', img:'resources/models/Savm/Heavy Gunner.png'},
      {id:'savm-s3', name:'Medic', slot:'SUPPORT', art:'', img:'resources/models/Savm/Medic.png'},
      {id:'savm-s4', name:'Rocket Trooper', slot:'SUPPORT', art:'', img:'resources/models/Savm/Rocket Trooper.png'},
      {id:'savm-s5', name:"Ve'Rata", slot:'SUPPORT', art:'', img:'resources/models/Savm/Verata.png'},
      {id:'savm-c1', name:'Recon', slot:'SCOUT', art:'', img:'resources/models/Savm/Recon.png'},
      {id:'savm-c2', name:'Sniper', slot:'SCOUT', art:'', img:'resources/models/Savm/Sniper.png'},
      {id:'savm-c3', name:'Swordz Master', slot:'SCOUT', art:'', img:'resources/models/Savm/SwordzMaster.png'},
      {id:'savm-c4', name:'W.A.S.P.', slot:'SCOUT', art:'', img:'resources/models/Savm/WASP.png'},
      {id:'savm-c5', name:"Nik'To", slot:'SCOUT', art:'', img:'resources/models/Savm/Nikto.png'},
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
    terra:[
      {id:'terra-l1', name:'Fyre Fly', slot:'LEADER', art:'', img:'resources/models/Terra/Fyre Fly.png'},
      {id:'terra-l2', name:'Sorceress', slot:'LEADER', art:'', img:'resources/models/Terra/Sorceress.png'},
      {id:'terra-l3', name:"Light'Nin Bugg", slot:'LEADER', art:'', img:'resources/models/Terra/Lightninbugg.png'},
      {id:'terra-s1', name:'Gunsmith', slot:'SUPPORT', art:'', img:'resources/models/Terra/Gunsmith.png'},
      {id:'terra-s2', name:'Hooligan', slot:'SUPPORT', art:'', img:'resources/models/Terra/Hooligan.png'},
      {id:'terra-s3', name:"Tank'Rantula", slot:'SUPPORT', art:'', img:'resources/models/Terra/Tankrantula.png'},
      {id:'terra-c1', name:'Assassin', slot:'SCOUT', art:'', img:'resources/models/Terra/Assassin.png'},
      {id:'terra-c2', name:'Huntsman', slot:'SCOUT', art:'', img:'resources/models/Terra/Huntsman.png'},
      {id:'terra-c3', name:'Wingnut', slot:'SCOUT', art:'', img:'resources/models/Terra/Wingnut.png'},
    ],
    skaylz:[
      {id:'skaylz-l1', name:"Stry'kr", slot:'LEADER', art:'', img:'resources/models/Skaylz/Strykr.png'},
      {id:'skaylz-s1', name:"F'rug", slot:'SUPPORT', art:'', img:'resources/models/Skaylz/Frug.png'},
      {id:'skaylz-c1', name:"Snay'k", slot:'SCOUT', art:'', img:'resources/models/Skaylz/Snayk.png'},
    ],
    mercz:[
      // type: 'mercz' = standard mercenary; 'zed-mercz' = mercenary with Zed flavor
      {id:'mercz-alyse', name:"Al'Yse", slot:'LEADER', img:'resources/models/Mercz/AlYse.png', type: 'both', cbp: 12},
      {id:'mercz-amus', name:'Amus the Hunter', slot:'LEADER', img:'resources/models/Mercz/Amus.png', type: 'mercz'},
      {id:'mercz-amus-2', name:'Amus the Hunter', slot:'SUPPORT', img:'resources/models/Mercz/Amus.png', type: 'mercz'},
      {id:'mercz-balodek', name:"Balo'Dek", slot:'SUPPORT', img:'resources/models/Mercz/Balodek.png', type: 'mercz'},
      {id:'mercz-capzmerica', name:"Cap Z'Merica", slot:'LEADER', img:'resources/models/Mercz/CapZMerica.png', type: 'mercz'},
      {id:'mercz-dash', name:"D'Ash", slot:'LEADER', img:'resources/models/Mercz/DAsh.png', type: 'mercz'},
      {id:'mercz-deviant', name:"Devi'Ant", slot:'SCOUT', img:'resources/models/Mercz/DeviAnt.png', type: 'mercz'},
      {id:'mercz-dezell', name:"De'Zell", slot:'LEADER', img:'resources/models/Mercz/DeZell.png', type: 'mercz'},
      {id:'mercz-dezell-2', name:"De'Zell", slot:'SUPPORT', img:'resources/models/Mercz/DeZell.png', type: 'mercz'},
      {id:'mercz-dezell-3', name:"De'Zell", slot:'SCOUT', img:'resources/models/Mercz/DeZell.png', type: 'mercz'},
      {id:'mercz-hobehorze', name:"Hob'EHorze", slot:'SCOUT', img:'resources/models/Mercz/Hobehorze.png', type: 'mercz'},
      {id:'mercz-komobai', name:"Ko'Mo'Bai", slot:'LEADER', img:'resources/models/Mercz/KoMoBai.png', type: 'mercz'},
      {id:'mercz-kopekat', name:"Kop'Ekat", slot:'SCOUT', img:'resources/models/Mercz/KopEkat.png', type: 'mercz'},
      {id:'mercz-logaan', name:"Lo'gaan", slot:'SUPPORT', img:'resources/models/Mercz/Logaan.png', type: 'mercz'},
      {id:'mercz-z800', name:'Z-800', slot:'SUPPORT', img:'resources/models/Mercz/Z800.png', type: 'mercz'},
      {id:'mercz-zautja', name:"Zaut'Ja", slot:'NONE', img:'resources/models/Mercz/Zautja.png', type: 'mercz'},
      {id:'mercz-zedpul', name:"Zed'Pul", slot:'SCOUT', img:'resources/models/Mercz/ZedPul.png', type: 'mercz'},
      {id:'mercz-zobafezz', name:'Zoba Fezz', slot:'NONE', img:'resources/models/Mercz/ZobaFezz.png', type: 'mercz'},

      {id:'mercz-jazon', name:"Ja'Zon", slot:'SUPPORT', img:'resources/models/Mercz/Jazon.png', type: 'zed-mercz', bp: 10},
      {id:'mercz-pinzed', name:'Pin-Zed', slot:'LEADER', img:'resources/models/Mercz/PinZed.png', type: 'zed-mercz', cbp: 12},
      {id:'mercz-tex', name:'Tex', slot:'SUPPORT', img:'resources/models/Mercz/Tex.png', type: 'zed-mercz', bp: 10},
      {id:'mercz-zennywise', name:'Zenny-Wise', slot:'SCOUT', img:'resources/models/Mercz/ZennyWise.png', type: 'zed-mercz', bp: 6},
    ],
  };

  // PDF mapping table: maps unit.id -> filename (useful when display names contain punctuation
  // or the PDF files are named differently). We populate a default mapping from UNITS that
  // uses the unit display name (URL-encoded) as the filename. You can override any entry.
  const PDF_MAP = (function(){
    const m = {};
    // default mapping: encoded display name
    for(const k in UNITS){
      UNITS[k].forEach(u => { m[u.id] = encodeURIComponent(u.name) + '.pdf'; });
    }

    // Explicit overrides matching files in resources/pdf
    // Kyllal
    m['kyllal-l1'] = 'Captain.pdf';
    m['kyllal-l2'] = 'Sergeant.pdf';
    m['kyllal-l3'] = 'Klatu.pdf';
    m['kyllal-s1'] = 'Brawlr.pdf';
    m['kyllal-s2'] = 'Heavy Gunner.pdf';
    m['kyllal-s3'] = 'Medic.pdf';
    m['kyllal-s4'] = 'Rocket Trooper.pdf';
    m['kyllal-s5'] = 'Verata.pdf';
    m['kyllal-c1'] = 'Recon.pdf';
    m['kyllal-c2'] = 'Sniper.pdf';
    m['kyllal-c3'] = 'Swordzmaster.pdf';
    m['kyllal-c4'] = 'WASP.pdf';
    m['kyllal-c5'] = 'Nikto.pdf';

    // Savm
    m['savm-l1'] = 'Captain.pdf';
    m['savm-l2'] = 'Sergeant.pdf';
    m['savm-l3'] = 'Klatu.pdf';
    m['savm-s1'] = 'Brawlr.pdf';
    m['savm-s2'] = 'Heavy Gunner.pdf';
    m['savm-s3'] = 'Medic.pdf';
    m['savm-s4'] = 'Rocket Trooper.pdf';
    m['savm-s5'] = 'Verata.pdf';
    m['savm-c1'] = 'Recon.pdf';
    m['savm-c2'] = 'Sniper.pdf';
    m['savm-c3'] = 'Swordzmaster.pdf';
    m['savm-c4'] = 'WASP.pdf';
    m['savm-c5'] = 'Nikto.pdf';

    // Zedz
    m['zedz-l1'] = 'Nercomancer.pdf';
    m['zedz-s1'] = 'Brserkr.pdf';
    m['zedz-s2'] = 'Grubadier.pdf';
    m['zedz-c1'] = 'Zed Bugz.pdf';
    m['zedz-c2'] = 'Zed Grubz.pdf';
    m['zedz-c3'] = 'BurstGrubz.pdf';
    m['zedz-c4'] = 'Grub Chukz.pdf';
    m['zedz-c5'] = 'GrubHemoth.pdf';

    // Terra
    m['terra-l1'] = 'Fyrefly.pdf';
    m['terra-l2'] = 'Sorceress.pdf';
    m['terra-l3'] = 'Lightninbugg.pdf';
    m['terra-s1'] = 'Gunsmith.pdf';
    m['terra-s2'] = 'Hooligan.pdf';
    m['terra-s3'] = 'Tankrantula.pdf';
    m['terra-c1'] = 'Assassin.pdf';
    m['terra-c2'] = 'Huntsmen.pdf';
    m['terra-c3'] = 'Wingnut.pdf';

    // Skaylz
    m['skaylz-l1'] = 'Strykr.pdf';
    m['skaylz-s1'] = 'Frug.pdf';
    m['skaylz-c1'] = 'Snayk.pdf';

    // Mercz (standard)
    m['mercz-alyse'] = 'Alyse.pdf';
    m['mercz-amus'] = 'Amusthehunter.pdf';
    m['mercz-amus-2'] = 'Amusthehunter.pdf';
    m['mercz-balodek'] = 'Balodek.pdf';
    m['mercz-capzmerica'] = 'Capzmerica.pdf';
    m['mercz-dash'] = 'Dash.pdf';
    m['mercz-deviant'] = 'Deviant.pdf';
    m['mercz-dezell'] = 'Dezell.pdf';
    m['mercz-dezell-2'] = 'Dezell.pdf';
    m['mercz-dezell-3'] = 'Dezell.pdf';
    m['mercz-hobehorze'] = 'Hobehorze.pdf';
    m['mercz-komobai'] = 'Komabai.pdf';
    m['mercz-kopekat'] = 'Kopekat.pdf';
    m['mercz-logaan'] = 'Logaan.pdf';
    m['mercz-z800'] = 'Z800.pdf';
    m['mercz-zautja'] = 'Zautja.pdf';
    m['mercz-zedpul'] = 'Zedpul.pdf';
    m['mercz-zobafezz'] = 'Zobafezz.pdf';

    // Mercz (zed-flavored)
    m['mercz-jazon'] = 'Jazon.pdf';
    m['mercz-pinzed'] = 'Pinzed.pdf';
    m['mercz-tex'] = 'Tex.pdf';
    m['mercz-zennywise'] = 'Zennywize.pdf';

    return m;
  })();

  function getPdfPath(unit){
    if(!unit) return '';
    const fname = PDF_MAP[unit.id] || (encodeURIComponent(unit.name) + '.pdf');
    // Append a cache-busting timestamp so clicking Stats opens the latest file
    const base = `resources/pdf/${fname}`;
    return base + '?_cb=' + Date.now();
  }

  // App state
  let state = {
    currentFaction: null,
    selected: [], // array of unit objects
    showMercz: false,
    activeFactions: [],
    merczMode: 'inline', // 'inline' or 'fourth'
    // Zed-specific control points (null when not in use)
    currentControlBP: null,
  };

  // Undo stack removed per request (history disabled)
  // const undoStack = [];

  // DOM refs
  const factionTiles = document.getElementById('factionTiles');
  const unitGrid = document.getElementById('unitGrid');
  const currentFactionLabel = document.getElementById('currentFactionLabel');
  const selectedList = document.getElementById('selectedList');
  const clearBtn = document.getElementById('clearBtn');
  const confirmBtn = document.getElementById('confirmBtn');
  const compHint = document.getElementById('compHint');
  const merczModeControls = document.getElementById('merczModeControls');
  const merczInlineRadio = document.getElementById('merczInline');
  const merczFourthRadio = document.getElementById('merczFourth');
  const merczInfoBtn = document.getElementById('merczInfoBtn');
  const merczTooltip = document.getElementById('merczTooltip');
  // create a toast container element appended to body for notifications
  let toastEl = document.createElement('div'); toastEl.className='toast'; toastEl.id='toast'; document.body.appendChild(toastEl);

  // Runtime sanity check: ensure critical DOM refs exist and expose debug hooks
  (function runtimeSanity(){
    const missing = [];
    [['factionTiles', factionTiles], ['unitGrid', unitGrid], ['selectedList', selectedList], ['clearBtn', clearBtn], ['confirmBtn', confirmBtn]].forEach(([name, ref])=>{ if(!ref) missing.push(name); });
    if(missing.length>0){
      console.error('CTB init: missing DOM refs: ', missing);
      const overlay = document.createElement('div');
      overlay.style.position='fixed'; overlay.style.left='8px'; overlay.style.bottom='8px'; overlay.style.padding='10px 14px'; overlay.style.background='rgba(200,40,40,0.95)'; overlay.style.color='white'; overlay.style.zIndex=99999; overlay.style.borderRadius='6px';
      overlay.textContent = 'CTB init error: missing DOM refs: ' + missing.join(', ');
      document.body.appendChild(overlay);
    }

    // expose a debug handle for interactive troubleshooting
    try{
      window.__ctb = window.__ctb || {};
      window.__ctb.state = state;
      window.__ctb.toggleSelect = toggleSelect;
      window.__ctb.renderUnits = renderUnits;
      window.__ctb.renderSelected = renderSelected;
      window.__ctb.getPdfPath = getPdfPath;
      window.__ctb.UNITS = UNITS;
      console.info('CTB debug: window.__ctb available — inspect state and call functions from devtools');
    }catch(e){ /* non-fatal */ }
  })();

  // Wire mercz mode radios
  if(merczInlineRadio) merczInlineRadio.addEventListener('change', ()=>{ if(merczInlineRadio.checked){ state.merczMode='inline'; normalizeOnModeSwitch(); renderUnits(); } });
  if(merczFourthRadio) merczFourthRadio.addEventListener('change', ()=>{ if(merczFourthRadio.checked){ state.merczMode='fourth';
      // clear any selected mercz on mode switch as requested
      const before = state.selected.length;
      state.selected = state.selected.filter(s => !(s.id && s.id.startsWith && s.id.startsWith('mercz')));
    if(state.selected.length !== before){ renderSelected(); showToast('Mercz selections cleared when changing mode'); }
      normalizeOnModeSwitch(); renderUnits(); } });

  // Normalize when mode switches: move/strip mercz selections depending on mode
  function normalizeOnModeSwitch(){
    if(state.merczMode==='inline'){
      // drop any MERCZ-slot selections (they can't exist in inline mode)
      const before = state.selected.length;
      state.selected = state.selected.filter(s => !(s.slot && s.slot==='MERCZ'));
      if(state.selected.length !== before){ renderUnits(); renderSelected(); }
    } else if(state.merczMode==='fourth'){
      // If any mercz units are selected inline (their id matches mercz) but not in MERCZ slot, move them into MERCZ slot
      let moved = false;
      const hasMercInline = state.selected.some(s => s.id && s.id.startsWith && s.id.startsWith('mercz') && s.slot!=='MERCZ');
      if(hasMercInline){
        // remove any existing MERCZ slot entries then push one mercz unit into MERCZ
        const merczInlineUnits = state.selected.filter(s=> s.id && s.id.startsWith && s.id.startsWith('mercz'));
        // pick the first mercz inline unit to become the MERCZ slot
        if(merczInlineUnits.length>0){
          // remove all mercz inline entries
          state.selected = state.selected.filter(s => !(s.id && s.id.startsWith && s.id.startsWith('mercz')));
          // push the first as MERCZ
          state.selected.push(Object.assign({}, merczInlineUnits[0], {slot:'MERCZ'}));
          moved = true;
        }
      }
      if(moved) { renderUnits(); renderSelected(); }
    }
  }

  function showToast(msg, duration=2200){
    if(!toastEl) return;
    toastEl.textContent = msg; toastEl.classList.add('show');
    clearTimeout(toastEl._timer);
    toastEl._timer = setTimeout(()=>{ toastEl.classList.remove('show'); }, duration);
  }

  // Info tooltip toggle
  if(merczInfoBtn && merczTooltip){
    merczInfoBtn.addEventListener('click', ()=>{
      const isHidden = merczTooltip.hasAttribute('hidden');
      if(isHidden){
        merczTooltip.removeAttribute('hidden');
        merczInfoBtn.setAttribute('aria-expanded','true');
      } else {
        merczTooltip.setAttribute('hidden','');
        merczInfoBtn.setAttribute('aria-expanded','false');
      }
    });
    // hide tooltip when clicking outside
    window.addEventListener('click', (e)=>{
      if(!merczModeControls) return;
      if(merczModeControls.contains(e.target)) return;
      if(!merczTooltip.hasAttribute('hidden')){
        merczTooltip.setAttribute('hidden',''); merczInfoBtn.setAttribute('aria-expanded','false');
      }
    });
  }

  function renderFactions(){
    factionTiles.innerHTML = '';
    FACTIONS.forEach(f => {
      // do not show mercz until another faction has been selected
      if(f.id === 'mercz' && !state.showMercz) return;
      const el = document.createElement('div');
      el.className = 'faction-tile';
      if(state.activeFactions.includes(f.id)) el.classList.add('active');
      el.tabIndex = 0;
      el.setAttribute('role','button');
      el.title = f.desc;

      el.innerHTML = `
        <div class="faction-icon ${f.cls}">${f.img ? `<img src="${encodeURI(f.img)}" alt="${f.name}"/>` : f.name.slice(0,2).toUpperCase()}</div>
        <div class="faction-info">
          <div class="faction-name">${f.name}</div>
          <div class="faction-desc">${f.desc}</div>
        </div>
      `;
      el.dataset.id = f.id;
      el.addEventListener('click', ()=>{
        // if clicking the active tile (same primary faction), collapse and treat as deselect
        if(state.currentFaction === f.id){
          // if clicking the active non-mercz faction, deselect it and drop all selected units
          if(f.id !== 'mercz'){
            // drop all selections
            // undo disabled
            state.selected = [];
            state.currentFaction = null;
            currentFactionLabel.textContent = 'Select a faction';
            // hide mercz until a new faction is chosen
            state.showMercz = false;
            state.activeFactions = state.activeFactions.filter(a=>a==='mercz');
            if(merczModeControls) merczModeControls.hidden = !state.activeFactions.includes('mercz');
            renderFactions(); renderUnits(); renderSelected();
            return;
          }
          // allow expansion toggle for mercz or leave it alone
          el.classList.toggle('expanded');
          return;
        }

        // If clicking Mercz, toggle Mercz active state without changing the primary faction
        if(f.id === 'mercz'){
          const idx = state.activeFactions.indexOf('mercz');
          if(idx === -1){
            state.activeFactions.push('mercz');
            el.classList.add('active');
            el.classList.add('expanded');
          } else {
            state.activeFactions.splice(idx,1);
            el.classList.remove('active');
            el.classList.remove('expanded');
          }
          // debug: log state to console
          console.debug('Mercz toggled, currentFaction=', state.currentFaction, 'activeFactions=', state.activeFactions);
          // If mercz just got turned off, clear all selected units as requested
          if(!state.activeFactions.includes('mercz')){
            // undo disabled
            state.selected = [];
            renderSelected();
            showToast('Selections cleared because Mercz was deselected');
          }
          // show/hide mercz mode controls when mercz active
          if(merczModeControls) merczModeControls.hidden = !state.activeFactions.includes('mercz');
          renderUnits();
          return;
        }

    // Clicking a non-mercz faction: collapse expansions, show mercz, make this primary
        collapseAllFactionExpansions();
  if(f.id !== 'mercz') state.showMercz = true;

        // Set active factions: primary becomes this faction; keep mercz if it was active
        const keepMercz = state.activeFactions.includes('mercz');
        state.activeFactions = [f.id];
        if(keepMercz) state.activeFactions.push('mercz');

    // if switching to a different non-mercz faction, clear all selected unit cards as requested
  if(state.currentFaction && state.currentFaction !== f.id){ /* undo disabled */ state.selected = []; renderSelected(); showToast('Selections cleared because a different faction was selected'); }

    // select faction (updates currentFaction and units)
  selectFaction(f.id);

  // normalize selections after mode change
  normalizeOnModeSwitch();

        // re-render faction tiles so mercz appears if needed and active classes apply
        renderFactions();

        // find the newly rendered tile and expand it
        const newTile = Array.from(factionTiles.children).find(t => t.dataset.id === f.id);
        if(newTile) newTile.classList.add('expanded');
      });
      el.addEventListener('keydown', (e)=>{ if(e.key==='Enter') el.click(); });
      factionTiles.appendChild(el);
    });
    // ensure mercz mode controls reflect whether mercz faction is the current selected tile
    // only show options when mercz tile itself is selected
    if(merczModeControls) merczModeControls.hidden = !(state.currentFaction === 'mercz');
    if(merczModeControls && merczTooltip) {
      // hide tooltip if controls are hidden
      if(merczModeControls.hidden){ merczTooltip.setAttribute('hidden',''); if(merczInfoBtn) merczInfoBtn.setAttribute('aria-expanded','false'); }
    }
  }

  function collapseAllFactionExpansions(){
    Array.from(factionTiles.children).forEach(t => t.classList.remove('expanded'));
  }

  function selectFaction(fid){
    // If changing faction, clear selections (store undo so user can restore)
    if(state.currentFaction && state.currentFaction !== fid && state.selected.length>0){
      // If selecting mercz, or mercz units are already selected, do not clear existing selections
      const hasMerczSelected = state.selected.some(s => s.id && s.id.startsWith && s.id.startsWith('mercz'));
      if(!(fid === 'mercz' || state.currentFaction === 'mercz' || hasMerczSelected)){
  // undo disabled
        state.selected = [];
      }
    }
    // Set current faction
    state.currentFaction = fid;
    // Reflect active faction on the body element so CSS can react (e.g., selected card tint)
    try{
      if(state.currentFaction) document.body.setAttribute('data-faction', state.currentFaction);
      else document.body.removeAttribute('data-faction');
    }catch(e){}
    currentFactionLabel.textContent = 'Faction: ' + (FACTIONS.find(x=>x.id===fid)?.name||'');
    // Ensure primary active faction is set (keep mercz active if present)
    const keepMercz = state.activeFactions.includes('mercz');
    state.activeFactions = [fid];
    if(keepMercz) state.activeFactions.push('mercz');
    // Re-apply visual active states on existing DOM (renderFactions caller will also re-render)
    Array.from(factionTiles.children).forEach(tile => {
      tile.classList.toggle('active', state.activeFactions.includes(tile.dataset.id));
    });
    renderUnits();
  }

  function renderUnits(){
    unitGrid.innerHTML = '';
    const primaryId = state.currentFaction;
    const primaryUnits = primaryId ? (UNITS[primaryId] || []) : [];
    const merczActive = state.activeFactions.includes('mercz');
    const merczUnits = merczActive ? (UNITS['mercz'] || []) : [];

    // If merczMode is 'inline', render as before (primary then mercz interleaved by slot)
    if(!merczActive || state.merczMode === 'inline'){
      SLOTS.forEach(slot => {
        const primaryGroup = primaryUnits.filter(u => u.slot === slot);
          // include mercz in rows; when the primary faction is 'zedz' and merczMode is 'inline',
          // only allow mercz units with type 'zed-mercz' to appear inline
          let merczGroup = merczUnits.filter(u => u.slot === slot);
          if(state.merczMode === 'inline'){
            if(primaryId === 'zedz'){
              merczGroup = merczGroup.filter(u => u.type === 'zed-mercz' || u.type === 'both');
            } else {
              merczGroup = merczGroup.filter(u => u.type === 'mercz' || u.type === 'both');
            }
          }
        console.debug('renderUnits slot=', slot, 'primary=', primaryGroup.length, 'mercz=', merczGroup.length);
    const group = [...primaryGroup, ...merczGroup];

        const slotRow = document.createElement('div');
        slotRow.className = 'slot-row';

        const header = document.createElement('div');
        header.className = 'slot-header';
        header.textContent = slot;
        slotRow.appendChild(header);

        const slotCards = document.createElement('div');
        slotCards.className = 'slot-cards';

        if(group.length===0){
          const empty = document.createElement('div');
          empty.className = 'slot-empty';
          empty.textContent = 'No units available';
          slotCards.appendChild(empty);
        }

        group.forEach(u => {
          const card = document.createElement('div');
          card.className = 'unit-card';
          card.dataset.id = u.id;
          card.innerHTML = `
            <div class="unit-art">${u.img ? `<img src="${encodeURI(u.img)}" alt="${u.name}"/>` : u.art}</div>
            <div class="unit-meta">
              <div class="unit-name">${u.name}</div>
              <div class="slot-pill">${u.slot}</div>
            </div>
            <div class="unit-actions"><a class="stats-link" href="${getPdfPath(u)}" target="_blank" rel="noopener">Stats</a></div>
            ${(state.currentFaction === 'zedz' && !(u.id && u.id.startsWith && u.id.startsWith('mercz') && state.merczMode === 'fourth' && state.activeFactions.includes('mercz'))) ? `<div class="bp-pill">${u.cbp?('CBP: '+u.cbp):(u.bp?('BP: '+u.bp):'')}</div>` : ''}
          `;
          if(u.id && u.id.startsWith && u.id.startsWith('mercz')){
            card.classList.add('mercz');
            // add type-specific class
            if(u.type) card.classList.add(`mercz-${u.type.replace(/[^a-z0-9\-]/gi,'')}`);
            // add mercz badge with type label
            const b = document.createElement('div'); b.className='mercz-badge'; b.textContent = (u.type === 'zed-mercz') ? 'ZED-MERCZ' : 'MERCZ'; card.appendChild(b);
          }
          if(isSelected(u.id)) card.classList.add('selected');
          card.addEventListener('click', ()=>toggleSelect(u));
          slotCards.appendChild(card);
        });

        slotRow.appendChild(slotCards);
        unitGrid.appendChild(slotRow);
      });
    } else if(state.merczMode === 'fourth'){
      // Render standard slots first
      SLOTS.forEach(slot => {
        const group = primaryUnits.filter(u => u.slot === slot);
        const slotRow = document.createElement('div');
        slotRow.className = 'slot-row';

        const header = document.createElement('div');
        header.className = 'slot-header';
        header.textContent = slot;
        slotRow.appendChild(header);

        const slotCards = document.createElement('div');
        slotCards.className = 'slot-cards';

        if(group.length===0){
          const empty = document.createElement('div');
          empty.className = 'slot-empty';
          empty.textContent = 'No units available';
          slotCards.appendChild(empty);
        }

        group.forEach(u => {
          const card = document.createElement('div');
          card.className = 'unit-card';
          card.dataset.id = u.id;
          card.innerHTML = `
            <div class="unit-art">${u.img ? `<img src="${encodeURI(u.img)}" alt="${u.name}"/>` : u.art}</div>
            <div class="unit-meta">
              <div class="unit-name">${u.name}</div>
              <div class="slot-pill">${u.slot}</div>
            </div>
            <div class="unit-actions"><a class="stats-link" href="${getPdfPath(u)}" target="_blank" rel="noopener">Stats</a></div>
            ${(state.currentFaction === 'zedz') ? `<div class="bp-pill">${u.cbp?('CBP: '+u.cbp):(u.bp?('BP: '+u.bp):'')}</div>` : ''}
          `;
          if(isSelected(u.id)) card.classList.add('selected');
          card.addEventListener('click', ()=>toggleSelect(u));
          slotCards.appendChild(card);
        });

        slotRow.appendChild(slotCards);
        unitGrid.appendChild(slotRow);
      });

      // Then render a dedicated MERCZ slot row (4th slot)
      const merczRow = document.createElement('div');
      merczRow.className = 'slot-row';

      const mheader = document.createElement('div');
      mheader.className = 'slot-header';
      mheader.textContent = 'MERCZ';
      merczRow.appendChild(mheader);

      const mcards = document.createElement('div');
      mcards.className = 'slot-cards';

      // Prepare the list to show in the MERCZ row. When in 'fourth' mode we hide variants
      // whose id ends with -2 or -3 (alternate slot variants).
      let merczListForRow = merczUnits.slice();
      if(state.merczMode === 'fourth'){
        merczListForRow = merczListForRow.filter(u => !(u.id && /-(?:2|3)$/.test(u.id)));
      }
      if(merczListForRow.length===0){
        const empty = document.createElement('div');
        empty.className = 'slot-empty';
        empty.textContent = 'No Mercz units available';
        mcards.appendChild(empty);
      }

      merczListForRow.forEach(u => {
        const card = document.createElement('div');
        card.className = 'unit-card mercz';
        card.dataset.id = u.id;
        card.innerHTML = `
          <div class="unit-art">${u.img ? `<img src="${encodeURI(u.img)}" alt="${u.name}"/>` : u.art}</div>
          <div class="unit-meta">
            <div class="unit-name">${u.name}</div>
            <div class="slot-pill">MERCZ</div>
          </div>
          <div class="unit-actions"><a class="stats-link" href="${getPdfPath(u)}" target="_blank" rel="noopener">Stats</a></div>
          ${(state.currentFaction === 'zedz' && !(u.id && u.id.startsWith && u.id.startsWith('mercz') && state.merczMode === 'fourth' && state.activeFactions.includes('mercz'))) ? `<div class="bp-pill">${u.cbp?('CBP: '+u.cbp):(u.bp?('BP: '+u.bp):'')}</div>` : ''}
        `;
        // badge with type label
        const b = document.createElement('div'); b.className='mercz-badge'; b.textContent = (u.type === 'zed-mercz') ? 'ZED-MERCZ' : 'MERCZ'; card.appendChild(b);
        if(u.type) card.classList.add(`mercz-${u.type.replace(/[^a-z0-9\-]/gi,'')}`);
        if(isSelected(u.id)) card.classList.add('selected');
        card.addEventListener('click', ()=>toggleSelect(u));
        mcards.appendChild(card);
      });

      merczRow.appendChild(mcards);
      unitGrid.appendChild(merczRow);
    }
    updateUI();
  }

  function isSelected(id){
    return state.selected.some(s=>s.id===id);
  }

  function findSelectedBySlot(slot){
    return state.selected.find(s=>s.slot===slot);
  }

  function pushUndo(){
    // no-op: undo history disabled
    return;
  }

  function updateUndoRedoButtons(){
    // Clear button enabled when there are selected units
    if(clearBtn) clearBtn.disabled = state.selected.length===0;
  }

  function toggleSelect(unit){
    let already = isSelected(unit.id);
    // For Zedz scouts we allow selecting multiple of the same unit — treat 'already' as false so
    // clicking the scout will add another instance instead of toggling it off.
    if(state.currentFaction === 'zedz' && unit && unit.slot === 'SCOUT'){
      already = false;
    }
    // Save undo state before mutating
    pushUndo();

    if(already){
      // removal: if leader removed and faction is zedz, clear all
      if(state.currentFaction === 'zedz'){
        const wasLeader = unit.slot === 'LEADER';
        // If this is a MERCZ unit selected while Zedz is primary and merczMode is 'fourth',
        // do NOT credit back its BP/CBP (it's slot-only for Zedz in fourth mode).
        const isSpecialMercz = unit.id && unit.id.startsWith && unit.id.startsWith('mercz') && state.merczMode === 'fourth' && state.activeFactions.includes('mercz');
        // add back bp values only for non-special-mercz removals
        if(!isSpecialMercz){
          if(unit.slot === 'LEADER' && unit.cbp){ state.currentControlBP = (state.currentControlBP || 0) + Number(unit.cbp); }
          if(unit.slot !== 'LEADER' && unit.bp){ state.currentControlBP = (state.currentControlBP || 0) + Number(unit.bp); }
        }
        if(wasLeader){ state.selected = []; state.currentControlBP = null; renderUnits(); renderSelected(); return; }
      }
      state.selected = state.selected.filter(s=>s.id!==unit.id);
    } else {
      // Zedz-specific selection rules
      if(state.currentFaction === 'zedz'){
        // Special-case: when Zedz is primary and MERCZ is enabled as fourth slot,
        // selecting a MERCZ unit should occupy the MERCZ slot and NOT affect control BP/CBP.
        if(unit.id && unit.id.startsWith && unit.id.startsWith('mercz') && state.merczMode === 'fourth' && state.activeFactions.includes('mercz')){
          // replace existing MERCZ entry if present, otherwise push into MERCZ slot
          const existing = state.selected.find(s => s.slot === 'MERCZ');
          if(existing){
            state.selected = state.selected.map(s => s.slot === 'MERCZ' ? Object.assign({}, unit, {slot:'MERCZ'}) : s);
          } else {
            state.selected.push(Object.assign({}, unit, {slot:'MERCZ'}));
          }
          // do NOT modify state.currentControlBP for this selection
          renderUnits(); renderSelected();
          return;
        }
        // Leader must be selected first
        if(unit.slot === 'LEADER'){
            // If a different leader is already selected (Zedz), clear the entire selected list
            const existingLeader = state.selected.find(s => s.slot === 'LEADER');
            if(existingLeader && existingLeader.id !== unit.id){
              state.selected = [];
            }
            state.selected.push(unit);
            // initialize control BP to the new leader's CBP
            state.currentControlBP = Number(unit.cbp || 0);
        } else if(unit.slot === 'SUPPORT'){
          // support must be second and subtract bp
          const hasLeader = state.selected.some(s=>s.slot==='LEADER');
          if(!hasLeader){ flashMessage('Select a Leader first'); return; }
          // subtract support bp
          const b = Number(unit.bp || 0);
          if(state.currentControlBP !== null){
            if(b > state.currentControlBP){ flashMessage('Not enough Control BP to add Support'); return; }
            state.currentControlBP -= b;
          }
          state.selected.push(unit);
        } else if(unit.slot === 'SCOUT'){
          // scouts: multiple allowed, subtract bp each time
          const hasLeader = state.selected.some(s=>s.slot==='LEADER');
          if(!hasLeader){ flashMessage('Select a Leader first'); return; }
          const b = Number(unit.bp || 0);
          if(state.currentControlBP !== null){
            if(b > state.currentControlBP){ flashMessage('Not enough Control BP to add Scout'); return; }
            state.currentControlBP -= b;
          }
          state.selected.push(unit);
        } else {
          // other slots: default push
          state.selected.push(unit);
        }
        // if control BP reaches zero, disallow further selections
        if(state.currentControlBP !== null && state.currentControlBP <= 0){ state.currentControlBP = 0; }
      } else {
        // default behavior (non-Zedz)
        const isMerczUnit = unit.id && unit.id.startsWith && unit.id.startsWith('mercz');
        const maxAllowed = (state.merczMode==='fourth') ? 4 : 3;
        const targetSlot = (isMerczUnit && state.merczMode==='fourth') ? 'MERCZ' : unit.slot;
        if(state.selected.length>=maxAllowed){
          const sameSlot = findSelectedBySlot(targetSlot);
          if(sameSlot){ state.selected = state.selected.map(s=> s.slot===targetSlot ? (isMerczUnit && state.merczMode==='fourth' ? Object.assign({}, unit, {slot:'MERCZ'}) : unit) : s); }
          else { flashMessage(`Maximum ${maxAllowed} units. Remove one to add another.`); return; }
        } else {
          const sameSlot = findSelectedBySlot(targetSlot);
          if(sameSlot){ state.selected = state.selected.map(s=> s.slot===targetSlot ? (isMerczUnit && state.merczMode==='fourth' ? Object.assign({}, unit, {slot:'MERCZ'}) : unit) : s); }
          else { if(isMerczUnit && state.merczMode==='fourth') state.selected.push(Object.assign({}, unit, {slot:'MERCZ'})); else state.selected.push(unit); }
        }
      }
    }

    // If we just added a Mercz unit while in inline mode, remove any other Mercz entries
    if(!already){
      const isMerczUnitNow = unit.id && unit.id.startsWith && unit.id.startsWith('mercz');
      if(isMerczUnitNow && state.merczMode === 'inline'){
        state.selected = state.selected.filter(s => !(s.id && s.id.startsWith && s.id.startsWith('mercz') && s.id !== unit.id));
      }
    }

    renderUnits();
    renderSelected();
  }

  function flashMessage(msg){
    compHint.textContent = msg;
    compHint.style.color = 'var(--danger)';
    setTimeout(()=>{
      // reflect whether MERCZ fourth slot is available
      if(state.merczMode==='fourth' && state.activeFactions.includes('mercz')){
        compHint.textContent = 'Slots: LEADER, SUPPORT, SCOUT, MERCZ';
      } else {
        compHint.textContent = 'Slots: LEADER, SUPPORT, SCOUT';
      }
      compHint.style.color = '';
    },1400);
  }

  function renderSelected(){
    selectedList.innerHTML = '';
    // Render a header and body for each slot in fixed order. Only include MERCZ when mercz is in fourth mode and active.
    const displayOrder = ['LEADER','SUPPORT','SCOUT'];
    if(state.merczMode === 'fourth' && state.activeFactions.includes('mercz')) displayOrder.push('MERCZ');

    displayOrder.forEach(slot => {
      const slotWrap = document.createElement('div');
      slotWrap.className = 'selected-slot';

      const header = document.createElement('div');
      header.className = 'selected-slot-header';
      header.textContent = slot;
      slotWrap.appendChild(header);

      const body = document.createElement('div');
      body.className = 'selected-slot-body';

      // find selected units for this slot. For SCOUT we may have multiple; other slots only one expected
      if(slot === 'SCOUT'){
        const scouts = state.selected.filter(s => s.slot === 'SCOUT');
        if(scouts.length>0){
          scouts.forEach(u => {
            const it = document.createElement('div');
            it.className = 'selected-item';
            it.innerHTML = `
              <div class="sel-art">${u.img ? `<img src="${encodeURI(u.img)}" alt="${u.name}"/>` : u.art}</div>
              <div class="sel-meta">
                <div style="font-weight:700">${u.name}</div>
                <div class="small-muted">${u.slot}</div>
              </div>
              <div class="sel-actions">
                <a class="stats-link" href="${getPdfPath(u)}" target="_blank" rel="noopener">Stats</a>
                <button data-id="${u.id}" class="remove-btn" title="Remove">✕</button>
              </div>
            `;
            it.querySelector('.remove-btn').addEventListener('click', ()=>{
              // remove only this instance
              const idx = state.selected.indexOf(u);
              if(idx!==-1) state.selected.splice(idx,1);
              // Zedz crediting
              if(state.currentFaction === 'zedz'){
                state.currentControlBP = (state.currentControlBP || 0) + Number(u.bp || u.cbp || 0);
              }
              renderUnits(); renderSelected();
            });
            body.appendChild(it);
          });
        } else {
          const empty = document.createElement('div');
          empty.className = 'selected-empty';
          empty.textContent = '(empty)';
          body.appendChild(empty);
        }
      } else {
        const u = state.selected.find(s => s.slot === slot);
        if(u){
          const it = document.createElement('div');
          it.className = 'selected-item';
          it.innerHTML = `
            <div class="sel-art">${u.img ? `<img src="${encodeURI(u.img)}" alt="${u.name}"/>` : u.art}</div>
            <div class="sel-meta">
              <div style="font-weight:700">${u.name}</div>
              <div class="small-muted">${u.slot}</div>
            </div>
            <div class="sel-actions">
              <a class="stats-link" href="${getPdfPath(u)}" target="_blank" rel="noopener">Stats</a>
              <button data-id="${u.id}" class="remove-btn" title="Remove">✕</button>
            </div>
          `;
          it.querySelector('.remove-btn').addEventListener('click', ()=>{
            // undo disabled
            if(state.currentFaction === 'zedz'){
              if(u.slot === 'LEADER'){
                // remove leader -> clear all
                state.selected = [];
                state.currentControlBP = null;
                renderUnits(); renderSelected();
                return;
              }
              if(u.slot === 'SUPPORT'){
                // credit back BP
                state.currentControlBP = (state.currentControlBP || 0) + Number(u.bp || u.cbp || 0);
              }
            }
            const idx = state.selected.indexOf(u);
            if(idx!==-1) state.selected.splice(idx,1);
            renderUnits(); renderSelected();
          });
          body.appendChild(it);
        } else {
          const empty = document.createElement('div');
          empty.className = 'selected-empty';
          empty.textContent = '(empty)';
          body.appendChild(empty);
        }
      }

      slotWrap.appendChild(body);
      selectedList.appendChild(slotWrap);
    });

    // Append any extra/unexpected slots after the main order, but do not append MERCZ if header is hidden
    state.selected
      .filter(s => !displayOrder.includes(s.slot))
      .filter(s => !(s.slot === 'MERCZ' && !(state.merczMode === 'fourth' && state.activeFactions.includes('mercz'))))
      .forEach(u=>{
        const it = document.createElement('div');
        it.className = 'selected-item';
        it.innerHTML = `
          <div class="sel-art">${u.img ? `<img src="${encodeURI(u.img)}" alt="${u.name}"/>` : u.art}</div>
          <div class="sel-meta">
            <div style="font-weight:700">${u.name}</div>
            <div class="small-muted">${u.slot}</div>
          </div>
          <div>
            <button data-id="${u.id}" class="remove-btn" title="Remove">✕</button>
          </div>
        `;
        it.querySelector('.remove-btn').addEventListener('click', ()=>{
          // undo disabled
          state.selected = state.selected.filter(s=>s.id!==u.id);
          renderUnits(); renderSelected();
        });
        selectedList.appendChild(it);
      });

    // Update header: show Current Control BP for Zedz in the header instead of the 'Selected Team' label
    const h = document.querySelector('.panel-right h3');
    const maxAllowed = ((state.merczMode==='fourth' && state.activeFactions.includes('mercz')) ? 4 : 3);
    if(h){
      if(state.currentFaction === 'zedz'){
        h.textContent = `Control BP Remaining: ${state.currentControlBP === null ? '-' : state.currentControlBP}`;
      } else {
        h.textContent = `Selected Team (${state.selected.length}/${maxAllowed})`;
      }
    }

    // Confirm enable rules:
    // - inline: exactly 3 and one of each slot
    // - fourth: exactly 4 with LEADER, SUPPORT, SCOUT, and one MERCZ
    if(state.merczMode==='fourth' && state.activeFactions.includes('mercz')){
      confirmBtn.disabled = !(state.selected.length===4 && ['LEADER','SUPPORT','SCOUT','MERCZ'].every(slot=> state.selected.some(s=>s.slot===slot)));
    } else {
      confirmBtn.disabled = !(state.selected.length===3 && SLOTS.every(slot=> state.selected.some(s=>s.slot===slot)));
    }

    // Zedz special-case: if Current Control BP is exactly 0, allow confirming the team
    // (this overrides the slot-based enable/disable above)
    if(typeof confirmBtn !== 'undefined' && confirmBtn && state.currentFaction === 'zedz' && state.currentControlBP === 0){
      confirmBtn.disabled = false;
    }

    // Remove any legacy .control-bp element when present; header now shows the value for Zedz
    const rightPanel = document.querySelector('.panel-right');
    if(rightPanel){
      const existing = rightPanel.querySelector('.control-bp');
      if(existing) existing.remove();
    }
  }

  // Clear selection action (replaces Undo)
  if(clearBtn) clearBtn.addEventListener('click', ()=>{
    if(state.selected.length===0) return;
    // undo disabled
    state.selected = [];
    renderUnits(); renderSelected(); updateUndoRedoButtons();
  });

  // redo removed

  function idsToUnits(ids){
    const arr = [];
    ids.forEach(id=>{
      for(const k in UNITS){
        const u = UNITS[k].find(x=>x.id===id);
        if(u) {
          // If this is a mercz unit and current mode is fourth with mercz active,
          // restore it as slot 'MERCZ' so it occupies the dedicated slot.
          if(u.id && u.id.startsWith && u.id.startsWith('mercz') && state.merczMode==='fourth' && state.activeFactions.includes('mercz')){
            arr.push(Object.assign({}, u, {slot:'MERCZ'}));
          } else {
            arr.push(u);
          }
          break;
        }
      }
    });
    return arr;
  }

  // Keyboard shortcuts Ctrl+Z/Ctrl+Y
  window.addEventListener('keydown', (e)=>{
      if((e.ctrlKey || e.metaKey) && e.key.toLowerCase()==='z'){
        e.preventDefault(); if(clearBtn) clearBtn.click();
    }
    // Ctrl+Y (redo) removed
  });

  // Confirm action: assemble a print-ready combined PDF (3 units per landscape page)
  confirmBtn.addEventListener('click', async ()=>{
    if(confirmBtn.disabled) return;
    try{
      // Helper to dynamically load a script
      function loadScript(src){
        return new Promise((resolve, reject)=>{
          if(document.querySelector(`script[src="${src}"]`)) return resolve();
          const s = document.createElement('script'); s.src = src; s.onload = ()=>resolve(); s.onerror = (e)=>reject(e); document.head.appendChild(s);
        });
      }

      // Load pdf.js and jsPDF from CDN if necessary
      if(!window.pdfjsLib){
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js');
        if(window.pdfjsLib) window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.worker.min.js';
      }
      if(!window.jspdf){
        await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
        if(window.jspdf && window.jspdf.jsPDF) window.jsPDF = window.jspdf.jsPDF; else if(window.jspdf) window.jsPDF = window.jspdf;
      }

      const pdfjs = window.pdfjsLib;
      const { jsPDF } = window;

      // render first page of a PDF url to a PNG dataURL and return metadata about the PDF page
      async function renderPdfToPng(url){
        // Append a cache-busting query parameter so browsers (and intermediate caches) fetch the
        // most recent PDF file instead of returning a stale cached copy.
        const sep = url.indexOf('?') === -1 ? '?' : '&';
        const fetchUrl = url + sep + '_cb=' + Date.now();
        const resp = await fetch(fetchUrl);
        if(!resp.ok) throw new Error('Failed to fetch ' + url);
        const buf = await resp.arrayBuffer();
        const loadingTask = pdfjs.getDocument({data: buf});
        const srcDoc = await loadingTask.promise;
        const page = await srcDoc.getPage(1);
        // capture the page's view box in PDF points (1 point = 1/72 inch)
        const viewBox = (page.view && page.view.length === 4) ? page.view : page.getViewport({scale:1}).view;
        const pageWidthPts = Math.abs(viewBox[2] - viewBox[0]);
        const pageHeightPts = Math.abs(viewBox[3] - viewBox[1]);

        // render at a reasonable pixel scale for crisp images
        const renderScale = 2.0;
        const viewport = page.getViewport({scale: renderScale});
        const canvas = document.createElement('canvas');
        canvas.width = Math.ceil(viewport.width);
        canvas.height = Math.ceil(viewport.height);
        const ctx = canvas.getContext('2d');
        const renderTask = page.render({canvasContext: ctx, viewport});
        await renderTask.promise;
        const dataUrl = canvas.toDataURL('image/png');
        try{ page.cleanup && page.cleanup(); srcDoc.cleanup && srcDoc.cleanup(); } catch(e){}

        // compute sizes in inches
        const widthInches = pageWidthPts / 72;
        const heightInches = pageHeightPts / 72;

        // Debug: report what we fetched and its measured size so you can tell if old PDFs are still being used
        try{ console.debug('renderPdfToPng fetched', fetchUrl, '=>', {widthInches, heightInches, pageWidthPts, pageHeightPts, pixelWidth: canvas.width, pixelHeight: canvas.height}); }catch(e){}

        return {
          dataUrl,
          pageWidthPts,
          pageHeightPts,
          widthInches,
          heightInches,
          // keep the pixel dims as well in case they're useful
          pixelWidth: canvas.width,
          pixelHeight: canvas.height,
        };
      }

      // Collect selected units in slot-priority order: LEADER, SUPPORT, SCOUT, MERCZ
      const leaders = state.selected.filter(s => s.slot === 'LEADER');
      const supports = state.selected.filter(s => s.slot === 'SUPPORT');
      const scouts = state.selected.filter(s => s.slot === 'SCOUT');
      const mercs = state.selected.filter(s => s.slot === 'MERCZ');
      const ordered = [].concat(leaders, supports, scouts, mercs);
      if(ordered.length === 0) throw new Error('No selected units to combine');

      // Render every selected unit's PDF first page to an image (with metadata)
      const images = [];
      for(const u of ordered){
        images.push(await renderPdfToPng(getPdfPath(u)));
      }

      // Create jsPDF document (landscape 11" x 8.5") using inches as units
      const doc = new jsPDF({orientation:'landscape', unit:'in', format:[11,8.5]});
      const pageW = doc.internal.pageSize.getWidth(); // 11
      const pageH = doc.internal.pageSize.getHeight(); // 8.5
      const baseCols = 3;
      const slotW = pageW / baseCols; // base slot width

      // Layout algorithm: determine how many base slots each image needs based on its native PDF width
      // then place left-to-right, wrapping pages when necessary. Preserve aspect ratio; scale down if
      // the computed height would exceed page height.
      let colCursor = 0;
      let pageIndex = 0;
      for(let i = 0; i < images.length; i++){
        const img = images[i];
        // Determine required slots by comparing native width in inches to slot width
        let reqSlots = Math.max(1, Math.round(img.widthInches / slotW));
        if(reqSlots > baseCols) reqSlots = baseCols;

        // If not enough space on this row, start a new page/row
        if(reqSlots > (baseCols - colCursor)){
          // new page
          doc.addPage([pageW, pageH], 'landscape');
          pageIndex++;
          colCursor = 0;
        }

        const x = colCursor * slotW;
        // width in inches that the image will occupy
        let drawW = reqSlots * slotW;
        // compute height in inches preserving PDF aspect ratio: height = drawW * (pageHeightPts / pageWidthPts)
        const ptsW = img.pageWidthPts || (img.widthInches * 72);
        const ptsH = img.pageHeightPts || (img.heightInches * 72);
        const aspect = ptsH / ptsW;
        let drawH = drawW * aspect;

        // If the resulting height would overflow the page, scale down to fit page height
        if(drawH > pageH){
          const scaleFactor = pageH / drawH;
          drawH = pageH;
          drawW = drawW * scaleFactor;
        }

        // Center vertically
        const y = Math.max(0, (pageH - drawH) / 2);

        // Add the image at computed position and size
        doc.addImage(img.dataUrl, 'PNG', x, y, drawW, drawH);

        // advance cursor
        colCursor += reqSlots;
        // If column cursor has filled the row, start a new page for the next image
        if(colCursor >= baseCols){
          if(i < images.length - 1){
            doc.addPage([pageW, pageH], 'landscape');
            pageIndex++;
          }
          colCursor = 0;
        }
      }

      // Output the combined PDF as a blob and open in new tab for printing/saving
      const blob = doc.output('blob');
      const url = URL.createObjectURL(blob);
      window.open(url, '_blank');

    } catch(err){
      console.error('Error building combined PDF', err);
      alert('Error building combined PDF: ' + (err && err.message));
    }
  });

  // Init
  function updateUI(){
    // mark cards
    const cards = document.querySelectorAll('.unit-card');
    cards.forEach(card=>{
      const id = card.dataset.id;
      if(isSelected(id)) card.classList.add('selected'); else card.classList.remove('selected');
    });
    renderSelected(); updateUndoRedoButtons();
  }

  renderFactions();

})();