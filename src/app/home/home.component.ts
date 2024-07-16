import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { DungeonListComponent } from '../components/dungeon-list/dungeon-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, DungeonListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit  {
  constructor() { }

  ngOnInit(): void {
  }
}

