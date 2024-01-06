import {Redirect, useRootNavigationState} from 'expo-router';

const index = () => {
  const rootNavigationState = useRootNavigationState();

  if (!rootNavigationState?.key) return null;

  return <Redirect href="/signin" />;
};
export default index;