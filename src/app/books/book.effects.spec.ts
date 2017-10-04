import { TestBed, inject } from '@angular/core/testing';

import { BookEffects } from './book.effects';

describe('BookEffectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BookEffects]
    });
  });

  it('should be created', inject([BookEffects], (service: BookEffects) => {
    expect(service).toBeTruthy();
  }));
});
