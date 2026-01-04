const STORAGE_KEY = "bird_year_list_v1";
const BACKUP_META_KEY = "bird_year_list_backup_meta_v1";

/*
  If true, users must pick a bird that matches your Manitoba list.
  If false, they can type anything (still gets suggestions).
*/
const REQUIRE_SPECIES_FROM_LIST = false;

const MB_SPECIES_RAW = `
Greater White Fronted Goose
Snow Goose
Ross's Goose
Brant
Cackling Goose
Canada Goose
Trumpeter Swan
Tundra Swan
Wood Duck
Gadwall
Eurasian Wigeon
American Wigeon
American Black Duck
Mallard
Blue-winged Teal
Cinnamon Teal
Northern Shoveler
Northern Pintail
Green-winged Teal
Canvasback
Redhead
Ring-necked Duck
Greater Scaup
Lesser Scaup
King Eider
Common Eider
Harlequin Duck
Surf Scoter
White-winged Scoter
Black Scoter
Long-tailed Duck
Bufflehead
Common Goldeneye
Hooded Merganser
Common Merganser
Red-breasted Merganser
Ruddy Duck
Ring-necked Pheasant
Gray Partridge
Ruffed Grouse
Spruce Grouse
Willow Ptarmigan
Rock Ptarmigan
Sharp-tailed Grouse
Wild Turkey
Red-throated Loon
Pacific Loon
Common Loon
Pied-billed Grebe
Horned Grebe
Red-necked Grebe
Eared Grebe
Western Grebe
Clarke's Grebe
Northern Gannet
Double-crested Cormorant
American White Pelican
American Bittern
Least Bittern
Great Blue Heron
Great Egret
Snowy Egret
Little Blue Heron
Cattle Egret
Green Heron
Black-crowned Night-Heron
Yellow-crowned Night-Heron
Glossy Ibis
White-faced Ibis
Turkey vulture
Osprey
American [Northern] Harrier
Sharp-shinned Hawk
Cooper's Hawk
Northern Goshawk
Red-shouldered Hawk
Broad-winged Hawk
Swainson's Hawk
Red-tailed Hawk
Rough-legged Hawk
Ferruginous Hawk
Golden Eagle
Bald Eagle
Yellow Rail
Virginia Rail
Sora
American Coot
Sandhill Crane
Whooping Crane
American Avocet
Black-bellied Plover
American Golden Plover
Semipalmated Plover
Piping Plover
Killdeer
Wilson's Plover
Greater Yellowlegs
Willet
Lesser Yellowlegs
Solitary Sandpiper
Spotted Sandpiper
Upland Sandpiper
Whimbrel
Hudsonian Godwit
Marbled Godwit
Ruddy Turnstone
Red Knot
Stilt Sandpiper
Sanderling
Dunlin
Purple Sandpiper
Baird's Sandpiper
Least Sandpiper
White-rumped Sandpiper
Semipalmated Sandpiper
Pectoral Sandpiper
Short-billed Dowitcher
Long-billed Dowitcher
Wilson's Snipe
American Woodcock
Wilson's Phalarope
Red-necked Phalarope
Parasitic Jaeger
Long-tailed Jaeger
Sabine's Gull
Bonaparte's Gull
Little Gull
Laughing Gull
Franklin's Gull
Ring-billed Gull
California Gull
Herring Gull
Iceland Gull
Lesser Black-backed Gull
Glaucous Gull
Great Black-backed Gull
Caspian Tern
Black Tern
Common Tern
Arctic Tern
Forster's Tern
Black Guillemot
Rock Pigeon
Eurasian Collared-Dove
White-winged Dove
Mourning Dove
Black-billed Cuckoo
Eastern Screech Owl
Great Horned Owl
Snowy Owl
Northern Hawk Owl
Burrowing Owl
Barred Owl
Great Gray Owl
Long-eared Owl
Short-eared Owl
Boreal Owl
Northern Saw-whet Owl
Common Nighthawk
Eastern Whip-poor-will
Chimney Swift
Ruby-throated Hummingbird
Belted Kingfisher
Red-headed Woodpecker
Red-bellied Wookpecker
Yellow-bellied Sapsucker
Downy Woodpecker
Hairy Woodpecker
American Three-toed Woodpecker
Black-backed Woodpecker
Northern Flicker
Pileated Woodpecker
American Kestrel
Merlin
Gyrfalcon
Peregrine Falcon
Prairie Falcon
Olive-sided Flycatcher
Western Wood-Pewee
Eastern Wood-Pewee
Yellow-bellied Flycatcher
Alder Flycatcher
Willow Flycatcher
Least Flycatcher
Eastern Phoebe
Say's Phoebe
Great Crested Flycatcher
Ash-throated Flycatcher
Western Kingbird
Eastern Kingbird
Scissor-tailed Flycatcher
Loggerhead Shrike
Northern Shrike
White-eyed Vireo ??
Blue-headed Vireo
Yellow-throated Vireo
Philadelphia Vireo
Warbling Vireo
Red-eyed Vireo
Canada Jay
Blue Jay
Black-billed Magpie
American Crow
Common Raven
Horned Lark
Purple Martin
Tree Swallow
Northern Rough-winged Swallow
Bank Swallow
Cliff Swallow
Barn Swallow
Black-capped Chickadee
Boreal Chickadee
Red-breasted Nuthatch
White-breasted Nuthatch
Brown Creeper
Northern House Wren
Winter Wren
Sedge Wren
Marsh Wren
Golden-crowned Kinglet
Ruby-crowned Kinglet
Northern Wheatear
Eastern Bluebird
Mountain Bluebird
Townsend's Solitaire
Veery
Gray-cheeked Thrush
Swainson's Thrush
Hermit Thrush
Wood Thrush
American Robin
Gray Catbird
Brown Thrasher
Northern Mockingbird
European Starling
Sprague's Pipit
American Pipit
Bohemian Waxwing
Cedar Waxwing
Lapland Longspur
Smith's Longspur
Chestnut-collared Longspur
Snow Bunting
Ovenbird
Worm-eating Warbler
Northern Waterthrush
Prothonotary Warbler
Black-and-white Warbler
Golden-winged Warbler
Orange-crowned Warbler
Tennessee Warbler
Nashville Warbler
Connecticut Warbler
Mourning Warbler
Common Yellowthroat
Hooded Warbler
American Redstart
Cape May Warbler
Northern Parula
Magnolia Warbler
Blackburnian Warbler
Yellow Warbler
Chestnut-sided Warbler
Blackpoll Warbler
Bay-breasted Warbler
Black-throated Blue Warbler
Pine Warbler
Palm Warbler
Yellow-rumped Warbler
Black-throated Green Warbler
Canada Warbler
Wilson's Warbler
Yellow-breasted Chat
Spotted Towhee
Eastern Towhee
American Tree Sparrow
Chipping Sparrow
Clay-colored Sparrow
Vesper Sparrow
Lark Sparrow
Lark Bunting
Savannah Sparrow
Grasshopper Sparrow
Baird's Sparrow
LeConte's Sparrow
Nelson's Sparrow
Fox Sparrow
Song Sparrow
Lincoln's Sparrow
Swamp Sparrow
White-throated Sparrow
Harris's Sparrow
White-crowned Sparrow
White-crowned Sparrow
Golden-crowned Sparrow
Dark-eyed Junco
Summer Tanager
Western Tanager
Scarlet Tanager
Northern Cardinal
Rose-breasted Grosbeak
Lazuli Bunting
Indigo Bunting
Dickcissel
Bobolink
Red-winged Blackbird
Western Meadowlark
Eastern Meadowlark
Yellow-headed Blackbird
Rusty Blackbird
Brewer's Blackbird
Common Grackle
Brown-headed Cowbird
Orchard Oriole
Baltimore Oriole
Pine Grosbeak
Purple Finch
House Finch
Red Crossbill
White-winged Crossbill
Redpoll
Pine Siskin
American Goldfinch
Evening Grosbeak
House Sparrow
Eurasian Tree Sparrow
`;

