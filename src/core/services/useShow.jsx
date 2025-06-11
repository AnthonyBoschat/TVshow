export function useShow(){


    const findFirstValidShow = (shows) => {
        for (const show of shows) {
            if (show?.backdrop_path) {
                return show;
            }
        }
        return null;
    }

    return{
        findFirstValidShow,
    }
}