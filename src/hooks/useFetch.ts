import { useEffect, useState, useCallback, useRef } from "react";

export const useFetch = <T>(
  url: string,
  options?: {
    resHandler?: (res: Response) => any;
    cacheKey?: string;
    storage?: "local" | "session";
    dataParser?: (data: any) => any;
    onDone?: (data: T) => void;
    cacheExpiry?: number; // Cache expiry in milliseconds (only for localStorage)
  } & RequestInit,
) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const cacheKey = options?.cacheKey || `fetchstore-${url}`;
  const resHandler = options?.resHandler || ((res: Response) => res.json());
  const dataParser = options?.dataParser || ((data) => data as T);

  const fetchData = useCallback(async () => {
    const cacheStorage =
      options?.storage === "local" ? localStorage : sessionStorage; // handle undefined on server

    // Abort previous request if still pending
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    // Create a new AbortController for the new request
    const abortController = new AbortController();
    abortControllerRef.current = abortController;
    const signal = abortController.signal;

    try {
      const cachedData = cacheStorage.getItem(cacheKey);
      if (cachedData) {
        const { data: cachedValue, timestamp } = JSON.parse(cachedData);

        const isCacheValid =
          options?.storage !== "local" || // Skip expiry check for sessionStorage
          !options?.cacheExpiry || // Skip if no expiry is set
          Date.now() - timestamp < options.cacheExpiry; // Check expiry

        if (isCacheValid) {
          console.log("Using cached data for", url);
          // console.dir(cachedValue)
          const parsedData = dataParser(cachedValue) as T;
          setData(parsedData);
          options?.onDone?.(parsedData);
          setLoading(false);
          return;
        }
      }

      console.log("Fetching data for", url);
      const response = await fetch(url, { ...options, signal });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const rawData = await resHandler(response);
      const parsedData = dataParser(rawData) as T;

      setData(parsedData);
      cacheStorage.setItem(
        cacheKey,
        JSON.stringify({ data: parsedData, timestamp: Date.now() }),
      );
      options?.onDone?.(parsedData);
    } catch (err) {
      if ((err as Error).name !== "AbortError") {
        console.error("Fetch error:", err);
        setError(err as Error);
      }
    } finally {
      setLoading(false);
    }
  }, [url, cacheKey, JSON.stringify(options)]);

  useEffect(() => {
    void fetchData();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [fetchData]);

  const refetch = useCallback(() => {
    setLoading(true);
    void fetchData();
  }, [fetchData]);

  return { data, isLoading, error, refetch };
};
