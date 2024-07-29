import { Link } from "react-router-dom";

export const Topbar = () => {
  return (
    <div className="max-w-screen-lg w-full bg-gray-700 align-center px-5 pb-5 pt-8">
      {/* Uncomment and adjust the path if you have a logo */}
      {/* <img src="/logo.png" className="max-w-56" /> */}
      <div className="text-8xl text-white">Dev Haven</div>
      <NavBar />
    </div>
  );
};

const topbarItems = [
  {
    title: "About",
    route: "/about",
  },
  {
    title: "Activity",
    route: "/activity",
  },
  {
    title: "Problems",
    route: "/problems",
  },
  {
    title: "Leaderboard",
    route: "/leaderboard", // Corrected typo: /leaderboar -> /leaderboard
  },
  {
    title: "My Profile",
    route: "/profile",
  },
];

function NavBar() {
  return (
    <div className="flex mt-4">
      {topbarItems.map((item, idx) => (
        <NavbarItem route={item.route} title={item.title} key={idx} />
      ))}
    </div>
  );
}

function NavbarItem({ title, route }: { title: string; route: string }) {
  return (
    <Link to={route}>
      <div className="mr-10 text-slate-500 cursor-pointer hover:text-white text-base font-light">
        {title}
      </div>
    </Link>
  );
}
