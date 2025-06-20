"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
  FolderIcon,
  ChartBarIcon,
  MapIcon,
} from "@heroicons/react/24/outline";
import { auth } from "../../../firebase/config.js";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/login");
  };

  return (
    <header className="bg-black text-white shadow-md p-4 mb-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold hover:text-gray-300">
          YelloSkye
        </Link>

        <div className="flex items-center space-x-6 text-sm">
          {user ? (
            <>
              <Link
                href="/projects"
                className="flex items-center hover:text-gray-300"
              >
                <FolderIcon className="w-5 h-5 mr-1" />
                Projects
              </Link>
              <Link
                href="/charts"
                className="flex items-center hover:text-gray-300"
              >
                <ChartBarIcon className="w-5 h-5 mr-1" />
                Charts
              </Link>
              <Link
                href="/charts"
                className="flex items-center hover:text-gray-300"
              >
                <MapIcon className="w-5 h-5 mr-1" />
                Maps
              </Link>
              <button
                onClick={handleLogout}
                className="flex items-center hover:text-red-400"
              >
                <ArrowRightCircleIcon className="w-5 h-5 mr-1" />
                Logout
              </button>
            </>
          ) : (
            <Link
              href="/login"
              className="flex items-center hover:text-gray-300"
            >
              <ArrowLeftCircleIcon className="w-5 h-5 mr-1" />
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
