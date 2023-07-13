import { createContext, useEffect, useMemo, useState } from "react";
import useAuth from "../hooks/useAuth";
import Preference, { default_preference } from "../types/Preference";
import { PreferenceAPI } from "../api/preference";
// ============================================================

export const SettingsContext = createContext({
  settings: undefined,
  set: (arg: any) => { },
});

// ============================================================

const SettingsProvider = ({ children }: any) => {
  const { update: updateUser, auth, isLogged } = useAuth();
  const [preference, setPreference] = useState<Preference | any>({});

  const settings = useMemo(() => {
    if (!auth.user) return default_preference
    return { ...auth.user.preference, ...preference };
  }, [auth.user, isLogged, preference])

  /**
   * timeout delay for api call
   * prevent spam
   * @returns void
   * */

  useEffect(() => {
    if (Object.keys(preference).length === 0) return;

    const timer = setTimeout(() => {
      PreferenceAPI.update(preference)
        .then(() => updateUser())
        .catch(e => console.log(e));
    }, 3000);

    return () => clearTimeout(timer);
  }, [preference]);


  /**
  * Set / Load settings from local storage
  * @returns void
  * */

  const set = (pref: Preference) => {
    if (!isLogged) return;
    setPreference({ ...preference, ...pref });
  };



  return (
    <SettingsContext.Provider
      value={{
        settings,
        set,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
