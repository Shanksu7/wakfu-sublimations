import { Component, Input } from '@angular/core';
import { Dungeon } from '../../classes/dungeon';

@Component({
  selector: 'app-dungeon-info',
  standalone: true,
  imports: [],
  templateUrl: './dungeon-info.component.html',
  styleUrl: './dungeon-info.component.css'
})

export class DungeonInfoComponent {

  @Input() dg: Dungeon

}
