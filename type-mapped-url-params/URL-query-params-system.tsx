import React from "react";
import { useHistory, useLocation } from "react-router-dom";

type AvailablePaths = "example1" | "example2" | "example3" | "example4";

type ParamFormat<T extends string, U extends string> = Record<T, U>;

type ExampleParam1 = ParamFormat<
  "ExampleParam1Name",
  "possibleParamValue1" | "possibleParamValue2" | "possibleParamValue3"
>;

type ExampleParam2 = ParamFormat<
  "ExampleParam2Name",
  "possibleParamValue1" | "possibleParamValue2" | "possibleParamValue3"
>;

type AvaiableQueryParams = ExampleParam1 & ExampleParam2;

export function useURLQueryParams1<
  T extends keyof AvaiableQueryParams,
  U = { [K in T]?: AvaiableQueryParams[K] }
>({
  queryNamespaces,
}: {
  queryNamespaces: Array<T>;
}): [
  ({
    urlQueryParams,
    newURLLocation,
  }: {
    urlQueryParams: U;
    newURLLocation?: AvailablePaths;
  }) => void,
  () => URLSearchParams
] {
  const location = useLocation();
  const history = useHistory();
  const currentParams = new URLSearchParams(location.search);

  const pushWithURLQueryParams1 = ({
    urlQueryParams,
    newURLLocation,
  }: {
    urlQueryParams: U;
    newURLLocation?: AvailablePaths;
  }) => {
    currentParams.forEach((value, key) => {
      if (!queryNamespaces.includes(key as T)) {
        currentParams.delete(key);
      }
    });

    Object.entries(urlQueryParams).map(([paramName, paramNewValue]) => {
      if (paramNewValue) {
        currentParams.has(paramName)
          ? currentParams.set(paramName, paramNewValue)
          : currentParams.append(paramName, paramNewValue);
      } else {
        currentParams.delete(paramName);
      }
    });
    history.push({
      pathname: newURLLocation ? `/${newURLLocation}` : location.pathname,
      search: currentParams.toString(),
    });
  };

  const getURLQueryParams = (): URLSearchParams => {
    return currentParams;
  };

  return [pushWithURLQueryParams1, getURLQueryParams];
}
