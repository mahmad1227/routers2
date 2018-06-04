import { CrisesCenterModule } from './crises-center.module';

describe('CrisesCenterModule', () => {
  let crisesCenterModule: CrisesCenterModule;

  beforeEach(() => {
    crisesCenterModule = new CrisesCenterModule();
  });

  it('should create an instance', () => {
    expect(crisesCenterModule).toBeTruthy();
  });
});
