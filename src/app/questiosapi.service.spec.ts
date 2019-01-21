import { TestBed } from '@angular/core/testing';

import { QuestiosapiService } from './questiosapi.service';

describe('QuestiosapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: QuestiosapiService = TestBed.get(QuestiosapiService);
    expect(service).toBeTruthy();
  });
});
