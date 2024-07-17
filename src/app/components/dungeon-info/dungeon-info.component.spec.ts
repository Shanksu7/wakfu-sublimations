import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DungeonInfoComponent } from './dungeon-info.component';

describe('DungeonInfoComponent', () => {
  let component: DungeonInfoComponent;
  let fixture: ComponentFixture<DungeonInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DungeonInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DungeonInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
