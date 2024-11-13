// fichier d'utilitaires de Javascript partages

export const UTILS = {
    assetFetcher:  async (json, isVerbose = true) => {
        try {
            const response = await fetch(json);
            const data = await response.json();
            if (isVerbose) {
                console.log(data);
            }
            return data;
        } catch (error) {
            if (isVerbose) {
                console.error('Erreur de fetching d`asset:', error);
            }
        }
    }
}