import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
export interface GenreResponse {
  count: number;
  results: Genre[];
}

const useGameGenres = () => {
  const [gameGenre, setGamesGenre] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    // API Call
    setLoading(true);
    apiClient
      .get<GenreResponse>("/genres")
      .then((res) => setGamesGenre(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      })
      .finally(() => setLoading(false));

    return controller.abort();
  }, []);

  return { gameGenre, error, isLoading };
};

export default useGameGenres;
