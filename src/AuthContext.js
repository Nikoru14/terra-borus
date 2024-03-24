import React, { createContext, useState, useEffect } from 'react';
import supabase from './supabase';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [authListener, setAuthListener] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data: session, error } = await supabase.auth.getSession();
                console.log('Session data:', session); // Log the session data
                if (error) {
                    throw error;
                }
                const { data: userData, error: userError } = await supabase.auth.getUser();
                console.log('getUser data:', userData); // Log the user data
                if (userError) {
                    throw userError;
                }
                const newUser = userData ? userData.user : null; // Check if userData is not null before accessing user
                console.log('newUser:', newUser); // Log the newUser
                setUser(newUser);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching session or user:', error.message);
                setUser(null);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const listener = supabase.auth.onAuthStateChange((event, session) => {
            console.log('Auth state changed. Session:', session); // Log the session on auth state change
            setUser(session?.user ?? null); // Update user on auth state change
            setLoading(false);
        });

        console.log('Auth listener created:', listener); // Log the auth listener

        setAuthListener(listener);

        return () => {
            console.log('Cleanup function called');
            console.log('Listener:', listener);
            if (listener && listener.data && listener.data.subscription && listener.data.subscription.unsubscribe) {
                console.log('Unsubscribing from auth state changes');
                listener.data.subscription.unsubscribe(); // Unsubscribe from auth state changes
            } else {
                console.log('Unable to unsubscribe: Subscription or unsubscribe function not found.');
            }
        };
    }, []);

    const signIn = async ({ email, password }) => {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            console.error('Sign-in error:', error.message);
            throw error;
        }
    };

    const signOut = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error('Sign-out error:', error.message);
            throw error;
        }
    };

    const value = {
        user,
        signIn,
        signOut,
    };

    return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthContext, AuthProvider, useAuth };