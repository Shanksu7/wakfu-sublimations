import { Component, OnInit } from '@angular/core';
import { Dungeon } from '../../classes/dungeon';
import { Dungeons } from '../../enums/Dungeons';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dungeon-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dungeon-list.component.html',
  styleUrl: './dungeon-list.component.css'
})
export class DungeonListComponent  implements OnInit  {
  constructor() { }

  ngOnInit(): void {
  }
  
dungeons: Dungeon[] = [
  {
    name:"Casa de la miaubuelita",
    lvl:9,
    type: Dungeons.P3
  },
  {
    name:"Pastos de los jálatos",
    lvl:12,
    type: Dungeons.R3
  },
  {
    name:"Tofullero",
    lvl:12,
    type: Dungeons.R3
  }
]

selectedDungeon: Dungeon | null = this.dungeons[0]; // Initially select the first dungeon

selectDungeon(dungeon: Dungeon) {
  this.selectedDungeon = dungeon;
}
}

