export const testWithIdUrl = id => ({
  pathname: '/test',
  query: id ? { id: id } : {},
});
export const indexUrl = id => ({ pathname: '/' });
