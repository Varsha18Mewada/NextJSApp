"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setLoading(false);
      if (user) {
        router.push("/projects");
      } else {
        router.push("/login");
      }
    });
    return () => unsub();
  }, [router]);

  if (loading) return <div className="p-6">Checking authentication...</div>;

  return null;
}
