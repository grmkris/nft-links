import React from "react";
import { useUser } from "@supabase/supabase-auth-helpers/react";
import { supabaseClient } from '@supabase/supabase-auth-helpers/nextjs';

interface SiteHeaderInfoProps {
  headerTitle?: React.ReactNode;
}

function SiteHeaderInfo({ headerTitle }: SiteHeaderInfoProps) {
  const { user } = useUser();

  const logoutHandler = async () => {
    await supabaseClient.auth.signOut();
  };
  return (
    <>
      <div className="flex flex-col  justify-between space-y-3 bg-gray-100 px-8 py-6 md:flex-row md:space-y-0">
        <div>
          <h1 className="text-center text-lg font-semibold text-black md:text-xl lg:text-3xl">
            {headerTitle}
          </h1>
        </div>

        <div className="flex flex-col items-center space-y-3 md:flex-row md:space-x-4 md:space-y-0">
          <div>
            <p className="text-center text-base text-indigo-700">
              Logged in as{" "}
              <span className="font-semibold text-indigo-800">
                {user?.email}
              </span>
            </p>
          </div>

          <div>
            <button
              className="rounded-full bg-indigo-500 px-6 py-2 text-white transition-all duration-300 hover:scale-105 hover:bg-indigo-400 hover:text-black"
              onClick={logoutHandler}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>
      <hr className="border-1 " />
    </>
  );
}

export default SiteHeaderInfo;
