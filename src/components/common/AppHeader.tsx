"use client";
import { Fragment, memo, useCallback, useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { SearchIcon } from "lucide-react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import DialogWrapper from "./modal/DialogWrapper";
import SearchModal from "./modal/SearchModal";
import { handleApi } from "@/utils/handleApi";
import { fetchCurrentUser } from "@/services/login";
import ModalRanking from "./modal/RankingModal";

// Navigation menu items
const navItems = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "New",
    route: "/new",
  },
  {
    title: "ranking",
    route: "/ranking",
  },
  {
    title: "write",
    route: "/write",
  },
];

function AppHeader({ isSticky }: { isSticky?: boolean }) {
  const [nickname, setNickname] = useState<string>("");
  //로그인 상태 저장할 전역 상태 필요 일단은 그냥 구현
  const checkLogin = useCallback(async () => {
    const { data } = await handleApi(() => fetchCurrentUser());
    console.log(data);
    const currentUserNickname = data?.nickname;
    if (currentUserNickname) setNickname(currentUserNickname);
  }, []);

  useEffect(() => {
    checkLogin();
  }, [nickname]);

  const [isRankingOpen, setIsRankingOpen] = useState(false);

  return (
    <Fragment>
      {/* Header with navigation */}
      <header className={`${isSticky && "sticky"} top-0 z-10 w-full bg-[#fefdf6] shadow-md`}>
        <div className="container mx-auto px-4 py-6 flex flex-col items-center">
          {/* Logo */}
          <h1 className="font-['Julius_Sans_One',Helvetica] text-5xl text-black mb-6">UUSJ</h1>

          {/* Navigation */}
          <NavigationMenu className="mx-auto">
            <NavigationMenuList className="flex gap-8">
              {navItems.map((item) => {
                if (item.title === "ranking") {
                  return (
                    <Dialog key="ranking" open={isRankingOpen} onOpenChange={setIsRankingOpen}>
                      <DialogTrigger asChild>
                        <NavigationMenuItem>
                          <div className="cursor-pointer font-['Julius_Sans_One',Helvetica] text-2xl text-black hover:text-gray-600 transition-colors">
                            ranking
                          </div>
                        </NavigationMenuItem>
                      </DialogTrigger>

                      <ModalRanking open={isRankingOpen} />
                    </Dialog>
                  );
                }

                // 다른 메뉴는 기존처럼 링크 유지
                return (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink
                      className="font-['Julius_Sans_One',Helvetica] text-2xl text-black hover:text-gray-600 transition-colors"
                      href={item.route}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Login button and search icon */}
          <div className="absolute right-8 top-6 flex items-center gap-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="link"
                  className="font-['Julius_Sans_One',Helvetica] text-2xl text-black p-0"
                >
                  Login
                </Button>
              </DialogTrigger>
              <DialogWrapper />
            </Dialog>

            {isSticky && (
              <Dialog modal={false}>
                <DialogTrigger>
                  <SearchIcon className="w-10 h-10" />
                </DialogTrigger>
                <SearchModal />
              </Dialog>
            )}
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default memo(AppHeader);
