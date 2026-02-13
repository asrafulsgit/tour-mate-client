"use client";

import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "../store";
import { useEffect, useRef } from "react";
import { setUser } from "../slice/userSlice";

function ReduxProvider({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.data);
  const hasFetched = useRef(false);

  useEffect(() => {
    const fetchUser = async () => {
      // Skip if already fetched or user exists
      if (hasFetched.current || user) return; 
      hasFetched.current = true; 

      try { 
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/me`,
          { credentials: 'include' }
        );

        if (response.ok) {
          const userData = await response.json();
          dispatch(setUser(userData));
        } else {
          dispatch(clearUser());
        }
      } catch (error) {
        console.error('Failed to fetch user:', error);
        dispatch(clearUser());
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchUser();
  }, [dispatch, user]);

  return <Provider store={store}>{children}</Provider>;
}
export default ReduxProvider;
