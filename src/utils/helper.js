export const helperNavigationPush = (navigation, route, params) => {
  navigation.push(route, {
    params: params,
  });
};
