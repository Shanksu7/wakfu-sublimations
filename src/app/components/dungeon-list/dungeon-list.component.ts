import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Dungeon } from '../../classes/dungeon';

@Component({
  selector: 'app-dungeon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dungeon-list.component.html',
  styleUrl: './dungeon-list.component.css'
})
export class DungeonListComponent  implements OnInit  {
  constructor() {}

  ngOnInit(): void {
    this.selectDungeon(this.dungeons[0])
  }
  
dungeons: Dungeon[] = [
  {
    id: "casadelamiaubuelita_9_p3",
    name: "Casa de la Miaubuelita",
    lvl: 9,
    type: 1,
    active: true
  },
  {
    id: "pastosdelosjalatos_12_r3",
    name: "Pastos de los Jalatós",
    lvl: 12,
    type: 3,
    active: true
  },
  {
    id: "tofullero_12_r3",
    name: "Tofullero",
    lvl: 12,
    type: 3,
    active: true
  },
  {
    id: "larventura_12_r4",
    name: "Larventura",
    lvl: 12,
    type: 4,
    active: true
  },
  {
    id: "mazmorraabrakna_21_r3",
    name: "Mazmorra Abrakna",
    lvl: 21,
    type: 3,
    active: true
  },
  {
    id: "panteonviviente_21_r3",
    name: "Panteón Viviente",
    lvl: 21,
    type: 3,
    active: true
  },
  {
    id: "piolajop_21_r3",
    name: "Pio Lajop",
    lvl: 21,
    type: 3,
    active: true
  },
  {
    id: "brechadimensionaldetainela_21_r",
    name: "Brecha dimensional de Tainela",
    lvl: 21,
    type: 5,
    active: true
  },
  {
    id: "pastoreal_36_r3",
    name: "Pasto Real",
    lvl: 36,
    type: 3,
    active: true
  },
  {
    id: "montanaconohos_36_r4",
    name: "Montaña Conohos",
    lvl: 36,
    type: 4,
    active: true
  },
  {
    id: "camposhupremos_36_r3",
    name: "Campos Hupremos",
    lvl: 36,
    type: 3,
    active: true
  },
  {
    id: "latorremineral_36_p3",
    name: "La Torre Mineral",
    lvl: 36,
    type: 1,
    active: true
  },
  {
    id: "mazmorratripulaciondelpulpo_36_r2",
    name: "Mazmorra Tripulación del Pulpo",
    lvl: 36,
    type: 2,
    active: true
  },
  {
    id: "mazmorrafallecinerados_36_r3",
    name: "Mazmorra Fallecinerados",
    lvl: 36,
    type: 3,
    active: true
  },
  {
    id: "antroolvidado_51_r2",
    name: "Antro Olvidado",
    lvl: 51,
    type: 2,
    active: true
  },
  {
    id: "trincheradehuelguerreros_51_r3",
    name: "Trinchera de Huelguerreros",
    lvl: 51,
    type: 3,
    active: true
  },
  {
    id: "diqueesukualido_51_r3",
    name: "Dique Esukualido",
    lvl: 51,
    type: 3,
    active: true
  },
  {
    id: "mazmorrakaskarlusca_51_r3",
    name: "Mazmorra Kaskarlusca",
    lvl: 51,
    type: 3,
    active: true
  },
  {
    id: "torredelasmissadefesio_51_p3",
    name: "Torre de las Miss Adefesio",
    lvl: 51,
    type: 1,
    active: true
  },
  {
    id: "kokolostisland_51_r4",
    name: "Kokolost Island",
    lvl: 51,
    type: 4,
    active: true
  },
  {
    id: "castillodeloscangwejos_51_r3",
    name: "Castillo de los Cangwejos",
    lvl: 51,
    type: 3,
    active: true
  },
  {
    id: "mazmorramartilloseco_51_r3",
    name: "Mazmorra Martilloseco",
    lvl: 51,
    type: 3,
    active: true
  },
  {
    id: "ratacumbas_66_r2",
    name: "Ratacumbas",
    lvl: 66,
    type: 2,
    active: true
  },
  {
    id: "antrodeexcarnus_66_ub",
    name: "Antro de Excarnus",
    lvl: 66,
    type: 0,
    active: true
  },
  {
    id: "templodelgranorrok_66_r2",
    name: "Templo del Gran Orrok",
    lvl: 66,
    type: 2,
    active: true
  },
  {
    id: "cuerbokueva_66_r3",
    name: "Cuerbokueva",
    lvl: 66,
    type: 3,
    active: true
  },
  {
    id: "pestruceriaabandonada_66_r3",
    name: "Pestruceria Abandonada",
    lvl: 66,
    type: 3,
    active: true
  },
  {
    id: "haciendadelabalineria_66_r3",
    name: "Hacienda de la Balineria",
    lvl: 66,
    type: 3,
    active: true
  },
  {
    id: "palaciodetsu_66_r3",
    name: "Palacio de Tsu",
    lvl: 66,
    type: 3,
    active: true
  },
  {
    id: "mazmorramilubo_66_r4",
    name: "Mazmorra Milubo",
    lvl: 66,
    type: 4,
    active: true
  },
  {
    id: "mazmorraarakna_66_r3",
    name: "Mazmorra Arakna",
    lvl: 66,
    type: 3,
    active: true
  },
  {
    id: "brechadimensionaldesufokia_66_r",
    name: "Brecha Dimensional de Sufokia",
    lvl: 66,
    type: 5,
    active: true
  },
  {
    id: "sliptorium_66_r2",
    name: "Sliptorium",
    lvl: 66,
    type: 2,
    active: true
  },
  {
    id: "miasmausoleo_81_r3",
    name: "Miasmausoleo",
    lvl: 81,
    type: 3,
    active: true
  },
  {
    id: "castillodewagnar_81_r3",
    name: "Castillo de Wagnar",
    lvl: 81,
    type: 3,
    active: true
  },
  {
    id: "factortrool_81_p3",
    name: "Factor Trool",
    lvl: 81,
    type: 1,
    active: true
  },
  {
    id: "elhammalmejil_81_r3",
    name: "El Hammalmejil",
    lvl: 81,
    type: 3,
    active: true
  },
  {
    id: "cavernabrizlonica_81_r2",
    name: "Caverna Brizlonica",
    lvl: 81,
    type: 2,
    active: true
  },
  {
    id: "escaranteraabandonada_81_r3",
    name: "Escarantera Abandonada",
    lvl: 81,
    type: 3,
    active: true
  },
  {
    id: "necropelisdemorbax_81_r4",
    name: "Necropelis de Morbax",
    lvl: 81,
    type: 4,
    active: true
  },
  {
    id: "antrodemaxilubo_81_ub",
    name: "Antro de Maxilubo",
    lvl: 81,
    type: 0,
    active: true
  },
  {
    id: "guaridadelossupervillanos_96_p3",
    name: "Guarida de los Supervillanos",
    lvl: 96,
    type: 1,
    active: true
  },
  {
    id: "arenadanzante_96_p3",
    name: "Arena Danzante",
    lvl: 96,
    type: 1,
    active: true
  },
  {
    id: "glaciarcornudo_96_r2",
    name: "Glaciar Cornudo",
    lvl: 96,
    type: 2,
    active: true
  },
  {
    id: "casetadelyechtiwawa_96_r2",
    name: "Caseta del Yech'Ti'Wawa",
    lvl: 96,
    type: 2,
    active: true
  },
  {
    id: "mazmorragelatinada_96_r3",
    name: "Mazmorra Gelatinada",
    lvl: 96,
    type: 3,
    active: true
  },
  {
    id: "antrodelcuervonegro_96_ub",
    name: "Antro del Cuervo Negro",
    lvl: 96,
    type: 0,
    active: true
  },
  {
    id: "guaridadelosmagikriktus_96_r3",
    name: "Guarida de los Magik Riktus",
    lvl: 96,
    type: 3,
    active: true
  },
  {
    id: "antrodejalrog_96_ub",
    name: "Antro de Jalrog",
    lvl: 96,
    type: 0,
    active: true
  },
  {
    id: "basedelsusurro_96_r4",
    name: "Base del Susurro",
    lvl: 96,
    type: 4,
    active: true
  },
  {
    id: "antrodeldragocerdo_111_ub",
    name: "Antro del dragocerdo",
    lvl: 111,
    type: 0,
    active: true
  },
  {
    id: "conodecrujianjerry_111_r3",
    name: "Cono de Crujian Jerry",
    lvl: 111,
    type: 3,
    active: true
  },
  {
    id: "aladelaembajadora_111_r2",
    name: "Ala de la Embajadora",
    lvl: 111,
    type: 2,
    active: true
  },
  {
    id: "torrehelada_111_r3",
    name: "Torre Helada",
    lvl: 111,
    type: 3,
    active: true
  },
  {
    id: "mesetapikapik_111_r2",
    name: "Meseta Pikapik",
    lvl: 111,
    type: 2,
    active: true
  },
  {
    id: "fosadelatormentador_111_p3",
    name: "Fosa del Atormentador",
    lvl: 111,
    type: 1,
    active: true
  },
  {
    id: "cavernasamaraciosa_111_r3",
    name: "Caverna Samaraciosa",
    lvl: 111,
    type: 3,
    active: true
  },
  {
    id: "mazmorradelcharcosoreal_111_r2",
    name: "Mazmorra del Charcoso Real",
    lvl: 111,
    type: 2,
    active: true
  },
  {
    id: "lapischina_111_r4",
    name: "La Pischina",
    lvl: 111,
    type: 4,
    active: true
  },
  {
    id: "brechadimensionaldefrigost_111_ur",
    name: "Brecha Dimensional de Frigost",
    lvl: 111,
    type: 6,
    active: true
  },
  {
    id: "brechadimensionaldeamakna_111_r",
    name: "Brecha dimensional de Amakna",
    lvl: 111,
    type: 5,
    active: true
  },
  {
    id: "santuariodemihmol_126_p3",
    name: "Santuario de Mihmol",
    lvl: 126,
    type: 1,
    active: true
  },
  {
    id: "mazmorranegraspora_126_r2",
    name: "Mazmorra Negraspora",
    lvl: 126,
    type: 2,
    active: true
  },
  {
    id: "haciendadelatoperaoculta_126_r3",
    name: "Hacienda de la Topera Oculta",
    lvl: 126,
    type: 3,
    active: true
  },
  {
    id: "mazmorraabraknida_126_r3",
    name: "Mazmorra Abraknida",
    lvl: 126,
    type: 3,
    active: true
  },
  {
    id: "compostdelgrancalabaciflor_126_r2",
    name: "Compost del Gran Calabaciflor",
    lvl: 126,
    type: 2,
    active: true
  },
  {
    id: "palaciozollo_126_r4",
    name: "Palacio Zollo",
    lvl: 126,
    type: 4,
    active: true
  },
  {
    id: "jawdindelaweina_126_r3",
    name: "Jawdin de la weina",
    lvl: 126,
    type: 3,
    active: true
  },
  {
    id: "vidvil_141_r4",
    name: "Vid Vil",
    lvl: 141,
    type: 4,
    active: true
  },
  {
    id: "mazmorrasramvil_141_r2",
    name: "Mazmorra Sramvil",
    lvl: 141,
    type: 2,
    active: true
  },
  {
    id: "mazmorradeanutropia_141_r2",
    name: "Mazmorra de Anutropia",
    lvl: 141,
    type: 2,
    active: true
  },
  {
    id: "blopera_141_r2",
    name: "Blopera",
    lvl: 141,
    type: 2,
    active: true
  },
  {
    id: "fuentedelmal_141_r3",
    name: "Fuente del Mal",
    lvl: 141,
    type: 3,
    active: true
  },
  {
    id: "brechadimensionaldebonta_141_r",
    name: "Brecha dimensional de Bonta",
    lvl: 141,
    type: 5,
    active: true
  },
  {
    id: "tumbadetalkasha_141_ub",
    name: "Tumba de Tal Kasha",
    lvl: 141,
    type: 0,
    active: true
  },
  {
    id: "colmenamadrearenoptera_141_r2",
    name: "Colmena Madre Arenoptera",
    lvl: 141,
    type: 2,
    active: true
  },
  {
    id: "castillodelweywabbit_141_p3",
    name: "Castillo del Wey Wabbit",
    lvl: 141,
    type: 1,
    active: true
  },
  {
    id: "laboratoriodewomewo_141_r3",
    name: "Laboratorio de Womewo",
    lvl: 141,
    type: 3,
    active: true
  },
  {
    id: "mekafabrica_156_r2",
    name: "Mekafabrica",
    lvl: 156,
    type: 2,
    active: true
  },
  {
    id: "mazmorraibuho_156_r2",
    name: "Mazmorra iBuho",
    lvl: 156,
    type: 2,
    active: true
  },
  {
    id: "mesetadelosaltosvuelos_156_ub",
    name: "Meseta de los Altos vuelos",
    lvl: 156,
    type: 0,
    active: true
  },
  {
    id: "guaridadekali_156_p3",
    name: "Guarida de Kali",
    lvl: 156,
    type: 1,
    active: true
  },
  {
    id: "mazmorrariktusdeelite_156_r4",
    name: "Mazmorra Riktus de Elite",
    lvl: 156,
    type: 4,
    active: true
  },
  {
    id: "tymabar_156_r2",
    name: "Tymabar",
    lvl: 156,
    type: 2,
    active: true
  },
  {
    id: "astrolillo_156_r4",
    name: "Astrolillo",
    lvl: 156,
    type: 4,
    active: true
  },
  {
    id: "patapinxeria_156_r2",
    name: "Patapinxeria",
    lvl: 156,
    type: 2,
    active: true
  },
  {
    id: "cimadelgrantotem_171_ub",
    name: "Cima del Gran Totem",
    lvl: 171,
    type: 0,
    active: true
  },
  {
    id: "mazmorradeloscocodrailsdelnilo_171_r2",
    name: "Mazmorra de los Cocodrails Delnilo",
    lvl: 171,
    type: 2,
    active: true
  },
  {
    id: "mazmorradelaskanivoras_171_r2",
    name: "Mazmorra de las Kanivoras",
    lvl: 171,
    type: 2,
    active: true
  },
  {
    id: "mazmorrakanibola_171_r2",
    name: "Mazmorra Kanibola",
    lvl: 171,
    type: 2,
    active: true
  },
  {
    id: "mazmorradelostropikos_171_r2",
    name: "Mazmorra de los Tropikos",
    lvl: 171,
    type: 2,
    active: true
  },
  {
    id: "ciudadprohibida_171_p3",
    name: "Ciudad Prohibida",
    lvl: 171,
    type: 1,
    active: true
  },
  {
    id: "mazmorragerbilinda_171_r3",
    name: "Mazmorra Gerbilinda",
    lvl: 171,
    type: 3,
    active: true
  },
  {
    id: "brechadimensionaldemoon_171_r",
    name: "Brecha Dimensional de Moon",
    lvl: 171,
    type: 5,
    active: true
  },
  {
    id: "antrodenogordelalado_181_ub",
    name: "Antro de Nogord el Alado",
    lvl: 181,
    type: 0,
    active: true
  },
  {
    id: "guaridadelostejaroxores_186_r2",
    name: "Guarida de los Tejaroxores",
    lvl: 186,
    type: 2,
    active: true
  },
  {
    id: "volcanorhodruin_186_r2",
    name: "Volcan Or'Hodruin",
    lvl: 186,
    type: 2,
    active: true
  },
  {
    id: "picodelmontezinit_186_ub",
    name: "Pico del Monte Zinit",
    lvl: 186,
    type: 0,
    active: true
  },
  {
    id: "santuariodelosdragohuevos_186_r3",
    name: "Santuario de los Dragohuevos",
    lvl: 186,
    type: 3,
    active: true
  },
  {
    id: "crestahelada_186_r2",
    name: "Cresta Helada",
    lvl: 186,
    type: 2,
    active: true
  },
  {
    id: "latorremineral_186_p3",
    name: "La Torre Mineral",
    lvl: 186,
    type: 1,
    active: true
  },
  {
    id: "tumbadepandala_186_r2",
    name: "Tumba de Pandala",
    lvl: 186,
    type: 2,
    active: true
  },
  {
    id: "canondelosplaguepardos_186_r3",
    name: "Cañon de los Plaguepardos",
    lvl: 186,
    type: 3,
    active: true
  },
  {
    id: "fabricabuhatras_186_r3",
    name: "Fabrica Buhatras",
    lvl: 186,
    type: 3,
    active: true
  },
  {
    id: "dimensionobjetodesombria_200_ub",
    name: "Dimension-Objeto de Sombria",
    lvl: 200,
    type: 0,
    active: true
  },
  {
    id: "torremineral_201_p3",
    name: "Torre Mineral",
    lvl: 201,
    type: 1,
    active: true
  },
  {
    id: "mazmorranievajas_201_r2",
    name: "Mazmorra Nievajas",
    lvl: 201,
    type: 2,
    active: true
  },
  {
    id: "mazmorracrustariscos_201_r2",
    name: "Mazmorra Crustariscos",
    lvl: 201,
    type: 2,
    active: true
  },
  {
    id: "mazmorrasolgazanes_201_r2",
    name: "Mazmorra Solgazanes",
    lvl: 201,
    type: 2,
    active: true
  },
  {
    id: "mazmorravandalineados_201_r2",
    name: "Mazmorra Vandalineados",
    lvl: 201,
    type: 2,
    active: true
  },
  {
    id: "mazmorradelosplantiguardias_201_r2",
    name: "Mazmorra de los Plantiguardias",
    lvl: 201,
    type: 2,
    active: true
  },
  {
    id: "mazmorradelosguinos_201_r2",
    name: "Mazmorra de los Guinos",
    lvl: 201,
    type: 2,
    active: true
  },
  {
    id: "mazmorradelosescapatarazones_201_r2",
    name: "Mazmorra de los Escapatarazones",
    lvl: 201,
    type: 2,
    active: true
  },
  {
    id: "brechadimensionaldelmontezinit_201_ur",
    name: "Brecha dimensional del Monte Zinit",
    lvl: 201,
    type: 6,
    active: true
  },
  {
    id: "brechadimensionaldeosamosa_201_r",
    name: "Brecha dimensional de Osamosa",
    lvl: 201,
    type: 5,
    active: true
  },
  {
    id: "mazmorradelosfitoformes_216_r2",
    name: "Mazmorra de los Fitoformes",
    lvl: 216,
    type: 2,
    active: true
  },
  {
    id: "mazmorradelosvaciantes_216_r2",
    name: "Mazmorra de los Vaciantes",
    lvl: 216,
    type: 2,
    active: true
  },
  {
    id: "mazmorradelosdemorribles_216_r2",
    name: "Mazmorra de los Demorribles",
    lvl: 216,
    type: 2,
    active: true
  },
  {
    id: "mazmorradelosidos_216_r2",
    name: "Mazmorra de los Idos",
    lvl: 216,
    type: 2,
    active: true
  },
  {
    id: "mazmorradelosdevastadores_216_r2",
    name: "Mazmorra de los Devastadores",
    lvl: 216,
    type: 2,
    active: true
  },
  {
    id: "palacioderushu_216_ub",
    name: "Palacio de Rushu",
    lvl: 216,
    type: 0,
    active: true
  },
  {
    id: "brechadimensionaldelafabhugruta_216_r",
    name: "Brecha dimensional de la Fab'hugruta",
    lvl: 216,
    type: 5,
    active: true
  },
  {
    id: "brechadimensionaldelafabhugruta_216_ur",
    name: "Brecha dimensional de la Fab'hugruta",
    lvl: 216,
    type: 6,
    active: true
  },
  {
    id: "mazmorrasteamers_216_r4",
    name: "Mazmorra Steamers",
    lvl: 216,
    type: 4,
    active: true
  },
  {
    id: "mazmorrapezgajososabisales_216_r3",
    name: "Mazmorra Pezgajosos ABisales",
    lvl: 216,
    type: 3,
    active: true
  }
];

@Output() selectedDg = new EventEmitter<Dungeon>();
selectedDungeon = this.dungeons[0]; // Initially select the first dungeon


selectDungeon(dungeon: any) {
  this.selectedDungeon = dungeon;
  this.selectedDg.emit(dungeon);
}
}

