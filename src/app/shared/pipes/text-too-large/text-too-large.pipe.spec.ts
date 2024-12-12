import { TextTooLargePipe } from './text-too-large.pipe';

describe('TextTooLargePipe', () => {
  it('create an instance', () => {
    const pipe = new TextTooLargePipe();
    expect(pipe).toBeTruthy();
  });
});
