import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { DungeonListComponent } from '../components/dungeon-list/dungeon-list.component';
import { DungeonInfoComponent } from '../components/dungeon-info/dungeon-info.component';
import { Dungeon } from '../classes/dungeon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DungeonListComponent, DungeonInfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
  constructor() { }

  ngOnInit(): void {
  }

  selectedDungeon:Dungeon;
  add(dg:Dungeon)
  {
    this.selectedDungeon = dg
    console.log(dg)
  }
}

