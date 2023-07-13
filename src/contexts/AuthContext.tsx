import { UserAPI } from "../api/user";
import { createContext, useEffect, useMemo, useState } from "react";
import { secureStore } from "../services/secure-store";
// ============================================================

const initialState = {
  tokens: null,
  user: null,
};

export const AuthContext = createContext({
  auth: initialState,
  isReady: false,
  set: (arg: any) => { },
  clear: () => { },
  update: () => { },
  isLogged: false
});

// ============================================================

const AuthProvider = ({ children }: any) => {
  const [auth, setAuth] = useState(initialState);
  const [isReady, setIsReady] = useState(false);
  
  /**
  * User activity
  * @returns state
  * */

  const isLogged = useMemo(() => {
    return !!auth.tokens && !!auth.user
  }, [auth])

  /**
  * Set / Load auth from local storage
  * @returns void
  * */

  const set = async (data: any) => {
    setAuth({ ...data });
    await secureStore.set("auth", { ...data });
  };

  /**
  * update user auth
  * @returns void
  * */

  const update = async () => {
    const user = (await UserAPI.get()).data;
    if (user) set({ ...auth, user });
  };

  /**
  * clear auth from local storage
  * @returns void
  * */

  const clear = () => {
    setAuth({ ...auth, tokens: null });
    secureStore.clear()
  };

  /**
  * setup auth from local storage
  * @returns void
  * */

  const setup = async () => {
    const authentication = await secureStore.get("auth");

    if (authentication) setAuth({ ...authentication });
    else await secureStore.set("auth", initialState as any);

    setIsReady(true);
  };

  /**
  * Load auth from local storage if found 
  * @returns void
  * */

  useEffect(() => {
    setup();
  }, []);


  return (
    <AuthContext.Provider
      value={{
        isReady,
        auth,
        set,
        clear,
        update,
        isLogged
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
