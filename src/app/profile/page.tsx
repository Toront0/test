import PorfileHeader from "@/components/Profile/ProfileHeader";
import ProfileItem from "@/components/Profile/ProfileItem";
import React from "react";

import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";
import { BsGeoAlt } from "react-icons/bs";
import { LuShieldCheck } from "react-icons/lu";
import { PiBellRinging } from "react-icons/pi";
import { IoWalletOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { HiOutlineLanguage, HiOutlineMoon } from "react-icons/hi2";
import { CiDark } from "react-icons/ci";

const Profile = () => {
  return (
    <div className="w-full px-4">
      <PorfileHeader />
      <main>
        <ProfileItem
          icon={<AiOutlineUser />}
          title="Edit Profile"
          href="/edit-profile"
        />
        <ProfileItem icon={<BsGeoAlt />} title="Address" href="/edit-profile" />
        <ProfileItem
          icon={<PiBellRinging />}
          title="Notification"
          href="/edit-profile"
        />
        <ProfileItem
          icon={<IoWalletOutline />}
          title="Payment"
          href="/edit-profile"
        />
        <ProfileItem
          icon={<LuShieldCheck />}
          title="Security"
          href="/edit-profile"
        />
        <ProfileItem
          icon={<HiOutlineLanguage />}
          title="Language"
          href="/edit-profile"
        />
        <ProfileItem
          icon={<HiOutlineMoon />}
          title="Dark Mode"
          href="/edit-profile"
        />
        <ProfileItem
          icon={<IoIosHelpCircleOutline />}
          title="Help Center"
          href="/edit-profile"
        />
        <ProfileItem
          icon={<AiOutlineLogout />}
          title="Log Out"
          href="/edit-profile"
        />
      </main>
    </div>
  );
};

export default Profile;