function cleanSpeciesName(name) {
  let s = String(name).trim();
  s = s.replace(/\?+$/g, "").trim();
  s = s.replace(/\s*\[[^\]]+\]\s*/g, " ").replace(/\s+/g, " ").trim();
  if (s.toLowerCase() === "red-bellied wookpecker") s = "Red-bellied Woodpecker";
  if (s.toLowerCase() === "turkey vulture") s = "Turkey Vulture";
  return s;
}

function parseSpeciesList(raw) {
  const lines = raw.split("\n").map(l => l.trim()).filter(Boolean);
  const cleaned = lines.map(cleanSpeciesName).filter(Boolean);

  const seen = new Set();
  const out = [];
  for (const s of cleaned) {
    const key = s.toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(s);
  }
  out.sort((a, b) => a.localeCompare(b));
  return out;
}

const MB_SPECIES = parseSpeciesList(MB_SPECIES_RAW);
const MB_SPECIES_SET = new Set(MB_SPECIES.map(s => s.toLowerCase()));

const el = {
  tabAdd: document.getElementById("tabAdd"),
  tabList: document.getElementById("tabList"),
  viewAdd: document.getElementById("viewAdd"),
  viewList: document.getElementById("viewList"),

  species: document.getElementById("species"),
  datalist: document.getElementById("mbSpecies"),
  date: document.getElementById("date"),
  yearSelect: document.getElementById("yearSelect"),

  addBtn: document.getElementById("addBtn"),
  message: document.getElementById("message"),

  list: document.getElementById("list"),
  emptyState: document.getElementById("emptyState"),

  statLine: document.getElementById("statLine"),
  yearLabel: document.getElementById("yearLabel"),

  exportBtn: document.getElementById("exportBtn"),
  clearYearBtn: document.getElementById("clearYearBtn"),

  backupPanel: document.getElementById("backupPanel"),
  backupImportFile: document.getElementById("backupImportFile"),
  backupImportBtn: document.getElementById("backupImportBtn"),
  backupInfo: document.getElementById("backupInfo"),

  backupFooterBtn: document.getElementById("backupFooterBtn"),
  backupToggleBtn: document.getElementById("backupToggleBtn")
};

