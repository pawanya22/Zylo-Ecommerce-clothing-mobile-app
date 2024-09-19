// useAuth.tsx
import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../firebaseConfig';


interface UseAuthResult {
  user: User | null;
}

export function useAuth(): UseAuthResult {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      console.log('got user:', user);
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsub(); 
  }, []);

  return { user };
}