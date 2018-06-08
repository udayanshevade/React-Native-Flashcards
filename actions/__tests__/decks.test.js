import * as types from '../types';
import * as decksActions from '../decks';

describe('While handling actions for overall deck data,', () => {
  it('The loading status can be set.', () => {
    const isLoading = true;
    const expected = {
      type: types.DECKS_SET_LOADING,
      isLoading,
    };
    expect(action.decksSetLoading(isLoading)).toEqual(expected);
  });

  it('Data is sent to the store to set.', () => {
    const data = {
      'React': {
        title: 'React',
        questions: [],
      },
    };
    const expected = {
      type: types.DECKS_SET_DATA,
      data,
    };
    expect(action.decksSetData(data)).toEqual(expected);
  });

  it('Data is sent to the store to add.', () => {
    const data = {
      'React': {
        title: 'React',
        questions: [],
      },
    };
    const expected = {
      type: types.DECKS_ADD_DATA,
      data,
    };
    expect(action.decksAddData(data)).toEqual(expected);
  });

  it('A specific title is referenced to remove its data.', () => {
    const title = 'React';
    const expected = {
      type: types.DECKS_REMOVE_DATA,
      title,
    };
    expect(action.decksRemoveData(title)).toEqual(expected);
  });

  it('The deck search filter is updated.', () => {
    const filter = 'rea';
    const expected = {
      type: types.DECKS_UPDATE_FILTER,
      filter,
    };
    expect(action.decksUpdateFilter(filter)).toEqual(expected);
  });
});