function todayISO() {
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { years: {} };
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || !parsed.years) return { years: {} };
    return parsed;
  } catch {
    return { years: {} };
  }
}

function saveState(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function normalizeSpecies(s) {
  return cleanSpeciesName(String(s).trim().replace(/\s+/g, " "));
}

function getYearFromDate(dateStr) {
  return Number(String(dateStr).slice(0, 4));
}

function ensureYear(state, year) {
  const key = String(year);
  if (!state.years[key]) state.years[key] = [];
  return state.years[key];
}

function currentYear() {
  return Number(el.yearSelect.value);
}

function setMessage(text) {
  el.message.textContent = text || "";
}

function setTab(which) {
  const addActive = which === "add";
  el.tabAdd.classList.toggle("active", addActive);
  el.tabList.classList.toggle("active", !addActive);
  el.viewAdd.style.display = addActive ? "" : "none";
  el.viewList.style.display = addActive ? "none" : "";
  if (!addActive) renderList();
}

function fillYearSelect() {
  const thisYear = new Date().getFullYear();
  const years = [thisYear - 1, thisYear, thisYear + 1];
  el.yearSelect.innerHTML = "";
  for (const y of years) {
    const opt = document.createElement("option");
    opt.value = String(y);
    opt.textContent = String(y);
    if (y === thisYear) opt.selected = true;
    el.yearSelect.appendChild(opt);
  }
}

function hydrateDatalist() {
  el.datalist.innerHTML = "";
  const frag = document.createDocumentFragment();
  for (const s of MB_SPECIES) {
    const opt = document.createElement("option");
    opt.value = s;
    frag.appendChild(opt);
  }
  el.datalist.appendChild(frag);
}

function sortEntries(entries) {
  return [...entries].sort((a, b) => (a.yearNumber - b.yearNumber) || String(a.date).localeCompare(String(b.date)));
}

function speciesExists(entries, species) {
  const target = species.toLowerCase();
  return entries.find(e => String(e.species).toLowerCase() === target) || null;
}

function nextYearNumber(entries) {
  let max = 0;
  for (const e of entries) {
    if (typeof e.yearNumber === "number" && e.yearNumber > max) max = e.yearNumber;
  }
  return max + 1;
}

function updateHeaderStats() {
  const y = currentYear();
  const entries = ensureYear(state, y);
  el.yearLabel.textContent = String(y);

  if (entries.length === 0) {
    el.statLine.textContent = "0 BIRDS LOGGED";
    return;
  }
  const latest = sortEntries(entries)[entries.length - 1];
  el.statLine.textContent = `${entries.length} BIRDS LOGGED. LATEST: #${latest.yearNumber} ${String(latest.species).toUpperCase()} (${latest.date})`;
}

function escapeHTML(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function downloadTextFile(filename, text, mimeType) {
  const blob = new Blob([text], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function toCSV(entries, year) {
  const rows = [["yearNumber", "species", "date", "year"].join(",")];
  for (const e of sortEntries(entries)) {
    const safeSpecies = `"${String(e.species).replaceAll('"', '""')}"`;
    rows.push([e.yearNumber, safeSpecies, e.date, year].join(","));
  }
  return rows.join("\n");
}

/* Backup meta */
function setBackupMeta(meta) {
  localStorage.setItem(BACKUP_META_KEY, JSON.stringify(meta));
}

function getBackupMeta() {
  try {
    const raw = localStorage.getItem(BACKUP_META_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function updateBackupInfo() {
  const meta = getBackupMeta();
  el.backupInfo.textContent = meta && meta.lastBackupISO
    ? `BACKUP: LAST EXPORTED ${meta.lastBackupISO}`
    : "BACKUP: NONE YET";
}

/* Backup merge/import */
function validateBackupShape(obj) {
  if (!obj || typeof obj !== "object") return false;
  if (!obj.years || typeof obj.years !== "object") return false;
  for (const [year, arr] of Object.entries(obj.years)) {
    if (!/^\d{4}$/.test(year)) return false;
    if (!Array.isArray(arr)) return false;
  }
  return true;
}

function mergeBackupIntoState(currentState, incomingState) {
  const out = { years: {} };

  for (const [year, entries] of Object.entries(currentState.years || {})) {
    out.years[year] = Array.isArray(entries) ? [...entries] : [];
  }

  for (const [year, entries] of Object.entries(incomingState.years || {})) {
    if (!out.years[year]) out.years[year] = [];
    for (const inc of entries) {
      if (!inc || !inc.species || !inc.date) continue;

      const incSpecies = normalizeSpecies(inc.species);
      if (!incSpecies) continue;

      const existing = out.years[year].find(
        e => normalizeSpecies(e.species).toLowerCase() === incSpecies.toLowerCase()
      );

      if (!existing) {
        out.years[year].push({
          id: inc.id || (crypto.randomUUID ? crypto.randomUUID() : String(Date.now())),
          species: incSpecies,
          date: String(inc.date),
          yearNumber: 0
        });
      } else {
        const a = String(existing.date);
        const b = String(inc.date);
        if (b < a) existing.date = b;
      }
    }
  }

  for (const year of Object.keys(out.years)) {
    const sorted = [...out.years[year]].sort(
      (a, b) => String(a.date).localeCompare(String(b.date)) || String(a.species).localeCompare(String(b.species))
    );
    sorted.forEach((e, i) => (e.yearNumber = i + 1));
    out.years[year] = sorted;
  }

  return out;
}

/* Actions */
function addBird() {
  const speciesRaw = el.species.value;
  const date = el.date.value;

  const species = normalizeSpecies(speciesRaw);
  if (!species) {
    setMessage("TYPE A BIRD NAME FIRST.");
    return;
  }
  if (!date) {
    setMessage("PICK A DAY.");
    return;
  }

  if (REQUIRE_SPECIES_FROM_LIST && !MB_SPECIES_SET.has(species.toLowerCase())) {
    setMessage("NOT IN MB LIST. PICK FROM SUGGESTIONS OR TURN OFF VALIDATION.");
    return;
  }

  const year = currentYear();
  const dateYear = getYearFromDate(date);
  if (dateYear !== year) {
    setMessage(`DATE IS IN ${dateYear}. SWITCH YEAR TO ${dateYear} OR CHANGE DAY.`);
    return;
  }

  const entries = ensureYear(state, year);
  const existing = speciesExists(entries, species);
  if (existing) {
    setMessage(`ALREADY COUNTED. FIRST SEEN ${existing.date} AS #${existing.yearNumber}.`);
    el.species.select();
    return;
  }

  const entry = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    species,
    date,
    yearNumber: nextYearNumber(entries)
  };

  entries.push(entry);
  saveState(state);

  setMessage(`#${entry.yearNumber} FOR ${year}: ${String(entry.species).toUpperCase()} (${entry.date})`);
  el.species.value = "";
  el.species.focus();
  updateHeaderStats();
}

function renderList() {
  const year = currentYear();
  const entries = ensureYear(state, year);
  updateHeaderStats();

  el.list.innerHTML = "";
  if (entries.length === 0) {
    el.emptyState.style.display = "";
    return;
  }
  el.emptyState.style.display = "none";

  for (const e of sortEntries(entries)) {
    const row = document.createElement("div");
    row.className = "item";

    const left = document.createElement("div");
    left.className = "left";
    left.innerHTML = `
      <div class="num">#${e.yearNumber}</div>
      <div class="species">${escapeHTML(e.species)}</div>
    `;

    const right = document.createElement("div");
    right.className = "right";
    right.innerHTML = `
      <div class="meta">${e.date}</div>
      <button class="pill" data-id="${e.id}" type="button">DELETE</button>
    `;

    row.appendChild(left);
    row.appendChild(right);
    el.list.appendChild(row);
  }

  el.list.querySelectorAll("button[data-id]").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      deleteEntry(year, id);
    });
  });
}

function deleteEntry(year, id) {
  const entries = ensureYear(state, year);
  const idx = entries.findIndex(e => e.id === id);
  if (idx === -1) return;

  entries.splice(idx, 1);

  const sortedByDate = [...entries].sort(
    (a, b) => String(a.date).localeCompare(String(b.date)) || String(a.species).localeCompare(String(b.species))
  );
  sortedByDate.forEach((e, i) => (e.yearNumber = i + 1));
  saveState(state);

  renderList();
  setMessage("DELETED AND RENUMBERED.");
}

function exportCSV() {
  const year = currentYear();
  const entries = ensureYear(state, year);
  const csv = toCSV(entries, year);
  downloadTextFile(`bird-year-list-${year}.csv`, csv, "text/csv;charset=utf-8");
  setMessage("CSV EXPORTED.");
}

function exportBackupJSON() {
  const payload = {
    schema: "bird_year_list_backup_v1",
    exportedAtISO: new Date().toISOString(),
    data: state
  };
  const safeNameDate = payload.exportedAtISO.slice(0, 10);

  downloadTextFile(
    `bird-year-list-backup-${safeNameDate}.json`,
    JSON.stringify(payload, null, 2),
    "application/json;charset=utf-8"
  );

  setBackupMeta({ lastBackupISO: payload.exportedAtISO });
  updateBackupInfo();
  setMessage("BACKUP EXPORTED (JSON).");
}

async function importBackupJSON() {
  const file = el.backupImportFile.files && el.backupImportFile.files[0];
  if (!file) {
    setMessage("CHOOSE A BACKUP FILE FIRST.");
    return;
  }

  let text = "";
  try {
    text = await file.text();
  } catch {
    setMessage("COULD NOT READ THAT FILE.");
    return;
  }

  let parsed;
  try {
    parsed = JSON.parse(text);
  } catch {
    setMessage("THAT FILE IS NOT VALID JSON.");
    return;
  }

  let incomingState = null;
  if (parsed && parsed.schema === "bird_year_list_backup_v1" && parsed.data) {
    incomingState = parsed.data;
  } else {
    incomingState = parsed;
  }

  if (!validateBackupShape(incomingState)) {
    setMessage("BACKUP DOES NOT MATCH EXPECTED FORMAT.");
    return;
  }

  state = mergeBackupIntoState(state, incomingState);
  saveState(state);

  el.backupImportFile.value = "";
  updateHeaderStats();
  if (el.viewList.style.display !== "none") renderList();

  updateBackupInfo();
  setMessage("BACKUP IMPORTED AND MERGED.");
}

function clearYear() {
  const year = currentYear();
  state.years[String(year)] = [];
  saveState(state);
  renderList();
  setMessage(`CLEARED ${year}.`);
}

/* Init */
let state = loadState();
hydrateDatalist();
fillYearSelect();
el.date.value = todayISO();
ensureYear(state, currentYear());
updateHeaderStats();
updateBackupInfo();

el.tabAdd.addEventListener("click", () => setTab("add"));
el.tabList.addEventListener("click", () => setTab("list"));

el.addBtn.addEventListener("click", addBird);
el.species.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addBird();
});

el.yearSelect.addEventListener("change", () => {
  ensureYear(state, currentYear());
  updateHeaderStats();
  if (el.viewList.style.display !== "none") renderList();
});

el.exportBtn.addEventListener("click", exportCSV);
el.clearYearBtn.addEventListener("click", clearYear);

el.backupFooterBtn.addEventListener("click", exportBackupJSON);
el.backupImportBtn.addEventListener("click", importBackupJSON);

el.backupToggleBtn.addEventListener("click", () => {
  const isOpen = el.backupPanel.style.display !== "none";
  el.backupPanel.style.display = isOpen ? "none" : "";
  if (!isOpen) updateBackupInfo();
});
