import { createSelector } from 'reselect';

const selecDirectory = state => state.directory;

export default createSelector(
  [selecDirectory],
  directory => directory.section
);
