import { useLocation } from "react-router";

export const useRouteMatch = (route: string): boolean => {
  const location = useLocation();

  return location.pathname === route;
};
